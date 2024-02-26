import React from 'react'
import data from './data'
import { addToSelectedPerson } from '../feature/personSlice'
import { useDispatch } from 'react-redux'


const Persons = () => {
    const dispatch = useDispatch()
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
        {
            data.map((person) => {
                return(
                    <div key={person.id} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <div>{person.id}</div>
                        <div>{person.name}</div>
                        {/* <button>Get This Person</button> */}
                        <button onClick={() => dispatch(addToSelectedPerson({id: person.id , name: person.name}))}>Get This Person</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Persons