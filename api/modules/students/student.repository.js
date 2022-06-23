module.exports = class Students {
	constructor() {
		this.students = [];
	}

	addStudent(student) {
		this.students.push(student);
	}

	findStudent(id) {
		return this.students.find((elt) => elt.id == id);
	}

	updateStudent(id, data) {
		const index = this.students.findIndex((elt) => elt.id == id);
		this.students[index] = {...this.students[index], ...data};
		return this.students[index];
	}

	deleteStudent(id) {
		const index = this.students.findIndex((elt) => elt.id == id);
		this.students.splice(index, 1);

		return true;
	}

	listStudents() {
		return this.students;
	}

	lastStudent() {
		return this.students[this.students.length-1];
	}

	newIdStudent() {
		if(this.students.length == 0) {
			return 1;
		} else {
			let last = this.lastStudent();
			return last.id + 1;
		}
	}
}