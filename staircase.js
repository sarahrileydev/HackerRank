/* Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .
*/

function staircase(n) {
    // create a new array and fill it with empty strings for the spaces
    const line = Array(n + 1).fill(' ');
    // 
    for (let i = n - 1; i >= 0; i--) {
        line[i] = '#';
        console.log(line.join(''));
    }
}

// Two for loop solution
// Looking at the Node docs apparently console.log is just process.stdout.write with a line-break at the end
/*
function StairCase(n) {
    for (var i = 1; i <= n; i++) {
        var col = i;
        for(var j = 1; j <= n - col; j++) {
            process.stdout.write(' ');
        }
        for(var j = 1; j <= col; j++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }

}
*/
