const roomsServices = require('./rooms.services');

module.exports.findAll = (req, res) => {
	const rooms = roomsServices.findAll();
	res.send(rooms);
}

module.exports.findOneById = (req, res) => {
	const room = roomsServices.findOneById(req.params.id);
	res.send(room);
}

module.exports.insertOne = (req, res) => {
	const room = roomsServices.insertOne(req.body);
	res.send(room);
}

module.exports.updateOne = (req, res) => {
	const room = roomsServices.updateOne(req.params.id, req.body);
	res.send(room);
}

module.exports.deleteOne = (req, res) => {
	const result = roomsServices.deleteOne(req.params.id);
	res.send(true);
}