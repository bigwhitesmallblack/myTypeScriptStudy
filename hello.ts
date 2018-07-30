function hello(person: string) {
    return "Hello, " + person;
}

let user = 'demojie';

let addItem = document.getElementById('hello');

addItem.innerHTML = hello(user);