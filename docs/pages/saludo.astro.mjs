import { c as createComponent, b as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$MiLayout } from '../chunks/MiLayout_D0BDcUWH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Saludo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Saludo;
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, { "title": "Saludando" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Saludos nigger</h1> <p>Esta es mi primera pagina usando AstroJS</p> ` })} ${renderScript($$result, "C:/Users/DAM2/Documents/porfolio/src/pages/saludo.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/saludo.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/saludo.astro";
const $$url = "/saludo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Saludo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
