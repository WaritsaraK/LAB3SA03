import { useState } from 'react'
import Card from './Card'

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/pics/Bird.png', stat: "" },
        { id: 1, img: '/pics/Bird.png', stat: "" },
        { id: 2, img: '/pics/Crab.png', stat: "" },
        { id: 2, img: '/pics/Crab.png', stat: "" },
        { id: 3, img: '/pics/Fish.png', stat: "" },
        { id: 3, img: '/pics/Fish.png', stat: "" },
        { id: 4, img: '/pics/Seafish.png', stat: "" },
        { id: 4, img: '/pics/Seafish.png', stat: "" },
        { id: 5, img: '/pics/Shell.png', stat: "" },
        { id: 5, img: '/pics/Shell.png', stat: "" },
        { id: 6, img: '/pics/Sqiud.png', stat: "" },
        { id: 6, img: '/pics/Sqiud.png', stat: "" },
        { id: 7, img: '/pics/Starfish.png', stat: "" },
        { id: 7, img: '/pics/Starfish.png', stat: "" },
        { id: 8, img: '/pics/Turtle.png', stat: "" },
        { id: 8, img: '/pics/Turtle.png', stat: "" }
    ].sort(()=> Math.random()-0.5))

    const [prev, setPrev] = useState(-1)

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Cards;
