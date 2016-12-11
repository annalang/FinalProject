//clock//
var todayDate = new Date();
var year = todayDate.getFullYear();
var month = todayDate.getMonth();
var day = todayDate.getDay();

document.getElementById("clocktwo").innerHTML = day + "/" + month + "/" + year ;


function fun() {

  //create first array//
  var noun = new Array();
  noun=["person","person","person","person","person"];

  //create second array//
  var adjectives = new Array();
  adjectives=["beautiful","adorable","empowering","gorgeous","positive"];

  //ramdon numbers//
  var one = Math.floor(Math.random()*5);
  var two = Math.floor(Math.random()*5);

  //needs to print to html doc//
  document.getElementById('output').innerHTML += "<br/> What a" + " " + adjectives[two] +" " + noun[one] + "!";
}
