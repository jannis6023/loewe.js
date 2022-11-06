import { ResultItemReference } from "./ResultItemReference";
import { MediaEventReference } from "./MediaEventReference";

/** xsd1:GetNowNextEventResponseType */
export interface Xsd1GetNowNextEventResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** MediaItemReference */
    MediaItemReference?: ResultItemReference;
    /** MediaEventReference */
    MediaEventReference?: MediaEventReference;
}
