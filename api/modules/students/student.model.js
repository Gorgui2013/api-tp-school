const Room = require('../rooms/room.model');

module.exports = class Student {
	constructor(id = 0, firstname = '', lastname = '', born = new Date(), room = new Room()) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.born = born;
		this.room = room;
	}
}