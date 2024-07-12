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
else if(per>=40 && per <50)
{
  grade="Pass class"
}
else
{
  grade="fail";
}
document.write("<table border=2 align=center width='300px' cellpadding=5><caption><h1>StudentMarksheet</h1></caption><tr><th>Roll No</th> <th>Student Name</th> <th>M1</th> <th>M2</th> <th>M3</th>  <th>Total</th> <th>Percantage</th>  <th>Grade</th> </tr>");

document.write("<tr> <td>"+rollNo+"</td> <td>"+studuntName+"</td> <td>"+m1+"</td> <td>"+m2+"</td> <td>"+m3+"</td> <td>"+total+"</td> <td>"+per+"</td> <td>"+grade+"</td> </tr></table>")