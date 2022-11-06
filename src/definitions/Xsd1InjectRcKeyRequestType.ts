import { InputEventSequence } from "./InputEventSequence";

/** xsd1:InjectRCKeyRequestType */
export interface Xsd1InjectRcKeyRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** InputEventSequence */
    InputEventSequence?: InputEventSequence;
}
