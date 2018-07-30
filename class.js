var Helloer = /** @class */ (function () {
    function Helloer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Helloer;
}());
function classHello(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var classUser = new Helloer('Demo', 'Jie');
var classAdditem = document.getElementById('class');
classAdditem.innerHTML = classHello(classUser);
