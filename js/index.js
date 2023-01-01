// Tge galley functionality was inspired bt James Q Quick https://www.youtube.com/watch?v=vQc3EmFCWRw&t=837s and adapted by myself

// Html elements targeted using getElementID

// The portfolio const will be used to append the gallery images content
const portfolio = document.getElementById("portfolio");

// The popup ID is targeted as the ID for a container to hold the img tag to be used in the popup
const popUp = document.getElementById("pop-up");

// The selecteImage ID is targeted as this is the ID on the img - it has been used to dynamically add the src attribute contents and the alt text content. In the HTML doc these attributes is intentionally left blank because the detail will be added dynalically by Javascript.
const selectedImage = document.getElementById("selected-image");

//This const relates to the images that will iterated over by their index number - this index number has been added to each images filename (portfolio-image-1 etc) This const will be used to be iterated over.
const imageIndexes = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

// For each loop used to iterate over the images folder and place the relavent images in the gallery in ascending order
imageIndexes.forEach((imageIndex) => {
  // Const declared to create img element for each image in the images folder that relates to the correct file name.
  const image = document.createElement("img");
  // setting the image source with the filepath of the relavent image from the iterated images folder
  image.src = `images/portfolio-image-${imageIndex}.jpg`;
  // setting the image alt with the filepath of the relavent images index from the iterated images folder
  image.alt = `${imageIndex}th image of the artists work`;
  // adding a class to each created image from iterating over the images folder
  image.classList.add("portfolio-img");
  // Adding a eventlistener to each created image so when clicked the correct image is selected
  image.addEventListener("click", () => {
    // setting the transform property on the creation of the image to 0 on the y axis so when clicked the 0 can be modified to provide the poppup functionality.
    popUp.style.transform = `translateY(0)`;

    selectedImage.src = `images/portfolio-image-${imageIndex}.jpg`;
    selectedImage.alt = `${imageIndex}th image of the artists work`;
  });
  // Appending the image to the gallery
  portfolio.appendChild(image);
});

// Adding a eventlistener to each created image so when clicked the popup is activated
popUp.addEventListener("click", () => {
  // setting the transform property on the creation of the image to 100 on the y axis so when clicked the popup moves by 100% on the y axis
  popUp.style.transform = `translateY(100%)`;
  // setting the image alt with the filepath of the relavent images index from the iterated images folder
  popUp.src = "";
  // adding a class to each created image from iterating over the images folder
  popUp.alt = "";
});
