var studentScore;
var grade;

switch(studentScore){
  case studentScore >=90 :
    grade = "A"
    break
  case 90>studentScore >=70:
    grade="B"
    break
  case 70>studentScore>=60:
    grade="C"
    break
  case 60>studentScore>=50:
    grade="D"
    break
  case 50>studentScore:
    grade="F"
    break
  default:
    console.log("Unvalid Input")
}
console.log("당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.")

