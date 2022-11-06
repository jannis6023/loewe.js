import { LoeweTabletPort } from "../ports/LoeweTabletPort";

export interface LoeweRemoteService {
    readonly LoeweTabletPort: LoeweTabletPort;
}
