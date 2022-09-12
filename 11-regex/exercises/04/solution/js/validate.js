const validate = (text, type) => {
    const roles = {
        visa: /^4([0-9]{12}|[0-9]{15})$/,
        ip: /^(?!0)(?!.*\.$)((1?[0-9]?[0-9]|25[0-5]|2[0-4][0-9])(\.|$)){4}$/,
        mac: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    };
    return text.match(roles[type]) ? true : false;
};


export default validate;
