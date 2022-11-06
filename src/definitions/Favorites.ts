import { FavoriteList } from "./FavoriteList";
import { FavoriteItem } from "./FavoriteItem";
import { Lcn } from "./Lcn";

/**
 * favorites
 * @targetNSAlias `xsd1`
 * @targetNamespace `urn:loewe.de:RemoteTV:Tablet`
 */
export interface Favorites {
    /** favorite-list[] */
    "favorite-list"?: Array<FavoriteList>;
    /** favorite-item[] */
    "favorite-item"?: Array<FavoriteItem>;
    /** lcn[] */
    lcn?: Array<Lcn>;
}
