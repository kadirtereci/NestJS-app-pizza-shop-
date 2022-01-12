export default class ApiResponseDto<T> {
  status: number;
  message: string;
  data?: T;

  constructor(status: number, message?: string, data?: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  public static successWithData<T>(
    data?: T,
    message?: string,
  ): ApiResponseDto<T> {
    return new ApiResponseDto<T>(200, message, data);
  }

  public static emptySuccess(message?: string): ApiResponseDto<void> {
    return new ApiResponseDto<void>(200, message, null);
  }

  public static errorResponse(
    message: string,
    status?: number,
  ): ApiResponseDto<void> {
    return new ApiResponseDto<void>(status ? status : 400, message, null);
  }
}
