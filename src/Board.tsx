import {posToCoord} from "./boardUtils.ts";

interface BoardProps {
    team: boolean,
    onSquareClicked: (row: number, col: number) => void,
    coordsVisible: boolean
}

function Board({team, onSquareClicked, coordsVisible}: BoardProps) {
    const squares = []
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) {
                squares.push(
                    <div className="shadow-inner size-28 bg-stone-200 flex flex-col justify-center" onClick={() => {onSquareClicked(i, j)}}>
                        <p className="text-neutral-800 text-4xl text-center opacity-20 select-none" style={coordsVisible ? {visibility: "visible"} : {visibility: "hidden"}}>
                            {posToCoord(team, i, j)}
                        </p>
                    </div>
                )
            } else {
                squares.push(
                    <div className="shadow-inner size-28 bg-neutral-700 flex flex-col justify-center" onClick={() => {onSquareClicked(i, j)}}>
                        <p className="text-stone-100 text-4xl text-center opacity-20 select-none" style={coordsVisible ? {visibility: "visible"} : {visibility: "hidden"}}>
                            {posToCoord(team, i,j)}
                        </p>
                    </div>
                )
            }

        }
    }

    return (
        <div className="shadow-md w-fit h-fit grid grid-cols-8">
            {squares}
        </div>

    )
}


export default Board;