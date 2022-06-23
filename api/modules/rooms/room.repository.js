module.exports = class Rooms {
	constructor() {
		this.rooms = [];
	}

	addRoom(room) {
		this.rooms.push(room);
	}

	findRoom(id) {
		return this.rooms.find((elt) => elt.id == id);
	}

	updateRoom(id, data) {
		const index = this.rooms.findIndex((elt) => elt.id == id);
		this.rooms[index] = {...this.rooms[index], ...data};
		return this.rooms[index];
	}

	deleteRoom(id) {
		const index = this.rooms.findIndex((elt) => elt.id == id);
		this.rooms.splice(index, 1);

		return true;
	}

	listRooms() {
		return this.rooms;
	}

	lastRoom() {
		return this.rooms[this.rooms.length-1];
	}

	newIdRoom() {
		if(this.rooms.length == 0) {
			return 1;
		} else {
			let last = this.lastRoom();
			return last.id + 1;
		}
	}
}