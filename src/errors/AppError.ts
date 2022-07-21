export default class AppError {
  statusCode: number;
  message: string;

  constructor(message: string, statusCode = 500) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
