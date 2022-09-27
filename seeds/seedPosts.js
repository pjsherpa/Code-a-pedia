const { Post } = require("../models");

const postData = [
  {
    title: "If - Else",
    body: 
    `if ((age >= 14) && (age < 19)) {        // logical condition
      status = "Eligible.";               // executed if condition is true
      } else {                                // else block is optional
      status = "Not eligible.";           // executed if condition is false
      }`,
    user_id: 1,
  },
  {
    title: "Switch Statement",
    body: 
    `switch (new Date().getDay()) {      // input is current day
      case 6:                         // if (day == 6)
        text = "Saturday";          
        break;
      case 0:                         // if (day == 0)
        text = "Sunday";
        break;
      default:                        // else...
        text = "Whatever";
      } `,
    user_id: 2,
  },
  {
    title: "For Loop",
    body: 
    `for (var i = 0; i < 10; i++) {
      document.write(i + ": " + i*3 + "<br />");
      }
      var sum = 0;
      for (var i = 0; i < a.length; i++) {
      sum + = a[i];
      }               // parsing an array
      html = "";
      for (var i of custOrder) {
      html += "<li>" + i + "</li>";
      }`,
    user_id: 3,
  },
  {
    title: "While Loop",
    body: 
    `var i = 1;                      // initialize
    while (i < 100) {               // enters the cycle if statement is true
    i *= 2;                        // increment to avoid infinite loop
    document.write(i + ", ");     // output
    }`,
    user_id: 3,
  },
  {
    title: "Do While Loop",
    body: 
    `var i = 1;                      // initialize
    do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
    } while (i < 100)               // repeats cycle if statement is true at the end!`,
    user_id: 3,
  },
  {
    title: "Break",
    body: 
    `for (var i = 0; i < 10; i++) {
      if (i == 5) { break; }          // stops and exits the cycle
      document.write(i + ", ");       // last output number is 4
      }`,
    user_id: 3,
  },
  {
    title: "Continue",
    body: 
    `for (var i = 0; i < 10; i++) {
      if (i == 5) { continue; }       // skips the rest of the cycle
      document.write(i + ", ");       // skips 5
      }`,
    user_id: 3,
  },
  {
    title: "Variablesx",
    body: 
    `var a;                          // variable
    var b = "init";                 // string
    var c = "Hi" + " " + "Joe";     // = "Hi Joe"
    var d = 1 + 2 + "3";            // = "33"
    var e = [2,3,5,8];              // array
    var f = false;                  // boolean
    var g = /()/;                   // RegEx
    var h = function(){};           // function object
    const PI = 3.14;                // constant
    var a = 1, b = 2, c = a + b;    // one line
    let z = 'zzz';                  // block scope local variable
    `,
    user_id: 3,
  },
  {
    title: "Values",
    body:
     `false, true                     // boolean
    18, 3.14, 0b10011, 0xF6, NaN    // number
    "flower", 'John'                // string
    undefined, null , Infinity      // special`,
    user_id: 3,
  },
  {
    title:"Data Types",
    body:
    `Data Types
    var age = 18;                           // number 
    var name = "Jane";                      // string
    var name = {first:"Jane", last:"Doe"};  // object
    var truth = false;                      // boolean
    var sheets = ["HTML","CSS","JS"];       // array
    var a; typeof a;                        // undefined
    var a = null;                           // value null`,
    user_id: 1,
  },
  {
    title:"Objects",
    body:
    `var student = {                 // object name
      firstName:"Jane",           // list of properties and values
      lastName:"Doe",
      age:18,
      height:170,
      fullName : function() {     // object function
         return this.firstName + " " + this.lastName;
      }
      }; 
      student.age = 19;           // setting value
      student[age]++;             // incrementing
      name = student.fullName();  // call object function`,
    user_id: 1,
  },
  {
    title:"Numbers and Math",
    body:
    `Numbers and Math∑
    var pi = 3.141;
    pi.toFixed(0);          // returns 3
    pi.toFixed(2);          // returns 3.14 - for working with money
    pi.toPrecision(2)       // returns 3.1
    pi.valueOf();           // returns number
    Number(true);           // converts to number
    Number(new Date())      // number of milliseconds since 1970
    parseInt("3 months");   // returns the first number: 3
    parseFloat("3.5 days"); // returns 3.5
    Number.MAX_VALUE        // largest possible JS number
    Number.MIN_VALUE        // smallest possible JS number
    Number.NEGATIVE_INFINITY// -Infinity
    Number.POSITIVE_INFINITY// Infinity`,
    user_id: 1,
  },
  {
    title:"Math.",
    body:
    `var pi = Math.PI;       // 3.141592653589793
    Math.round(4.4);        // = 4 - rounded
    Math.round(4.5);        // = 5
    Math.pow(2,8);          // = 256 - 2 to the power of 8
    Math.sqrt(49);          // = 7 - square root 
    Math.abs(-3.14);        // = 3.14 - absolute, positive value
    Math.ceil(3.14);        // = 4 - rounded up
    Math.floor(3.99);       // = 3 - rounded down
    Math.sin(0);            // = 0 - sine
    Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
    Math.min(0, 3, -2, 2);  // = -2 - the lowest value
    Math.max(0, 3, -2, 2);  // = 3 - the highest value
    Math.log(1);            // = 0 natural logarithm 
    Math.exp(1);            // = 2.7182pow(E,x)
    Math.random();          // random number between 0 and 1
    Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5`,
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
