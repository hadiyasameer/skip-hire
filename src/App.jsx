import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import SkipCart from './components/SkipCart';
import { MdOutlineBrightness2 } from "react-icons/md"
import { BsBrightnessHigh } from "react-icons/bs"

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleConfirm = (skip) => {
    setSelectedSkip(skip);
  };

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then(response => response.json())
      .then(data => {
        setSkips(data);
        setLoading(false);
        console.log(data)
      })
      .catch(err => {
        console.error("Error fetching skips:", err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  return (
    loading ? (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    ) : (
      <div className="p-20 w-full bg-yellow-50 dark:backdrop-blur-md dark:bg-black/70 min-h-screen transition-colors duration-500">
        <button onClick={toggleDarkMode} className="fixed top-4 right-4 px-3 py-1 rounded-full bg-yellow-500 shadow-lg hover:bg-zinc-600 transition text-white text-lg">
          {darkMode ? <BsBrightnessHigh /> : <MdOutlineBrightness2 />}
        </button>

        <h1 className="text-3xl font-bold mb-2 mt-10 text-center bg-gradient-to-r from-yellow-700 to-yellow-400 bg-clip-text text-transparent ">Choose Your Skip Size</h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-10 text-center">Select the skip size that best suits your needs</h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {skips.map(skip => (
            <Cards key={skip.id} skip={skip} onConfirm={handleConfirm} />
          ))}
        </div>
        {selectedSkip && <SkipCart skip={selectedSkip} onClose={() => setSelectedSkip(null)} />}

      </div>
    )

  )
}

export default App