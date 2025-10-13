import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, g as renderHead, r as renderComponent, f as renderSlot } from './astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer>Pie de pagina</footer>`;
}, "C:/Users/DAM2/Documents/porfolio/src/components/Footer.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-2j44jlrm> <ul data-astro-cid-2j44jlrm> <li data-astro-cid-2j44jlrm><a href="/" data-astro-cid-2j44jlrm>Home</a></li> <li data-astro-cid-2j44jlrm><a href="/saludo" data-astro-cid-2j44jlrm>Saludo</a></li> <li data-astro-cid-2j44jlrm><a href="/teachers" data-astro-cid-2j44jlrm>Teachers SSG</a></li> <li data-astro-cid-2j44jlrm><a href="/teachers" data-astro-cid-2j44jlrm>Teachers CSR</a></li> <li data-astro-cid-2j44jlrm><a href="/technologies" data-astro-cid-2j44jlrm>Porfolio</a></li> <li data-astro-cid-2j44jlrm><a href="/tailwind" data-astro-cid-2j44jlrm>Tailwind</a></li> <li data-astro-cid-2j44jlrm><a href="/flowbite" data-astro-cid-2j44jlrm>Flowbite</a></li> <li data-astro-cid-2j44jlrm><a href="/users/" data-astro-cid-2j44jlrm>Users (SSR)</a></li> <li data-astro-cid-2j44jlrm><a href="/posts/" data-astro-cid-2j44jlrm>Posts (SSG)</a></li> </ul> </nav> `;
}, "C:/Users/DAM2/Documents/porfolio/src/components/Menu.astro", void 0);

const $$Astro = createAstro();
const $$MiLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MiLayout;
  const title = Astro2.props.title;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Menu", $$Menu, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/DAM2/Documents/porfolio/src/layouts/MiLayout.astro", void 0);

export { $$MiLayout as $ };
