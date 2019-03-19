class Todos {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('todos')) || []
    console.log(this.list)

    this.todosAddForm = document.getElementById('todos-add-form')
    this.todosAddText = document.getElementById('todos-add-text')
    this.todosList    = document.getElementById('todos-list')

    this.add = this.add.bind(this)

    this.handleAdd()
    this.handleDelete()

    this.render()
  }

  handleAdd() {
    this.todosAddForm.addEventListener('submit', e => {
      e.preventDefault()
      let text = this.todosAddText.value
      this.add(text)
    })
  }

  handleDelete() {
    this.todosList.addEventListener('click', e => {
      this.delete(e.target.dataset.index)
    })
  }

  render() {
    this.todosList.innerHTML = ""
    this.list.forEach((todo, i) => {
      this.appendToList(todo.title, i)
    })
  }

  appendToList(text, index) {
    // create list item & fill with text
    let todoItem = document.createElement('li')
    todoItem.textContent = text
    // set index so we can delete it later
    todoItem.setAttribute('data-index', index)
    // add to list
    this.todosList.appendChild(todoItem)
  }

  updateStorage() {
    localStorage.setItem("todos", JSON.stringify(this.list))
  }

  add(text) {
    this.list.push({ title: text, done: false })
    this.appendToList(text, this.list.length-1)
    this.todosAddText.value = ""
    this.updateStorage()
  }
  
  complete(index) {
    this.list[index].done = !this.list[index].done
    this.render()
  }
  
  delete(index) {
    this.list.splice(parseInt(index), 1)
    this.render()
    this.updateStorage()
  }

  clear() {
    this.list = []
    this.render()
  }
}

export default Todos