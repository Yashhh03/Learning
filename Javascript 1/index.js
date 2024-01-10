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