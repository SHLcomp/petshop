import { createContext } from "react";
import quizData from "../data/quiz";

export const myCon = createContext(null);

const Provider = ({ children }) => {
  const search = () => {
    const searchBox = document.getElementById("search-pet").value.toUpperCase(); // search element
    const storeItems = document.getElementById("pet-list"); // all the available pets
    const product = document.querySelectorAll(".pet"); // pet object
    const pName = storeItems.getElementsByTagName("h3"); // pet name

    for (var i = 0; i < pName.length; i++) {
      let match = product[i].getElementsByTagName("h3")[0];

      if (match) {
        let textvalue = match.textContent || match.innerHTML;
        if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
          product[i].style.display = ""; //if the value the user enters matches the pet's value (display) the pet
        } else {
          product[i].style.display = "none"; //if the value the user enters does not match the pet's value (hide/ do not display) the pet
        }
      }
    }
  };

  // quiz logic
  function quiz(answers) {
    let collectedPets = [];

    for (let i = 0; i < quizData.length; i++) {
      const q = quizData[i];
      if (q.type === "yesno") {
        if (answers[i]) collectedPets.push(...q.keywords);
      } else if (q.type === "multiple") {
        const choiceIndex = answers[i];
        if (
          choiceIndex !== null &&
          choiceIndex >= 0 &&
          choiceIndex < q.keywords.length
        ) {
          const pets = q.keywords[choiceIndex];
          if (Array.isArray(pets)) {
            collectedPets.push(...pets); // spread nested array
          } else {
            collectedPets.push(pets);
          }
        }
      }
    }

    // Count frequency and pick the most common pet
    const count = {};
    let chosenPet = "";
    let max = 0;

    for (let pet of collectedPets) {
      count[pet] = (count[pet] || 0) + 1;
      if (count[pet] > max) {
        max = count[pet];
        chosenPet = pet;
      }
    }

    return chosenPet;
  }

  const myValues = {
    search,
    quiz,
  };

  return <myCon.Provider value={myValues}>{children}</myCon.Provider>;
};

export default Provider;
