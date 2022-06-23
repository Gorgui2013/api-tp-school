const studentServices = require('./students.services');

module.exports.findAll = (req, res) => {
	const students = studentServices.findAll();
	res.send(students);
}

module.exports.findOneById = (req, res) => {
	const student = studentServices.findOneById(req.params.id);
	res.send(student);
}

module.exports.insertOne = (req, res) => {
	const student = studentServices.insertOne(req.body);
	res.send(student);
}

module.exports.updateOne = (req, res) => {
	const student = studentServices.updateOne(req.params.id, req.body);
	res.send(student);
}

module.exports.deleteOne = (req, res) => {
	const result = studentServices.deleteOne(req.params.id);
	res.send(true);
}