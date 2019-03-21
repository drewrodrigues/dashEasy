!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var n=class{constructor(){this.list=JSON.parse(localStorage.getItem("todos"))||[],console.log(this.list),this.todosAddForm=document.getElementById("todos-add-form"),this.todosAddText=document.getElementById("todos-add-text"),this.todosList=document.getElementById("todos-list"),this.add=this.add.bind(this),this.handleAdd(),this.handleDelete(),this.render()}handleAdd(){this.todosAddForm.addEventListener("submit",t=>{t.preventDefault();let e=this.todosAddText.value;this.add(e)})}handleDelete(){this.todosList.addEventListener("click",t=>{this.delete(t.target.dataset.index)})}render(){this.todosList.innerHTML="",this.list.forEach((t,e)=>{this.appendToList(t.title,e)})}appendToList(t,e){let s=document.createElement("li");s.classList+="todo-item",s.textContent=t,s.setAttribute("data-index",e),this.todosList.prepend(s)}updateStorage(){localStorage.setItem("todos",JSON.stringify(this.list))}add(t){this.list.unshift({title:t}),this.appendToList(t,this.list.length-1),this.todosAddText.value="",this.updateStorage()}complete(t){this.list[t].done=!this.list[t].done,this.render()}delete(t){this.list.splice(parseInt(t),1),this.render(),this.updateStorage()}clear(){this.list=[],this.render()}};var o=class{constructor(){this.entries=JSON.parse(localStorage.getItem("entries"))||[],this.contentContainer=document.querySelector(".journal-content-container"),this.previousEntriesContainer=document.querySelector(".journal-previous-entries-container"),this.placeholder=document.querySelector(".placeholder-journal"),this.showContainer=document.querySelector(".journal-show"),this.showContainerContent=document.querySelector(".journal-show-content"),this.journalContent=document.querySelector(".journal-content"),this.previousEntries=document.querySelector(".journal-previous-entries"),this.archiveButton=document.querySelector(".journal-button-archive"),this.cancelButton=document.querySelector(".journal-button-cancel"),this.showButton=document.querySelector(".journal-button-show"),this.addButton=document.querySelector(".journal-button-add"),this.backButtons=document.querySelectorAll(".journal-button-back"),this.saveButton=document.querySelector(".journal-button-save"),this.deleteButton=document.querySelector(".journal-button-delete"),this.handleCancel(),this.handleAdd(),this.handleArchive(),this.handleBack(),this.handleSave(),this.handleShow(),this.handleDelete(),this.render()}handleCancel(){this.cancelButton.addEventListener("click",t=>{this.showPlaceholder()})}handleArchive(){this.archiveButton.addEventListener("click",t=>{this.placeholder.classList.add("hide"),this.previousEntriesContainer.classList.remove("hide")})}handleBack(){this.backButtons.forEach(t=>{t.addEventListener("click",t=>{this.showPlaceholder()})})}handleAdd(){this.addButton.addEventListener("click",t=>{this.placeholder.classList.add("hide"),this.contentContainer.classList.remove("hide"),this.previousEntriesContainer.classList.add("hide")})}handleSave(){this.saveButton.addEventListener("click",t=>{this.entries.unshift({data:new Date,content:this.journalContent.value}),this.journalContent.value="",this.save(),this.showPlaceholder()})}handleShow(){this.previousEntries.addEventListener("click",t=>{this.showContainerContent.textContent=this.entries[parseInt(t.target.dataset.index)].content,this.previousEntriesContainer.classList.add("hide"),this.showContainer.classList.remove("hide"),this.deleteButton.setAttribute("data-index",t.target.dataset.index)})}showPlaceholder(){this.placeholder.classList.remove("hide"),this.contentContainer.classList.add("hide"),this.previousEntriesContainer.classList.add("hide"),this.showContainer.classList.add("hide")}handleDelete(){this.deleteButton.addEventListener("click",t=>{this.entries.splice(parseInt(t.target.dataset.index),1),this.save(),this.render(),this.showPlaceholder()})}save(){localStorage.setItem("entries",JSON.stringify(this.entries)),this.render()}render(){this.previousEntries.innerHTML="",this.entries.forEach((t,e)=>{let s=document.createElement("li");s.setAttribute("data-index",e),s.classList.add("journal-previous-entry"),s.textContent=t.content.slice(0,40)+"...",this.previousEntries.prepend(s)})}};var i=class{constructor(){this.waterIntake=parseInt(JSON.parse(localStorage.getItem("waterIntake")))||0,this.range=document.querySelector(".water-intake-range"),this.tooltip=document.querySelector(".range-tooltip"),this.addButton=document.querySelector(".water-intake-button-add"),this.removeButton=document.querySelector(".water-intake-button-remove"),this.clearButton=document.querySelector(".water-intake-button-clear"),this.totalText=document.querySelector(".water-intake-total"),this.waterIcon=document.querySelector(".water-intake-icon"),this.handleRange(),this.handleAdd(),this.handleRemove(),this.handleClear(),this.render()}handleRange(){this.range.addEventListener("input",t=>{this.tooltip.textContent=t.target.value})}handleAdd(){this.addButton.addEventListener("click",t=>{this.waterIntake+=parseInt(this.range.value),this.save(),this.render()})}handleRemove(){this.removeButton.addEventListener("click",t=>{this.waterIntake-parseInt(this.range.value)<0?this.waterIntake=0:this.waterIntake-=parseInt(this.range.value),this.save(),this.render()})}handleClear(){this.clearButton.addEventListener("click",t=>{this.waterIntake=0,this.save(),this.render()})}render(){this.totalText.textContent=this.waterIntake,console.log(this.waterIcon),this.waterIntake>=100?(this.waterIcon.classList.add("complete"),console.log("complete")):(this.waterIcon.classList.remove("complete"),console.log("not complete"))}save(){localStorage.setItem("waterIntake",JSON.stringify(this.waterIntake))}};var a=class{constructor(){this.latitude=JSON.parse(localStorage.getItem("latitude"))||null,this.longitude=JSON.parse(localStorage.getItem("longitude"))||null,this.cityText=document.querySelector(".weather-location"),this.tempText=document.querySelector(".weather-temp-text"),this.promptForLocation(),this.getWeather(),this.getForecast()}promptForLocation(){navigator.geolocation.getCurrentPosition(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.save()})}getWeather(){let t=new XMLHttpRequest;t.onload=(()=>{if(t.status>=200&&t.status<300){let e=JSON.parse(t.responseText);console.log(e),this.setCity(e.name),this.setWeather(e.main.temp)}}),t.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&APPID=532b81128a8513da99f56da9f8007b96`),t.send()}getForecast(){let t=new XMLHttpRequest;t.onload=(()=>{if(t.status>=200&&t.status<300){let e=JSON.parse(t.responseText),s=e.list[4],n=e.list[12],o=e.list[20],i=e.list[28],a=e.list[36];this.setForecast([s,n,o,i,a])}}),t.open("GET",`https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&APPID=532b81128a8513da99f56da9f8007b96`),t.send()}setForecast(t){t.map(t=>{let e=new Date(t.dt_txt);t.date=`${e.getMonth()+1}/${e.getDate()}`}),d3.select(".weather-forecast-graph").selectAll("div").data(t).enter().append("div").style("width",t=>this.kelvinToF(t.main.temp)+75+"px").append("span").text(t=>t.date).append("p").text(t=>`${this.kelvinToF(t.main.temp)}°`)}setCity(t){this.cityText.textContent=t}setWeather(t){this.tempText.textContent=this.kelvinToF(t)}kelvinToF(t){return parseInt(9*(t-273.15)/5+32)}save(){localStorage.setItem("latitude",JSON.stringify(this.latitude)),localStorage.setItem("longitude",JSON.stringify(this.longitude))}};const r=["What we think, we become.","Whatever you do, do it well.","Simplicity is the ultimate sophistication.","Aspire to inspire before we expire.","I could agree with you but then we’d both be wrong.","Yesterday you said tomorrow. Just do it.","There is no substitute for hard work.","Wanting to be someone else is a waste of who you are.","If the world was blind how many people would you impress?","All limitations are self-imposed.","Problems are not stop signs, they are guidelines."];var l=class{constructor(){this.quoteText=document.querySelector(".quote-text"),this.setQuote()}setQuote(){this.quoteText.textContent=r[Math.floor(Math.random()*r.length)]}};var d=class{constructor(){this.body=document.querySelector("body"),this.randomBackground()}randomBackground(){console.log("yo"),console.log(this.body),this.body.setAttribute("style",`background: url(dist/images/bkg${Math.floor(8*Math.random()+1)}.jpg)`)}};document.addEventListener("DOMContentLoaded",t=>{new n,new o,new i,new a,new l,new d})}]);