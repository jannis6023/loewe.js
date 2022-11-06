
/** xsd1:RequestAccessResponseType */
export interface Xsd1RequestAccessResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** AccessStatusType|string|Pending,Denied,Accepted */
    AccessStatus?: "Pending" | "Denied" | "Accepted" | "Full";
}
