import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { Xsd1RequestAccessRequestType } from "./definitions/Xsd1RequestAccessRequestType";
import { Xsd1RequestAccessResponseType } from "./definitions/Xsd1RequestAccessResponseType";
import { Xsd1GetChannelListRequestType } from "./definitions/Xsd1GetChannelListRequestType";
import { Xsd1GetChannelListResponseType } from "./definitions/Xsd1GetChannelListResponseType";
import { Xsd1GetNowNextEventRequestType } from "./definitions/Xsd1GetNowNextEventRequestType";
import { Xsd1GetNowNextEventResponseType } from "./definitions/Xsd1GetNowNextEventResponseType";
import { Xsd1GetMediaItemRequestType } from "./definitions/Xsd1GetMediaItemRequestType";
import { Xsd1GetMediaItemResponseType } from "./definitions/Xsd1GetMediaItemResponseType";
import { Xsd1GetMediaEventRequestType } from "./definitions/Xsd1GetMediaEventRequestType";
import { Xsd1GetMediaEventResponseType } from "./definitions/Xsd1GetMediaEventResponseType";
import { Xsd1GetVolumeRequestType } from "./definitions/Xsd1GetVolumeRequestType";
import { Xsd1VolumeResponseType } from "./definitions/Xsd1VolumeResponseType";
import { Xsd1SetVolumeRequestType } from "./definitions/Xsd1SetVolumeRequestType";
import { Xsd1GetMuteRequestType } from "./definitions/Xsd1GetMuteRequestType";
import { Xsd1MuteResponseType } from "./definitions/Xsd1MuteResponseType";
import { Xsd1SetMuteRequestType } from "./definitions/Xsd1SetMuteRequestType";
import { Xsd1StandbyRequestType } from "./definitions/Xsd1StandbyRequestType";
import { Xsd1StandbyResponseType } from "./definitions/Xsd1StandbyResponseType";
import { Xsd1ProgramTimerRequestType } from "./definitions/Xsd1ProgramTimerRequestType";
import { Xsd1ProgramTimerResponseType } from "./definitions/Xsd1ProgramTimerResponseType";
import { Xsd1ClientRequestType } from "./definitions/Xsd1ClientRequestType";
import { Xsd1GetDeviceDataResponseType } from "./definitions/Xsd1GetDeviceDataResponseType";
import { Xsd1GetValueFromBrowserJsRequestType } from "./definitions/Xsd1GetValueFromBrowserJsRequestType";
import { Xsd1GetValueFromBrowserJsResponseType } from "./definitions/Xsd1GetValueFromBrowserJsResponseType";
import { Xsd1GetBrowserJsChangeListRequestType } from "./definitions/Xsd1GetBrowserJsChangeListRequestType";
import { Xsd1GetBrowserJsChangeListResponseType } from "./definitions/Xsd1GetBrowserJsChangeListResponseType";
import { Xsd1SetValueToBrowserJsRequestType } from "./definitions/Xsd1SetValueToBrowserJsRequestType";
import { Xsd1SetValueToBrowserJsResponseType } from "./definitions/Xsd1SetValueToBrowserJsResponseType";
import { Xsd1GetCurrentPlaybackRequestType } from "./definitions/Xsd1GetCurrentPlaybackRequestType";
import { Xsd1GetCurrentPlaybackResponseType } from "./definitions/Xsd1GetCurrentPlaybackResponseType";
import { Xsd1GetCurrentStatusResponseType } from "./definitions/Xsd1GetCurrentStatusResponseType";
import { Xsd1PlayerPrepareType } from "./definitions/Xsd1PlayerPrepareType";
import { Xsd1PlayerPrepareResponseType } from "./definitions/Xsd1PlayerPrepareResponseType";
import { Xsd1PlayerReleasePreparedType } from "./definitions/Xsd1PlayerReleasePreparedType";
import { Xsd1PlayerReleasePreparedResponseType } from "./definitions/Xsd1PlayerReleasePreparedResponseType";
import { Xsd1PlayerPlayType } from "./definitions/Xsd1PlayerPlayType";
import { Xsd1PlayerPlayResponseType } from "./definitions/Xsd1PlayerPlayResponseType";
import { Xsd1PlayerPauseType } from "./definitions/Xsd1PlayerPauseType";
import { Xsd1PlayerPauseResponseType } from "./definitions/Xsd1PlayerPauseResponseType";
import { Xsd1PlayerResumeType } from "./definitions/Xsd1PlayerResumeType";
import { Xsd1PlayerResumeResponseType } from "./definitions/Xsd1PlayerResumeResponseType";
import { Xsd1PlayerStopType } from "./definitions/Xsd1PlayerStopType";
import { Xsd1PlayerStopResponseType } from "./definitions/Xsd1PlayerStopResponseType";
import { Xsd1PlayerSetSpeedType } from "./definitions/Xsd1PlayerSetSpeedType";
import { Xsd1PlayerSetSpeedResponseType } from "./definitions/Xsd1PlayerSetSpeedResponseType";
import { Xsd1PlayerSeekToType } from "./definitions/Xsd1PlayerSeekToType";
import { Xsd1PlayerSeekToResponseType } from "./definitions/Xsd1PlayerSeekToResponseType";
import { Xsd1ZapToApplicationRequestType } from "./definitions/Xsd1ZapToApplicationRequestType";
import { Xsd1ZapToApplicationResponseType } from "./definitions/Xsd1ZapToApplicationResponseType";
import { Xsd1ZapToMediaRequestType } from "./definitions/Xsd1ZapToMediaRequestType";
import { Xsd1ZapToMediaResponseType } from "./definitions/Xsd1ZapToMediaResponseType";
import { Xsd1InjectRcKeyRequestType } from "./definitions/Xsd1InjectRcKeyRequestType";
import { Xsd1InjectRcKeyResponseType } from "./definitions/Xsd1InjectRcKeyResponseType";
import { Xsd1InjectKeyboardKeyRequestType } from "./definitions/Xsd1InjectKeyboardKeyRequestType";
import { Xsd1InjectKeyboardKeyResponseType } from "./definitions/Xsd1InjectKeyboardKeyResponseType";
import { Xsd1SetActionFieldRequestType } from "./definitions/Xsd1SetActionFieldRequestType";
import { Xsd1SetActionFieldResponseType } from "./definitions/Xsd1SetActionFieldResponseType";
import { Xsd1GetActionFieldRequestType } from "./definitions/Xsd1GetActionFieldRequestType";
import { Xsd1GetActionFieldResponseType } from "./definitions/Xsd1GetActionFieldResponseType";
import { Xsd1GetListOfChannelListsRequestType } from "./definitions/Xsd1GetListOfChannelListsRequestType";
import { Xsd1GetListOfChannelListsResponseType } from "./definitions/Xsd1GetListOfChannelListsResponseType";
import { Xsd1GetFeatureRequestType } from "./definitions/Xsd1GetFeatureRequestType";
import { Xsd1GetFeatureResponseType } from "./definitions/Xsd1GetFeatureResponseType";
import { Xsd1ActivateFeaturePackageRequestType } from "./definitions/Xsd1ActivateFeaturePackageRequestType";
import { Xsd1ActivateFeaturePackageResponseType } from "./definitions/Xsd1ActivateFeaturePackageResponseType";
import { Xsd1DeactivateFeaturePackageRequestType } from "./definitions/Xsd1DeactivateFeaturePackageRequestType";
import { Xsd1DeactivateFeaturePackageResponseType } from "./definitions/Xsd1DeactivateFeaturePackageResponseType";
import { Xsd1GetUpgradeInfoRequestType } from "./definitions/Xsd1GetUpgradeInfoRequestType";
import { Xsd1GetUpgradeInfoResponseType } from "./definitions/Xsd1GetUpgradeInfoResponseType";
import { Xsd1AddFavoriteListRequestType } from "./definitions/Xsd1AddFavoriteListRequestType";
import { Xsd1AddFavoriteListResponseType } from "./definitions/Xsd1AddFavoriteListResponseType";
import { Xsd1RemoveFavoriteListRequestType } from "./definitions/Xsd1RemoveFavoriteListRequestType";
import { Xsd1RemoveFavoriteListResponseType } from "./definitions/Xsd1RemoveFavoriteListResponseType";
import { Xsd1RenameFavoriteListRequestType } from "./definitions/Xsd1RenameFavoriteListRequestType";
import { Xsd1RenameFavoriteListResponseType } from "./definitions/Xsd1RenameFavoriteListResponseType";
import { Xsd1AddServicesFavoriteListRequestType } from "./definitions/Xsd1AddServicesFavoriteListRequestType";
import { Xsd1AddServicesFavoriteListResponseType } from "./definitions/Xsd1AddServicesFavoriteListResponseType";
import { Xsd1RemoveServicesFavoriteListRequestType } from "./definitions/Xsd1RemoveServicesFavoriteListRequestType";
import { Xsd1RemoveServicesFavoriteListResponseType } from "./definitions/Xsd1RemoveServicesFavoriteListResponseType";
import { Xsd1MoveServicesFavoriteListRequestType } from "./definitions/Xsd1MoveServicesFavoriteListRequestType";
import { Xsd1MoveServicesFavoriteListResponseType } from "./definitions/Xsd1MoveServicesFavoriteListResponseType";
import { Xsd1AddFavoriteListFromVirtualRequestType } from "./definitions/Xsd1AddFavoriteListFromVirtualRequestType";
import { Xsd1AddFavoriteListFromVirtualResponseType } from "./definitions/Xsd1AddFavoriteListFromVirtualResponseType";
import { Xsd1GetListOfVirtualListsRequestType } from "./definitions/Xsd1GetListOfVirtualListsRequestType";
import { Xsd1GetListOfVirtualListsResponseType } from "./definitions/Xsd1GetListOfVirtualListsResponseType";
import { Xsd1ImportServiceListsRequestType } from "./definitions/Xsd1ImportServiceListsRequestType";
import { Xsd1ImportServiceListsResponseType } from "./definitions/Xsd1ImportServiceListsResponseType";
import { Xsd1ExportServiceListsRequestType } from "./definitions/Xsd1ExportServiceListsRequestType";
import { Xsd1ExportServiceListsResponseType } from "./definitions/Xsd1ExportServiceListsResponseType";
import { Xsd1GetDrPlusArchiveRequestType } from "./definitions/Xsd1GetDrPlusArchiveRequestType";
import { Xsd1GetDrPlusArchiveResponseType } from "./definitions/Xsd1GetDrPlusArchiveResponseType";
import { Xsd1GetVolumesRequestType } from "./definitions/Xsd1GetVolumesRequestType";
import { Xsd1GetVolumesResponseType } from "./definitions/Xsd1GetVolumesResponseType";
import { Xsd1PlayMultiroomRequestType } from "./definitions/Xsd1PlayMultiroomRequestType";
import { Xsd1PlayMultiroomResponseType } from "./definitions/Xsd1PlayMultiroomResponseType";
import { Xsd1GetSettingsRequestType } from "./definitions/Xsd1GetSettingsRequestType";
import { Xsd1GetSettingsResponseType } from "./definitions/Xsd1GetSettingsResponseType";
import { Xsd1SetSettingRequestType } from "./definitions/Xsd1SetSettingRequestType";
import { Xsd1SetSettingResponseType } from "./definitions/Xsd1SetSettingResponseType";
import { Xsd1ParentalLockRequestType } from "./definitions/Xsd1ParentalLockRequestType";
import { Xsd1ParentalLockResponseType } from "./definitions/Xsd1ParentalLockResponseType";
import { Xsd1GetParentalLockRequestType } from "./definitions/Xsd1GetParentalLockRequestType";
import { Xsd1GetParentalLockResponseType } from "./definitions/Xsd1GetParentalLockResponseType";
import { Xsd1GetTimerListRequestType } from "./definitions/Xsd1GetTimerListRequestType";
import { Xsd1GetTimerListResponseType } from "./definitions/Xsd1GetTimerListResponseType";
import { Xsd1CreateIteratorRequestType } from "./definitions/Xsd1CreateIteratorRequestType";
import { Xsd1CreateIteratorResponseType } from "./definitions/Xsd1CreateIteratorResponseType";
import { Xsd1CloseIteratorRequestType } from "./definitions/Xsd1CloseIteratorRequestType";
import { Xsd1CloseIteratorResponseType } from "./definitions/Xsd1CloseIteratorResponseType";
import { LoeweRemoteService } from "./services/LoeweRemoteService";

export interface LoeweTablet0001Client extends SoapClient {
    LoeweRemoteService: LoeweRemoteService;
    RequestAccessAsync(requestAccess: Xsd1RequestAccessRequestType): Promise<[result: Xsd1RequestAccessResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    RequestAccess(requestAccess: Xsd1RequestAccessRequestType): [result: Xsd1RequestAccessResponseType, rawResponse: any, soapHeader: any, rawRequest: any];
    GetChannelListAsync(getChannelList: Xsd1GetChannelListRequestType): Promise<[result: Xsd1GetChannelListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCurrentEventAsync(getCurrentEvent: Xsd1GetNowNextEventRequestType): Promise<[result: Xsd1GetNowNextEventResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetNextEventAsync(getNextEvent: Xsd1GetNowNextEventRequestType): Promise<[result: Xsd1GetNowNextEventResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetMediaItemAsync(getMediaItem: Xsd1GetMediaItemRequestType): Promise<[result: Xsd1GetMediaItemResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetMediaEventAsync(getMediaEvent: Xsd1GetMediaEventRequestType): Promise<[result: Xsd1GetMediaEventResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetVolumeAsync(getVolume: Xsd1GetVolumeRequestType): Promise<[result: Xsd1VolumeResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SetVolumeAsync(setVolume: Xsd1SetVolumeRequestType): Promise<[result: Xsd1VolumeResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetMuteAsync(getMute: Xsd1GetMuteRequestType): Promise<[result: Xsd1MuteResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SetMuteAsync(setMute: Xsd1SetMuteRequestType): Promise<[result: Xsd1MuteResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    StandbyAsync(standby: Xsd1StandbyRequestType): Promise<[result: Xsd1StandbyResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ProgramTimerAsync(programTimer: Xsd1ProgramTimerRequestType): Promise<[result: Xsd1ProgramTimerResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetDeviceDataAsync(getDeviceData: Xsd1ClientRequestType): Promise<[result: Xsd1GetDeviceDataResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetValueFromBrowserJSAsync(getValueFromBrowserJs: Xsd1GetValueFromBrowserJsRequestType): Promise<[result: Xsd1GetValueFromBrowserJsResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetBrowserJSChangeListAsync(getBrowserJsChangeList: Xsd1GetBrowserJsChangeListRequestType): Promise<[result: Xsd1GetBrowserJsChangeListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SetValueToBrowserJSAsync(setValueToBrowserJs: Xsd1SetValueToBrowserJsRequestType): Promise<[result: Xsd1SetValueToBrowserJsResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCurrentPlaybackAsync(getCurrentPlayback: Xsd1GetCurrentPlaybackRequestType): Promise<[result: Xsd1GetCurrentPlaybackResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCurrentStatusAsync(getCurrentStatus: Xsd1ClientRequestType): Promise<[result: Xsd1GetCurrentStatusResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerPrepareAsync(playerPrepare: Xsd1PlayerPrepareType): Promise<[result: Xsd1PlayerPrepareResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerReleasePreparedAsync(playerReleasePrepared: Xsd1PlayerReleasePreparedType): Promise<[result: Xsd1PlayerReleasePreparedResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerPlayAsync(playerPlay: Xsd1PlayerPlayType): Promise<[result: Xsd1PlayerPlayResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerPauseAsync(playerPause: Xsd1PlayerPauseType): Promise<[result: Xsd1PlayerPauseResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerResumeAsync(playerResume: Xsd1PlayerResumeType): Promise<[result: Xsd1PlayerResumeResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerStopAsync(playerStop: Xsd1PlayerStopType): Promise<[result: Xsd1PlayerStopResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerSetSpeedAsync(playerSetSpeed: Xsd1PlayerSetSpeedType): Promise<[result: Xsd1PlayerSetSpeedResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayerSeekToAsync(playerSeekTo: Xsd1PlayerSeekToType): Promise<[result: Xsd1PlayerSeekToResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ZapToApplicationAsync(zapToApplication: Xsd1ZapToApplicationRequestType): Promise<[result: Xsd1ZapToApplicationResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ZapToMediaAsync(zapToMedia: Xsd1ZapToMediaRequestType): Promise<[result: Xsd1ZapToMediaResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    InjectRCKeyAsync(injectRcKey: Xsd1InjectRcKeyRequestType): Promise<[result: Xsd1InjectRcKeyResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    InjectKeyboardKeyAsync(injectKeyboardKey: Xsd1InjectKeyboardKeyRequestType): Promise<[result: Xsd1InjectKeyboardKeyResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SetActionFieldAsync(setActionField: Xsd1SetActionFieldRequestType): Promise<[result: Xsd1SetActionFieldResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetActionFieldAsync(getActionField: Xsd1GetActionFieldRequestType): Promise<[result: Xsd1GetActionFieldResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetListOfChannelListsAsync(getListOfChannelLists: Xsd1GetListOfChannelListsRequestType): Promise<[result: Xsd1GetListOfChannelListsResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetFeatureAsync(getFeature: Xsd1GetFeatureRequestType): Promise<[result: Xsd1GetFeatureResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ActivateFeaturePackageAsync(activateFeaturePackage: Xsd1ActivateFeaturePackageRequestType): Promise<[result: Xsd1ActivateFeaturePackageResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    DeactivateFeaturePackageAsync(deactivateFeaturePackage: Xsd1DeactivateFeaturePackageRequestType): Promise<[result: Xsd1DeactivateFeaturePackageResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetUpgradeInfoAsync(getUpgradeInfo: Xsd1GetUpgradeInfoRequestType): Promise<[result: Xsd1GetUpgradeInfoResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    AddFavoriteListAsync(addFavoriteList: Xsd1AddFavoriteListRequestType): Promise<[result: Xsd1AddFavoriteListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    RemoveFavoriteListAsync(removeFavoriteList: Xsd1RemoveFavoriteListRequestType): Promise<[result: Xsd1RemoveFavoriteListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    RenameFavoriteListAsync(renameFavoriteList: Xsd1RenameFavoriteListRequestType): Promise<[result: Xsd1RenameFavoriteListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    AddServicesFavoriteListAsync(addServicesFavoriteList: Xsd1AddServicesFavoriteListRequestType): Promise<[result: Xsd1AddServicesFavoriteListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    RemoveServicesFavoriteListAsync(removeServicesFavoriteList: Xsd1RemoveServicesFavoriteListRequestType): Promise<[result: Xsd1RemoveServicesFavoriteListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    MoveServicesFavoriteListAsync(moveServicesFavoriteList: Xsd1MoveServicesFavoriteListRequestType): Promise<[result: Xsd1MoveServicesFavoriteListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    AddFavoriteListFromVirtualAsync(addFavoriteListFromVirtual: Xsd1AddFavoriteListFromVirtualRequestType): Promise<[result: Xsd1AddFavoriteListFromVirtualResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetListOfVirtualListsAsync(getListOfVirtualLists: Xsd1GetListOfVirtualListsRequestType): Promise<[result: Xsd1GetListOfVirtualListsResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ImportServiceListsAsync(importServiceLists: Xsd1ImportServiceListsRequestType): Promise<[result: Xsd1ImportServiceListsResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ExportServiceListsAsync(exportServiceLists: Xsd1ExportServiceListsRequestType): Promise<[result: Xsd1ExportServiceListsResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetDRPlusArchiveAsync(getDrPlusArchive: Xsd1GetDrPlusArchiveRequestType): Promise<[result: Xsd1GetDrPlusArchiveResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetVolumesAsync(getVolumes: Xsd1GetVolumesRequestType): Promise<[result: Xsd1GetVolumesResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    PlayMultiroomAsync(playMultiroom: Xsd1PlayMultiroomRequestType): Promise<[result: Xsd1PlayMultiroomResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetSettingsAsync(getSettings: Xsd1GetSettingsRequestType): Promise<[result: Xsd1GetSettingsResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SetSettingAsync(setSetting: Xsd1SetSettingRequestType): Promise<[result: Xsd1SetSettingResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ParentalLockAsync(parentalLock: Xsd1ParentalLockRequestType): Promise<[result: Xsd1ParentalLockResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetParentalLockAsync(getParentalLock: Xsd1GetParentalLockRequestType): Promise<[result: Xsd1GetParentalLockResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetTimerListAsync(getTimerList: Xsd1GetTimerListRequestType): Promise<[result: Xsd1GetTimerListResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CreateIteratorAsync(createIterator: Xsd1CreateIteratorRequestType): Promise<[result: Xsd1CreateIteratorResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CloseIteratorAsync(closeIterator: Xsd1CloseIteratorRequestType): Promise<[result: Xsd1CloseIteratorResponseType, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LoeweTablet0001Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LoeweTablet0001Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
