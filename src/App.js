// import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useEffect, useLayoutEffect, useReducer, useState } from 'react';
import './App.css';

// import { useQuery, gql } from '@apollo/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Service from './Service';


// const query = gql`
// query GetUser {
//   user(id:"5") {
//     id
//     name
//   }
//   users {
//       name
//       id
//       username
//   }
// }`

let initialState = { count: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default: return state
  }
}

function App() {

  

  let [theme, setTheme] = useState("light")

  let element = document.documentElement;


  const [state, dispatch] = useReducer(reducer, initialState)
  // const { data, loading } = useQuery(query)

  useEffect(() => {
    let thememode = localStorage.getItem("theme")
    if (thememode === "dark") {
      element.classList.add("dark")
    }
    else if (thememode === "light") {
      element.classList.remove("dark")
      element.classList.add("light")
    }
    else {
      element.classList.add("light")
    }

  }, [theme])




  function setThemeMode(mode) {
    localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  return (
    <>
     

      {/* <div className="bg-white p-3 dark:bg-black datk-text-red-100 dark:text-white duration-500  sm:text-6xl md:text-xl sm:text-red-500">
        <button className='bg-blue-500 text-white font-medium rounded px-4 py-1.5 me-2' onClick={() => setThemeMode("dark")}>Dark</button>
        <button className='bg-red-500 text-1xl text-white font-medium px-4 py-1.5 rounded' onClick={() => setThemeMode("light")}>light</button> <br />
        dispatch' is assigned a value but never used
      </div> */}
  <Navbar />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>

    </>
  );
}

export default App;
