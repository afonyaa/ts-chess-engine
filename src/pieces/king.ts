import { Piece } from "./piece";
import { Position } from "../position";

export class King extends Piece {
    canMoveTo(positionTo: Position): boolean {
        if (this.position.isEqual(positionTo)) {
            return false
        }

        const distance = Position.getDistance(this.position, positionTo)
        if (distance.file <= 1 && distance.rank <= 1) {
            return true
        }
        return false
    }
}