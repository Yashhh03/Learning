


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