const card = document.getElementById('card')
const form = document.getElementById('form')
const allLiEl = form.querySelectorAll('li')

// Apply the highlighting on selected element
allLiEl.forEach(el => {
  el.addEventListener('click', () => {
    allLiEl.forEach(el => el.classList.remove('checked'))
    el.classList.add('checked')
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  try {
    const checkedValue = form.querySelector('input[name="rating"]:checked')
    card.innerHTML = getThankYouHtml(checkedValue.value)
  } catch {
    alert('Please select a rating')
  }
})

const getThankYouHtml = (rating) => {
  return `
    <div class="thanks-card">
      <img class="thank-you-img" src="./images/illustration-thank-you.svg" alt="phone with card" />
      <p class="submitted-text">You selected ${rating} out of 5</p>
      <h1 class="thank-you">Thank you!</h1>
      <p class="submit-text">
        We appreciate you taking the time to give a rating. If you ever need mor
        support, don't hesitate to get in touch!
      </p>
    </div>
  `
}