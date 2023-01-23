import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="flex items-center border-t bg-main flex-col  font-main justify-center h-24 dark:bg-black dark:text-white text-textcolor">
      <div className="lastmodified font-bold">
        <p>
          Last Modified:<br></br>
          12/01/2023
        </p>
      </div>
      <div className="contacts flex flex-row">
        <a href="https://github.com/sbkobaidze">
          <FaGithub size="25" />
        </a>
        <a href="https://www.linkedin.com/in/saba-kobaidze3/">
          <FaLinkedin size="25" />
        </a>
      </div>
    </div>
  )
}

export default Footer
