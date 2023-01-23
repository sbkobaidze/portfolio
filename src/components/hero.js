import React from "react"

const Hero = () => {
  return (
    <div className="hero bg-main dark:bg-black dark:text-white w-full font-main h-96 font-bold border-b ">
      <div
        className="hero-text sm:px-20 px-10 pt-20 pb-10 text-2xl
      "
      >
        <h2>
          {" "}
          Hey, I'm Saba Kobaidze -<br></br> Cool guy with life
        </h2>
      </div>
      <div className="hero-button sm:px-20 px-10 text-white dark:text-textcolor ">
        <button className="w-20 h-12 bg-secondary dark:bg-buttondark ">
          {" "}
          <a href="mailto:sbkobaidze@gmail.com">Email</a>
        </button>
      </div>
    </div>
  )
}

export default Hero
