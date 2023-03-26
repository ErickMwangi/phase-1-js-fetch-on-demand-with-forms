const { data } = require("jquery");

const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector(`input#searchByID`)

        console.log(input.value);

        fetch(`http://localhost:3000/movies $(input.value)`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // LOG: (3) [{…}, {…}, {…}]
            let title = document.querySelector(`section#movieDetails h4`)
            let summary = document.querySelector(`sectionmovieDetails p`)
            title.innerText = data.title;
            summary.innerText = data.summary;
         })
        return data;

    });
}

document.addEventListener('DOMContentLoaded', init);