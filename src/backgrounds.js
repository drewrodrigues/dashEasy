class Backgrounds {
  constructor() {
    this.body = document.querySelector("body")
    this.randomBackground()
  }

  randomBackground() {
    console.log("yo")
    console.log(this.body)
    this.body.setAttribute("style", `background: url(dist/images/bkg${Math.floor(Math.random() * 8 + 1)}.jpg)`)
  }
}

export default Backgrounds