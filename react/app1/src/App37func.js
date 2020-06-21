import React,{useState,useEffect} from 'react'

export default function App37func() {
const[hasErrors,setErrors]=useState({})
const[planets,setPlanets]=useState({})

useEffect(()=>{

    async function fetch(){
        const res = await fetch("https://swapi.co/api/planets/");
        res
          .json()
          .then(res => setPlanets(res))
          .catch(err => setErrors(err));
    }
    fetch()
})
    return (
            <>
            <h3>function component</h3>
            
             <span>{JSON.stringify(planets)}</span>
             <hr/>
             <span>Has error: {JSON.stringify(hasErrors)}</span>
            
            </>
    )
}
