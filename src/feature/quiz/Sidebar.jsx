const Sidebar = () => {
  return (
    <div className="bg-gray-600/30 col-span-2 flex flex-col gap-4 p-4">
      <button className="bg-yellow-700 text-white font-semibold py-1 text-lg rounded-sm cursor-pointer hover:scale-105 transition-all ease-in-out duration-500">HTML</button>
      <button className="bg-gray-600/50 py-1 text-lg rounded-sm  cursor-pointer hover:scale-110 transition-all ease-in-out duration-200">CSS</button>
      <button className="bg-gray-600/50 py-1 text-lg rounded-sm  cursor-pointer hover:scale-110 transition-all ease-in-out duration-200">JavaScript</button>
      <button className="bg-gray-600/50 py-1 text-lg rounded-sm  cursor-pointer hover:scale-110 transition-all ease-in-out duration-200">React</button>
      <button className="bg-gray-600/50 py-1 text-lg rounded-sm  cursor-pointer hover:scale-110 transition-all ease-in-out duration-200">Fronted</button>
    </div>
  )
}

export default Sidebar