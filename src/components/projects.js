import React from "react"

const Projects = () => {
  return (
    <div id="projects">
      <div className="header font-main text-center dark:bg-black bg-main text-3xl font-bold py-5 ">
        <h2 className="dark:text-white">Projects</h2>
      </div>
      <div className="row flex flex-wrap">
        <div className="row-1 w-full border-b sm:border  sm:w-1/4 md:w-1/2 lg:w-1/4 xl:w-1/4 dark:border-white">
          <div className=" h-60 bg-secondary flex flex-col "></div>
          <div className="flex justify-center items-center font-bold text-xl bg-main dark:bg-black dark:text-white h-10">
            <h3>Text</h3>
          </div>
        </div>
        <div className="row-2 w-full  sm:w-1/4 sm:border-t border-r border-b  md:w-2/4 lg:w-1/4 xl:w-1/4 dark:border-white">
          <div className=" h-60 bg-secondary flex flex-col "></div>
          <div className="flex justify-center items-center font-bold text-xl bg-main dark:bg-black dark:text-white h-10">
            <h3>Text</h3>
          </div>
        </div>
        <div className="row-3  w-full  sm:w-1/4 border-t border-b border-r  md:w-2/4 lg:w-1/4 xl:w-1/4 dark:border-white">
          <div className=" h-60 bg-secondary flex flex-col"></div>
          <div className="flex justify-center items-center font-bold text-xl bg-main dark:bg-black dark:text-white h-10">
            <h3>Text</h3>
          </div>
        </div>
        <div className="row-1  w-full  sm:w-1/4 border-t border-b border-r  md:w-2/4 lg:w-1/4 xl:w-1/4 dark:border-white">
          <div className=" h-60 bg-secondary flex flex-col"></div>
          <div className="flex justify-center items-center font-bold text-xl bg-main dark:bg-black dark:text-white text-text-color h-10">
            <h3>Text</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
