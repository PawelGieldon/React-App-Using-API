import React, { useState, useEffect } from 'react';

export default function Dog() {
    const [dog, setDog] = React.useState({       
        randomImage: "https://images.dog.ceo//breeds//hound-afghan//n02088094_1841.jpg" 
    })
    const [allDogs, setAllDogs] = useState([])
    

    function getDogImage() {
        const randomNumber = Math.floor(Math.random() * allDogs.length)
        const link = allDogs[randomNumber]
        setDog(prevDog => ({
            ...prevDog,
            randomImage : link
        }))
        
    }

    useEffect(() => {
        fetch("https://dog.ceo/api/breed/hound/images")
            .then(res => res.json())
            .then(data => setAllDogs(data.message))
    }, [])
    
    return (
        <main>
            
            <div className="dog">
                <img src={dog.randomImage} className="dog-image" />
                
            </div>

            <div className="form">
                
                <button 
                    className="button-form"
                    onClick={getDogImage} > Get a new Dog image </button>
                
                
            </div>
        </main>
    )
}