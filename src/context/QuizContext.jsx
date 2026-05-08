import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("programming");
  const [activeSubCategory, setActiveSubCategory] = useState("html");
  const [activeDifficulty, setActiveDifficulty] = useState("easy");
  const [activeQuestionData, setActiveQuestionData] = useState([]);

  const { data } = useFetch("/data/quiz-question.json");
  const [allSubCategories, setAllSubCategories] = useState([]);

  useEffect(() => {
    if (data && data[activeCategory]) {
      const subCats = Object.keys(data[activeCategory]);
      setAllSubCategories(subCats);

      if (!subCats.includes(activeSubCategory)) {
        setActiveSubCategory(subCats[0]);
      }
    }
  }, [data, activeCategory]);

  useEffect(() => {
    setActiveDifficulty("easy");
  }, [activeSubCategory]);

  const changeCategory = (data) => {
    setActiveCategory(data);
  };

  const changeSubCategory = (data) => {
    setActiveSubCategory(data);
  };

  const changeDifficulty = (data) => {
    setActiveDifficulty(data);
  };

  //Get Current Question Data Array.
  useEffect(() => {
    if (
      data &&
      data[activeCategory] &&
      data[activeCategory][activeSubCategory]
    ) {
      setActiveQuestionData(
        data[activeCategory][activeSubCategory][activeDifficulty] || [],
      );
    }
  }, [data, activeCategory, activeSubCategory, activeDifficulty]);

  const userControlsData = {
    activeCategory,
    allSubCategories,
    activeSubCategory,
    activeDifficulty,
    activeQuestionData,
    changeCategory,
    changeSubCategory,
    changeDifficulty,
  };

  return (
    <QuizContext.Provider value={userControlsData}>
      {children}
    </QuizContext.Provider>
  );
};
