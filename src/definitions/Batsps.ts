import { BouquetId } from "./BouquetId";
import { Country } from "./Country";

/**
 * BATSPS
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface Batsps {
    /** BouquetId */
    BouquetId?: BouquetId;
    /** BouquetName */
    BouquetName?: Country;
    /** BatVersion */
    BatVersion?: Country;
}
