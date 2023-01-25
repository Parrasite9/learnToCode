const head = {
    name:'Matt'
}

const person2 = {
    name:'Bob'
}

const person3 = {
    name:'Sally'
}

const tail = {
    name:'Zagthorp'
}

const find = (node, value) => {
    if(node.name === value){
        return true;
    } else if(node.next === undefined) {
        return false;
    } else {
        return find(node.next, value);
    }
}

head.next = person2;
person2.next = person3;
person3.next = tail;

console.log(find(head, 'Zagthorp'));
