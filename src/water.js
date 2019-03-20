class Water {
  constructor() {
    this.waterIntake = parseInt(JSON.parse(localStorage.getItem("waterIntake"))) || 0

    // html elements
    this.range = document.querySelector(".water-intake-range")
    this.tooltip = document.querySelector(".range-tooltip")
    this.addButton = document.querySelector(".water-intake-button-add")
    this.removeButton = document.querySelector(".water-intake-button-remove")
    this.clearButton = document.querySelector(".water-intake-button-clear")
    this.totalText = document.querySelector(".water-intake-total")
    this.waterIcon = document.querySelector(".water-intake-icon")

    // handlers
    this.handleRange()
    this.handleAdd()
    this.handleRemove()
    this.handleClear()

    this.render()
  }

  handleRange() {
    this.range.addEventListener("input", e => {
      this.tooltip.textContent = e.target.value
    })
  }

  handleAdd() {
    this.addButton.addEventListener("click", e => {
      this.waterIntake += parseInt(this.range.value)
      this.save()
      this.render()
    })
  }

  handleRemove() {
    this.removeButton.addEventListener("click", e => {
      if (this.waterIntake - parseInt(this.range.value)< 0) {
        this.waterIntake = 0
      } else {
        this.waterIntake -= parseInt(this.range.value)
      }
      this.save()
      this.render()
    })
  }

  handleClear() {
    this.clearButton.addEventListener("click", e => {
      this.waterIntake = 0
      this.save()
      this.render()
    })
  }

  render() {
    this.totalText.textContent = this.waterIntake
    console.log(this.waterIcon)
    if (this.waterIntake >= 100) {
      this.waterIcon.classList.add("complete")
      console.log("complete")
    } else {
      this.waterIcon.classList.remove("complete")
      console.log("not complete")
    }
  }

  save() {
    localStorage.setItem("waterIntake", JSON.stringify(this.waterIntake))
  }
}

export default Water