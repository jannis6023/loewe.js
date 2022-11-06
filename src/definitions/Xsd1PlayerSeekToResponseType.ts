import { PlayerStatus } from "./PlayerStatus";

/** xsd1:PlayerSeekToResponseType */
export interface Xsd1PlayerSeekToResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** PlayerStatus */
    PlayerStatus?: PlayerStatus;
}
