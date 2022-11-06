import { MultiroomClientIds } from "./MultiroomClientIds";

/** xsd1:PlayMultiroomRequestType */
export interface Xsd1PlayMultiroomRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** string */
    Locator?: string;
    /** string */
    AncestorUuid?: string;
    /** MultiroomClientIds */
    MultiroomClientIds?: MultiroomClientIds;
}
