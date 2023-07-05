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

export interface RaceDetails {
    info: RaceInfo;
    standings: Result[];
    circuitImage: string;
}

export interface Result {
    position: string;
    points: string;
    startingPosition: string;
    driver: Driver;
}

export interface Driver {
    firstName: string;
    lastName: string;
    code: string;
    number: string;
    nationality: string;
    constructor: string;
}
