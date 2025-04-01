import React, { useState } from "react"

export const Home = () => {
  const [exercises, setExercises] = useState([])
  const [exerciseToAdd, setExerciseToAdd] = useState("")

  const renderExercises = () => {
    const test = exercises.map((item) => {
      return (
        <div className="flex flex-row space-x-3">

        </div>
      )
    }) 
  }

  const handleAddExercise = () => {
    let tempExerciseArr = [...exercises]
    const newExercise = {
      name: exerciseToAdd
    }
    tempExerciseArr.push(newExercise)
    setExercises(tempExerciseArr)

    console.log(tempExerciseArr)
  }

  return (
  <>
      <div className="flex flex-col space-y-5">
        <h2 className="text-2xl font-weight-bold">WeFit</h2>
        <div className="flex flex-row space-x-2">  
          <input value={exerciseToAdd} onChange={(e) => setExerciseToAdd(e.target.value)} placeholder="Enter exercise" type="text" className="bg-white text-black py-2 px-4 rounded-md border-gray"/>
          <button onClick={handleAddExercise} className="font-weight-bold">ADD</button>
        </div>
      </div>
  </>

  )
}

export default Home
