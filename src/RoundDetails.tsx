import {useParams} from "react-router-dom";
import {RaceInfo} from "./interfaces";
import axios from "axios";
import {useCallback, useEffect, useMemo, useState} from "react";

const localhost = 'http://localhost:8080'

export default function RoundDetails() {

    const params = useParams();
    const [data, setData] = useState();
    // const raceInfo: RaceInfo =
    const reqUrl = useMemo(() => {
        return localhost + `/f1/seasons/${params.season}/rounds/${params.roundId}`;
    }, [params.season, params.roundId]);

    const mapResponse = useCallback(
        (data: any) => {

            return (
                <div>
                    <h1>
                        Season {params.season} Round {params.roundId}
                    </h1>
                    <h2>
                        Circuit name: {data?.circuitName}
                    </h2>
                    <h2>
                        Race name: {data?.raceName}
                    </h2>
                </div>
            )
    }, [params.season, params.roundId]);

    useEffect(() => {
        console.log(reqUrl);
        axios.get(reqUrl)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            });
    }, [reqUrl]);

    return (
        <div>
            <div>
                <h1>
                    Season {params.season} Round {params.roundId}
                </h1>
                <h2>
                    Circuit name: {data?.MRData.RaceTable.Races[0]}
                </h2>
                <h2>
                    Race name:
                </h2>
            </div>
        </div>
    )

}