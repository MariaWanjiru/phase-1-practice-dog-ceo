console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imageContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");
  const dropdown = document.getElementById("breed-dropdown");

  let allBreeds = []; // store breeds for filtering

  // Challenge 1: Load dog images
  fetch(imgUrl)
    .then(res => res.json())
.then(data => {
      data.message.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Dog";
        img.style.width = "200px";
        img.style.margin = "10px";
        imageContainer.appendChild(img);
      });
    });
// Challenge 2: Load dog breeds
  fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      allBreeds = Object.keys(data.message);
      renderBreedList(allBreeds);
    });

  // Challenge 3: Change breed <li> color on click
  function renderBreedList(breeds) {
    breedList.innerHTML = ""; // clear previous list
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.textContent = breed;
      li.style.cursor = "pointer";
li.addEventListener("click", () => {
        li.style.color = "teal";
      });

      breedList.appendChild(li);
    });
  }

  // Challenge 4: Filter by first letter
  dropdown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value;
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreedList(filteredBreeds);
  });
});
