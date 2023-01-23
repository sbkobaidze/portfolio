import * as React from "react"
import { Link } from "gatsby"
import { useState, useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
const Header = () => {
  const [theme, changeTheme] = useState("dark")
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const lightOrDark = () => {
    changeTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="header bg-main dark:bg-black dark:text-white flex justify-between border-b h-14 font-main font-bold items-center px-2">
      <div className="logo text-3xl w-3/6">
        <h1>SK</h1>
      </div>
      <div className="border-l   h-full  flex items-center justify-center w-3/6 sm:w-2/6">
        <a href="#contact" className="text-m sm:text-l ">
          Contact
        </a>
      </div>
      <div className="border-l  h-full  flex items-center justify-center w-3/6 sm:w-2/6">
        <a href="#projects" className="text-m sm:text-l ">
          Projects
        </a>
      </div>
      <div
        onClick={() => lightOrDark()}
        className="border-l  h-full  flex items-center justify-center w-2/6 sm:w-1/6 cursor-pointer px-1"
      >
        {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
        <h3>Mode</h3>
      </div>
    </div>
  )
}

export default Header
