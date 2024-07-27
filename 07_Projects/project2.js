const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevents submition elsewhere

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector("#weight").value)

    //console.log(`${height}, ${weight}`);
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) { // Nan not a number
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = ((weight / (height*height))*10000).toFixed(2)

        if (bmi < 18.6) {
            results.innerHTML = `<span> ${bmi} <br/> Underweight </span>`
        } else if(bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `<span>${bmi} <br/> Normal <span/>`
        } else {
            results.innerHTML = `<span>${bmi} <br/> Overweight <span/>`
        }
    }

})