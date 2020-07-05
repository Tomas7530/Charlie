<template>
    <div   class ="background col-md-2 band hide"
          :style ="{ background: 'url(' + content.background + ')' }" >
        <router-link   :to ="{ path: content.direction}" 
                     class ="band-close" 
                       tag ="div" >
            
            <p    class ="fas fa-arrow-left vcenter"
             v-on:click ="animOut()" >
            </p>
        </router-link>

        <div class="d-flex justify-content-center text-center vcenter band-title">
            
            <h1 class="text-center">
                {{ content.title }}
            </h1>
        </div>
    </div>
</template>

<script>
var $ = require('jquery');


export default {
  mode : 'history',
  name : "band",
  props: {
    msg: String
  },
  data() {
    return {
      content       : {},
      bandData      : {
        intro       : {
          background: "/images/intro-band.jpg",
          title     : "Charlie",
          direction : "/"
        },
        creation    : {
          background: "/images/creation-band.jpg",
          title     : "Créations",
          direction : "/"
        },
        basket       : {
          background: "/images/order-band.jpg",
          title     : "Panier",
          direction : "/"
        },
        custom      : {
          background: "/images/custom-band.jpg",
          title     : "Personnaliser",
          direction : "/"
        },
        contact     : {
          background: "/images/contact-band.jpg",
          title     : "Contact",
          direction : "/"
        }
      }
    }
  },
  mounted() {    
    var route    = this._routerRoot._route.name;
    this.content = this.bandData[route];
    this.animIn()
  },
  methods  : {
    animIn : function () {
        setTimeout(function () {
            $('.hide')
                .addClass('show')
            $('.show')
                .removeClass('hide')},
            500
        )
    },    
    animOut: function () {
            $('.show')
                .addClass('hide')
            $('.hide')
                .removeClass('show')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* SLIDE BAND */
.show {
    transition     : transform 0.7s, opacity 0.75s;
    opacity        : 0.9;
    transform      : translateX(0%);
}
.hide{
    transition     : transform 0.4s, opacity 0.5s;
    opacity        : 0; 
    transform      : translateX(100%);
}

.background {
  background-repeat: repeat;
  background-size  : 300px !important;
}

.close-icon {
  transition       : all 0.1s ease;
  font-family      : "cocogoose-light";
  font-size        : 1.4rem;
  font-weight      : 100;
  text-shadow      : 0.05rem 0.05rem rgba(196, 196, 196, 0.589);
}

.band {
  right            : 0;
  background-color : aqua;
  height           : 100%;
}

.band-title {
  position         : absolute;
  display          : block;
  width            : 100%;
  text-shadow      : 0.15rem 0.15rem rgba(196, 196, 196, 0.589);
  transform        : rotate(-90deg);
  transform-origin : center center center;
}

.band-title h1 {
  font-size        : 6rem;
  font-weight      : 900;
}

.band-close {
  transition       : all 0.1s ease;
  text-align       : center;
  position         : absolute;
  font-size        : 2rem;
  top              : 2rem;
  left             : 1rem;
  /*width          : 2.4rem;
  height           : 2.4rem;
 /* border-radius  : 1.3rem;
  border           : 0.1rem inset rgb(43, 43, 43);*/
}

.band-close:hover {
  transition       : all 0.1s ease;
  cursor           : pointer;
  left             : 1.2rem;
}

.band-close:active {
    left           : 0.8rem;
}

@media (max-width  : 1599.98px) {
  .band-title h1 {
    font-size      : 5.5rem !important;
  }
}

@media (max-width  : 1199.98px) {
  .band-title h1 {
    font-size      : 4.5rem !important;
  }
}

@media (max-width  : 991.98px) {
  .band-title h1 {
    font-size      : 4rem !important;
  }
}

@media (max-width  : 767.98px) {
  .band {
    position       : fixed;
    width          : 100%;
    height         : 80px;
    top            : 0;
  }

  .band-title {
    position       : relative;
    top            : 25px;
    transform      : rotate(0) translateY(-50%);
  }

  .band-title h1 {
    position       : absolute;
    top            : 0;
    transform      : translateY(-33%);
    font-size      : 3rem !important;
  }
}

@media (max-width  : 575.98px) {
  .band {
    height         : 70px;
  }

  .band-title h1 {
    font-size      : 2.5rem !important;
  }
}

@media (max-width  : 460.98px) {
  .band-title h1 {
    font-size      : 2.5rem !important;
  }
}

/* FONTS */
@font-face {
  font-family      : "cocogoose-light";
  src              : url("/fonts/cocogoose/cocogoose-light.ttf") format("ttf"),
    url("/fonts/cocogoose/cocogoose-light.woff2") format("woff2"),
    url("/fonts/cocogoose/cocogoose-light.woff") format("woff");
  font-weight      : normal;
  font-style       : normal;
}
</style>