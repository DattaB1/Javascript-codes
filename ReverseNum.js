//reverse of given num
 
var num= parseInt(prompt("Enter num"))

var rem;
var result=0;
while(num!=0)
{
  rem=parseInt(num%10);
  result=(result*10)+rem;
  num=parseInt(num/10);
}


  document.write(`Reverse Number:-${result}`)
