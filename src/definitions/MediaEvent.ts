import { MediaInformation } from "./MediaInformation";
import { Availability } from "./Availability";

/**
 * MediaEvent
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface MediaEvent {
    /** string */
    uuid?: string;
    /** MediaInformation */
    MediaInformation?: MediaInformation;
    /** Availability */
    Availability?: Availability;
}
