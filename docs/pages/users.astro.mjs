import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$MiLayout } from '../chunks/MiLayout_D0BDcUWH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const apikey = "https://jsonplaceholder.typicode.com/users/";
  const response = await fetch(apikey);
  const users = await response.json();
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Lista de usuarios</h1> <p id="output"></p><ul> ${users.map((user) => renderTemplate`<li><a${addAttribute(`/users/${user.id}`, "href")}>${user.name} - ${user.email}</a></li>`)} </ul>  ` })} <!--Async arriba del todo
le sobra el +
la lambda
catch
y en el if solo hacerlo con salida --> ${renderScript($$result, "C:/Users/DAM2/Documents/porfolio/src/pages/users/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/users/index.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/users/index.astro";
const $$url = "/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
