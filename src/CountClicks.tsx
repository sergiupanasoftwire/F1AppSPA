import {useEffect, useState} from "react";

export function CountClicks() {
    const [timesClicked, setTimesClicked] =
        useState(Number(localStorage.getItem("timesClicked")) ?? 0);

    function handleButtonClick() {
        setTimesClicked(Number(localStorage.getItem("timesClicked") ?? "0") + 1);
    }

    function saveCounterLocally() {
        localStorage.setItem("timesClicked", String(timesClicked));
    }

    useEffect(saveCounterLocally, [timesClicked]);

    function handleResetClick() {
        setTimesClicked(0);
        saveCounterLocally();
    }

    return (
        <div>
            <h3>You clicked the button {timesClicked} times.</h3>
            <button onClick={handleButtonClick}>Click me!</button>
            <button onClick={handleResetClick}>Click to reset counter</button>
        </div>
    )
}

