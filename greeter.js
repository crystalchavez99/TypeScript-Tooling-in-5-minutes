// interfaces and classes are used to define the structure of objecs but they serve different purposes
/*
Interfaces:
    - Used to declare shape/structure of an object
    - No code implementation (no method body or constructor function)
    - purely structural, define props and method should have
    - multi inheritance and optional with '?'
Classes:
    - Classes are used for defining both structure and behavior of object
    - Code implementation: method, constructor, instance variables
    - Single Inheritance
    - Abstract
Interfaces are used to declare object without code while classes do both
*/
var Student = /** @class */ (function () {
    // public auto create properties with that name
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
;
// let user = "Jane User";
// let notUser = [0,1,2];
//let user = {firstName: "Jane", lastName: "User"}
var user = new Student("Jane", "M", "User");
// changing the call passed in will result in a error due to type annotation to record intended contract
document.body.textContent = greeter(user);
