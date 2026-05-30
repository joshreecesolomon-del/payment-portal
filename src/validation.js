export const validate = (data) => {
  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const amountRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  const swiftRegex = /^[A-Z0-9]{8,11}$/;

  // NEW PASSWORD REGEX
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

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

  // PASSWORD VALIDATION
  if (data.password && !passwordRegex.test(data.password)) {
    return "Password must contain uppercase, lowercase, number, special character and be at least 8 characters";
  }

  return null;
};