import { PlayerStatus } from "./PlayerStatus";

/** xsd1:PlayerStopResponseType */
export interface Xsd1PlayerStopResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** PlayerStatus */
    PlayerStatus?: PlayerStatus;
}
