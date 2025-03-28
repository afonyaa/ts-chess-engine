import { Position } from "../position";

type Color = 'black' | 'white'

export abstract class Piece {
    protected position: Position
    constructor(private color: Color, position: Position) {
        this.position = position
    }

    moveTo(position: Position) {
        if (this.canMoveTo(position)) {
            this.position = position
        }
    }

    protected abstract canMoveTo(position: Position): boolean
}