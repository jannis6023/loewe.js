import { QueryParameters } from "./QueryParameters";
import { AdditionalParameters } from "./AdditionalParameters";

/** xsd1:GetListOfChannelListsRequestType */
export interface Xsd1GetListOfChannelListsRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** QueryParameters */
    QueryParameters?: QueryParameters;
    /** AdditionalParameters */
    AdditionalParameters?: AdditionalParameters;
}
