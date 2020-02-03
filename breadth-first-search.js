import {tree} from  './tree-json.js';
function breadthSearch(treeJson) {
    var nodeQueue = [];
    nodeQueue.push(treeJson)
    while (nodeQueue.length) {
        var current = nodeQueue.shift();
        console.log(current.id)
    var children = current.children;
        for (var child of children) {
            nodeQueue.push(child)
        }
     }
}
breadthSearch(tree)
