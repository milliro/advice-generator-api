const adviceId = document.querySelector('#advice-id')
const advice = document.querySelector('#advice')
const dice = document.querySelector('.dice')

const getJson = async() => {
  const apiURL = `https://api.adviceslip.com/advice`
  const data = await fetch(apiURL)
  return await data.json()
}

const insertAdviceInHTML = () => {
  getJson().then(adviceJSON => {
    adviceId.innerHTML = adviceJSON.slip.id
    advice.innerHTML = `"${adviceJSON.slip.advice}"`
  })
}

dice.addEventListener('click', insertAdviceInHTML)
insertAdviceInHTML()