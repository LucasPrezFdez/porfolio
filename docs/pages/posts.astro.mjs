import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$MiLayout } from '../chunks/MiLayout_D0BDcUWH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const apikey = "https://jsonplaceholder.typicode.com/posts/";
  const response = await fetch(apikey);
  const posts = await response.json();
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, { "title": "Lista de posts" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Lista de Posts</h1> <ul> ${posts.map((post) => renderTemplate`<li><a${addAttribute(`/posts/${post.id}`, "href")}>${post.title}</a></li>`)} </ul> ` })}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/posts/index.astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
