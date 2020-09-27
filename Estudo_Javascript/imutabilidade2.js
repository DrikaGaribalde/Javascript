const students = [{
        name: 'Drika',
        grade: 6
    },
    {
        name: 'Maria',
        grade: 10
    },
    {
        name: 'Félix',
        grade: 9
    }
]

function getAprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7)
}
console.log('Alunos Aprovados')
console.log(getAprovedStudents(students))
console.log('\nLista de alunos')
console.log(students)
