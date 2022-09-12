const validateVisaCardNumber = (visaCard) => {
  const visaRegExp = /^4([0-9]{12}|[0-9]{15})$/;
  return visaRegExp.test(visaCard);
};
export default validateVisaCardNumber;
