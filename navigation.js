const loadComponents = async (id, url) => {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
};
window.onload = _ => {
  Promise.all([
    loadComponents("mob-menu", "/src/sections/mobile_menu.html"),
    loadComponents("cmob-menu", "src/sections/custom_mobile_menu.html"),
    loadComponents("header", "src/sections/header.html"),
    loadComponents("hero", "src/sections/hero.html"),
    loadComponents("about", "src/sections/about.html"),
    loadComponents("bs", "src/sections/bs.html"),
    loadComponents("reference", "src/sections/reference.html"),
    loadComponents("footer", "src/sections/footer.html"),
    loadComponents("custom_header", "src/sections/custom_header.html"),
    loadComponents("custom_footer", "src/sections/custom_footer.html"),
    loadComponents("imprint-page", "src/sections/imprint-page.html"),
    loadComponents("privacy-page", "src/sections/privacy_pol-page.html"),
  ]).then( _ => {

    const mobileMenu = document.getElementById("mob-menu");
    const cMobileMenu = document.getElementById("cmob-menu");
    const closeMenu = document.getElementById("x-menu");
    const cCloseMenu = document.getElementById("cx-menu");
    const toggle = document.getElementById("mob-menu-toggle");
    const cToggle = document.getElementById("cmob-menu-toggle");
    const menuLinks = document.querySelectorAll(".menu-link");
    const pages = {
      'home': document.getElementById("home"),
      'imprint': document.getElementById("imprint-page"),
      'privacy': document.getElementById("privacy-page"),
    };
    const custom = document.getElementById("custom");

    // mob-menu
    toggle.addEventListener("click", _ =>{
      pages['home'].classList.add("hidden");
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    })
    closeMenu.addEventListener("click", _ =>{
      mobileMenu.classList.add("hidden");
      pages['home'].classList.remove("hidden");
    })


    // menu-links
    menuLinks.forEach(link =>{
      link.addEventListener("click", e =>{
        e.preventDefault();
        const target = e.target.getAttribute("href").replace("#", "");

        Object.values({
          'home': document.getElementById("home"),
          'custom': document.getElementById("custom"),
        }).forEach(section => section.classList.add("hidden"));
        if(target === "home" || target === "about" || target === "bs" || target === "reference" || target === "footer"){
          pages["home"].classList.remove("hidden");
          if(target !== "home"){
            setTimeout( _ =>{
              document.getElementById(target).scrollIntoView({ behavior: "smooth"});
            }, 50);
          }
        } else {
          custom.classList.remove("hidden");
          if(target === "imprint"){
            pages["privacy"].classList.add("hidden");
            pages["imprint"].classList.remove("hidden");
          } else {
            pages["privacy"].classList.remove("hidden");
            pages["imprint"].classList.add("hidden");
          }
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 50);


        }
        window.history.pushState({}, '', `#${target}`);
        mobileMenu.classList.add("hidden");
        cMobileMenu.classList.add("hidden");
      });
    });
    // custom-mob-menu
    cToggle.addEventListener("click", _ =>{
      custom.classList.add("hidden");
      cMobileMenu.classList.remove("hidden");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    })
    cCloseMenu.addEventListener("click", _ =>{
      cMobileMenu.classList.add("hidden");
      custom.classList.remove("hidden");
    })


  }); // Promise end
}; // Window.onload end
