import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B6xbRrVX.mjs';
import { $ as $$MiLayout } from '../chunks/MiLayout_D0BDcUWH.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, { "data-astro-cid-isfdo3f7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout", $$Layout, { "data-astro-cid-isfdo3f7": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="bg-blue-200 text-blue-900 text-3xl rounded-3xl hover:bg-blue-400" data-astro-cid-isfdo3f7>
Saludos desde Tailwind
</h1> <p data-astro-cid-isfdo3f7>Hola</p> ` })} ` })} `;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/tailwind.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/tailwind.astro";
const $$url = "/tailwind";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tailwind,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
