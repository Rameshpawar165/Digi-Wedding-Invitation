import { RSVPSubmission } from '@/types/wedding';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateRSVP(data: Partial<RSVPSubmission>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.guestName || data.guestName.trim().length < 2) {
    errors.guestName = 'Please enter your full name (minimum 2 characters)';
  }

  if (data.phoneNumber && data.phoneNumber.trim().length > 0) {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(data.phoneNumber.replace(/[\s-]/g, ''))) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
  }

  if (!data.attendeesCount || data.attendeesCount < 1 || data.attendeesCount > 15) {
    errors.attendeesCount = 'Please select a valid guest count (1-15)';
  }

  if (!data.attendingStatus || !['attending', 'not_attending', 'tentative'].includes(data.attendingStatus)) {
    errors.attendingStatus = 'Please select your attendance status';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
