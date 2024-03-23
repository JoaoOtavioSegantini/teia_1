export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  album_id?: string;
}

export const defaultOptions: RequestOptions = {};
