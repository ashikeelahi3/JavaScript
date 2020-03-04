class Parent {
    constructor(){
        this.fatherName = "Ashik";
        this.motherName = "Muskan";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.ChildName = name;
    }
    getFullName(){
        return this.ChildName + ' '+ this.fatherName;
    }
}
const daughter = new Child("Dilruba");
const son = new Child("Habib");
console.log(daughter.getFullName());
console.log(son.getFullName());