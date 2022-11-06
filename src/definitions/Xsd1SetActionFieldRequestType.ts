import { Selectors } from "./Selectors";

/** xsd1:SetActionFieldRequestType */
export interface Xsd1SetActionFieldRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** string */
    InputText?: string;
    /** string */
    IsTimeout?: string;
    /** Selectors */
    Selectors?: Selectors;
}
