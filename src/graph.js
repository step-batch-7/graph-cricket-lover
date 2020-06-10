//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const convertToJson = function (arr) {
  const json = {};
  for (let index = 0; index < arr.length; index++) {
    const [key, value] = arr[index];
    if (json[key] === undefined) {
      json[key] = [value];
    } else {
      json[key].push(value);
    }
  }
  return json;
};

const bfs = function (pairs, source, target) {
  const json = convertToJson(pairs);
};

module.exports = { bfs };
