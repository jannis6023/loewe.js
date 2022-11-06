import {createClientAsync} from "./src";

createClientAsync("http://10.1.1.119:905/loewe_tablet_0001?wsdl", {
    endpoint: "http://10.1.1.119:905/loewe_tablet_0001",
    namespaceArrayElements: false
})
.then((client) => {
    client.RequestAccessAsync({
        fcid: "123",
        DeviceName: "123",
        RequesterName: "123",
        DeviceType: "123",
        DeviceUUID: "50:4F:94:12:0B:B7",
        ClientId: "?"
    })
    .then((result) => {
        setTimeout(() => {
            client.InjectRCKeyAsync({
                fcid: "123",
                ClientId: result[0].ClientId,
                InputEventSequence: [
                    {
                        RCKeyEvent: {
                            attributes: {
                                alphabet: "l2700",
                                mode: "press",
                                value: "12"
                            }
                        }
                    },
                    {
                        RCKeyEvent: {
                            attributes: {
                                alphabet: "l2700",
                                mode: "release",
                                value: "12"
                            }
                        }
                    }
                ]
            })
            .then((result) => {
                console.log(result);
            })
        }, 200)
    })
})