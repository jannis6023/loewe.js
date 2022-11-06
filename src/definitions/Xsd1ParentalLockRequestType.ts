import { LockParameters } from "./LockParameters";
import { LocatorSequence } from "./LocatorSequence";

/** xsd1:ParentalLockRequestType */
export interface Xsd1ParentalLockRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** LockParameters */
    LockParameters?: LockParameters;
    /** LocatorSequence */
    LocatorSequence?: LocatorSequence;
}
