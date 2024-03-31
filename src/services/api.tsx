import { refreshToken } from "@/utils/helpers";

// sio https://sio.tracer.ng
export const baseUrl = 'https://api.tracer.ng/api';
type METHODS = 'GET'|'POST'|'PATCH'|'PUT'|'DELETE'
export async function makeApiRequest(url: string, method: METHODS, body?: object, token?: string) {
  interface Options extends RequestInit {
    method: string;
    headers: HeadersInit;
    body?: string;
  }
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const options: Options = {
      method,
      headers,
    };
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(baseUrl + url, options);
    response.status === 401 && refreshToken() // frefreshtoken
    const data = await response.json();
    // if (!response.ok) {
    //   throw new Error(data);
    // }
    return  data;
  } catch (error) {
    if (error) {
      throw error;
    }
  }
}
