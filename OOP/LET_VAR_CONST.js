//var -> function
//let -> block
//const -> define constance value


//VAR variable

function sayHello0() {
    for (var x = 0; x < 5; x++){
        console.log(x);
    }
    console.log(x);   
}


// LET variable
function sayHello1() {
    for (let i = 0; i < 5; i++) { // let i is accesible only within block
        console.log(i);
    }
}

sayHello0();
sayHello1();