


document.addEventListener('click',function(){
    console.log('You Just clicked on the Page');
});

// Event Remove Function should me same so its written Outside
function print() {
    console.log('Hi');
}

document.addEventListener('click', print);
document.removeEventListener('click',print);

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event){
    console.log(event);
});

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Kuch Huva??');
});


setTimeout(function(){
    console.log('Theek hai Bhai');
},5000);


function addPara(){
    let para = document.createElement('p');
    para.textContent = '1st Line of this para';
    document.body.appendChild(para);
}

function appendNewMessage() {
    let para = document.createElement('p');
    para.textContent = '2nd Line if you Know';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();

let myDiv = document.createElement('div');

function paraStatus(event){
    console.log('Para '+ event.target.textContent);
}

myDiv.addEventListener('click',paraStatus);

for(let i=1;i<100;i++){
    let newElement = document.createElement('p');
    newElement.textContent='This is para '+ i;

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);



let newPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.group('I am inside promise');
    },4000);
    resolve(2233);
});

console.log('Begin');
