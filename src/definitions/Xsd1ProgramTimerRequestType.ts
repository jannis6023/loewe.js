import { Timer } from "./Timer";

/** xsd1:ProgramTimerRequestType */
export interface Xsd1ProgramTimerRequestType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** DeviceType|string|PVR */
    Device?: string;
    /** RecordingType|string|default */
    RecordingType?: string;
    /** string */
    Locator?: string;
    /** Timer */
    Timer?: Timer;
}
