import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

declare function getValidationErrors(err: ValidationError): Errors;
