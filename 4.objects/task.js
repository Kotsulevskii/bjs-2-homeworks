function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  //Ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) {
    this.marks = [mark]; 
  } else {
    this.marks.push(mark); 
  }
}
Student.prototype.addMarks = function (...markArr) {
    if (this.marks === undefined) {
      this.marks = markArr;
    } else {
     this.marks = this.marks.concat(markArr);
    }
}
Student.prototype.getAverage = function () {
  //Ваш код
  return this.marks.reduce((acc, item, idx) => {
    if (idx === this.marks.length - 1) {
      return ((acc + item) / this.marks.length);
    } else {
      return (acc + item);
    }
  })
}
Student.prototype.exclude = function(reason) {
  //Ваш код
  delete this.subject
  delete this.marks
  this.excluded = reason;
}