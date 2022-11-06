import { OperatroProfile } from "./OperatroProfile";

/**
 * OpSettings
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface OpSettings {
    /** OperatroProfile[] */
    OperatroProfile?: Array<OperatroProfile>;
}
