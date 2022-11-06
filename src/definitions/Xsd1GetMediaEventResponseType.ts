import { MediaEvent } from "./MediaEvent";

/** xsd1:GetMediaEventResponseType */
export interface Xsd1GetMediaEventResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** MediaEvent */
    MediaEvent?: MediaEvent;
}
