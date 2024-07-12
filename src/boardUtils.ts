export function posToCoord(team: boolean, row: number, col: number): string {

    return String.fromCharCode('a'.charCodeAt(0) + col) + (team ? 8 - row : row + 1)
}

export function randomSquare(): string {
    return posToCoord(true, Math.floor((Math.random() * 8)), Math.floor(Math.random() * 8))
}