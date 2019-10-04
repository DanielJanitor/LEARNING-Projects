let myBlock;
let myListFunctions;
let funList = [];
document.addEventListener('DOMContentLoaded', function () {
    myBlock = document.createElement('div');
    myBlock.textContent = 'Hello world';
    myBlock.style.width = '100px';
    myBlock.style.height = '100px';
    myBlock.style.background = 'red';
    myBlock.style.color = 'white';
    myBlock.style.lineHeight = '100px';

    myBlock.style.textAlign = 'center';
    myBlock.style.position = 'absolute';
    myBlock.style.left = '150px';
    myBlock.style.top = '100px';


    document.body.appendChild(myBlock);
    myListFunctions = document.createElement('div');
    document.body.appendChild(myListFunctions)
})


document.addEventListener('keydown', function (e) {
    e.preventDefault();
    let keyC = e.keyCode
    console.log(keyC);

    if (keyC === 37) {
        addFun('left');
    } else if (keyC === 38) {
        addFun('top');
    } else if (keyC === 39) {
        addFun('right');
    } else if (keyC === 40) {
        addFun('down');
    }else if (keyC === 67) {
        myBlock.style.backgroundColor = randomColor();
    }

})


function addFun(val){
    funList.push(val)
    console.log(funList);
    let span = document.createElement('span');
    span.textContent = '+' + val;
    span.style.padding = '10px';
    span.style.margin = '1px';
    span.style.border = '1px solid black';
    myListFunctions.appendChild(span)

    span.addEventListener('mouseover',function(){
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
    })

    span.addEventListener('mouseout',function(){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    })
}

function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);

}

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    console.log(temp);
    myBlock.style.left = temp + 'px';
}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    console.log(temp);
    myBlock.style.left = temp + 'px';
}

function goTop() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    console.log(temp);
    myBlock.style.top = temp + 'px';
}

function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    console.log(temp);
    myBlock.style.top = temp + 'px';
}