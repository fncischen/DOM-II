// Your code goes here

// Event Listener 1 // Horizontal Scroll Bar 

    // Step 1 // declare photo 

    let photo = document.querySelector(".container.home").querySelector(".intro").querySelector("img");

    // Step 2 // set up event listeners;

    photo.addEventListener("mouseover", onMouseOver); // 1
    
    // Step 3 // set up event handler; 

    function onMouseOver(event) {

    }

// Event Listeners 2-8 // Trip Planning

    // Step 0 // set up currentlyDraggedObject

    let currentlyDragged = null; 

    // Step 1 // Declare draggable obj + drag zone. 

       let draggableObjects = document.querySelector('.container.home').querySelectorAll(".text-content, .img-content");
       let dragzone = document.querySelector('.container.home');

    // Step 2 // Set up event listeners for draggable & drag zone.

        // helper function // set up all relevant event listeners here

        function makeDraggable(draggable) {

            draggable.addEventListener("drag", onDrag); // 2
            draggable.addEventListener("dragstart", onDragStart); // 3
            draggable.addEventListener("dragend", onDragEnd); // 4
        
            draggable.addEventListener("dragenter", onDragEnter); // 5
            draggable.addEventListener("dragleave", onDragLeave); // 6

        };

        // for all draggable objects

        draggableObjects.forEach(makeDraggable); // iterate over each draggable obj. 

        // for drag zone

        dragzone.addEventListener("drop", onDrop); // 7
        dragzone.addEventListener("dragover", onDragOver); // 8

    // Step 3 // Declare event handler functions.

        // draggable object event handlers

        function onDrag(event) {
            console.log("dragging!");
        };

        function onDragStart(event){ 
            currentlyDragged = event.target
        };

        function onDragEnd(event){ 
            console.log("stopped dragging!");
            currentlyDragged = null 
        };

        function onDragEnter(event){ 
            event.preventDefault() 
        };

        function onDragLeave(event){

        };

        // drag zone event handlers

        function onDrop(event){
            event.preventDefault();
        };
        function onDragOver(event){
            event.preventDefault();
        };

    // for more info
    // drag and drop interaces
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API


// Event Listener 9 // buttons 

    // Step 1 // Declare destination.

       let destinations = document.querySelector(".content-pick").querySelectorAll(".destination");

    // Step 2 // add event listeners.

        // helper function // set up event listeners for each destination button.

        function addButtonFunctionality(destination){

            let button = destination.querySelector(".btn"); 
            button.addEventListener("click", onButtonClick); // 9
        
        }

        // iterate over each destination

        destinations.forEach(addButtonFunctionality);

    // Step 3 // Declare event handler functions for buttons.

        function onButtonClick(event){
            
        };
    

// Event Listener 10 // Text Box  