
/**
 * PlayerStatus
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface PlayerStatus {
    /** string */
    State?: string;
    /** string */
    Position?: string;
    /** string */
    Speed?: string;
    /** PlayerMediumIdType|string */
    MediumId?: string;
}
