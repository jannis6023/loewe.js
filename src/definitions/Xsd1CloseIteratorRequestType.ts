import { Ids } from "./Ids";

/** xsd1:CloseIteratorRequestType */
export interface Xsd1CloseIteratorRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** Ids */
    Ids?: Ids;
}
