let form = document.querySelector('#med-form')
let reminders = document.querySelector("#reminders")
let reminder = document.createElement('div')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let medName = document.querySelector('#med-name').value
  reminder.innerHTML= `${medName}`
  reminders.appendChild(reminder)
})