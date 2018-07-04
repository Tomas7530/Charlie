import Vue from "vue";

Vue.directive("scrolling", {

    inserted: function (el, binding, vnode) {

        var target = binding.value;

        if (target) {
            $(el).on("click", function () {
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);
            });
        }
    }

})