import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_oBenZSHc.mjs';
import 'kleur/colors';
import { $ as $$MiLayout } from '../../chunks/MiLayout_D0BDcUWH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await response.json();
  return posts.map((post) => ({
    params: { id: post.id.toString() },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MiLayout", $$MiLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Datos del Post</h1> <p>Titulo: ${post.title}</p> <p>Contenido: ${post.body}</p> ` })}`;
}, "C:/Users/DAM2/Documents/porfolio/src/pages/posts/[id].astro", void 0);

const $$file = "C:/Users/DAM2/Documents/porfolio/src/pages/posts/[id].astro";
const $$url = "/posts/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
