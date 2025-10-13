import { c as createComponent, a as renderTemplate } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Tiempo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`/*
    esta web nos da el tiempo en una ciudad determinada wttr.in/vigo?format=j1
    muestra el tiempo actual
    el usuario podra escribir en una caja de texto la ciudad que quiere consultar
*/`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/tiempo.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/tiempo.astro";
const $$url = "/tiempo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tiempo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
