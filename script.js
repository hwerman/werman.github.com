window.onload = function(){

console.log("js is linked")

  function cardEmerge(){
    document.getElementById("aboutPara").style.display="block";
  }

  function cardHide(){
    document.getElementById("aboutPara").style.display="none";
  }

  function cardEmergeTwo(){
    document.getElementById("portfolioPara").style.display="block";
  }

  function cardHideTwo(){
    document.getElementById("portfolioPara").style.display="none";
  }

  function cardEmergeThree(){
    document.getElementById("contactPara").style.display="block";
  }

  function cardHideThree(){
    document.getElementById("contactPara").style.display="none";
  }

  document.getElementById("oneA").addEventListener("mouseover", cardEmerge)
  document.getElementById("oneA").addEventListener("mouseout", cardHide)

  document.getElementById("oneB").addEventListener("mouseover", cardEmergeTwo)
  document.getElementById("oneB").addEventListener("mouseout", cardHideTwo)

  document.getElementById("oneC").addEventListener("mouseover", cardEmergeThree)
  document.getElementById("oneC").addEventListener("mouseout", cardHideThree)

}
