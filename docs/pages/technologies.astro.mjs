import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderTemplate, d as addAttribute, f as renderSlot, r as renderComponent } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MiLayout } from '../chunks/MiLayout_D0BDcUWH.mjs';
import { s as styles } from '../chunks/technologies.e402f0f7_D_aycYbv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Technology = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Technology;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <h3>${title}</h3> <p>${description}</p> </li>`;
}, "C:/Users/DAM2/Documents/porfolio/src/components/Technology.astro", void 0);

const technologies = [
	{
		title: "html",
		description: "Estructura de la web"
	},
	{
		title: "css",
		description: "Estilo de la web"
	},
	{
		title: "js",
		description: "Logica de negocio"
	}
];

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(styles.btn, "class")}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/DAM2/Documents/porfolio/src/components/Button.astro", void 0);

const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, { "title": "lista de tecnologias" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Listado de tecnologias que domino</h1> <ul> ${technologies.map((technology) => renderTemplate`${renderComponent($$result2, "Technology", $$Technology, { "title": technology.title, "description": technology.description })}`)} </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/" }, { "default": ($$result3) => renderTemplate`Volver` })} ` })}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/technologies.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/technologies.astro";
const $$url = "/technologies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Technologies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
