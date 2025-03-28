export class Position {
    constructor(private file: FileLetter, private rank: Rank) { }

    static getDistance(positionFrom: Position, positionTo: Position): Distance {
        const filePositionIndexFrom = FILE_TO_INDEX[positionFrom.file]
        const filePositionIndexTo = FILE_TO_INDEX[positionTo.file]

        const rankFrom = positionFrom.rank
        const rankTo = positionTo.rank

        return {
            rank: Math.abs(rankFrom - rankTo),
            file: Math.abs(filePositionIndexFrom - filePositionIndexTo)
        }
    }

    // Возможно, стоит переписать
    isEqual(position: Position): boolean {
        return this.file === position.file && this.rank === position.rank
    }
}


export type Distance = {
    file: number,
    rank: number
}

type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type FileLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

const FILE_TO_INDEX: Record<FileLetter, Rank> = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
}
