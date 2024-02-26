import React from 'react'
import { useSelector } from 'react-redux'

const SelectedPersons = () => {
  const data = useSelector((state) => state.personData.personArray)
  return (
    <div>
      {
        data.map((person, index) => {
          return(
            <div key={`result-${index}`}>1
              {person.id}
            </div>
          )
        })
      }
    </div>
  )
}

export default SelectedPersons