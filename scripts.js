function init() {
  // MOVEMENT BUTTON

  let movementbutton = document.getElementById("movement");

  movementbutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
      movementbutton.style.bottom = "20px";
    else movementbutton.style.bottom = "-50px";
  };

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    movementbutton.style.bottom = "20px";
  else movementbutton.style.bottom = "-50px";

  // BURGER MENU

  let navmenu = document.getElementById("navmenu");
  let navlinks = document.getElementById("navlinks");
  let navmenuopened = false;
  navmenu.addEventListener("click", () => {
    navmenuopened = !navmenuopened;

    if (navmenuopened) {
      navlinks.style.right = "0";
      navmenu.className = "cross";
    } else {
      navlinks.style.right = "-110%";
      navmenu.className = "burger";
    }
  });

  // LINKS

  let linkname = document.body.getAttribute("data-linkname");
  if (linkname != null) {
    let links = document.getElementsByClassName("link_" + linkname);
    for (let i = 0; i < links.length; i++) links[i].classList.add("active");
  }

  // PAGE

  let pagename = document.body.getAttribute("data-pagename");
  if (pagename != null) {
    let page = document.getElementById("page");
    page.textContent = pagename;
  }
}

// AUTOLOADER

let loaders = document.getElementsByClassName("loader");

let toload = loaders.length;

for (let i = 0; i < loaders.length; i++) {
  let src = loaders[i].getAttribute("data-src");
  if (src == null) {
    toload--;
    if (toload == 0) init();
  } else {
    let request = new XMLHttpRequest();

    request.open("GET", src, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400)
        loaders[i].innerHTML = request.responseText;
      toload--;
      if (toload == 0) init();
    };

    request.send();
  }
}
