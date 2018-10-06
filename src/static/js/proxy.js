// JarialTekin API URL :
const API_URL = 'http://localhost:8080/api';

/**
 * Send a GraphQL query to the API.
 */
export function request (query)  {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ "query": query })
  }).then( res => {
    return res.text();
  }).then( rawBody => {
    try {
      const parsedBody = JSON.parse(rawBody);
      if (parsedBody.error) throw new Error();
      return parsedBody.data;
    } catch (error) {
      return rawBody;
    }
  });
};
