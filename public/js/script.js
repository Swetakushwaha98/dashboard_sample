function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('close');
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.getElementById("sidebar");

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("close");
  });
});


// Reload the page
$(document).ready(function () {
  $('#refresh').click(function () {
    $('#refreshIcon').addClass('rotate');
    setTimeout(function () {
      location.reload();
    }, 1000); 
  });
});


///toggle in side bar and arrow
$(document).ready(function () {
  $('.submenu-toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.submenu').slideToggle();
    $(this).parent().siblings().find('.submenu').slideUp();
    $(this).parent().siblings().find('.submenu-toggle').removeClass('active');
    e.stopPropagation();
  });
});

//dark theme sun moon btn light dark logo
document.getElementById('darkModeToggle').addEventListener('click', function () {
  const theme = $('html').attr('data-theme');
  if (theme === "light") {
    $('html').attr('data-theme', 'dark');
    this.innerHTML = '<i class="fa-solid fa-sun"></i>';
    document.getElementById('logo-full').src = '../public/assest/ClaraSoftech_White.png';
    
  } else {
    $('html').attr('data-theme', 'light');
    this.innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.getElementById('logo-full').src = '../public/assest/brand_logo.png';
  }
});

$(document).ready(function () {
  $('#profileBtn').click(function () {
    $('#profileOptions').toggle(); // Show or hide the options
  });

  // Close the menu if clicked outside
  $(document).click(function (event) {
    if (!$(event.target).closest('#profileBtn, #profileOptions').length) {
      $('#profileOptions').hide();
    }
  });
});

