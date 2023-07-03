import './F1Info.css'
import {InformationDisplayTemplate} from "./InformationDisplayTemplate";

export function F1Info(info: {title: string, firstParagraph: string, secondParagraph: string, logo: string}) {
    return <InformationDisplayTemplate {...info}/>
}
