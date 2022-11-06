import { PlayerStatus } from "./PlayerStatus";

/** xsd1:PlayerSetSpeedResponseType */
export interface Xsd1PlayerSetSpeedResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** PlayerStatus */
    PlayerStatus?: PlayerStatus;
}
