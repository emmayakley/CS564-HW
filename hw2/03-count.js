const input = document.getElementById("userInput");
const textOutput = document.getElementById("textBlock");

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateText();
  }
}

function updateText() {
  inputWord = input.value.trim();

  if (inputWord !== "") {
    const regExp = new RegExp(`\\b${inputWord}\\b`, "gi");
    const wordsToHighlight = textOutput.textContent.replace(
      regExp,
      '<span class="bg-warning">$&</span>'
    );
    textOutput.innerHTML = wordsToHighlight;
  } else {
    textOutput.innerHTML = textOutput.textContent;
  }
}
/*
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
*/
