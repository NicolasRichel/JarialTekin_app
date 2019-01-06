// JarialTekin API URL :
const API_URL = 'http://localhost:8080/api';

/**
 * Send a GraphQL query to the API.
 */
export function request (query, operationName, variables)  {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "query": query,
      "operationName": operationName,
      "variables": variables
    })
  }).then( res => {
    return res.text();
  }).then( rawBody => {
    const parsedBody = JSON.parse(rawBody);
    if (parsedBody.errors) throw new Error(`GraphQL error : ${JSON.stringify(parsedBody.errors)}`);
    return parsedBody.data;
  }).catch( error => {
    console.error(error);
    return false;
  });
};
