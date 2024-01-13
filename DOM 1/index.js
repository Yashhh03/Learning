


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