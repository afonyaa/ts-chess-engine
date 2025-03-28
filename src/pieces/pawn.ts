import { Piece } from "./piece";
import { Position } from "../position";

export class Pawn extends Piece {
    protected canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }
}