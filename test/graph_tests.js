const chai = require('chai');
const assert = chai.assert;

const { bfs } = require('../src/graph.js');

describe('single node', function () {
  it('should give true when a node is connected to itself and asked for same node as source and target', function () {
    const arr = [['a', 'a'], 'a', 'a'];
    assert.deepStrictEqual(bfs(arr, 'a', 'a'), true);
  });
});
