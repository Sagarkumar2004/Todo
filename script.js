window.addEventListener("load", () => {
  const title = document.getElementById("title");
  const TodoItem = document.getElementById("TodoItem");
  const result = document.querySelector(".result");

  document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
  

    if (title.value != "") {
      const task_heading_el = document.createElement("div");
      task_heading_el.classList.add("taskList");

      const task_Output_title = document.createElement("h3");
      task_Output_title.classList.add("PrintTitle");
      task_heading_el.appendChild(task_Output_title);

      const task_description_el = document.createElement("p");
      task_description_el.classList.add("printTodoItem");
      task_heading_el.appendChild(task_description_el);

      task_Output_title.innerText = title.value;
      task_description_el.innerText = TodoItem.value;
      localStorage.setItem("result", JSON.stringify[title, TodoItem])
      
      const Delete_Btn = document.createElement("input");
      Delete_Btn.classList.add("btn-delete");
      Delete_Btn.type = "button";
      Delete_Btn.value = "Delete";
      task_heading_el.appendChild(Delete_Btn);

      TodoItem.value = "";
      title.value = "";
      result.appendChild(task_heading_el);

      Delete_Btn.addEventListener("click", (e) => {
        if (confirm("Do you want to delete this Task") == true) {
          e.preventDefault();
          result.removeChild(task_heading_el);
          localStorage.removeItem("result")
          console.log("I am Delete btn");
        }
      });
    }
  });
});
