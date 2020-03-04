class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.home ="Dhamoirhat, Naogaon"
    }

}

const student1 = new Student(1212, "Ashik");
const student2 = new Student(1211, "Muskan");
const bestRelationship = `${student1.name} + ${student2.name}

Muskan, tumi amar sopner rani.
Kobe tumay dekhbo, sei asai asi.
Janina tumar real name ki hobe,
tumi amar kase Muskan e.

Muskan mera hai,
 ar Muskan ko muhjse koi nahisin sakta hai`;
console.log(bestRelationship);