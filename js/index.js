// Your code goes here

// drag and drop interaces
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

// Event Listeners 1-7

    // Step 1 // Define draggable obj + drag zone. 

        draggable = document.querySelector('.container.home').querySelectorAll(".text-content, .img-content");
        dragzone = document.querySelector('.container.home');

    // Step 2 // Set up event listeners for draggable & drag zone.

        // draggable 

        draggable.addEventListener("drag"); // 1
        draggable.addEventListener("dragstart"); // 2
        draggable.addEventListener("dragend"); // 3
    
        draggable.addEventListener("dragenter"); // 4
        draggable.addEventListener("dragleave"); // 5
        
        // dragzone

        dragzone.addEventListener("drop"); // 6
        dragzone.addEventListener("dragover"); // 7

    // Step 3 // Declare event handler functions.


// Event Listeners 8-10