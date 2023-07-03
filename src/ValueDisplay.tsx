import React, {useContext } from "react";
import {ComplexContext} from "./ComplexCountClicks";

export function ValueDisplay() {

    const state = useContext(ComplexContext);

    return (
        <div>
            {state.clicks}
        </div>
    )
}