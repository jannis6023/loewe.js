import { Rows } from "./Rows";

/** xsd1:CreateIteratorResponseType */
export interface Xsd1CreateIteratorResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** string */
    Result?: string;
    /** string */
    Id?: string;
    /** Rows */
    Rows?: Rows;
}
