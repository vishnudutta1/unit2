



function runProgram(input) {
    var lines= input.trim().split("\n");
    var [length, tar] = lines[0].trim().split(" ").map(Number);
    var arr= lines[1].trim().split(" ").map(Number);

    
var arr = arr.sort((a,b)=>a-b);

//console.log(arr)

var count = 0;

var i = 0;

var j = arr.length-1;

while(i<=j){

    if((arr[i]+arr[j])==tar){
        count++
        i++
        j--
    }

    else if ((arr[i]+arr[j])>tar){
        j--
    }

    else if ((arr[i]+arr[j])<tar){
        i++
    }

}

console.log(count)


   
   }
   if (process.env.USERNAME === "hp") {
     runProgram(`5 9
     3 0 6 2 7`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0) ;
     });
   }

