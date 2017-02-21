// node objects-w4d2class.js
// Explorer Mode
// Make an object named spaceship1 using a JavaScript object literal. Include properties with this information: - Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser

// Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'. After you create your spaceship object, call the launch method to see the console log.

//spaceship 1
var spaceship1 = {
    shipName: 'Galaxy Cruiser',
    topSpeed: '2lyph',
    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!');
    }
}
spaceship1.launch();

// Make three other spaceships with different speeds and names using the three other ways of making objects seen in the examples above.


//spaceship 2
var spaceship2 = new Object()
spaceship2.shipName = 'USS Enterprise'
spaceship2.topSpeed = 'warp 9'
spaceship2.launch = function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
}
spaceship2.launch();

//spaceship 3
var spaceship3 = function() {
    this.shipName = 'Millennium Falcon'
    this.topSpeed = 'making the Kessel Run in less than 12 parsecs'
    this.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond by ' + this.topSpeed + '!')
    }
}
var falcon = new spaceship3()
falcon.launch();

//spaceship 4
 class Spaceship4 {
     constructor() {
         this.shipName = 'Heart of Gold'
        this.topSpeed = 'probabily drive speed is instantaneous'
     }
     launch() {
         console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
     }
 }

 var heartGold = new Spaceship4()
 heartGold.launch();
