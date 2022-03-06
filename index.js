function makeCar() {
var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
var years = [1955, 1957, 1948, 1954, 1961];
var colors = ["red", "blue", "tan", "yellow", "white"];
var convertible = ["convertible", "non-convertible"];

var randMake = Math.floor(Math.random() * makes.length);
var randModel = Math.floor(Math.random() * models.length);
var randYear = Math.floor(Math.random() * years.length);
var randColor = Math.floor(Math.random() * colors.length);
var randConvertible = Math.floor(Math.random() * 2);

    var car = {
        make: makes[randMake],
        model: models[randModel],
        year: years[randYear],
        color: colors[randColor],
        convertible: convertible[randConvertible],
        mileage: 0,
        started: false,
        fuel: 50,
        alert: null,

        drive: function() { 
            this.alert = document.getElementById("car");
            if (this.started == false) {
                this.alert.innerHTML = "Uh... You need to turn on the engine first. Dummy.";
                console.log("Uh... You need to turn on the engine first. Dummy.");
            }
            else if(this.fuel < 1) {
                this.stop();
                this.fuel = 0;
                this.alert.innerHTML = "Sorry, fuel tank empty";
                console.log("Fuel tank Empty");
            }
            else {
                this.alert.innerHTML = "Here We Go!!!";
                console.log("Here we go!");
                this.mileage += 2;
                this.fuel -= 10;
            }
        },             
        start: function() {
            this.alert = document.getElementById("car");
            if (this.started == true) {
                this.alert.innerHTML = "Redundant command, car engine already running.";
                console.log("Redundant command, car engine already running!");
            }
            else {
                console.log("Engine Check")
                if (this.fuel > 0) {
                    this.alert.innerHTML = "Fuel at " + car.fuel + "%";
                    console.log("Fuel at " + car.fuel + "%")
                    this.started = true;
                    this.fuel -= 1;
                    console.log("Car Engine Initialized. " + this.started);
                }
                else {
                    this.fuel = 0;
                    this.alert.innerHTML ="Waning!! Fuel tank empty. Unable to start engine. " + " Fuel: "+ car.fuel +"%";
                    console.log("Warning!! Fuel tank empty. Unable to start engine. " + "Fuel: "+ car.fuel +"%");
                }
            }
        },
        stop: function() {
            this.alert = document.getElementById("car");
            this.started = false;
            this.alert.innerHTML =  "Engine Off";
            console.log("Car Stopped.");
        },
        addFuel: function(fuel_amount = 5) { 
            this.alert = document.getElementById("car");
            this.fuel += fuel_amount; 
            this.alert.innerHTML =  "Fuel: " + this.fuel + "%";
        },
        status: function() {
            this.alert = document.getElementById("car");
            this.alert.innerHTML = `Engine Status: ${this.started} <br>Fuel: ${this.fuel}% \nMileage: ${this.mileage}.`;
            console.log( `Engine Status: ${this.started} \nFuel: ${this.fuel}% \nMileage: ${this.mileage}.`  );
        },
        displayCar: function() {
            this.alert = document.getElementById("car");
            this.alert.innerHTML ="Your new car is a " + this.year + " " + this.make + " " + this.model;
            console.log("Your new car is a " + this.year + " " + this.make + " " + this.model);
        }
    }
 return car;
}
first = makeCar();


function changeGreetings() {
    var newGreetings = document.getElementById("greetings")
    newGreetings.innerHTML = greetingsList[Math.floor(Math.random() * greetingsList.length)];
    document.getElementById("greetings").style.color = "blue";
}

let greetingsList = ["The right man in the wrong place can make all the difference in the world.",
                    "What is better? To be born good or overcome your evil nature through great effort." + "<br>" + "--Parthurnax, Elder Scrolls V",
                    "\"On two occasions I have been asked, 'Pray, MrBabbage, if you put into the machine wrong figures, will the right answers come out?' [...] " +
                    "<br>" + " I am not able to rightly apprehend the kind of confusion of ideas that could provoke  such a question." + "<br>" + "--Charles Babbage ",
                    "We all make choices in life, but in the end our choices make us." +"<br>" + "--Andrew Ryan, Bioshock",
                    "Wanting something does not give you the right to have it." + "<br>" + "--Ezio Auditore, Assassin's Creed 2",
                    "There are two ways of constructing a software design: One way is to make it so simple that there is obviously no deficiencies, and the" +
                    "<br>" + "other way is to make it so complicated that there are no obvious deficiencies." + "<br>" +"--C.A.R. Hoare, 1980 ACM Turing Award Lecture" 
                ];

function changeTheme() {
   // document.getElementById("bdy").style.backgroundColor = "black"; 
    var theme = document.getElementById("change"); 
    if (theme.innerHTML == "Night") {
        document.getElementById("bdy").style.backgroundColor = "#000000";
        document.getElementById("bdy").style.color = "white";
        theme.innerHTML = "Day"; 
    }
    else {
        document.getElementById("bdy").style.backgroundColor = "#999999"; 
        document.getElementById("bdy").style.color = "black";
        theme.innerHTML = "Night";
    }

}

/*
function doForm() {
    var data = new FormData();
    data.append("name", document.getElementById("u_name").value);
}

var form = document.getElementById("form");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    console.log(username);
    var username = document.getElementById("email").value;
    console.log(email);
})
*/

function getData() {
    event.preventDefault();
    var quote = document.getElementById("quote").value;
    console.log(quote);
    var quotee = document.getElementById("quotee").value;
    console.log(quotee);

    greetingsList.push(quote);
}

//Make a Button object, calculator.