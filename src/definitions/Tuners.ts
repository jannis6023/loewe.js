import { Tuner } from "./Tuner";
import { DvbsTuner } from "./DvbsTuner";
import { Dvbs2Tuner } from "./Dvbs2Tuner";
import { DvbcTuner } from "./DvbcTuner";
import { Dvbc2Tuner } from "./Dvbc2Tuner";
import { DvbtTuner } from "./DvbtTuner";
import { Dvbt2Tuner } from "./Dvbt2Tuner";
import { DvbipTuner } from "./DvbipTuner";

/**
 * tuners
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface Tuners {
    /** tuner[] */
    tuner?: Array<Tuner>;
    /** dvbs-tuner[] */
    "dvbs-tuner"?: Array<DvbsTuner>;
    /** dvbs2-tuner[] */
    "dvbs2-tuner"?: Array<Dvbs2Tuner>;
    /** dvbc-tuner[] */
    "dvbc-tuner"?: Array<DvbcTuner>;
    /** dvbc2-tuner[] */
    "dvbc2-tuner"?: Array<Dvbc2Tuner>;
    /** dvbt-tuner[] */
    "dvbt-tuner"?: Array<DvbtTuner>;
    /** dvbt2-tuner[] */
    "dvbt2-tuner"?: Array<Dvbt2Tuner>;
    /** dvbip-tuner[] */
    "dvbip-tuner"?: Array<DvbipTuner>;
}
