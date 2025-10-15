// =========================================
/*
    Question : 

*/
// =========================================

const students = [
  { name: 'Alice', marks: 85 },
  { name: 'Bob', marks: 92 },
  { name: 'Charlie', marks: 88 },
  { name: 'David', marks: 76 },
  { name: 'Eve', marks: 95 },
  { name: 'Frank', marks: 67 },
  { name: 'Grace', marks: 81 },
  { name: 'Hannah', marks: 90 },
  { name: 'Ian', marks: 78 },
  { name: 'Jack', marks: 84 },
  { name: 'Karen', marks: 99 },
  { name: 'Leo', marks: 91 },
  { name: 'Mia', marks: 87 },
  { name: 'Nina', marks: 93 },
  { name: 'Oscar', marks: 89 },
  { name: 'Pam', marks: 82 },
  { name: 'Quinn', marks: 94 },
  { name: 'Ryan', marks: 79 },
  { name: 'Sophia', marks: 96 },
  { name: 'Tom', marks: 88 },
];

function topStudent(students) {
  const topStudent = students.reduce((acc, curr) =>
    acc.marks > curr.marsk ? acc : curr
  );
  return topStudent.name;
}

console.log(topStudent(students));

function topStudent(students) {
    const topStudent = students.reduce((acc, curr) => acc.marks > curr.marks ? acc : curr);
    return topStudent.name;
}

console.log(topStudent(students));
