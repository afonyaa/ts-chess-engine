import { Position } from "../position";
import { Piece } from "./piece";

export class Queen extends Piece {
    protected canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }

}
