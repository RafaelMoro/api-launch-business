export interface GeneralResponse {
  version: string;
  success: boolean;
  data: unknown;
  message: string | null;
  error: string | object;
}

export interface TestApiResponse
  extends Omit<GeneralResponse, 'message' | 'error'> {
  message: string;
  error: null;
}
