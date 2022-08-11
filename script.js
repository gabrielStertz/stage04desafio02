const students = [
  {
    name: 'Gabriel',
    scoreOne: 8.7,
    scoreTwo: 9.5
  },
  {
    name: 'Maria',
    scoreOne: 8,
    scoreTwo: 7.5
  },
  {
    name: 'Pedro',
    scoreOne: 5.7,
    scoreTwo: 6.5
  },
  {
    name: 'Luísa',
    scoreOne: 9.7,
    scoreTwo: 9.5
  },
  {
    name: 'João',
    scoreOne: 6.5,
    scoreTwo: 9.5
  }
]
function calcAverage(scoreOne, scoreTwo){
  let average = (scoreOne + scoreTwo) / 2
  return average
}
for(let student of students){
  let average = calcAverage(student.scoreOne, student.scoreTwo)
  let willRepeat = average < 7
  if(willRepeat){
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez ${student.name}! Tente novamente!`)
  } else{
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso`)

  }
}