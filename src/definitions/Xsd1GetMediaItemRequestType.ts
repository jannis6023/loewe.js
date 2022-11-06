import { ResultItemReference } from "./ResultItemReference";

/** xsd1:GetMediaItemRequestType */
export interface Xsd1GetMediaItemRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** MediaItemReference */
    MediaItemReference?: ResultItemReference;
}
