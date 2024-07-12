var n1=prompt("Enter the first num");
var n2=prompt("Enter the second num");

if(n1<n2)
{
  for(var i=n1;i<=n2;i++)
  {
    document.write(`${i} <br>`);
  }
}
else
{
  for(var i=n2;i<=n1;i++)
  {
    document.write(`${i} <br>`)
  }
}