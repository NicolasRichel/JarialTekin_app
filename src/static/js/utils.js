/**
 * Send a request to the API.
 */
function request(url, query) {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query)
  }).then((res) => {
    return res.text();
  }).then((data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  });
}
