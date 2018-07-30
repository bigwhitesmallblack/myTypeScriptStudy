interface Person {
    firstName: string;
    lastName: string;
}

function interfaceHello(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let interfaceUser = {firstName: 'Demo', lastName: 'Jie'};

let addInterfaceItem = document.getElementById('interface')

addInterfaceItem.innerHTML = interfaceHello(interfaceUser);