class Helloer {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
}

interface classPerson {
    firstName: string;
    lastName: string;
}

function classHello(person: classPerson) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}

let classUser = new Helloer('Demo', 'Jie');

let classAdditem = document.getElementById('class');

classAdditem.innerHTML = classHello(classUser);