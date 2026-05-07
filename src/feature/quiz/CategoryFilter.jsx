import useQuiz from "../../hooks/useQuiz";

const CategoryFilter = () => {
  const { activeCategory, changeCategory } = useQuiz();

  return (
    <div className="bg-[#2a2a2a] rounded-sm outline-1 outline-gray-600 p-2">
      <div className="flex items-center gap-2">
        <p className="font-semibold text-white">Categories: </p>
        <select 
          name="category" 
          id="category" 
          className="bg-[#474646] p-1 rounded-sm text-white"
          value={activeCategory}
          onChange={(e) => changeCategory(e.target.value)}
        >
          <option value="programming">Programming</option>
          <option value="computer_fundamentals">Computer Fundamentals</option>
          <option value="GK">General Knowledge</option>
          <option value="sports_category">Sports</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
