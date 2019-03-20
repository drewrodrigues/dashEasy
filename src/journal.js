class Journal {
  constructor() {
    // prefill data from storage
    this.entries = JSON.parse(localStorage.getItem('entries')) || []

    // html sections
    this.contentContainer = document.querySelector(".journal-content-container")
    this.previousEntriesContainer = document.querySelector(".journal-previous-entries-container")
    this.placeholder = document.querySelector(".placeholder-journal")
    this.showContainer = document.querySelector(".journal-show")
    this.showContainerContent = document.querySelector(".journal-show-content")

    // form
    this.journalContent = document.querySelector(".journal-content")

    // previous entries
    this.previousEntries = document.querySelector(".journal-previous-entries")

    // buttons
    this.archiveButton = document.querySelector(".journal-button-archive")
    this.cancelButton = document.querySelector(".journal-button-cancel")
    this.showButton = document.querySelector(".journal-button-show")
    this.addButton = document.querySelector(".journal-button-add")
    this.backButtons = document.querySelectorAll(".journal-button-back")
    this.saveButton = document.querySelector(".journal-button-save")
    this.deleteButton = document.querySelector(".journal-button-delete")

    // event handlers
    this.handleCancel()
    this.handleAdd()
    this.handleArchive()
    this.handleBack()
    this.handleSave()
    this.handleShow()
    this.handleDelete()

    this.render()
  }

  handleCancel() {
    this.cancelButton.addEventListener("click", e => {
      this.showPlaceholder()
    })
  }
  
  handleArchive() {
    this.archiveButton.addEventListener("click", e => {
      this.placeholder.classList.add("hide")
      this.previousEntriesContainer.classList.remove("hide")
    })
  }

  handleBack() {
    this.backButtons.forEach(button => {
      button.addEventListener("click", e => {
        this.showPlaceholder()
      })
    })
  }

  handleAdd() {
    this.addButton.addEventListener("click", e => {
      this.placeholder.classList.add("hide")
      this.contentContainer.classList.remove("hide")
      this.previousEntriesContainer.classList.add("hide")
    })
  }

  handleSave() {
    this.saveButton.addEventListener("click", e => {
      this.entries.unshift({ data: new Date(), content: this.journalContent.value })
      this.journalContent.value = ""
      this.save()
      this.showPlaceholder()
    })
  }

  handleShow() {
    this.previousEntries.addEventListener("click", e => {
      this.showContainerContent.textContent = this.entries[parseInt(e.target.dataset.index)].content
      this.previousEntriesContainer.classList.add("hide")
      this.showContainer.classList.remove("hide")
      this.deleteButton.setAttribute("data-index", e.target.dataset.index)
    })
  }

  showPlaceholder() {
    this.placeholder.classList.remove("hide")
    this.contentContainer.classList.add("hide")
    this.previousEntriesContainer.classList.add("hide")
    this.showContainer.classList.add("hide")
  }

  handleDelete() {
    this.deleteButton.addEventListener("click", e => {
      this.entries.splice(parseInt(e.target.dataset.index), 1)
      this.save()
      this.render()
      this.showPlaceholder()
    })
  }

  save() {
    localStorage.setItem("entries", JSON.stringify(this.entries))
    this.render()
  }

  render() {
    this.previousEntries.innerHTML = ""
    this.entries.forEach((entry, index) => {
      let li = document.createElement("li")
      li.setAttribute("data-index", index)
      li.classList.add("journal-previous-entry")
      li.textContent = entry.content.slice(0, 40) + "..."
      this.previousEntries.prepend(li)
    })
  }
}

export default Journal