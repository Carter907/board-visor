import './App.css'
import Board from "./Board.tsx";
import TeamToggle from "./TeamToggle.tsx";
import {useState} from "react";
import {posToCoord, randomSquare} from "./boardUtils.ts";
import CoordinateToggle from "./CoordinateToggle.tsx";

function App() {
    const [team, setTeam] = useState(false)
    const [square, setSquare] = useState(randomSquare())
    const [correct, setCorrect] = useState(false)
    const [coordsVisible, setCoordsVisible] = useState(false)
    function toggleTeam() {
        setTeam(!team)
    }
    function onSquareClicked(row: number, col: number) {

        if (posToCoord(team, row, col) === square) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }
        setSquare(randomSquare())
        //{String.fromCharCode('a'.charCodeAt(0) + j)}{team ? 8 - i : i + 1}
    }
    function toggleCoords() {
        setCoordsVisible(!coordsVisible)
    }
    return (
        <>
            <div className="dark flex w-screen h-screen justify-center items-center gap-4">
                <Board team={team} onSquareClicked={onSquareClicked} coordsVisible={coordsVisible}/>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-row dark:text-white border p-2 rounded">

                        <div className="h-fit self-center">
                            <p className="text-4xl opacity-80 p-4">{square}</p>
                        </div>
                        <div
                            className={correct ? "bg-green-500 opacity-80 rounded-full size-28" : "size-28 bg-red-500 dark:text-white opacity-80 rounded-full"}>
                            <p>{correct ? "" : ""}</p>
                        </div>
                    </div>

                    <TeamToggle team={team} onTeamChange={toggleTeam}/>

                    <CoordinateToggle isToggled={coordsVisible} onCoordToggle={toggleCoords}/>
                </div>
            </div>

        </>
    )
}


export default App
