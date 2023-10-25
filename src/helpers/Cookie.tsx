const setCookie = (name: string, value: string, time?: number, path: string = "/") => {
  document.cookie = `${name}=${value}${time ? `;max-age=${time}` : ""}${path ? `;path=${path}` : ""}`;
};

const getCookie = (name: string): string | undefined => {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const deleteCookie = (name: string, path?: string, domain?: string) => {
  document.cookie =
    name +
    "=" +
    (path ? ";path=" + path : "") +
    (domain ? ";domain=" + domain : "") +
    ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
};

export { getCookie, deleteCookie, setCookie };
