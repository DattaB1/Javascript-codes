var studuntName=prompt("Enter Name");
var rollNo=prompt("Enter Roll no");

var m1=parseInt(prompt("Enter the marks m1"));
var m2=parseInt(prompt("Enter the marks m2"));
var m3=parseInt(prompt("Enter the marks m3"));

var total=m1+m2+m3;

var per=parseInt(total/3);

var grade;

if(per>70)
{
  grade="distiction";
}
else if(per>=60 && per<70)
{
  grade="first class";
}
else if(per>=50 && per <60)
{
  grade="Second class";
}