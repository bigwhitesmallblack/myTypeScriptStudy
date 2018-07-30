function hello(person) {
    return "Hello, " + person;
}
var user = 'demojie';
var addItem = document.getElementById('hello');
addItem.innerHTML = hello(user);
