import { Selections } from "./Selections";
import { Fields } from "./Fields";
import { Orders } from "./Orders";
import { QueryParameters } from "./QueryParameters";
import { SeekToContentParameters } from "./SeekToContentParameters";

/** xsd1:CreateIteratorRequestType */
export interface Xsd1CreateIteratorRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** string */
    TableName?: string;
    /** string */
    Type?: string;
    /** Selections */
    Selections?: Selections;
    /** Fields */
    Fields?: Fields;
    /** Orders */
    Orders?: Orders;
    /** string */
    NotifyUpdate?: string;
    /** QueryParameters */
    QueryParameters?: QueryParameters;
    /** SeekToContentParameters */
    SeekToContentParameters?: SeekToContentParameters;
}
