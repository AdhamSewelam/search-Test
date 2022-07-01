const diseaseCardTemplate = document.querySelector("[data-disease-template]")
const diseaseCardContainer = document.querySelector("[data-disease-cards-container]")
const searchInput = document.querySelector("[data-search]")

let diseases = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    diseases.forEach(disease => {
        const isVisible =
            disease.diseaseName.toLowerCase().includes(value)
        disease.element.classList.toggle("hide", !isVisible)
    })
})


fetch("https://medicalproject1010.herokuapp.com/conditions")
    .then(res => res.json())
    .then(data => {
        const datas = data.data
        diseases = datas.map(disease => {
            const card = diseaseCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            header.textContent = disease.diseaseName
            diseaseCardContainer.append(card)
            return { diseaseName: disease.diseaseName, element: card }
        })
        var link = document.querySelectorAll("#diseaseLink")
        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener("click", function (e) {
                var currentDisease = e.target.text
                var currentDis = localStorage.setItem("disease", currentDisease);
                console.log(localStorage.getItem("disease"))
                displayDisease(currentDis)
            })
        }
    })
