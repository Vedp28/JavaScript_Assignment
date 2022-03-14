$(function () {
    $('.accordion .accordion-control').on('click', function (e) {
        e.preventDefault();

        let a = $(this).next('.accordion-panel');
        $('.accordion-panel').not(a)
            .slideUp();

            a.not(':animated')
            .slideToggle();
            

    });
    $(".tab-list").each(function () {
        let $this = $(this); 
        let $tab = $this.find("li.active");
        let $link = $tab.find("a");
        let $panel = $($link.attr("href"));
        $this.on("click", ".tab-control", function (e) {
         
          e.preventDefault();
          let $link = $(this); 
          let id = this.hash;
          if (id && !$link.parent().is(".active")) {
            // If not active
            $panel.removeClass("active");
            $tab.removeClass("active");
            $panel = $(id).addClass("active");
            $tab = $link.parent().addClass("active"); 
          }
        });
      });
});