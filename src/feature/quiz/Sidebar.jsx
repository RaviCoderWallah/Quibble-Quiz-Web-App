import useQuiz from "../../hooks/useQuiz";

const Sidebar = () => {
  const { allSubCategories, activeSubCategory, changeSubCategory } = useQuiz();

  return (
    <div className="bg-gray-600/30 col-span-2 flex flex-col gap-4 p-4 overflow-y-auto max-h-[500px]">
      {allSubCategories.map((subCat) => (
        <button
          key={subCat}
          onClick={() => changeSubCategory(subCat)}
          className={`${
            activeSubCategory === subCat ? "bg-yellow-700" : "bg-gray-600/50"
          } text-white font-semibold uppercase py-1 text-lg rounded-sm cursor-pointer hover:scale-105 transition-all ease-in-out duration-300`}
        >
          {subCat.replace("_", " ")}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
