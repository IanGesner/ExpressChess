import { Piece, Type } from "../POTSOs/Piece";
import { MoveValidator } from "./MoveValidator";
import { TYPED_NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { PawnMoveValidator } from "./PawnMoveValidator";
import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";
import { WhitePawnMoveValidator } from "./WhitePawnMoveValidator";

export class MoveValidatorFactory {
    static create(source: Tile, dest: Tile, ownedColor: Color, board: Tile[][]): MoveValidator {
        switch (source.piece.type) {
            case Type.PAWN: {
                if (ownedColor === Color.WHITE)
                    return new WhitePawnMoveValidator(source, dest, ownedColor, board);
                
            }

        }
    }
}