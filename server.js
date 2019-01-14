const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const mime = require('mime-types');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

/**
 * Asynchronously reads json from file and parse it
 */
const dataFuture = (async () => {
  const content = await readFileAsync('swm_waste_wizard_APR.json', {
    encoding: 'utf8',
  });
  return JSON.parse(content);
})();

/**
 * Inserts an item in a sorted list and keep the list sorted, acording
 * to a priority attribute of their items
 *
 * @param {Array} list list to insert the item in
 * @param {*} item element to insert
 */
function sortPush(list, item) {
  const binaryInsert = function(start, end) {
    if (start > end) {
      list.splice(start, 0, item);
      return;
    }

    const m = Math.round((start + end) / 2);
    const middle = list[m].priority;
    if (item.priority === middle) {
      list.splice(m, 0, item);
      return;
    } else if (item.priority > middle) {
      return binaryInsert(start, m - 1);
    }

    return binaryInsert(m + 1, end);
  };
  binaryInsert(0, list.length - 1);
}

async function makeSearch(response, keywords) {
  // read data from dataFuture, only waits for parsing the first time
  const data = await dataFuture;
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let count = 0;

    for (let j = 0; j < keywords.length; j++) {
      const key = keywords[j];
      if (element.keywords.includes(key)) {
        count++;
      }
    }

    if (count > 0) {
      sortPush(results, {
        // select fields to reduce response size
        body: element.body,
        priority: count,
        title: element.title,
      });
    }
  }

  const body = JSON.stringify({ results });
  response.writeHead(200, {
    'Content-Length': body.length,
    'Content-Type': 'application/json',
  });
  response.write(body);
}

const server = http.createServer(async (request, response) => {
  const [path, query] = request.url.split('?');
  switch (path) {
    case '/api/search':
      let keywords = querystring.parse(query).keywords;
      if (!keywords) {
        response.statusCode = 400;
        break;
      }

      if (typeof keywords === 'string') {
        // coerce to list if only one keyword is provided
        keywords = [keywords];
      }
      await makeSearch(response, keywords);
      break;
    default:
      // serve static files
      const filePath = `./build/${path === '/' ? 'index.html' : path}`;
      const contentType = mime.lookup(filePath);
      try {
        const content = await readFileAsync(filePath);
        response.writeHead(200, { 'Content-Type': contentType });
        response.write(content);
      } catch (error) {
        response.statusCode = error.code === 'ENOENT' ? 404 : 500;
      }
      break;
  }
  response.end();
});

server.listen(8080);
