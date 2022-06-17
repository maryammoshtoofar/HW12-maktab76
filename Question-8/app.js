const lodashCDN = document.createElement("script");
const CDNVersion = document.createElement("span");
lodashCDN.setAttribute(
  "src",
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js"
);
document.body.append(lodashCDN);
CDNVersion.innerHTML = `Lodash Version is = ${lodashCDN.src.split("/")[6]}`;
document.body.append(CDNVersion);
