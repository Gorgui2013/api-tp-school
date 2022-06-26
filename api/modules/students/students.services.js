const Students = require('./student.repository');
const Rooms = require('../rooms/rooms.services');
const Student = require('./student.model');


let students = new Students();
// let s1 = new Student(1, "Fallou", "NDIAYE", new Date("12/12/2021"), Rooms.findRoom(1));
// students.addStudent(s1);
// let s2 = new Student(45, "Modou", "Diop", new Date("15/08/2021"), Rooms.findRoom(2));
// students.addStudent(s2);
// let s3 = new Student(3, "Gallas", "Fall", new Date("14/12/2021"), Rooms.findRoom(3));
// students.addStudent(s3);

module.exports.findAll = () => {
	return students.listStudents();
}

module.exports.findOneById = (id) => {
	return students.findStudent(id);
}

module.exports.insertOne = (data) => {
	let room = Rooms.findAll().find((elt) => elt.id == data.room);
	let s = new Student(students.newIdStudent(), data.firstname, data.lastname, data.born, room);
	students.addStudent(s);
	return s;
}

module.exports.updateOne = (id, data) => {
	let room = Rooms.findAll().find((elt) => elt.id == data.room);
	let s = { firstname: data.firstname, lastname: data.lastname, born: data.born, room: room };
	return students.updateStudent(id, s);
}

module.exports.deleteOne = (id) => {
	return students.deleteStudent(id);
}