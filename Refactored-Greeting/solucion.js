class Person {
    name;    
    constructor(name){
      this.name= name;
    }     
     greet(yourName) {
     return `Hello ${yourName}, my name is ${this.name}`;
    }
  }