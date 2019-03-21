class Weather {
  constructor() {
    this.latitude = JSON.parse(localStorage.getItem("latitude")) || null
    this.longitude = JSON.parse(localStorage.getItem("longitude")) || null

    // html elements
    this.cityText = document.querySelector(".weather-location")
    this.tempText = document.querySelector(".weather-temp-text")

    this.promptForLocation()
    this.getWeather()
    this.getForecast()
  }

  promptForLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      this.save()
    })
  }

  getWeather() {
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.responseText)
        console.log(response)
        this.setCity(response.name)
        this.setWeather(response.main.temp)
      }
    }
    xhr.open(
      "GET", 
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&APPID=532b81128a8513da99f56da9f8007b96`)
    xhr.send()
  }

  getForecast() {
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.responseText)
        let day1 = response.list[4]
        let day2 = response.list[12]
        let day3 = response.list[20]
        let day4 = response.list[28]
        let day5 = response.list[36]
        this.setForecast([day1, day2, day3, day4, day5])
      }
    }
    xhr.open(
      "GET", 
      `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&APPID=532b81128a8513da99f56da9f8007b96`)
    xhr.send()
  }

  setForecast(forecast) {
    forecast.map(day => {
      let date = new Date(day.dt_txt)
      day.date = `${date.getMonth() + 1}/${date.getDate()}`
    })

    d3.select(".weather-forecast-graph")
      .selectAll("div")
      .data(forecast)
        .enter()
        .append("div")
        .style("width", d => this.kelvinToF(d.main.temp) + 75 + "px")
        .append("span")
        .text(d => d.date)
        .append("p")
        .text(d => `${this.kelvinToF(d.main.temp)}°`)
  }

  setCity(city) {
    this.cityText.textContent = city
  }

  setWeather(temp) {
    this.tempText.textContent = this.kelvinToF(temp)
  }

  kelvinToF(temp) {
    return parseInt((temp - 273.15) * 9/5 + 32)
  }

  save() {
    localStorage.setItem("latitude", JSON.stringify(this.latitude))
    localStorage.setItem("longitude", JSON.stringify(this.longitude))
  }
}

export default Weather