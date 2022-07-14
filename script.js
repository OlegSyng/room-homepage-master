document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      type  : 'fade',
      rewind: true,
      arrowPath: "M1 0l12 12L1 24",
      autoWidth: true,
      keyboard: true,
      classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
        pagination: 'splide__pagination your-class-pagination',
        page      : 'splide__pagination__page your-class-page',
      },
    } );
    splide.mount();
  } );




addToggleClass = () => {
    const navbarToggler = document.getElementById("navbar__toggler");
    const navbarCollapse = document.getElementById("navbar__collapse");
    navbarToggler.classList.toggle("navbar__toggler--collapsed");
    navbarCollapse.classList.toggle("navbar__collapse--show");
}

function slidePrev() {
    document.getElementById('slide-prev').click();
}

function slideNext() {
    document.getElementById('slide-next').click();
}


const mediaQuery = window.matchMedia('(min-width: 62.5em)')
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    const navbarCollapse = document.getElementById("navbar__collapse");
    navbarCollapse.classList.add("navbar__collapse--show");
  } else {
    const navbarCollapse = document.getElementById("navbar__collapse");
    navbarCollapse.classList.remove("navbar__collapse--show");
  }
}
// Register event listener
mediaQuery.addEventListener('change', handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)


