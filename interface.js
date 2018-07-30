function interfaceHello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var interfaceUser = { firstName: 'Demo', lastName: 'Jie' };
var addInterfaceItem = document.getElementById('interface');
addInterfaceItem.innerHTML = interfaceHello(interfaceUser);
