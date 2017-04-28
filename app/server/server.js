const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./utils/config');
const passportStrategy = require('./utils/passport-strategy');

const userRoute = require('./routes/user');

mongoose.Promise = global.Promise;
mongoose.connect(config.database);
passport.use(passportStrategy);

const app = express()
.use(bodyParser.json())
.use(bodyParser.urlencoded({
	extended: true
}))
.use(passport.initialize())
.use(passport.session())
.use('/', express.static(
	path.join(__dirname, '../client/build')
))
.use('/user', userRoute)
.use('/vote', voteRoute);

if(!config.ssl) app.listen(config.port, () => console.log(`Running on port ${config.port}`));
else {

	const https = require('https');
	const fs = require('fs');

	const options = {
		key: fs.readFileSync(config.key),
		cert: fs.readFileSync(config.cert)
	};

	https.createServer(options, app).listen(config.port, () => console.log(`Running on port ${config.port}`));

}
