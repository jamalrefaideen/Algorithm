import {tree} from  './tree-json.js';

function depethSearch(treeJson) {
    console.log(treeJson.id)
    treeJson.children.forEach((d) => {
        depethSearch(d)
    })
    
}

depethSearch(tree)


