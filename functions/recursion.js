var arrOfTree = [];
var tempArr = [];
var result = [];
var count = 0;
arrOfTree.push(tree);

function recursion(tree){
  let currentEl = arrOfTree.shift();
  tempArr.push(currentEl.value);
  
  if (currentEl.left){
    arrOfTree.push(currentEl.left);
  }
      
  if (currentEl.right){
    arrOfTree.push(currentEl.right);
  }

  if (tempArr.length === Math.pow(2, count)) {
      result.push(tempArr);
      tempArr = [];
      count += 1;
    } 
  
  for (let i = 0; i < arrOfTree.length; i++) {
    recursion(arrOfTree[i]);
  }
  return result;
}