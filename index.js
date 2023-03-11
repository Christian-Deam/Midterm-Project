fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        for (const property in json) {
            document.getElementById("root").innerHTML += `
            <div class="col">
                <div class="card shadow-sm">
                <div class="card-header fw-bold bg-dark text-white">
                    ${property}
                </div>  
                <!--<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>-->
                <img src="./images/${property}.jpg" alt="Image of ${property}">
                <div class="card-body">
                    <h5>Description:</h5>
                    <p class="card-text">${json[property].description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    <a class="button" href="${json[property].site}">Official Website</a>
                    <small class="text-muted">Built in ${json[property].yearBuilt}</small>
                    </div>
                </div>
                </div>
            </div>
        `
        }
    });








