import { Results } from "./Results";

/** xsd1:CloseIteratorResponseType */
export interface Xsd1CloseIteratorResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** Results */
    Results?: Results;
}
