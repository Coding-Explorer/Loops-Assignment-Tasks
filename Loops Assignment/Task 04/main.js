//////////////TASK 04/////////////////.
/* Exploring the Objects with for...in Loop.
Create a simple object with three items:
o Define an object called myObject with three properties: item1, item2, and item3,
each with corresponding string values.
 Use a for...in loop to get properties' names and values from the object:
o Iterate through the properties of myObject using a for...in loop.
o Inside the loop, print each property's name and its corresponding value to the
console.*/
//Here's i'm going to create an object with three properties.
var myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
};
//Now i'm going to iterate through the object's properties using a for...in loop.
for (var property in myObject) {
    console.log(property + " : " + myObject[property]);
}
;
