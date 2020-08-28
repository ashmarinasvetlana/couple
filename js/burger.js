 let burgerBtn = document.querySelector('.menu-link'),
      body = document.querySelector('body'),
      burgerMenu = document.querySelector('.menu');
	
      var link = document.querySelector('.menu-link');
      var link_active = document.querySelector('.menu-link_active');
      var menu = document.querySelector('.menu');
      var nav_link = document.querySelector('.menu a');
  
      link.addEventListener('click', (function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
  
      }));
  
      nav_link.addEventListener('click',(function() {
        link.classList.toggle('menu-link_active');
        menu.classList.toggle('menu_active');
      }));
  
  function hideMenu(e) {
    menu.style.display = "none";
    if(!e.classList.contains('menu') || e.parentElement.classList.contains('menu-link') || e.classList.contains('menu-link')) {
      burgerMenu.style.display = "none";
    }
  }

  body.addEventListener('click', (e) => {
    let target = e.target;
    if(window.innerWidth < 768 && menu.style.display == "none" && target.parentElement.classList.contains('menu-link') || window.innerWidth < 768 && target.classList.contains('menu-link') && menu.style.display == "none") {
      menu.style.display = "block";
    } else {
      hideMenu(target);
    }
  });
  
