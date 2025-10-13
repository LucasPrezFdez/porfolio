import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$MiLayout } from '../chunks/MiLayout_D0BDcUWH.mjs';
export { renderers } from '../renderers.mjs';

const $$Teachers2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, { "title": "Profes 2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Listado de teachers favoritos usando CSR</h1> <ul id="profes"></ul> ` })} ${renderScript($$result, "C:/Users/DAM2/Documents/porfolio/src/pages/teachers2.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/teachers2.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/teachers2.astro";
const $$url = "/teachers2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Teachers2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
