import { Caption } from "./Caption";

/**
 * MediaItem
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface MediaItem {
    /** string */
    uuid?: string;
    /** string */
    AncestorUuid?: string;
    /** anyURI */
    Locator?: string;
    /** Caption */
    Caption?: Caption;
    /** ShortCaption */
    ShortCaption?: Caption;
    /** anyURI */
    ThumbnailURL?: string;
}
