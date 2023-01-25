const util = require('util');

const node1 = {
    name:"Bob",
    friends: []
}
const node2 = {
    name:"Sally",
    friends: []
}
const node3 = {
    name:"Zagthorp",
    friends: []
}
const node4 = {
    name:"Harry",
    friends: []
}
const node5 = {
    name:"Ellen",
    friends: []
}

let visited = [];

const find = (node, name) => {
    for(let name of visited) {
        if(name === node.name){
            return false;
        }
    }
    visited.push(node.name);

    if(node.name === name){
        return true;
    } else {
        for (let friend of node.friends) {
            if(find(friend, name)){
                return true;
            }
        }
        return false;
    }
}

node1.friends.push(node2);
node2.friends.push(node1);

node2.friends.push(node3);
node3.friends.push(node2);

node1.friends.push(node5);
node5.friends.push(node1);

// console.log(util.inspect(node1, {showHidden: false, depth: null, colors:true}));
console.log(find(node1, 'Zagthorp'));
visited = [];
console.log(find(node1, 'Ellen'));
