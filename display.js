function displayDisease(meal) {
    fetch(`https://medicalproject1010.herokuapp.com/conditions?searchKey=${meal}`)
        .then(data => {
            return data.json();
        })
        .then(condition => {
            const titleDisease = document.getElementById("titleDisease")
            const conditions = condition.data
            var cols = `
                    <a href="index.html" class="btn btn-outline-primary rounded-pill  mt-5 d-block w-25 textDiseases">Diseases ></a>
                    <a href="pageDisplay.html" class="btn btn-outline-primary rounded-pill mt-2  d-block w-25 textDiseases"> ${conditions.diseaseName}</a>
                    <h1 class="mt-5 searchColorH1">${conditions.diseaseName}</h1> <hr>
                    <h2 class="searchColor mt-2">Overview</h2>
                    <p>${conditions.overview}</p>
                    <div align=center>
                    <img src="${conditions.diseaseImage[0]}" style="width:30%; height:30%" alt="" />
                    </div>
                    <h2 class="searchColor my-5"">Symptoms</h2>
                    <p>${conditions.symptoms}</p>
                    <h2 class="searchColor my-5"">Causes</h2>
                    <p>${conditions.causes}</p>
                    <div align=center>
                    <img src="${conditions.diseaseImage[1]}" style="width:30%; height:30%" alt="" />
                    </div>
                    <h2 class="searchColor my-5"">Risk factors</h2>
                    <p>${conditions.riskFactors}</p>
                    <h2 class="searchColor my-5"">Complications</h2>
                    <p>${conditions.complications}</p>
                    <h2 class="searchColor my-5"">Prevention</h2>
                    <p>${conditions.prevention}</p>
                    <p>${conditions.causes}</p>
                    <div align=center>
                    <img src="${conditions.diseaseImage[2]}" style="width:30%; height:30%" alt="" />
                    </div>
              `;
            document.getElementById("display").innerHTML = cols;
        });
}

displayDisease(localStorage.getItem("disease"))
