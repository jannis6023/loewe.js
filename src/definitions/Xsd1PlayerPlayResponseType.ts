import { PlayerStatus } from "./PlayerStatus";

/** xsd1:PlayerPlayResponseType */
export interface Xsd1PlayerPlayResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** PlayerStatus */
    PlayerStatus?: PlayerStatus;
}
