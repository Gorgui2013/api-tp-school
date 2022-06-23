module.exports = (app) => {
	const Ctrl = require('./students.controller');

	app.route('/api/students')
		.get(Ctrl.findAll)
		.post(Ctrl.insertOne);

	app.route('/api/students/:id')
		.get(Ctrl.findOneById)
		.put(Ctrl.updateOne)
		.delete(Ctrl.deleteOne);
}