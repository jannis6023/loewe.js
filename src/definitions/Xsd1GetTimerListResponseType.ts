import { ResultTimerListFragment } from "./ResultTimerListFragment";

/** xsd1:GetTimerListResponseType */
export interface Xsd1GetTimerListResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** ResultTimerListFragment */
    ResultTimerListFragment?: ResultTimerListFragment;
}
