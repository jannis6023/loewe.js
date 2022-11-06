import { QueryParameters } from "./QueryParameters";

/** xsd1:GetChannelListRequestType */
export interface Xsd1GetChannelListRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** string */
    ChannelListView?: string;
    /** QueryParameters */
    QueryParameters?: QueryParameters;
}
