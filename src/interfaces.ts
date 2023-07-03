import {Dispatch, SetStateAction} from "react";

export interface InformationTemplate {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    logo: string;
}

export interface ClicksState {
    clicks: number;
    setClicks: Dispatch<SetStateAction<number>>;
}
