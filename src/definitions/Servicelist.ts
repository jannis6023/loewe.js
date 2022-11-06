import { Tuners } from "./Tuners";
import { Services } from "./Services";
import { Favorites } from "./Favorites";

/**
 * servicelist
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface Servicelist {
    /** tuners */
    tuners?: Tuners;
    /** services */
    services?: Services;
    /** favorites */
    favorites?: Favorites;
}
