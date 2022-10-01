import DeviceDetector from "device-detector-js";
import { publicIpv4 } from "public-ip";

async function HttpUser () {
    const navigator = await window.navigator;
    const deviceDector =  new DeviceDetector();
    const device:any = deviceDector.parse(navigator.userAgent);
    const device_public_ip = await publicIpv4();
    const os_type = device.os.type;
    const browser_type = device.client.name;
    const device_type = device.client.type;
    const coordinates = 'No Coordinates';
    return {navigator,}
}