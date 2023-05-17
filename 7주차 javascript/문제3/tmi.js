const tmi = [
  {
    question : "나의 애착 인형은?",
    answer : "분홍 강아지 배게",
  },
  {
    question : "녹차 호 vs. 불호?",
    answer: "불호",
  },
  {
    question:"가장 좋아하는 색?",
    answer : "분홍",
  },
  {
    question: "퍼스널컬러?",
    answer : "가을뮤트",
  },
  {
    question : "배우고 싶은 거",
    answer : "코딩",
  }
];

const question = document.getElementById("question")
const answer = document.getElementById("answer")
const todaysTmi = tmi[Math.floor(Math.random()*tmi.length)]

question.innerText = todaysTmi.question
answer.innerText = todaysTmi.answer

