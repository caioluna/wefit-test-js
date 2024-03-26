const buttonGroup = document.querySelector('.btn-group-vertical')
const jumbotron = document.querySelector('.jumbotron')
const jumbotronBtn = document.querySelector('.jumbotron .btn')
const cardTitle = document.querySelectorAll('.card-title')
const listGroup = document.querySelector('.list-group')
const newLiEl1 = document.createElement('li')
const newLiEl2 = document.createElement('li')

buttonGroup.classList.remove('btn-group-vertical')

jumbotron.classList.add('text-right')
jumbotron.style.backgroundColor = '#6A757D'
jumbotron.style.color = '#FFFFFF'

jumbotronBtn.classList.replace('btn-primary', 'btn-success')

cardTitle.forEach((el) => {
  const row = el.closest('.row')

  if (el.innerText === 'Animais') {
    el.closest('.card-body').querySelector('.btn').classList.replace('btn-primary', 'btn-success')
  }

  if (el.innerText === 'Tecnologia') {
    el.closest('.col-lg-3').setAttribute('id', 'tech')
  }
  if (el.innerText === 'Animais') {
    el.closest('.col-lg-3').setAttribute('id', 'animals')
  }
  if (el.innerHTML === 'Natureza') {
    el.closest('.col-lg-3').setAttribute('id', 'nature')

    const tech = document.getElementById('tech')
    const nature = document.getElementById('nature')
    const animals = document.getElementById('animals')

    row.insertBefore(tech,nature)
    row.insertBefore(nature,animals)
  }

})

newLiEl1.textContent = 'Quarto item'
newLiEl2.textContent = 'Quinto item'
listGroup.querySelector('.list-group-item').classList.remove('active')
listGroup.appendChild(newLiEl1).classList.add('list-group-item', 'active')
listGroup.appendChild(newLiEl2).classList.add('list-group-item')

