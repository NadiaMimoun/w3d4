const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   var num=0;
   function getNumber(){
   readline.question('enter number :', number => {
      if(number==='stop'){
          console.log("result is: "+num);
          return readline.close();
      }
     num+=parseInt(number);

    getNumber();
   
  });};
  getNumber();