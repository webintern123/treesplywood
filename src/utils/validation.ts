/**
 * Form Validation Utilities
 * Provides real-time validation for common input types
 */

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  // Indian phone numbers: 10 digits
  return digitsOnly.length === 10;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

export const validateNumeric = (value: string): boolean => {
  return /^\d+$/.test(value);
};

export const validateAlphabetic = (value: string): boolean => {
  return /^[a-zA-Z\s]+$/.test(value);
};

export const validateURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validatePincode = (pincode: string): boolean => {
  // Indian pincode: 6 digits
  return /^\d{6}$/.test(pincode);
};

/**
 * Get error message for specific field and validation type
 */
export const getErrorMessage = (field: string, type: string): string => {
  const messages: Record<string, Record<string, string>> = {
    email: {
      required: 'Email address is required',
      invalid: 'Please enter a valid email address (e.g., name@example.com)',
    },
    phone: {
      required: 'Phone number is required',
      invalid: 'Please enter a valid 10-digit phone number',
    },
    name: {
      required: 'Name is required',
      minLength: 'Name must be at least 2 characters long',
      invalid: 'Please enter a valid name (letters only)',
    },
    message: {
      required: 'Message is required',
      minLength: 'Message must be at least 10 characters long',
    },
    address: {
      required: 'Address is required',
      minLength: 'Please provide a complete address',
    },
    pincode: {
      required: 'Pincode is required',
      invalid: 'Please enter a valid 6-digit pincode',
    },
    city: {
      required: 'City is required',
    },
    state: {
      required: 'State is required',
    },
  };

  return messages[field]?.[type] || 'This field is invalid';
};

/**
 * Validate form data object
 */
export interface ValidationRule {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
  maxLength?: number;
  numeric?: boolean;
  alphabetic?: boolean;
  pincode?: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateForm = (
  data: Record<string, string>,
  rules: Record<string, ValidationRule>
): ValidationResult => {
  const errors: Record<string, string> = {};

  Object.keys(rules).forEach((field) => {
    const value = data[field] || '';
    const fieldRules = rules[field];

    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = getErrorMessage(field, 'required');
      return;
    }

    if (value && fieldRules.email && !validateEmail(value)) {
      errors[field] = getErrorMessage(field, 'invalid');
    }

    if (value && fieldRules.phone && !validatePhone(value)) {
      errors[field] = getErrorMessage(field, 'invalid');
    }

    if (value && fieldRules.minLength && !validateMinLength(value, fieldRules.minLength)) {
      errors[field] = getErrorMessage(field, 'minLength');
    }

    if (value && fieldRules.maxLength && !validateMaxLength(value, fieldRules.maxLength)) {
      errors[field] = getErrorMessage(field, 'maxLength');
    }

    if (value && fieldRules.numeric && !validateNumeric(value)) {
      errors[field] = 'Please enter numbers only';
    }

    if (value && fieldRules.alphabetic && !validateAlphabetic(value)) {
      errors[field] = getErrorMessage(field, 'invalid');
    }

    if (value && fieldRules.pincode && !validatePincode(value)) {
      errors[field] = getErrorMessage(field, 'invalid');
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
};

/**
 * Format pincode for display
 */
export const formatPincode = (pincode: string): string => {
  const cleaned = pincode.replace(/\D/g, '');
  if (cleaned.length === 6) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  }
  return pincode;
};
