import { Servicelist } from "./Servicelist";
import { OpSettings } from "./OpSettings";
import { NetworkConfiguration } from "./NetworkConfiguration";

/**
 * Data
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface Data {
    /** servicelist */
    servicelist?: Servicelist;
    /** OpSettings */
    OpSettings?: OpSettings;
    /** NetworkConfiguration */
    NetworkConfiguration?: NetworkConfiguration;
    /** string */
    Settings?: string;
}
