export const validate = (data) => {
  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const amountRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  const swiftRegex = /^[A-Z0-9]{8,11}$/;

  if (data.name && !nameRegex.test(data.name)) {
    return "Invalid name (letters only)";
  }

  if (data.email && !emailRegex.test(data.email)) {
    return "Invalid email format";
  }

  if (data.amount && !amountRegex.test(data.amount)) {
    return "Invalid amount (numbers only)";
  }

  if (data.swift && !swiftRegex.test(data.swift)) {
    return "Invalid SWIFT code";
  }

  return null;
};