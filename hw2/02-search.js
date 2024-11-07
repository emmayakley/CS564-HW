// Add your code here

//userInput.addEventListener("click", handleClick);
document
  .querySelector('input[type="button"]')
  .addEventListener("click", handleClick);

function handleClick() {
  const userInput = document.getElementById("userInput").value.toLowerCase();

  if (userInput === "" || userInput === " ") {
    return;
  }

  //const outputDiv = document.getElementById("characterOutput");

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  //search the character array for any characters that have the userInput in them
  //make lowercase first to handle case sensitivity problems
  const characterMatches = characters.filter((character) =>
    character.name.toLowerCase().includes(userInput)
  );
  characterMatches.forEach((character) => {
    console.log(character);
  });

  //not sure if this is the right way to handle this..
  if (characterMatches.length === 0) {
    resultsDiv.innerText = "No character found matching that name!";
  } else {
    characterMatches.forEach((character) => {
      const card = document.createElement("div");
      card.classList.add("card", "mx-2", "my-2", "w-25");

      card.innerHTML = `
        <div class="characterCard"> 
        <h3 class="characterName">${character.name}</h3> 
        <p class="characterInfo">Height: ${character.height}</p>
        <p class="characterInfo">Birth Year: ${character.birth_year}</p> </div>`;

      resultsDiv.appendChild(card);
    });
  }
}
