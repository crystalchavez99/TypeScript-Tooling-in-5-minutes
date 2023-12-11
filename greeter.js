function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
var notUser = [0, 1, 2];
// changing the call passed in will result in a error due to type annotation to record intended contract
document.body.textContent = greeter(user);
