const { Post } = require("../models");

const postData = [
  {
    title: "If - Else",
    body: `if ((age >= 14) && (age < 19)) {        // logical condition
      status = "Eligible.";               // executed if condition is true
      } else {                                // else block is optional
      status = "Not eligible.";           // executed if condition is false
      }`,
    user_id: 1,
  },
  {
    title: "Switch Statement",
    body: `switch (new Date().getDay()) {      // input is current day
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
    body: `for (var i = 0; i < 10; i++) {
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
    body: `var i = 1;                      // initialize
    while (i < 100) {               // enters the cycle if statement is true
    i *= 2;                        // increment to avoid infinite loop
    document.write(i + ", ");     // output
    }`,
    user_id: 3,
  },
  {
    title: "Do While Loop",
    body: `var i = 1;                      // initialize
    do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
    } while (i < 100)               // repeats cycle if statement is true at the end!`,
    user_id: 3,
  },
  {
    title: "Break",
    body: `for (var i = 0; i < 10; i++) {
      if (i == 5) { break; }          // stops and exits the cycle
      document.write(i + ", ");       // last output number is 4
      }`,
    user_id: 3,
  },
  {
    title: "Continue",
    body: `for (var i = 0; i < 10; i++) {
      if (i == 5) { continue; }       // skips the rest of the cycle
      document.write(i + ", ");       // skips 5
      }`,
    user_id: 3,
  },
  {
    title: "Variablesx",
    body: `var a;                          // variable
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
    body: `false, true                     // boolean
    18, 3.14, 0b10011, 0xF6, NaN    // number
    "flower", 'John'                // string
    undefined, null , Infinity      // special`,
    user_id: 3,
  },
  {
    title:"",
    body:``,
    user_id: 1,
  },
  {
    title:"",
    body:``,
    user_id: 1,
  },
  {
    title:"",
    body:``,
    user_id: 1,
  },
  {
    title:"",
    body:``,
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
