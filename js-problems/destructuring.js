console.log('Destructuring data ...');
console.log('');

// destructure objects

const obj = {
    id: 321,
    name: 'Esteban',
    lastName: 'Iafrancesco',
    country: 'Paraguay',
    status: {
        flag: true,
        actibe: false
    }
}

const {status:{flag}} = obj;

// console.log(flag);

// destructure arrays
const arr = [6,5,4,3,2,1];

const [,, ...values] = arr; 

// console.log(values);

// destructure functions

function myState(p){
    this.getter = p;
    this.setter = function (value){
        return 'the value is ....' + value;
    }
    return [this.getter, this.setter];
}


const  [value, setValue] = myState(55);


// console.log(value);
// console.log(setValue(65));



