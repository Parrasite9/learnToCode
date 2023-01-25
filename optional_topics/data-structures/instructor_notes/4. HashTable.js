const contents = [];

const hash = (value) => {
  let result = 0;
  for(let i = 0; i < value.length; i++){
      result += value.charCodeAt(i);
  }
  return result;
}

const find = (name) => {
  const index = hash(name);
  let foundPerson = contents[index];
  while(name !== foundPerson.name){
      foundPerson = foundPerson.next;
  }
  return foundPerson;
}

const insert = (newPerson) => {
  const index = hash(newPerson.name);
  if(contents[index] === undefined){
      contents[index] = newPerson;
  } else {
      let currentPersonInTable = contents[index];
      while(currentPersonInTable.next !== undefined){
          currentPersonInTable = currentPersonInTable.next;
      }
      currentPersonInTable.next = newPerson;
  }
}

const person1 = {
    name:'Matt',
    age: 39
}

const person2 = {
    name:'Bob',
    age: 12
}

const person3 = {
    name:'attM',
    age: 4000
}

const person4 = {
    name:'atMt',
    age: 100
}

insert(person1);
insert(person2);
insert(person3);
insert(person4);

console.log(find('atMt'));
