// document.addEventListener("DOMContentLoaded", () => {
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//   const dogImageContainer = document.getElementById("dog-image-container");

//   loadImages();
//   loadBreeds();



//   fetch(imgUrl)
//     .then(response => response.json())
//     .then(data => {
//       data.message.forEach(imageUrl => {
//         const imgElement = document.createElement("img");
//         imgElement.src = imageUrl;
//         dogImageContainer.appendChild(imgElement);
//       })
//     })
//     .catch(error => {
//       console.error("An error occurred:", error);
//     });
  
//     const breedUrl = "https://dog.ceo/api/breeds/list/all";
//     const dogBreedsList = document.getElementById("dog-breeds");
  
//     // Fetch and display dog breeds
//   fetch(breedUrl)
//     .then(response => response.json())
//     .then(data => {
//       const breeds = Object.keys(data.message);
//       breeds.forEach(breed => {
//         const liElement = document.createElement("li");
//         liElement.textContent = breed;
//         dogBreedsList.appendChild(liElement);
//       });
//     })
//     .catch(error => {
//       console.error("An error occurred while fetching breeds:", error);
//     });
//   });
 

console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
  loadImages();
  loadBreeds();

  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", filterBreeds);
})

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(picUrl) {
  const container = document.getElementById("dog-image-container");
  const newImage = document.createElement('img');
  newImage.src = picUrl;
  container.appendChild(newImage);
}

function loadBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(results => {
      const breeds = Object.keys(results.message);
      addBreeds(breeds);
    });
}

function addBreeds(breeds) {
  const ul = document.getElementById("dog-breeds");
  breeds.forEach(breed => {
    const li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", function(event) {
      event.target.style.color = "blue";
    });
  });
}

// Function to filter breeds based on the selected letter
function filterBreeds() {
  const selectedLetter = document.getElementById("breed-dropdown").value;
  const breedList = document.getElementById("dog-breeds").getElementsByTagName("li");

  for (let i = 0; i < breedList.length; i++) {
    const breedName = breedList[i].innerText.toLowerCase();
    if (breedName.startsWith(selectedLetter)) {
      breedList[i].style.display = "list-item"; // Show matching breeds
    } else {
      breedList[i].style.display = "none"; // Hide non-matching breeds
    }
  }
}