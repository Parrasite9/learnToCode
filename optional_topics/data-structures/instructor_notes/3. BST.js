const util = require('util');

const node1 = {
  data: 5
};
const node2 = {
  data: 7
};
const node3 = {
  data: 1
};
const node4 = {
  data: 0
};
const node5 = {
  data: 2
};
const node6 = {
  data: 4
};
const node7 = {
  data: 3
};
const node8 = {
  data: 9
};

const insert = (node, location) => {
  if(node.data < location.data){
    if(location.left === undefined){
      location.left = node;
    } else {
      insert(node, location.left);
    }
  } else {
    if(location.right === undefined){
      location.right = node;
    } else {
      insert(node, location.right);
    }
  }
}

const find = (value, node) => {
  if(node === undefined){
    return false;
  } else if(node.data === value){
    return true;
  } else if (value < node.data){
    return find(value, node.left);
  } else {
    return find(value, node.right);
  }
}

insert(node2, node1);
insert(node3, node1);
insert(node4, node1);
insert(node5, node1);
insert(node6, node1);
insert(node7, node1);
insert(node8, node1);

console.log(util.inspect(node1, {showHidden: false, depth: null, colors:true}))
console.log(find(2, node1));
