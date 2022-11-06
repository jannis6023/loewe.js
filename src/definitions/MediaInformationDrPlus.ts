import { Caption } from "./Caption";

/**
 * MediaInformationDRPlus
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface MediaInformationDrPlus {
    /** string */
    Title?: string;
    /** string */
    Subtitle?: string;
    /** string */
    ServiceName?: string;
    /** LongDescription */
    LongDescription?: Caption;
    /** string */
    Duration?: string;
    /** string */
    StartTime?: string;
    /** string */
    EndTime?: string;
    /** anyURI */
    StreamingUrl?: string;
    /** anyURI */
    ImageUrl?: string;
    /** string */
    Attributes?: string;
}
