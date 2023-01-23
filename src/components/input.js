import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Input = () => {
  return (
    <div
      id="contact"
      className="flex flex-row justify-center p-20  bg-main dark:bg-black w-full max-[900px]:flex-col"
    >
      <div className="header font-main font-bold    w-1/2 max-[900px]:w-full max-[900px]:pl-0 flex justify-start pl-32  flex-col	">
        <h1 className="text-2xl dark:text-white">CONTACT</h1>
        <div className="mt-2">
          <StaticImage
            src="../images/test.jpg"
            alt="random-image"
            imgClassName="h-full"
          ></StaticImage>
        </div>
      </div>
      <div className="input flex w-1/2 pt-8 px-3 max-[900px]:w-full max-[900px]:px-0">
        <form className="w-full">
          <input
            type="text"
            placeholder="Name"
            className="w-3/4 h-12 ml-4 border p-3 max-[900px]:w-full max-[900px]:ml-0 mt-3"
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Email"
            className="w-3/4 h-12 ml-4 border p-3 max-[900px]:w-full max-[900px]:ml-0 mt-3"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            className="w-3/4 h-12 ml-4 border p-3 max-[900px]:w-full max-[900px]:ml-0 mt-3"
          ></input>
          <br></br>
          <textarea
            className="w-3/4 h-44 border p-3 max-[900px]:w-full max-[900px]:ml-0 mt-3 ml-4"
            placeholder="Message"
          ></textarea>
          <br></br>
          <input
            type="submit"
            value="submit"
            className="w-22 h-12 mt-2 ml-4 max-[900px]:ml-0 border p-3 bg-white"
          ></input>
        </form>
      </div>
    </div>
  )
}

export default Input
