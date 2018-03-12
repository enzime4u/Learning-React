var nameVar = 'Kent';
nameVar = 'Adam';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Brittany';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Kent Roth';
    let firstName;

if (fullName) {
     firstName = fullName.split(' ')[0];
    console.log(firstName);
}
    console.log(firstName);
