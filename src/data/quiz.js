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
    question: "Do you have a garden, balcony, or outdoor space?",
    keywords: ["rabbits", "dogs"],
    type: "yesno"
  },
  {
    question: "Do you have little kids under the age of 4?",
    keywords: ["cats", "rabbits", "birds"],
    type: "yesno"
  },
  // {
  //   question: "Do you have previous experience with pets?",
  //   keywords: ["cats", "dogs", "birds"],
  //   type: "yesno"
  // },
  {
    question: "Do you want a low-maintenance pet that requires minimal grooming?",
    keywords: ["birds", "rabbits"],
    type: "yesno"
  },
  {
    question: "Do you or your family members have allergies to pet fur?",
    keywords: ["birds", "rabbits"],
    type: "yesno"
  },
  {
    question: "What is the monthly budget you can spend on your pet?",
    ans: ["less than 20","20 - 50", "50 - 80", "80 and above"],
    keywords: [
        ["birds"],                        // <20 JOD → cheap
        ["cats", "birds", "rabbits"],     // 20-50 JOD
        ["cats", "dogs"],      // 50-80 JOD
        ["dogs"]                           // 80+ JOD → more expensive dogs
    ], 
    type: "multiple"
  },
  {
    question: "How active do you want your pet to be?",
    ans: ["Low activity", "Moderate activity", "High activity"],
    keywords: [
      ["birds", "rabbits"],   // Low activity pets
      ["cats"],               // Moderate activity
      ["dogs", "cats"]                // High activity
    ],
    type: "multiple"
  },
  {
    question: "Do you want a pet that is very social and enjoys interaction?",
    keywords: ["dogs", "birds"],
    type: "yesno"
  },
  {
    question: "Do you prefer a pet that can live mostly indoors?",
    keywords: ["cats", "rabbits", "birds"],
    type: "yesno"
  },
  {
    question: "Are you willing to spend time training your pet?",
    keywords: ["dogs", "cats"],
    type: "yesno"
  }
];

export default quiz;
