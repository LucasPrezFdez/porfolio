import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B6xbRrVX.mjs';
export { renderers } from '../renderers.mjs';

const $$Flowbite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Flowbite ejemplo</h1> <a class="btn" href="/saludo">Volver</a> ` })}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/flowbite.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/flowbite.astro";
const $$url = "/flowbite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Flowbite,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
