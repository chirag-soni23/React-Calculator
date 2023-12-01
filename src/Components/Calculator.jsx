import React, { useState } from "react";

function Calculator() {
    const [result,setResult] = useState('')
    const clickhandler = (e)=>{
        setResult(result.concat(e.target.value))

    }
    const clearScreen =()=>{
        return(
            setResult('')
        )
    }
    const caluclate = ()=>{
        setResult(eval(result).toString())
    }
  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
      <div className="main w-64 h-auto bg-green-900 rounded-2xl">
        <div className="screen p-2">
          <input
            className="pt-10 text-black w-full shadow-lg outline-none bg-gray-200 text-right px-2"
            type="text"
            readOnly value={result}
            placeholder="0"
          ></input>
        </div>
        <div className="brand">
          <h1 className="text-center bg-slate-500 mb-2 rounded-b-3xl">
            Calculator
          </h1>
        </div>
        <div className="keyboard flex justify-between m-2 ">
          <input onClick={clearScreen}
            className=" cursor-pointer bg-red-400 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="C"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="<"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="%"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-pink-300 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="/"
          ></input>
        </div>
        <div className="keyboard flex justify-between m-2 ">
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="7"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="8"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="9"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-green-300 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="*"
          ></input>
        </div>
        <div className="keyboard flex justify-between m-2 ">
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="4"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="5"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="6"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-violet-500 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="-"
          ></input>
        </div>
        <div className="keyboard flex justify-between m-2 ">
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="1"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="2"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="3"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-pink-500 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="+"
          ></input>
        </div>
        <div className="keyboard flex justify-between m-2 ">
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="0"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="00"
          ></input>
          <input onClick={clickhandler}
            className=" cursor-pointer bg-gray-200 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="." 
          ></input>
          <input onClick={caluclate}
            className=" cursor-pointer bg-orange-400 w-9 h-9 rounded-lg text-center font-medium text-black"
            type="button"
            value="="
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
