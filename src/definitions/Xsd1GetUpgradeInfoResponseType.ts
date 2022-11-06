import { Device } from "./Device";
import { Upgrade } from "./Upgrade";
import { Feature } from "./Feature";

/** xsd1:GetUpgradeInfoResponseType */
export interface Xsd1GetUpgradeInfoResponseType {
    /** string */
    fcid?: string;
    /** string */
    ClientId?: string;
    /** string */
    UpgradeDefinitionVersion?: string;
    /** string */
    ActivationKeyFingerprint?: string;
    /** Device[] */
    Device?: Array<Device>;
    /** Upgrade[] */
    Upgrade?: Array<Upgrade>;
    /** Feature[] */
    Feature?: Array<Feature>;
}
