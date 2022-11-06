import { Service } from "./Service";
import { DvbService } from "./DvbService";
import { AnalogService } from "./AnalogService";

/**
 * services
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface Services {
    /** service[] */
    service?: Array<Service>;
    /** dvb-service[] */
    "dvb-service"?: Array<DvbService>;
    /** analog-service[] */
    "analog-service"?: Array<AnalogService>;
}
