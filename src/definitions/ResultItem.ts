import { MediaItem } from "./MediaItem";
import { MediaInformation } from "./MediaInformation";

/**
 * ResultItem
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface ResultItem {
    /** MediaItem */
    MediaItem?: MediaItem;
    /** MediaInformation */
    MediaInformation?: MediaInformation;
}
