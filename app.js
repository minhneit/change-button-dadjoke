const apiJoke = "https://icanhazdadjoke.com";
const jokeHeading = document.querySelector(".joke-heading")
const jokeBtn = document.querySelector(".btn")
const jokeWrapper = document.querySelector(".joke")
console.log(jokeWrapper);

async function getJoke() {
    const headerConvert = {
        headers: {
            Accept: 'application/json'
        }
    }
    const jokes = await fetch(apiJoke, headerConvert)
    const joke = await jokes.json()
    return joke
}

async function handleClick() {
    jokeWrapper.classList.add("is-loading")
    const data = await getJoke();
    jokeHeading.textContent = data.joke
    jokeWrapper.classList.remove("is-loading")

}
jokeBtn.addEventListener("click", handleClick)


