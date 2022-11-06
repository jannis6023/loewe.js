import { MediaEventReference } from "./MediaEventReference";

/** xsd1:GetMediaEventRequestType */
export interface Xsd1GetMediaEventRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** MediaEventReference */
    MediaEventReference?: MediaEventReference;
}
