// Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property.

const student1={
    name:"shiva",
    sclass:"VI",
    rollno:22
};

console.log(`before the delete the details:`);
console.log(student1);

delete student1.rollno;
console.log(`after the delete the details:`);
console.log(student1);