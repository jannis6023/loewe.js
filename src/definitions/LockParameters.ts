import { LockAll } from "./LockAll";
import { LockAgeRelated } from "./LockAgeRelated";
import { LockSingle } from "./LockSingle";

/**
 * LockParameters
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface LockParameters {
    /** LockAll */
    LockAll?: LockAll;
    /** LockAgeRelated */
    LockAgeRelated?: LockAgeRelated;
    /** LockSingle */
    LockSingle?: LockSingle;
}
