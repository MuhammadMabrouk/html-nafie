// -------------------------------------
// variables
// -------------------------------------

// selectors
var $sideMenu = $('aside .side-menu');


// document ready
$(() => {

  // open sub-menus in side-menu on click
  $('aside .side-menu .has-children > a').on('click', function (e) {
    var $this = $(this);

    e.preventDefault();

    $this.parent('.has-children').toggleClass('open');
    $this.siblings('.sub-menu').slideToggle(300);
  });

  // go to target section on click
  $sideMenu.on('click', 'li:not(.has-children) a', function () {
    var $this = $(this);
    var target = $this.attr('href');

    $sideMenu.find('.active').removeClass('active');
    $this.addClass('active');
    $(target).addClass('active').siblings('.section').removeClass('active');
  });

  // show active section based on url
  showSectionBasedOnUrl();
});

// show active section based on url
function showSectionBasedOnUrl() {

  // get section id from window url
  var sectionId = location.hash.substr(1);
  var $activeLink = $(`aside .side-menu a[href="#${sectionId}"]`);

  if ($activeLink.parents('.sub-menu').length) {
    $activeLink.parents('.sub-menu').show().siblings('a').parent('.has-children').addClass('open');
  }

  if (sectionId) {
    $sideMenu.find('.active').removeClass('active');
    $activeLink.addClass('active');
    $(`#${sectionId}`).addClass('active').siblings('.section').removeClass('active');
  }
}
