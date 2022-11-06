import { PlayerStatus } from "./PlayerStatus";

/** xsd1:PlayerPauseResponseType */
export interface Xsd1PlayerPauseResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** PlayerStatus */
    PlayerStatus?: PlayerStatus;
}
