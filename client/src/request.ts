import { toCamelCase, toUnderscore, buildQueryString } from './utils/general.utils';

const xsrfTag = document.querySelector('meta[name=csrf-token]');
const xsrfToken = xsrfTag && xsrfTag.getAttribute('content'); // from rails

type Headers = { [key: string]: string };
type RequestOps = {
  headers?: Headers,
  method?: string,
  body?: any
};

const baseFetch = (url: string, ops: RequestOps): Promise<any> => {
  let headers = ops.headers;
  let body = ops.body;
  const cors = url.startsWith('http') && !url.includes(window.location.host);
  if (!cors) headers['X-XSRF-TOKEN'] = xsrfToken;
  if (body && typeof(body) !== 'string' && body.constructor !== ArrayBuffer) {
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(toUnderscore(body));
  }
  const fetchPromise = fetch(url, {
    mode: cors ? 'cors' : 'same-origin',
    credentials: cors ? 'omit' : 'include',
    method: ops.method || 'GET',
    body,
    headers: new Headers(headers)
  });
  return new Promise((resolve, reject) => {
    fetchPromise.then(res => {
      res.text().then(text => {
        const urRes = {
          status: res.status,
          statusText: res.statusText,
          body: text
        };
        if (text && res.headers.get('Content-Type').includes('application/json')) {
          urRes.body = toCamelCase(JSON.parse(text));
        }
        if (res.ok) {
          resolve(urRes.body);
        } else {
          reject(urRes);
        }
      });
    });
  });
};

const request = {
  get: function<T>(url: string, query: Object = null, headers: Headers = {}): Promise<T> {
    let fullUrl = url;
    if (query) fullUrl = url + '?' + buildQueryString(toUnderscore(query));
    return baseFetch(fullUrl, {
      headers
    });
  },
  head: function(url: string, headers: Headers = {}): Promise<any> {
    return baseFetch(url, {
      method: 'HEAD',
      headers
    });
  },
  post: function(url: string, body: any = {}, headers: Headers = {}): Promise<any> {
    return baseFetch(url, {
      method: 'POST',
      body,
      headers
    });
  },
  put: function(url: string, body: any = {}, headers: Headers = {}): Promise<any> {
    return baseFetch(url, {
      method: 'PUT',
      body,
      headers
    });
  },
  patch: function(url: string, body: any = {}, headers: Headers = {}): Promise<any> {
    return baseFetch(url, {
      method: 'PATCH',
      body,
      headers
    });
  },
  del: function(url: string, headers: Headers = {}): Promise<any> {
    return baseFetch(url, {
      method: 'DELETE',
      headers
    });
  }
};

export default request;
export { request };
