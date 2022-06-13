import { euclideanAlgo } from "./euclideanAlgo.js";
import * as readline from "readline";

console.log("Running the Euclidean Algorithm");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question('Please insert your first value: ', (a) => {
    rl.question('Please insert your second value: ', b => {

        console.time('Euclidean algorithm');
        // call euclidean algo
        let ggt = euclideanAlgo(parseInt(a), parseInt(b));

        console.timeEnd('Euclidean algorithm')

        // return result
        console.log('The greatest common divisor of ' + a + ' and ' + b + ' is: ' + ggt);

        rl.close();
    })
  });






