import { QueryParameters } from "./QueryParameters";
import { AdditionalParameters } from "./AdditionalParameters";

/** xsd1:GetVolumesRequestType */
export interface Xsd1GetVolumesRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** QueryParameters */
    QueryParameters?: QueryParameters;
    /** AdditionalParameters */
    AdditionalParameters?: AdditionalParameters;
}
