//scope of let,var,const

var x=1;
let y=2;
const z=3;
//global scope
console.log(`global x:${x}`);
console.log(`global y:${y}`);
console.log(`global z:${z}`);

function myfun(){
   const z=5;
   //local scope or block scope
   if(true){
      let y=4;
      console.log(`local x:${x}`);
      console.log(`local y:${y}`);
      console.log(`local z:${z}`);
   }
   //function scope
   console.log(`function x:${x}`);
   console.log(`function y:${y}`);
   console.log(`function z:${z}`);
}
myfun()
console.log(`y: ${y}`);
