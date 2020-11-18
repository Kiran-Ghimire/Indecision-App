var nameVar = 'Andrew';
var nameVar='Mike';
console.log('nameVar', nameVar);

let nameLet="Jen";
 nameLet="Julie";
console.log("nameLet" , nameLet);

const nameConst ="frank";
console.log("nameConst", nameConst);

//Block Scoping

const fullName="Jen Ghimire";
let firstName;
if(fullName){
     firstName=fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);