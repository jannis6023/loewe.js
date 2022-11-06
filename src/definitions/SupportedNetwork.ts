import { Frontend } from "./Frontend";
import { Nit } from "./Nit";
import { HomingChannels } from "./HomingChannels";
import { ChannelNumbering } from "./ChannelNumbering";
import { Batsps } from "./Batsps";
import { Options } from "./Options";
import { CellIds } from "./CellIds";

/**
 * SupportedNetwork
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface SupportedNetwork {
    /** Frontend */
    Frontend?: Frontend;
    /** Nit */
    Nit?: Nit;
    /** HomingChannels */
    HomingChannels?: HomingChannels;
    /** ChannelNumbering */
    ChannelNumbering?: ChannelNumbering;
    /** BATSPS */
    BATSPS?: Batsps;
    /** Options */
    Options?: Options;
    /** CellIds */
    CellIds?: CellIds;
}
