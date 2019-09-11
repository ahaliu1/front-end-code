$(document).ready(function(){
    maphover();
});

function maphover(){
    var self = "";
    $(".city").hover(
        function(){
            self = $(this);
            self.addClass("hover").children("div").hide();
        },
        function(){
            self = $(this);
            self.children("div").show();
            self.removeClass("hover");
        }
    );
    $(".city").click(
        function(){
            self = $(this);
            self.addClass("hover").children("div").hide();
        },
        function(){
            self = $(this);
            self.children("div").show();
            self.removeClass("hover");
        }
    );

};
