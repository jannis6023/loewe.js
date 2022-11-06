import { MediaItemDrPlus } from "./MediaItemDrPlus";
import { MediaInformationDrPlus } from "./MediaInformationDrPlus";

/**
 * ResultItemDRPlus
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface ResultItemDrPlus {
    /** MediaItemDRPlus */
    MediaItemDRPlus?: MediaItemDrPlus;
    /** MediaInformationDRPlus */
    MediaInformationDRPlus?: MediaInformationDrPlus;
}
