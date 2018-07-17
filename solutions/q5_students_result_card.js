// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let students = [
    {
        name: 'student1',
        marks: {
            grammer: 75,
            accounts: 85
        }
    },
    {
        name: 'student2',
        marks: {
            grammer: 65,
            accounts: 75
        }
    },
    {
        name: 'student3',
        marks: {
            grammer: 85,
            physics: 95
        }
    },
    {
        name: 'student4',
        marks: {
            grammer: 91,
            physics: 94
        }
    }
];

students.forEach(function (student) {
    console.log(student);
    if (student.marks !== null) {
        let total = student.marks.grammer;
        total += student.marks.accounts ? student.marks.accounts : 0;
        total += student.marks.physics ? student.marks.physics : 0;
        // Student has only 2 subjects so average calculated by 2.
        let avg = total / 2;
        // add percentage value to student object
        student['percentage'] = avg;
    }
})
console.log(students);
