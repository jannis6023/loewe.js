import { BarkerChannel } from "./BarkerChannel";

/**
 * OperatroProfile
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface OperatroProfile {
    /** string */
    OpId?: string;
    /** BarkerChannel */
    BarkerChannel?: BarkerChannel;
}
