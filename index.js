document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogImageContainer = document.getElementById("dog-image-container");

  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        dogImageContainer.appendChild(imgElement);
      })
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById("dog-breeds");
  
    // Fetch and display dog breeds
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const liElement = document.createElement("li");
        liElement.textContent = breed;
        dogBreedsList.appendChild(liElement);
      });
    })
    .catch(error => {
      console.error("An error occurred while fetching breeds:", error);
    });
  });
 