import {ButtonComponent} from "./ButtonComponent";
import {MessageAndCounterValueHolder} from "./MessageAndCounterValueHolder";
import {createContext, useState} from "react";
import {ClicksState} from "./interfaces";


let state: ClicksState = {
    clicks: 0,
    setClicks: () => {}
}
export const ComplexContext = createContext<ClicksState>(state);

export function ComplexCountClicks() {

    const [clicks, setClicks] = useState<number>(0);

    state = {
        clicks,
        setClicks
    }

    return (
        <div>
            <ComplexContext.Provider value={state}>
                <ButtonComponent/>
                <MessageAndCounterValueHolder/>
            </ComplexContext.Provider>
        </div>
    )
}