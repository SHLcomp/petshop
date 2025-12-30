const quiz = [
  {
    question: "Do you usually go for daily walks?",
    keywords: ["dogs", "cats"],
    type: "yesno"
  },
  {
    question: "Do you like to stay at home more than going on daily walks?",
    keywords: ["rabbits", "birds"],
    type: "yesno"
  },
  {
    question: "Do you have a garden or a playground at your place?",
    keywords: ["rabbits", "cats", "dogs"],
    type: "yesno"
  },
  {
    question: "Do you have little kids under the age of 4?",
    keywords: ["cats", "rabbits", "birds"],
    type: "yesno"
  },
  {
    question: "Do you have less than 2-4 hours of free time daily?",
    keywords: ["birds", "rabbits"],
    type: "yesno"
  },
  {
    question: "What is the monthly cost that is suitable for you?",
    ans: ["less than 20","20 - 50", "50 - 80", "80 and above"],
    keywords: [
        ["birds"],
        ["cats", "birds", "rabbits"],
        ["cats", "dogs", "rabbits"]
    ], 
    type: "multiple"
  }
];

export default quiz;
