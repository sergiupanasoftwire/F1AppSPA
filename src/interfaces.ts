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

export interface RaceInfo {
    round: string;
    raceName: string;
    circuitName: string;
    circuitId: string;
}
