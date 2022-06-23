const express = require('express');
var cors = require('cors');

const Files = require('gwalk-lib');

// init express app
const app = express();

// body parsers
app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

// test api
app.get('/', (req, res) => {
	res.send('API Tp EDACY-DIGITAL-AFRICA');
})

// autoloader
var routes = Files.walk(__dirname + '/api/modules');
for(let i = 0; i < routes.length; i++) {
	if(routes[i].indexOf('routes') !== -1){
		// console.log(routes[i]);
		require(routes[i])(app);
	}
}

// starting app in port 8080
app.listen(8080, () => {
	console.log("Server starting");
});