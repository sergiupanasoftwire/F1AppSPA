import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RaceInfo} from "./interfaces";
import {Simulate} from "react-dom/test-utils";

const localhost = 'http://localhost:8080'

export default function SeasonInfo(props: { season: string }) {

    const navigate = useNavigate();
    const [listItems, setListItems] = useState([]);
    const [round, setRound] = useState('');


    function clickRound(round: string) {
        setRound(round);

        navigate(`${props.season}/rounds/${round}`)
    }


    useEffect(() => {

        function mapRace(race: RaceInfo) {
            return (
                <li onClick={() => clickRound(race.round.toString())}>
                    <h1 style={{color: "red"}}>
                        Round {race.round}
                    </h1>
                    <h2>
                        {race.raceName}
                    </h2>
                    <h3>
                        {race.circuitName}
                    </h3>
                </li>
            );
        }

        axios.get(localhost + `/f1/seasons/${props.season}/rounds`)
            .then((res) => {
                setListItems(res.data.map(
                    (race: RaceInfo) =>
                        mapRace(race)))
            });
    }, [props.season]);


    return (
        <div>
            <ul style={{listStyleType: "none"}}>
                {listItems}
            </ul>
        </div>
    )
}