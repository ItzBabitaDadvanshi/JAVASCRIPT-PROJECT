


// let celsius=document.getElementById(celsius)
// let fahrenheit=document.getElementById(fahrenheit)

// function convertCelsius(){
//     let output=(parsefloat(celsius.value)*9/5)+32;
//     fahrenheit.value=parsefloat(output);
//     console.log(output)
// } 

// function convertFahrenheit(){
//     let output=(parsefloat(fahrenheit.value)-32*5/9);
//     celsius.value=parsefloat(output);
//     console.log(output)

// }


    // Convert Celsius to Fahrenheit
    function convertFahrenheit() {
        let celsius = document.getElementById('celsius').value;

        // Ensure input is a number
        if (isNaN(celsius) || celsius === "") {
            alert("Please enter a valid number for Celsius.");
            return;
        }

        let fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    }

    // Convert Fahrenheit to Celsius
    function convertCelsius() {
        let fahrenheit = document.getElementById('fahrenheit').value;

        // Ensure input is a number
        if (isNaN(fahrenheit) || fahrenheit === "") {
            alert("Please enter a valid number for Fahrenheit.");
            return;
        }

        let celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    }

    // Reset both input fields
    function reset() {
        document.getElementById('celsius').value = "";
        document.getElementById('fahrenheit').value = "";
    }

