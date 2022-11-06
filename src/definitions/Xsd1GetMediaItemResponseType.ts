import { ResultItem } from "./ResultItem";

/** xsd1:GetMediaItemResponseType */
export interface Xsd1GetMediaItemResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** ResultItem */
    ResultItem?: ResultItem;
}
