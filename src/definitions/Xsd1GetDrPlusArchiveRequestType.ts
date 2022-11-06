import { QueryParameters } from "./QueryParameters";

/** xsd1:GetDRPlusArchiveRequestType */
export interface Xsd1GetDrPlusArchiveRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** QueryParameters */
    QueryParameters?: QueryParameters;
    /** string */
    VolumeId?: string;
}
