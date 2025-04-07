const loadComponents = async (id, url) => {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
};
window.onload = _ => {
  Promise.all([
  loadComponents("mobile-menu", "/src/sections/mobile_menu.html"),
  loadComponents("custom_mobile-menu", "src/sections/custom_mobile_menu.html"),
  loadComponents("header", "src/sections/header.html"),
  loadComponents("hero", "src/sections/hero.html"),
  loadComponents("about", "src/sections/about.html"),
  loadComponents("bs", "src/sections/bs.html"),
  loadComponents("reference", "src/sections/reference.html"),
  loadComponents("footer", "src/sections/footer.html"),
  loadComponents("imprint", "src/sections/imprint-page.html"),
  loadComponents("privacy-pol", "src/sections/privacy_pol-page.html")
  ]).then( _ => {
    document.getElementById("menu-a").addEventListener("click", _ => console.log("clicked!"))
  });
};
