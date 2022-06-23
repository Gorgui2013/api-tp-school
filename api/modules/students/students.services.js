const Students = require('./student.repository');
const Student = require('./student.model');
const Room = require('../rooms/room.model');


let students = new Students();
let r1 = new Room(1, "TL2 A");
let s1 = new Student(1, "Fallou", "NDIAYE", new Date("12/12/2021"), r1);
let r2 = new Room(2, "TS2 B");
let s2 = new Student(2, "Modou", "Diop", new Date("13/12/2021"), r2);
let r3 = new Room(3, "TL'1 A");
let s3 = new Student(3, "Gallas", "Fall", new Date("14/12/2021"), r3);
students.addStudent(s1);
students.addStudent(s2);
students.addStudent(s3);

module.exports.findAll = () => {
	return students.listStudents();
}

module.exports.findOneById = (id) => {
	return students.findStudent(id);
}

module.exports.insertOne = (data) => {
	let s = new Student(students.newIdStudent(), data.firstname, data.lastname, data.born, data.room);
	students.addStudent(s);
	return s;
}

module.exports.updateOne = (id, data) => {
	return students.updateStudent(id, data);
}

module.exports.deleteOne = (id) => {
	return students.deleteStudent(id);
}