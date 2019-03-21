const QUOTES = [
  "What we think, we become.",
  "Whatever you do, do it well.",
  "Simplicity is the ultimate sophistication.",
  "Aspire to inspire before we expire.",
  "I could agree with you but then we’d both be wrong.",
  "Yesterday you said tomorrow. Just do it.",
  "There is no substitute for hard work.",
  "Wanting to be someone else is a waste of who you are.",
  "If the world was blind how many people would you impress?",
  "All limitations are self-imposed.",
  "Problems are not stop signs, they are guidelines."
]

class Quotes {
  constructor() {
    // html elements
    this.quoteText = document.querySelector(".quote-text")

    // initialize
    this.setQuote()
  }

  setQuote() {
    this.quoteText.textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)]
  }
}

export default Quotes