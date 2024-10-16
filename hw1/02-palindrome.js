const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput(e) {
  const user_input = e.target.value;

  //Check input is integer
  if (isNaN(user_input) || parseInt(user_input) < 0) {
    const outputDiv = document.getElementById("palindromeOutput");
    outputDiv.innerText = "Please enter a positive number.";
  } else {
    isPalindrome(user_input);
  }
}

function isPalindrome(num) {
  let numberString = num.toString(); //convert user input to string for parsing
  let reverse = numberString.split("").reverse().join(""); // reverse the string

  const outputDiv = document.getElementById("palindromeOutput"); //get div element to output text to

  if (numberString === reverse) {
    outputDiv.innerText = "Yes. This is a palindrome!";
    outputDiv.style.color = "green";
    
  } else if (numberString !== reverse) {
    outputDiv.innerText = "No. Try again.";
    outputDiv.style.color = "red";
  }
}
