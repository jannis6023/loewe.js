import { Caption } from "./Caption";

/**
 * MediaInformation
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface MediaInformation {
    /** anyURI */
    ThumbnailURL?: string;
    /** string */
    Playtime?: string;
    /** ShortInfo */
    ShortInfo?: Caption;
    /** ExtendedInfo */
    ExtendedInfo?: Caption;
    /** string */
    Artist?: string;
    /** string */
    Album?: string;
    /** string */
    AlbumUUID?: string;
    /** string */
    TrackNumber?: string;
    /** string */
    Year?: string;
    /** string */
    Genre?: string;
    /** string */
    Attributes?: string;
    /** anyURI */
    StreamingUrl?: string;
}
