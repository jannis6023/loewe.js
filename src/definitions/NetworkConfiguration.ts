import { SupportedNetwork } from "./SupportedNetwork";

/**
 * NetworkConfiguration
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface NetworkConfiguration {
    /** SupportedNetwork[] */
    SupportedNetwork?: Array<SupportedNetwork>;
}
