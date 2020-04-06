import fetch from "cross-fetch";
import { URL } from "url";
import qs from "qs";
import { RequestType, LookupType } from "./types/args";

const baseURL = "https://api.jikan.moe/v3";

const createUrl = (args: any[], params?: Object) => {
  return `${baseURL}/${args.filter(a => a).join("/")}?${qs.stringify(params)}`;
};

const makeRequest = async (
  type: RequestType | LookupType,
  args: Array<string | number | undefined>,
  params?: Object
): Promise<any> => {
  const url = createUrl([type, ...args], params);
  return fetch(url).then(res => {
    if (!res.ok) throw res;
    return res.json();
  });
};

export default makeRequest;
