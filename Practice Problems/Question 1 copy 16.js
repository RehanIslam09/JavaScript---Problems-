/*
  -----------
  Questions : 
  -----------
    Find Object in Array: 
      Write a function findUser(users, name) that uses find to return the user object matching the given name. Example: findUser([{name: 'Alice'}, {name: 'Bob'}], 'Bob'); // {name: 'Bob'} 
*/

const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];

function findUser(users, name) {
  return users.find((user) => user.name === name);
}

console.log(findUser(users));
