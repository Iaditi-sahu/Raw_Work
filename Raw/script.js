let input = document.querySelector(".input_box");  
let ul = document.querySelector(".task-list");
input.addEventListener("keydown", function(elem) {  
    //  listerns to events here elem is object
    console.log("event object", elem);
    if(elem.key == "Enter"){
        let task = input.value;
        let li = document.createElement("li");
        li.innerText = task;
// it will add task value to newly created li
        li.addEventListener("dblclick", function(elem){
            // double click listner
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