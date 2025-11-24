//Think of a module like a small separate file that contains some part of your code.
//Just like you keep different subjects in different notebooks,
//in programming you keep different code in different files.
//This helps your project stay clean, organized, and easy to manage.
// you can use modules to separate codes in separate files as per their functionality. 
// Module is a file that contains code to perform a specific task. A module may contain variables, function, classes etc.
// you can export as many as modules using exports
// but you can export only one module  if you use default export

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}