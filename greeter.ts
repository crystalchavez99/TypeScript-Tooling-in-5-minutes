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

interface Person{
    firstName: string,
    lastName: string
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName; 
}

// let user = "Jane User";

// let notUser = [0,1,2];

let user = {firstName: "Jane", lastName: "User"}
// changing the call passed in will result in a error due to type annotation to record intended contract
document.body.textContent = greeter(user);