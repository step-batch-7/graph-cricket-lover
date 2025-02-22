const chai = require('chai');
const assert = chai.assert;

const { bfs } = require('../src/graph.js');

describe('single node', function () {
  const arr = [['a', 'a']];
  it('should give true when a node is connected to itself and asked for same node as source and target', function () {
    assert.deepStrictEqual(bfs(arr, 'a', 'a'), true);
  });
  it('should give false when a node is connected to itself and asked for non-existing target', function () {
    assert.deepStrictEqual(bfs(arr, 'a', 'b'), false);
  });
  it('should give false when a node is connected to itself and asked for non-existing source', function () {
    assert.deepStrictEqual(bfs(arr, 'b', 'a'), false);
  });
});
describe('sparsely connected node', function () {
  const arr = [
    ['a', 'b'],
    ['b', 'a'],
    ['b', 'c'],
  ];
  it('should give true when a there is a path from source to target', function () {
    assert.deepStrictEqual(bfs(arr, 'a', 'c'), true);
  });
  it('should give false when a there is no path from source to target', function () {
    assert.deepStrictEqual(bfs(arr, 'c', 'a'), false);
  });
  it('should give false asked for non-existing source', function () {
    assert.deepStrictEqual(bfs(arr, 'd', 'a'), false);
  });
  it('should give false asked for non-existing source', function () {
    assert.deepStrictEqual(bfs(arr, 'b', 'd'), false);
  });
});
