import { Range } from "./Range";

/**
 * QueryParameters
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface QueryParameters {
    /** Range */
    Range?: Range;
    /** string */
    MediaItemInformation?: string;
    /** string */
    MediaItemClass?: string;
}
