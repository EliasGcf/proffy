import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

declare function getValidationErrors(err: ValidationError): Errors;

declare function formatPrice(value: number | string): string;

declare function convertMinutsToHours(minutes: number): string;

declare function convertHoursToMinutes(time: string): number;
