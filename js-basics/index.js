let name = 'Zhaohan';
console.log(name);

const interestRate = 0.3;
console.log(interestRate);

//declare object

let person = {
    //keys and values (json format
    name: 'Zhaohan',
    age: '21'
}; //object literal

//dot notation
person.age = 22;
//bracket
let select = 'age';
person[select]='23'

console.log(person.age);

//Array
let selectColors = ['red','blue'];
selectColors[0] = true;

console.log(selectColors.length);

//Functions
function greet(name, lastname){
    console.log('This is the name you passed in this function ' + name+' '+lastname);
}

greet('Zhaohan', 'Yan');

//Calculator Function

function square(number){
    return number * number;

}

let result = square(2);
console.log(result);

function average(numberarray){
    let sum = 0;
    let len = numberarray.length;
    let i;
    for(i = 0;i < len; i++){
        console.log('Begin');
        console.log(numberarray[i]);
        console.log(sum);
        sum += numberarray[i];
    }
    console.log(sum);
    console.log(len);
    let result = (sum/len).toFixed(2);
    return result;

}

let agelist = [10,20,30,40,50];
console.log(average(agelist));


