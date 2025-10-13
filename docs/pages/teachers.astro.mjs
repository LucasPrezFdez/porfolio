import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$MiLayout } from '../chunks/MiLayout_D0BDcUWH.mjs';
export { renderers } from '../renderers.mjs';

const $$Teachers = createComponent(($$result, $$props, $$slots) => {
  const calificativo = "favoritos!";
  const teachers = ["Angel", "Pepe", "Antonio", "Marta"];
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, { "title": "Profes 1" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Listado de profes ${calificativo}</h1> <ul> ${teachers.map((teacher) => renderTemplate`<li>${teacher}</li>`)} </ul> ` })}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/teachers.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/teachers.astro";
const $$url = "/teachers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Teachers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
