const form = document.querySelector(".form");
const btn = document.querySelector("#btn");
const todoList = document.querySelector(".todoList");
const list = document.querySelector(".list");
const saveBtn = document.querySelector(".saveBtn");
const todoListItems = document.querySelector("#todoListItems");
const finalList  = document.querySelector(".finalList");
const mainList  = document.querySelector("#mainList");

// btn.addEventListener("click", () => {
//   const todoInputArea = document.createElement("form");
//   todoInputArea.classList.add("todoInput");
//   todoInputArea.innerHTML = `
//         <input class="todoList" type="text" placeholder="Enter your todos">
//         <button class="saveBtn">Save</button>
//     `;

//   // form.append(todoInputArea);
//   document.body.insertBefore(todoInputArea, form);
// });

todoList.addEventListener("click", () => {
  saveBtn.style = "display: block";
});

const todoArray = [];
saveBtn.addEventListener("click", () => {
  const lists = document.createElement("div");
  lists.classList.add("finalList");

  // lists.innerHTML = `
  //     <input type="checkbox" id="mainList">${todoList.value}</input>
  //   `;


  
    localStorage.setItem(todoList.value,todoList.value);
    todoArray.push(localStorage.getItem(todoList.value.slice(0,20)));


    const ls = localStorage.getItem(todoList.value)
 
    // if(localStorage.length){
      todoArray.forEach((todo) => {
        lists.innerHTML = `
          <input type="checkbox" id="mainList" class="li">${todo}</input>
          <img src="/wrong.png" class="deleteList"</img>
        `
      })
      const deleteList = document.querySelector('.deleteList');
      // console.log(deleteList)

      lists.children[1].addEventListener('click',() => {
        // alert("clicked");
        lists.remove();
      })

      console.log(lists.children[1].classList);
    // }
    
    lists.children.mainList.addEventListener('change',() => {
    lists.classList.toggle("completed")
    // lists.remove();
  })



  if(lists.children.mainList.checked){
    console.log(mainList);
  }
  todoList.value = "";
  saveBtn.style = "display: none";
  document.body.insertBefore(lists, todoListItems);

});

console.log(todoArray);