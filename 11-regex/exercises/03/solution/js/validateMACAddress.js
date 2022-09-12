const validateMACAddress = (mac) => {
    const macAddress = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macAddress.test(mac);
}

export default validateMACAddress;
