console.log('Namaste everyone');

let marks=48;

if(marks>90){
    console.log('A');
}
else if(marks>80){
    console.log('B');
}
else if(marks>70){
    console.log('C');
}
else{
    console.log('D')
}



function createRectangle(len, bre) {

    return rectangle={
        length: len,
        breadth: bre,
        draw() {
            console.log("Drawing Rectangle")
        }
    };
}

let rectangleObj1=createRectangle(5,4)


let a = {value: 10};
let b=a;

a.value++;
console.log(a.value);
console.log(b.value);


let c=10;
function inc(c)
{
    c++;
}

inc (c);

console.log(c);


let name = "Yash";
let message= `This is
${name} and 
are you ready
for the fun`;

console.log(message);


let course = [
    {no:1, naame:'Yash'},
    {no:2, naame:'Suryawanshi'}
];

console.log(course);

let courses = course.find(function(courses){
    return courses.naame==='Yash';
})
console.log(courses);


let coursess = course.find(coursess => coursess.naame==='Suryawanshi');

console.log(coursess);


let number = [1,2,3,4,5,6,7];
// number.pop();
// number.shift();
// number.slice(3,1);
console.log(number);