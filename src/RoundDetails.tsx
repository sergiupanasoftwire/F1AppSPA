import {useParams} from "react-router-dom";
import {RaceDetails, RaceInfo} from "./interfaces";
import axios, {AxiosResponse} from "axios";
import {useCallback, useEffect, useMemo, useState} from "react";
import {DotLoader, SyncLoader} from "react-spinners";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {ExpandMoreOutlined} from "@mui/icons-material";

const localhost = 'http://localhost:8080'

export default function RoundDetails() {

    const params = useParams();
    const [data, setData] = useState<RaceDetails | null>(null);
    // const raceInfo: RaceInfo =
    const reqUrl = useMemo(() => {
        return localhost + `/f1/seasons/${params.season}/rounds/${params.roundId}`;
    }, [params.season, params.roundId]);

    useEffect(() => {
        axios.get(reqUrl)
            .then((res: any) => {
                setData(res.data);
            }).catch((err) => console.log(err));
    }, [reqUrl]);

    return (
        <>
            {
                !data ? <SyncLoader color="#ff0000"/> :
                    (
                        <div>
                            <h1>
                                Season {params.season}, Round {params.roundId}
                            </h1>
                            <h2>
                                <span style={{color: "red"}}> Race:  </span> {data.info.raceName}
                            </h2>
                            <h2>
                                <span style={{color: "red"}}> Circuit:  </span> {data.info.circuitName}
                            </h2>
                            <img src={data.circuitImage} alt={`${data.info.circuitName}`}/>

                            {data.standings.map((result) =>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreOutlined/>}
                                        aria-controls={`panel1a-content-${result.driver.firstName}`}
                                        id={`panel1a-header-${result.driver.firstName}`}
                                        style={{textAlign: "left"}}
                                    >

                                        <span style={{fontWeight: 600}}>Position: {result.position}
                                        <br/>
                                            {result.driver.firstName} {result.driver.lastName}
                                            </span>
                                    </AccordionSummary>
                                    <AccordionDetails style={{textAlign: "left"}}>
                                        Nationality: {result.driver.nationality}<br/>
                                        Number: {result.driver.number}<br/>
                                        Constructor: {result.driver.constructor}<br/>
                                        Starting Position: {result.startingPosition}<br/>
                                        Points gained: {result.points}<br/>
                                    </AccordionDetails>
                                </Accordion>
                                )}
                        </div>
                )
            }
        </>
    )

}