const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const checked = form.querySelector('input[name="rating"]:checked').value
  console.log(checked)
})