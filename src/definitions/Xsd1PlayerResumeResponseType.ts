import { PlayerStatus } from "./PlayerStatus";

/** xsd1:PlayerResumeResponseType */
export interface Xsd1PlayerResumeResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** PlayerStatus */
    PlayerStatus?: PlayerStatus;
}
