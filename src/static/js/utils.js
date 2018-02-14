/**
 * Send a request to the API.
 */
function request(url) {
  return fetch(url).then((res) => {
    return res.data;
  });
}
