//////////////TASK 03/////////////////////.
/*Creating the Counter Incrementer (Using do while loop ).
1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
2. Create a variable, step, to increase your counter by: Define a variable step to hold
the value by which the counter will be incremented.
3. Add a do...while loop: In the loop, print the counter to the console and increment it by
the step amount each iteration.
4. Continue to loop until the counter is equal to or more than 100: The loop should run
as long as the counter is less than 100.*/
//Here's i'm going to start the counter by declaring a variable counter to start from 0 and i'm going to increment it by 9 each time.
var counter = 0;
var step = 9;
//Now i'm going to create a do while loop for the successive execution of the code block.
do {
    console.log("Counter: ".concat(counter));
    counter += step;
} while (counter < 100);
