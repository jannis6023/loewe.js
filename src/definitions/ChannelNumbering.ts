import { TargetRegion } from "./TargetRegion";
import { Country } from "./Country";
import { PrimaryRegion } from "./PrimaryRegion";
import { SecondaryRegion } from "./SecondaryRegion";
import { TertiaryRegion } from "./TertiaryRegion";

/**
 * ChannelNumbering
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface ChannelNumbering {
    /** TargetRegion */
    TargetRegion?: TargetRegion;
    /** Country */
    Country?: Country;
    /** PrimaryRegion */
    PrimaryRegion?: PrimaryRegion;
    /** SecondaryRegion */
    SecondaryRegion?: SecondaryRegion;
    /** TertiaryRegion */
    TertiaryRegion?: TertiaryRegion;
}
