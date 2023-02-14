import './style.css'
/** Write your code below this comment */

//chalenge n1
function test(arr) {
  var total = 0;
  for(var i=0;i<=arr.length;i++){
    if (typeof arr[i] === "number")
      total=total+arr[i];
  }
return total; 
}
//chalenge n2
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}
  const ans = removeVowels('sandrine');
  console.log(ans);




