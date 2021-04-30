let input = document.querySelector(".input_box");  
let ul = document.querySelector(".task-list");
input.addEventListener("keydown", function(e) {  
    //  listeners to events here elem is object
    console.log("event object", e);
    if(e.key == "Enter"){
        let task = input.value;
        let li = document.createElement("li");
        li.innerText = task;
// it will add task value to newly created li
        li.addEventListener("dblclick", function(e){
            // double click listener
            li.remove();
            // remove or delete
        })
        li.setAttribute("class", "task");
        // setAttributes for both
        ul.appendChild(li);
        // adds to the child
        input.value = "";
    }
});