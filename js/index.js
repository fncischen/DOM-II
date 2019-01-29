// Your code goes here





// Event Listeners 2-8 // Trip Planning

    // Step 1 // Declare draggable obj + drag zone. 

        draggableObjects = document.querySelector('.container.home').querySelectorAll(".text-content, .img-content");
        dragzone = document.querySelector('.container.home');

    // Step 2 // Set up event listeners for draggable & drag zone.

        // helper function

        function makeDraggable(draggable) {

            draggable.addEventListener("drag", onDrag); // 2
            draggable.addEventListener("dragstart", onDragStart); // 3
            draggable.addEventListener("dragend", onDragEnd); // 4
        
            draggable.addEventListener("dragenter", onDragEnter); // 5
            draggable.addEventListener("dragleave", onDragLeave); // 6

        };

        // draggable 

        draggableObjects.forEach(makeDraggable);

        // dragzone

        dragzone.addEventListener("drop", onDrop); // 7
        dragzone.addEventListener("dragover", onDragOver); // 8

    // Step 3 // Declare event handler functions.

        function onDrag(event) {};
        function onDragStart(event){};
        function onDragEnd(event){};
        function onDragEnter(event){};
        function onDragLeave(event){};

        function onDrop(event){};
        function onDragOver(event){};

    // for more info
    // drag and drop interaces
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API


// Event Listeners 9-10

    // Step 1 // Declare destination buttons.

        destinations = document.querySelector(".content-pick").querySelectorAll(".destination");

    // Step 2 // add event listeners.



    // Step 3 // Declare event handler functions.