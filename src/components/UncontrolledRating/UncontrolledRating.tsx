import React, {useState} from "react";

type RatingPropsType = {

}

export function UncontrolledRating(props: RatingPropsType) {
    debugger
    const [number, setNumber] = useState(0)
    return (
        <div>
            <Star selected={number > 0}/>
            <button onClick={()=>{setNumber(1)}}>1</button>
            <Star selected={number > 1}/>
            <button onClick={()=>{setNumber(2)}}>2</button>
            <Star selected={number > 2}/>
            <button onClick={()=>{setNumber(3)}}>3</button>
            <Star selected={number > 3}/>
            <button onClick={()=>{setNumber(4)}}>4</button>
            <Star selected={number > 4}/>
            <button onClick={()=>{setNumber(5)}}>5</button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}