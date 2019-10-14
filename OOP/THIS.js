//THIS

const person = {
    name: 'Daniel',
    walk (){
        console.log(this);
        
    }
}

person.walk();
const walk =  person.walk.bind(person);
walk();  