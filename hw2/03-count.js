// Add your code here
const input = document.getElementById("userInput");
const textOutput = document.getElementById("textBlock");
const originalText = textOutput.textContent; //save original text for resetting purposes

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  inputWord = input.value.trim().toLowerCase();

  if (!inputWord) {
    //reset to base text when nothing is written
    textOutput.innerText = originalText;
  }

  const splitWords = originalText.split(" ");
  const matchedWords = splitWords.map((word) => {
    const onlyText = word
      .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
      .trim.toLowerCase();
    if (onlyText === inputWord) {
      return `<span class="highlight">${word}</span>`;
    } else {
      return word;
    }
  });

  textOutput.innerHTML = matchedWords.join(" ");
}

const style = document.createElement("style");
style.innerHTML = `
  .highlight {
    background-color: yellow;
    font-weight: bold;
  }
`;
document.head.appendChild(style);
