import { Piece } from "./piece";
import { Position } from "../position";

export class Knight extends Piece {
    protected canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }
}
