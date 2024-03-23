import { Injectable } from '@angular/core';
import { ApiQueryParams, RequestOptions, defaultOptions } from '../types/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = "https://jsonplaceholder.typicode.com/photos"

  buildQueryString(params: ApiQueryParams) {
    const query = Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, encodeURIComponent(String(value))]);
    return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
  }

  async apiRequest<T>(
    endpoint: string,
    query: ApiQueryParams = {},
    options: RequestOptions = {}
  ): Promise<T> {
    const mergedOptions: RequestOptions = { ...defaultOptions, ...options };
    const queryString: string = this.buildQueryString({
      ...query,
      ...mergedOptions,
    });
    try {
      const response = await fetch(`${this.API_URL}/${endpoint}${queryString}`);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}
