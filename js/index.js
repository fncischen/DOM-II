// Your code goes here

// Event Listener 1-2 // Horizontal Scroll Bar 

    // Step 1 // declare photo 

    let photo = document.querySelector(".container.home").querySelector(".intro").querySelector("img");

    // Step 2 // set up event listeners;

    photo.addEventListener("mouseover", onMouseOver); // 1
    photo.addEventListener("mouseleave", onMouseLeave); // 2

    // Step 3 // set up event handler; 

    function onMouseOver(event) {
        console.log("hovering.");
        event.target.style.opacity = "0.5";
    }

    function onMouseLeave(event) {
        console.log("leaving.");
        event.target.style.opacity = "1.0";
    }

// Event Listeners 2-8 // Trip Planning

    // Step 0 // set up currentlyDraggedObject

    let currentlyDragged = null; 

    // Step 1 // Declare draggable obj + drag zone. 

       let draggableObjects = document.querySelector('.container.home').querySelectorAll(".text-content, .img-content");
       console.log(draggableObjects);
       let dragzone = document.querySelector('.container.home');

    // Step 2 // Set up event listeners for draggable & drag zone.

        // helper function // set up all relevant event listeners here

        function makeDraggable(draggable) {

            draggable.addEventListener("drag", onDrag); // 3
            draggable.addEventListener("dragstart", onDragStart); // 4
            draggable.addEventListener("dragend", onDragEnd); // 5
        
            draggable.addEventListener("dragenter", onDragEnter); // 6
            draggable.addEventListener("dragleave", onDragLeave); // 7

        };

        // for all draggable objects

        draggableObjects.forEach(makeDraggable); // iterate over each draggable obj. 

        // for drag zone

        dragzone.addEventListener("drop", onDrop); // 8
        dragzone.addEventListener("dragover", onDragOver); // 9

    // Step 3 // Declare event handler functions.

        // draggable object event handlers

        function onDrag(event) {
            console.log("dragging!");
            event.target.style.border = "3px dashed red";
        };

        function onDragStart(event){ 
            currentlyDragged = event.target
        };

        function onDragEnd(event){ 
            console.log("stopped dragging!");
            event.target.style.border = null;
            currentlyDragged = null 
        };

        function onDragEnter(event){ 
            event.preventDefault();
            dragzone.style.border = "4px solid blue";
            console.log("We're in drop zone!");
        };

        function onDragLeave(event){
            console.log("We're leaving drop zone!");
            dragzone.style.border = null;
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

    // for swappable draggable elements 
    // https://codepen.io/cilestin/pen/ogQQBP?editors=0010


// Event Listener 10 // buttons 

    // Step 1 // Declare destination.

       let destinations = document.querySelector(".content-pick").querySelectorAll(".destination");

    // Step 2 // add event listeners.

        // helper function // set up event listeners for each destination button.

        function addButtonFunctionality(destination){

            let button = destination.querySelector(".btn"); 
            button.addEventListener("click", onButtonClick); // 10
        
        }

        // iterate over each destination

        destinations.forEach(addButtonFunctionality);

    // Step 3 // Declare event handler functions for buttons.

        function onButtonClick(event){
            console.log("Pressed button!");
        };
    