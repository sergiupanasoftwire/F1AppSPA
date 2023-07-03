import {ValueDisplay} from "./ValueDisplay";
import React from "react";

export function MessageAndCounterValueHolder() {
    return (
        <div>
            <h3>The counter value is: </h3>
            <ValueDisplay/>
        </div>
    )
}