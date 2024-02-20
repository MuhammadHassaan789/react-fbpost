import React, { useEffect, useState } from "react";
import FbCard from "./Components/fbpost/FbCard";
import Navbar from "./Components/navbar/Navbar";

function App() {
  const [postData, setPostData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setPostData(res.products))
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex flex-col gap-10 p-4 mt-20 ${darkMode ? 'bg-white' : 'bg-black'}`}>
      <Navbar onDarkModeToggle={handleDarkModeToggle} darkMode={darkMode} />
      {postData.map((item) => (
        <FbCard
          key={item.id}
          title={item.title}
          desc={item.description}
          profilePic={item.thumbnail}
          img={item.images}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}

export default App;
