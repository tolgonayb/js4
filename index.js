{/* <Todo text="learn js"/> */}


var Todos = [];


function Todo(text, isComplete = false) {
    this.text = text;
    this.isComplete = isComplete;
    this.render = function (index) {
        var todo = document.createElement("li");
        todo.dataset.id = index;

        this.isComplete
            ? todo.classList.add("completed")
            : todo.classList.remove("completed");

        var todoCheckBtn = document.createElement("button");
        todoCheckBtn.classList = "success";
        todoCheckBtn.innerText = "✓";
        self = this;
        todoCheckBtn.addEventListener("click", function (self) {
            var todoLi = this.parentElement;
            var targetTodo = Todos[todoLi.dataset.id];
            targetTodo.isComplete = !targetTodo.isComplete;
            renderAll();
        });
        var todoSpan = document.createElement("span");
        todoSpan.innerText = text;
        var todoRemoveBtn = document.createElement("button");
        todoRemoveBtn.classList = "danger";
        todoRemoveBtn.innerText = "Remove";
        todoRemoveBtn.addEventListener("click", function () {
            var todoLi = this.parentElement;
            Todos.pop();
            Todos.splice(todoLi.dataset.id, 1);
            renderAll();
        });

        todo.appendChild(todoCheckBtn);
        todo.appendChild(todoSpan);
        todo.appendChild(todoRemoveBtn);

        return todo;
    };
}

function renderAll(todos) {
    todos = todos || Todos;
    var todolist = document.getElementById("todolist-ul");
    todolist.innerHTML = "";
    todos.forEach(function (todo, index) {
        todolist.appendChild(todo.render(index));
    });
    console.log(todos);
}

renderAll();

var buttonAdd = document.querySelector("#addTodoBtn");
buttonAdd.addEventListener("click", function () {
    var todoInput = document.querySelector("#todoTextInput");
    var inputValue = todoInput.value;
    if (!inputValue) {
        console.log("ADD TODO!!!");
        return;
    }
    Todos.push(new Todo(inputValue, false));
    renderAll();
});

function filterBuilder(option) {
    if (option === "completed") {
        return function (todo) {
            return todo.isComplete;
        };
    }
    if (option === "uncompleted") {
        return function (todo) {
            return !todo.isComplete;
        };
    }
    return function (todo) {
        return true;
    };
}

var todoFilter = document.querySelector("#todoFilter");
todoFilter.addEventListener("change", function () {
    renderAll(Todos.filter(filterBuilder(this.value)));

    //   var filter = this.value;
    //   switch (filter) {
    //     case "completed":
    //       renderAll(
    //         Todos.filter(function (todo) {
    //           return todo.isComplete;
    //         })
    //       );
    //       break;
    //     case "uncompleted":
    //       renderAll(
    //         Todos.filter(function (todo) {
    //           return !todo.isComplete;
    //         })
    //       );
    //       break;
    //     default:
    //       renderAll();
    //   }
});

// setTimeout(function () {
//   app.style.background = "red";
//   app.style.display = "flex";
//   app.style.flexDirection = "column";
// }, 2000);

//adding element to page
var newLi = document.createElement("li");
newLi.innerHTML = "<span>new Li</span>";
todoFilter.appendChild(newLi);

//removing element from page
var liToRemove = todoFilter.children[1];
// liToRemove.style.display = 'none'
// liToRemove.remove()



const massOfMonth = [
    ['Jan', ['2021-01-05: Learn HTML', '2021-01-20: Learn CSS']],
    ['Feb', ['2021-02-05: Learn JS', '2021-02-27: Buy birthday gift']],
    ['Mar', ['2021-03-08: Make a dinner party', '2021-03-21: Team Building']],
    ['Apr', []],
    ['May', ['2021-05-09: Visit a funeral repast', '2021-05-19: Make a spring clean']],
    ['Jun', ['2021-06-01: Buy gifts for a kids', '2021-06-15: Get Dentist Appointment']],
    ['Jul', ['2021-07-02: Go to Trip', '2021-07-17: Make some new photos']],
    ['Aug', ['2021-08-15: Get Doctor appointments', '2021-08-31: Get a new haircut']],
    ['Sep', ['2021-09-01: Sign Contract', '2021-09-15: Meeting with the team', '2021-09-30: Pay bills']],
    ['Oct', ['2021-10-01: Shopping tour', '2021-10-05: Celebrate Birthday Party', '2021-10-20: Start Diet Program']],
    ['Nov', ['2021-11-10: Drop Off all clothes to dry cleaner', '2021-11-20: Visit relatives']] ,
    ['Dec', ['2021-12-20: Go somewhere on Holidays', '2021-12-25: Buy a New Year gifts', '2021-12-31: Celebrate a New Year']]

]


const buttons = document.getElementsByClassName('btn');
const tasksBlock = document.querySelector('.tasks')

for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = (e) => {
        tasksBlock.innerHTML = "";
        for(let j = 0; j < massOfMonth.length; j++){
            
            const monthName = massOfMonth[j][0];
            const taskOfMonth = massOfMonth[j][1];

            if(e.target.value === monthName){
                if(taskOfMonth.length > 0){
                    for(let a = 0; a < taskOfMonth.length; a++){
                        tasksBlock.append(taskOfMonth[a])
                        tasksBlock.append(document.createElement('br'))
                    }
                }else{
                    tasksBlock.innerHTML = "No Events"
                }
            }
        }
    }
}

