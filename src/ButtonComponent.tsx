import React, {useContext} from "react";
import {ComplexContext} from "./ComplexCountClicks";

export function ButtonComponent() {

    const state = useContext(ComplexContext)
    const clicks = state.clicks;
    const setClicks = state.setClicks;

    function incrementValue(){
        setClicks(clicks + 1);
    }

    return (
        <div>
            <button onClick={incrementValue}>Complex click</button>
        </div>
    )
}