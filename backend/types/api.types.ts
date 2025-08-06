export interface IAPIResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface IErrorResponse {
  success: false;
  error: string;
}

export interface IPaginationQuery {
  page?: number;
  limit?: number;
}

export interface IPaginationResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
}
