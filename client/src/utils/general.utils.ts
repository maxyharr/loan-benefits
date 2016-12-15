import * as _ from 'lodash';

export function toCamelCase(thing: any): any {
  if (Array.isArray(thing)) {
    return (<Array<any>>thing).map(toCamelCase);
  } else if (typeof thing === 'object' && thing) {
    const ret = {};
    Object.keys(thing).forEach((k) => {
      ret[_.camelCase(k)] = toCamelCase(thing[k]);
    });
    return ret;
  } else {
    return thing;
  }
}

function prefixString(s: string, prefix: string = null): string {
  if (prefix) {
    return `${prefix}[${s}]`;
  } else {
    return s;
  }
}

export function toUnderscore(thing: any): any {
  if (Array.isArray(thing)) {
    return (<Array<any>>thing).map(toUnderscore);
  } else if (typeof thing === 'object' && thing) {
    const ret = {};
    Object.keys(thing).forEach((k) => {
      ret[snakeCase(k)] = toUnderscore(thing[k]);
    });
    return ret;
  } else {
    return thing;
  }
}

// { a: { b: [1, 2] } } => a[b][]=1&a[b][]=2
export function buildQueryString(data: any, prefix: string = null): string {
  const pieces: string[] = [];
  for (const k in data) {
    const v = data[k];
    if (v != null) {
      if (Array.isArray(v) && v.length > 0) {
        v.map(x => {
          if (x && isPrimitive(x)) {
            let key = prefixString(k, prefix) + '[]';
            pieces.push(key + '=' + x.toString());
          } else {
            buildQueryString(x, prefixString(k, prefix));
          }
        });
      } else if (isPrimitive(v)) {
        let key = prefixString(k, prefix);
        pieces.push(key + '=' + v);
      } else {
        pieces.push(buildQueryString(v, prefixString(k, prefix)));
      }
    }
  }
  return pieces.join('&');
}

export function errorParser(errorsObj) {
  const body = errorsObj.body;
  const keys = Object.keys(body);
  let res = '';
  keys.forEach(key => res += `${key} ${body[key]}.\n`);
  return res;
}

// Helpers

function snakeCase(str: string): string {
  const results = str.match(/([A-z]+)(\d+)$/); // Slider => [], Slider12 => ['Slider', '12']
  if (results && results.length > 0) {
    str = str.substring(0, str.length - results[results.length -1].length);
    str = _.snakeCase(str);
    str = str + results[results.length - 1];
    return str;
  }
  return _.snakeCase(str);
}

function isPrimitive(thing: any): boolean {
  return thing === null || thing === undefined || ['number', 'boolean', 'string'].includes(typeof(thing));
}