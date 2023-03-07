class ToDo {
    constructor() {
        let parentDiv = document.createElement("div");
        let listDiv = document.createElement("div"); 
        listDiv.classList.add("listDiv")
        parentDiv.classList.add("parent")
        let titleDiv = document.createElement("div")
        titleDiv.classList.add("titleDiv")
        let h1 = document.createElement("h1")
        h1.classList.add("title")
        h1.innerHTML = 'To Do List'
        titleDiv.append(h1)
        parentDiv.append(titleDiv,listDiv)
        document.body.append(parentDiv)
        let headParent = document.createElement("div")
        headParent.classList.add("headParent")
        this.input = document.createElement("input")
        this.input.classList.add("input")
        this.add = document.createElement("button")
        this.add.classList.add("addClass")
        this.add.innerHTML = "Add"
        this.div = document.createElement("div")
        let save = document.createElement('button')
        save.innerHTML = "Save"
        save.classList.add("addClass")
        let clean = document.createElement('button')
        clean.innerHTML = "Clean"
        clean.classList.add("addClass")
        headParent.append(this.input,this.add,clean,save)
        listDiv.append(headParent,this.div)
        this.add.addEventListener("click", () => this.addListItem())
        save.addEventListener("click", () => this.saveElement())
        clean.addEventListener("click", () => this.cleanElement())
        addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.addListItem()
            }
          });
          if(localStorage.getItem(1)){
            this.ul = document.createElement("ul")
            this.ul.id = "ulClass"
            let arr =  localStorage.getItem(1)
           let arr1 = arr.split(',')
            console.log(arr1);
            arr1.forEach(element => {
             let li = document.createElement('li')
             li.classList.add("list")
             li.innerHTML = element
             let deleteLi = document.createElement("i")
             deleteLi.className = "fa-solid fa-trash"
             let updateLi = document.createElement("i")
             updateLi.className = "fa-solid fa-pen-to-square"
             li.append(deleteLi,updateLi)
             this.ul.append(li)
             this.div.append(this.ul)
             deleteLi.addEventListener("click", () => this.deleteListItem(li))
             updateLi.addEventListener("click", () => this.updateListItem(li,deleteLi,updateLi))
            });
         }
    }
    addListItem = () => {
        if(this.input.value == ""){
            return alert('invalid parametrs')
        }
        let d = true
        if(!document.getElementById("ulClass")){
            this.ul = document.createElement("ul")
            this.ul.id = "ulClass"
            this.div.append(this.ul)
        }
        
            this.ul = document.querySelector("#ulClass")
            let li = document.createElement('li')
            li.innerHTML = this.input.value
            li.classList.add("list")
            this.input.value = ""
            let deleteLi = document.createElement("i")
            deleteLi.className = "fa-solid fa-trash"
            let updateLi = document.createElement("i")
            updateLi.className = "fa-solid fa-pen-to-square"
            li.append(deleteLi,updateLi)
            this.ul.append(li)
            deleteLi.addEventListener("click", () => this.deleteListItem(li))
            updateLi.addEventListener("click", () => this.updateListItem(li,deleteLi,updateLi))
    };
    saveElement = () => {
        localStorage.removeItem(1)
        let x = document.querySelectorAll("li")
        let arr = []
        x.forEach(element => {
        console.log(element.childNodes);
            arr.push(element.childNodes[0].data)
        });
        JSON.stringify(arr)
        localStorage.setItem(1,arr)
        return console.log(arr)
    }
    cleanElement = () => {
        this.ul.remove()
        localStorage.removeItem(1)
    }
    deleteListItem = (li) => li.remove()
    updateListItem = (li,deleteLi,updateLi) => {
        debugger
        console.log(li.innerHTML);
        if(this.input.value == "" || li.value == this.input.value){
            return alert("invalid")
        }
        li.innerHTML = this.input.value
        li.append(deleteLi,updateLi)
        this.input.value = ""
    };
  }

const todo = new ToDo();