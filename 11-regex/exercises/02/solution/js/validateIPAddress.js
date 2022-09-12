const validateIPAddress = (IPv4) => {
    const IPAddress = /^(?!0)(?!.*\.$)((1?[0-9]?[0-9]|25[0-5]|2[0-4][0-9])(\.|$)){4}$/;
    return IPAddress.test(IPv4);
}

export default validateIPAddress;
