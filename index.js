//CONNECTING CONSTRUCTOR AND INSTANCE

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://jazzy:Peca1110@localhost/usersdb');

//DEFINING MODELS IN SEQUELIZE (Basically creating tables)

//Each property is defined with a datatype defined by Sequelize.
	//EXAMPLE:
		
		var Plane = sequelize.define('plane', {
			name: Sequelize.STRING, 
			type: Sequelize.STRING,
			speed: Sequelize.INTEGER
		});

// //KEEPING MODELS IN SYNC
// //Once a model is defined, use .sync() to ensure the table exists.
// //This is like running CREATE TABLE if the table does not exist
// //Remember, Sequelize uses promises: once the model exists, you can chain .then() calls
// 	//EXAMPLE:
// 		//Ensures the table exists
		//Note {force: true} will drop the table if it already exists
		Plane
		.sync({force: true})
			.then(function(){
				console.log('success');
				return 	Plane.create({
					name: 'F150',
					type: 'fighter',
					speed: 678
				})
			.then(function(){
				return Plane.create({
					name: 'dragonT100',
					type: 'bomber',
					speed: 7493
				})
			})



			// //FINDING ALL INSTANCES
			//Using Model.findAll(), you can retrieve all instances of a given model(Or in other words this is the equivalent of using SELECT * FROM tablename;. It gives you all the info in that table.)
			//EXAMPLE:
		// 	.then(function(){
		// 		Plane.findAll().then(function(rows){
		// 			for(var i = 0; i < rows.length; i++){
		// 			var columnData = rows[i].dataValues;
		// 			var name = columnData.name;
		// 			var type = columnData.type;
		// 			var speed = columnData.speed;
		// 			};
		// 		});
		// 	})

		// });
	
// //CREATING MODELS (Basically data for tables.)
// 	//EXAMPLE:
	

// 		//The above example becomes: INSERT INTO hat() VALUES();
	Plane.findAll().then(function(rows){
					// for(var i = 0; i < rows.length; i++){
					// var columnData = rows[i].dataValues;
					// var name = columnData.name;
					// var type = columnData.type;
					// var speed = columnData.speed;
					// }

					console.log(rows);
				})


		//This becomes SELECT * FROM hats;









