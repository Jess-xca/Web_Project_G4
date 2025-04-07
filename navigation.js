// const loadComponents = (id, url) => {
//   return fetch(url)
//     .then((response) => response.text())
//     .then((html) => {
//       document.getElementById(id).innerHTML = html;
//     });
// };
const loadComponents = async (id, url) => {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
};
window.onload = _ => {
  Promise.all([
  loadComponents("header", "src/sections/header.html"),
  loadComponents("hero", "src/sections/hero.html"),
  loadComponents("about", "src/sections/about.html"),
  loadComponents("bs", "src/sections/bs.html"),
  loadComponents("reference", "src/sections/reference.html"),
  loadComponents("footer", "src/sections/footer.html")
  ]).then( _ => {
    document.getElementById("menu-a").addEventListener("click", _ => console.log("clicked!"))
  });
};
