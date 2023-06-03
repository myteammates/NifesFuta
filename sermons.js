// // Get the search input and content elements
// const searchInput = document.getElementsByClassName('input');
// const content = document.getElementsByClassName('grid').children;

// // Add event listener to the search button
// document.getElementsByClassName('src-btn').addEventListener('click', filterContent);

// // Filter the content based on the search input value
// function filterContent() {
//   const searchTerm = searchInput.value.toLowerCase();

//   // Loop through the content elements
//   for (let i = 0; i < content.length; i++) {
//     const item = content[i];
//     const itemText = item.textContent.toLowerCase();

//     // Check if the search term is found in the content
//     if (itemText.includes(searchTerm)) {
//       item.style.display = 'block'; // Show the element
//     } else {
//       item.style.display = 'none'; // Hide the element
//     }
//   }
// }

let celsius = -5;
console.log(celsius);
let fahrenheit = (celsius * (9/5)) + 32;
console.log(fahrenheit);  

// let fahrenheit = 86;
// let celsius = (fahrenheit - 32) * (5/9);
// console.log(celsius);