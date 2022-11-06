import { Frequency } from "./Frequency";
import { Symbolrate } from "./Symbolrate";
import { Band } from "./Band";
import { Polarization } from "./Polarization";
import { Modulation } from "./Modulation";

/**
 * HomingChannel
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface HomingChannel {
    /** Frequency */
    Frequency?: Frequency;
    /** Symbolrate */
    Symbolrate?: Symbolrate;
    /** Band */
    Band?: Band;
    /** Polarization */
    Polarization?: Polarization;
    /** Modulation */
    Modulation?: Modulation;
}
