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
  const alreadyVisited = [];
  const queue = json[source] === undefined ? [] : [...json[source]];
  while (queue.length !== 0) {
    const node = queue.shift();
    alreadyVisited.push(node);
    if (node === target) {
      return true;
    }
    json[node] &&
      json[node].forEach((element) => {
        if (!alreadyVisited.includes(element) && !queue.includes(element)) {
          queue.push(element);
        }
      });
  }
  return false;
};

let arr = 'mm,cc\nmm,kk\nmm,hh\nmm,ll\naa,aa\naa,ll\naa,ee\ndd,aa\ndd,dd\ndd,ff\ndd,gg\ndd,kk\ndd,hh\ndd,ll\nii,ff\nii,bb\nii,kk\nff,mm\nff,ii\nff,ff\nff,cc\nff,kk\nff,ll\nbb,aa\nbb,bb\ngg,cc\ngg,hh\ngg,ee\ncc,ff\ncc,bb\ncc,gg\ncc,cc\ncc,ll\ncc,ee\nkk,mm\nkk,aa\nkk,dd\nkk,bb\nkk,ee\nhh,dd\nhh,gg\nhh,hh\nhh,ee\njj,mm\njj,dd\njj,gg\njj,kk\njj,hh\njj,jj\njj,ll\nll,ff\nll,bb\nee,aa\nee,ii\nee,gg\nee,cc\nee,kk\nee,hh\nee,ee'
  .split('\n')
  .map((e) => e.split(','));

const result = bfs(
  [
    [1, 2],
    [2, 1],
    [1, 4],
    [4, 1],
    [2, 4],
    [4, 2],
    [2, 3],
    [3, 2],
    [3, 5],
    [5, 3],
    [2, 5],
    [5, 2],
    [4, 5],
    [5, 4],
  ],
  1,
  1
);
console.log(result);
module.exports = { bfs };
