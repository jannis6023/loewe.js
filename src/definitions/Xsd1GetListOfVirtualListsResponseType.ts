import { ResultItemChannelLists } from "./ResultItemChannelLists";

/** xsd1:GetListOfVirtualListsResponseType */
export interface Xsd1GetListOfVirtualListsResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** ResultItemChannelLists */
    ResultItemChannelLists?: ResultItemChannelLists;
    /** string */
    Result?: string;
}
