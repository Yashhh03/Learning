


document.addEventListener('click',function(){
    console.log('You Just clicked on the Page');
});

// Event Remove Function should me same so its written Outside
function print() {
    console.log('Hi');
}

document.addEventListener('click', print);
document.removeEventListener('click',print);