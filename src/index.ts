//declaring statement
let age:number=20;

//creating new configuration file by tsc --init

//now we have learned about some configuration settings on tsconfig file
//uncommented- "noEmitOnError": true,"outDir": "./dist","removeComments": true,  "rootDir": "./src", 

//typescript extended types:
//any,unknown,enum,tuple,never

//we can declare variable and then remove its dataype then also compiler will know its of that datatype  but if we dont that it consider it as any which means that any value can come of any datatype

//arrays and tuple we studied
//arrays can be as
let a:number[]=[1,2,34,5];
console.log(a[2]);

//tuple
let b:[number,string]=[1,'nidhi'];//mostly used as key value pair

//enum
enum size {small=2,medium,large};
let mysize:size=size.medium;
console.log(mysize);



