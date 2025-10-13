import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$MiLayout } from '../../chunks/MiLayout_D0BDcUWH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, {}, { "default": async ($$result2) => renderTemplate`  ` })}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/users/[id].astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/users/[id].astro";
const $$url = "/users/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
