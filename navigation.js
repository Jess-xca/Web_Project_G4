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
  ]).then( _ => {
    const menu = document.getElementById("mobile-menu");
    const cMenu = document.getElementById("custom_mobile-menu");
    const main = document.getElementById("home");
    document.getElementById("phone-menu").addEventListener("click", _ => {
      main.classList.toggle("hidden");
      menu.classList.toggle("hidden");
    })
    document.getElementById("xphone-menu").addEventListener("click", _ => {
      main.classList.toggle("hidden");
      menu.classList.toggle("hidden");
    })
    document.getElementById("mm-links").addEventListener("click", _ => {
      main.classList.toggle("hidden");
      menu.classList.toggle("hidden");
    })
    document.getElementById("custom-phone-menu").addEventListener("click", _ => {
      main.classList.toggle("hidden");
      cMenu.classList.toggle("hidden");
    })
    document.getElementById("custom-xphone-menu").addEventListener("click", _ => {
      main.classList.toggle("hidden");
      cMenu.classList.toggle("hidden");
    })
    document.getElementById("mm-links").addEventListener("click", _ => {
      main.classList.toggle("hidden");
      cMenu.classList.toggle("hidden");
    })
  });
};
