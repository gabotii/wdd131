const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || []; // Initialize with stored chapters or an empty array

// Populate the list on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Button click event to add a new chapter
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {  // Check if the input is not empty
        displayList(input.value); // Display the chapter
        chaptersArray.push(input.value);  // Add chapter to the array
        setChapterList(); // Update localStorage
        input.value = ''; // Clear input
        input.focus(); // Set focus back to input
    }
});

// Function to display the chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item; 
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); 
    li.append(deleteButton);
    list.append(li);
    
    // Delete button functionality
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item); // Remove chapter from the array
        input.focus(); // Set focus back to input
    });
}

// Function to set the localStorage item
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get the localStorage item
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length); // Remove the ❌ character
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Filter out the chapter
    setChapterList(); // Update localStorage
}
