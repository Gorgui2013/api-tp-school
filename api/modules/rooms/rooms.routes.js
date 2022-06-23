module.exports = (app) => {
	const Ctrl = require('./rooms.controller');

	app.route('/api/rooms')
		.get(Ctrl.findAll)
		.post(Ctrl.insertOne);

	app.route('/api/rooms/:id')
		.get(Ctrl.findOneById)
		.put(Ctrl.updateOne)
		.delete(Ctrl.deleteOne);
}