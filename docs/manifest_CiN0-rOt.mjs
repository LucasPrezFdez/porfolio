import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_oBenZSHc.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/DAM2/Documents/porfolio/","cacheDir":"file:///C:/Users/DAM2/Documents/porfolio/node_modules/.astro/","outDir":"file:///C:/Users/DAM2/Documents/porfolio/docs/","srcDir":"file:///C:/Users/DAM2/Documents/porfolio/src/","publicDir":"file:///C:/Users/DAM2/Documents/porfolio/public/","buildClientDir":"file:///C:/Users/DAM2/Documents/porfolio/docs/client/","buildServerDir":"file:///C:/Users/DAM2/Documents/porfolio/docs/server/","adapterName":"","routes":[{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/flowbite/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/flowbite","isIndex":false,"type":"page","pattern":"^\\/flowbite\\/?$","segments":[[{"content":"flowbite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/flowbite.astro","pathname":"/flowbite","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/saludo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/saludo","isIndex":false,"type":"page","pattern":"^\\/saludo\\/?$","segments":[[{"content":"saludo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/saludo.astro","pathname":"/saludo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/tailwind/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tailwind","isIndex":false,"type":"page","pattern":"^\\/tailwind\\/?$","segments":[[{"content":"tailwind","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tailwind.astro","pathname":"/tailwind","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/teachers/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/teachers","isIndex":false,"type":"page","pattern":"^\\/teachers\\/?$","segments":[[{"content":"teachers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teachers.astro","pathname":"/teachers","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/teachers2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/teachers2","isIndex":false,"type":"page","pattern":"^\\/teachers2\\/?$","segments":[[{"content":"teachers2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teachers2.astro","pathname":"/teachers2","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/technologies/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/technologies","isIndex":false,"type":"page","pattern":"^\\/technologies\\/?$","segments":[[{"content":"technologies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/technologies.astro","pathname":"/technologies","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/tiempo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tiempo","isIndex":false,"type":"page","pattern":"^\\/tiempo\\/?$","segments":[[{"content":"tiempo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tiempo.astro","pathname":"/tiempo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/users/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/users","isIndex":true,"type":"page","pattern":"^\\/users\\/?$","segments":[[{"content":"users","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/users/index.astro","pathname":"/users","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/DAM2/Documents/porfolio/docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/DAM2/Documents/porfolio/src/pages/flowbite.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/tailwind.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/posts/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/posts/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/saludo.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/teachers.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/teachers2.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/technologies.astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/users/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/DAM2/Documents/porfolio/src/pages/users/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/flowbite@_@astro":"pages/flowbite.astro.mjs","\u0000@astro-page:src/pages/posts/[id]@_@astro":"pages/posts/_id_.astro.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/saludo@_@astro":"pages/saludo.astro.mjs","\u0000@astro-page:src/pages/tailwind@_@astro":"pages/tailwind.astro.mjs","\u0000@astro-page:src/pages/teachers@_@astro":"pages/teachers.astro.mjs","\u0000@astro-page:src/pages/teachers2@_@astro":"pages/teachers2.astro.mjs","\u0000@astro-page:src/pages/technologies@_@astro":"pages/technologies.astro.mjs","\u0000@astro-page:src/pages/tiempo@_@astro":"pages/tiempo.astro.mjs","\u0000@astro-page:src/pages/users/[id]@_@astro":"pages/users/_id_.astro.mjs","\u0000@astro-page:src/pages/users/index@_@astro":"pages/users.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CiN0-rOt.mjs","C:/Users/DAM2/Documents/porfolio/src/pages/saludo.astro?astro&type=script&index=0&lang.ts":"_astro/saludo.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","C:/Users/DAM2/Documents/porfolio/src/pages/teachers2.astro?astro&type=script&index=0&lang.ts":"_astro/teachers2.astro_astro_type_script_index_0_lang.Chr-PZ_e.js","C:/Users/DAM2/Documents/porfolio/src/pages/users/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/DAM2/Documents/porfolio/src/pages/saludo.astro?astro&type=script&index=0&lang.ts",""],["C:/Users/DAM2/Documents/porfolio/src/pages/teachers2.astro?astro&type=script&index=0&lang.ts","const n=[\"Angel\",\"Pepe\",\"Antonio\",\"Marta\",\"Isabel\"],o=document.getElementById(\"profes\");n.forEach(t=>{const e=document.createElement(\"li\");e.textContent=t,o?.append(e)});"],["C:/Users/DAM2/Documents/porfolio/src/pages/users/index.astro?astro&type=script&index=0&lang.ts",""]],"assets":["/file:///C:/Users/DAM2/Documents/porfolio/docs/flowbite/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/posts/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/saludo/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/tailwind/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/teachers/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/teachers2/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/technologies/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/tiempo/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/users/index.html","/file:///C:/Users/DAM2/Documents/porfolio/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"a00t8Ud6G34NYSR+DVaz020UNtblvdjFSPIKns33RY0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
