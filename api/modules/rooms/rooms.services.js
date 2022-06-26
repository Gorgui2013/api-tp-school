const Rooms = require('./room.repository');
const Room = require('./room.model');


module.exports = rooms = new Rooms();
let r1 = new Room(1, "TL2 A");
let r2 = new Room(2, "TS2 B");
let r3 = new Room(3, "TL'1 A");
rooms.addRoom(r1);
rooms.addRoom(r2);
rooms.addRoom(r3);

module.exports.findAll = () => {
	return rooms.listRooms();
}

module.exports.findOneById = (id) => {
	return rooms.findRoom(id);
}

module.exports.insertOne = (data) => {
	let r = new Room(rooms.newIdRoom(), data.name);
	rooms.addRoom(r);
	return r;
}

module.exports.updateOne = (id, data) => {
	return rooms.updateRoom(id, data);
}

module.exports.deleteOne = (id) => {
	return rooms.deleteRoom(id);
}