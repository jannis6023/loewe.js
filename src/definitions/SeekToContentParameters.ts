import { Selections } from "./Selections";

/**
 * SeekToContentParameters
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface SeekToContentParameters {
    /** Selections */
    Selections?: Selections;
    /** string */
    Which?: string;
    /** string */
    Offset?: string;
    /** string */
    WindowSize?: string;
}
