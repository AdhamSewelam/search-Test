
function displayDisease(meal) {
    fetch(`https://medicalproject1010.herokuapp.com/conditions?searchKey=${meal}`)
        .then(data => {
            return data.json();
        })
        .then(condition => {
            const conditions = condition.data
            var cols = `
                    <a href="index.html" class="textDiseases">Diseases</a>
                    <a href="pageDisplay.html" class="textDiseases">> ${conditions.diseaseName}</a>
                    <h1>${conditions.diseaseName}</h1> <hr>
                    <h2>Overview</h2>
                    <p>${conditions.overview}</p>
                    <h2>Symptoms</h2>
                    <p>${conditions.symptoms}</p>
                    <h2>Causes</h2>
                    <p>${conditions.causes}</p>
                    <h2>Risk factors</h2>
                    <p>${conditions.riskFactors}</p>
                    <h2>Complications</h2>
                    <p>${conditions.complications}</p>
                    <h2>Prevention</h2>
                    <p>${conditions.prevention}</p>
              `;
            document.getElementById("display").innerHTML = cols;
        });
}

displayDisease(localStorage.getItem("disease"))