import './F1Info.css'
import {InformationDisplayTemplate} from "./InformationDisplayTemplate";
import {useState} from "react";
import Select from 'react-dropdown-select'
import SeasonInfo from "./SeasonInfo";

export function F1Info(info: { title: string, firstParagraph: string, secondParagraph: string, logo: string }) {

    const options = [];
    const [selectedOption, setSelectedOption] = useState('');

    for (let i: number = 1980; i <= 2023; i++) {
        options.push({
            value: String(i),
            label: i
        });
    }


    return (
        <div>
            <InformationDisplayTemplate {...info}/>
            <Select
                options={options}
                values={[options[options.length - 1]]}
                onChange={(value) => setSelectedOption(value[0].value)}
                style={{color: 'red', backgroundColor: '#282c34'}}
                color='#282c34'
            />
            <div>
                {selectedOption !== '' && <SeasonInfo season={selectedOption}/>}
            </div>
        </div>
    )
}
