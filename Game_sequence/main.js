let myBlock;
let myFunctionList;
let funList = [];
document.addEventListener('DOMContentLoaded', function () {
    myBlock = document.createElement('div');
    myBlock.textContent = 'hello world';
    document.body.appendChild(myBlock);
    myFunctionList = document.createElement('div');
    document.body.appendChild(myFunctionList);

    myBlock.style.width = '100px';
    myBlock.style.height = '100px';
    myBlock.style.backgroundColor = 'red';
    myBlock.style.color = 'white';
    myBlock.style.lineHeight = '100px';
    myBlock.style.textAlign = 'center';
    myBlock.style.position = 'absolute';
    myBlock.style.top = '100px';
    myBlock.style.left = '150px';

});
document.addEventListener('keydown', function (e) {
    e.preventDefault();
    let keyC = e.keyCode;
    console.log(keyC);
    if (keyC === 38) {
        addFun('top');
        goTop();
    } else if (keyC === 40) {
        addFun('down');
        goDown();
    } else if (keyC === 39) {
        addFun('right');
        goRight();
    } else if (keyC === 37) {
        addFun('left');
        goLeft();
    } else if (keyC === 32) {
        myBlock.style.backgroundColor = randomColor();
    }
})

function mover() {
    if (funList.length > 0) {
        let
    }
}

function addFun(val) {
    funList.push(val);
    console.log(funList);
    let span = document.createElement('span');
    span.textContent = '+ ' + val;
    span.style.padding = '10px';
    span.style.border = '1px solid black';
    myFunctionList.appendChild(span);
    span.addEventListener('mouseover', () => {
        span.style.backgroundColor = 'green';
    })

    span.addEventListener('mouseout', () => {
        span.style.backgroundColor = 'white';
    })
}


function randomColor() {
    let hexCode = Math.random().toString(16).substr(-6);
    console.log(hexCode);
    return '#' + hexCode;

}

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + 'px';
}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + 'px';
}

function goTop() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + 'px';
}

function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + 'px';
}