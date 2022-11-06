import { ResultItemFragment } from "./ResultItemFragment";

/** xsd1:GetChannelListResponseType */
export interface Xsd1GetChannelListResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** string */
    ChannelListView?: string;
    /** string */
    ChannelListName?: string;
    /** string */
    AncestorUuid?: string;
    /** string */
    ItemClass?: string;
    /** ResultItemFragment */
    ResultItemFragment?: ResultItemFragment;
}
