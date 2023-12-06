// inherit the objects

const self = { 
    book1:{
        title:  'The Road Ahead',
        author: 'Bill Gates',
        bookID: 1254
    },
    book2:{
        title: 'Walter Isaacson',
       author: 'Steve Jobs',
       bookID: 4264

    },

    action:function(){
        return`the author name is ${this.book2.author} `;
    }
}

console.log(self);
console.log(self.action()); 

//access the key property 
console.log(Object.keys(self.book1));

//access the values property 
console.log(Object.values(self.book1));

// inherit the object from existing objects
const self2=Object.create(self);

// add the variable
self2.expery=12;
console.log(self2.action());

// call the new variable
console.log(self2.expery);

//access the key property (new objects)

console.log(Object.keys(self2.book1));

//access the values property (new objects)

