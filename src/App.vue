<template>
	<div   class ="commun container-fluid h-100">
		<div   class ="row h-100">

			<transition   name ="fade">

				<router-view   id ="default" 
                            class ="col-12 h-100" />

			</transition>
			
            <transition   name ="slide-left">

				<router-view   class ="col-md-6 col-12 h-100 title" 
                                name ="title" />

			</transition>
			
            <transition   name ="slide-right">

				<router-view   class ="col-md-6 col-12 h-100 nav-right" 
                                name ="nav" />
			
            </transition>		
        </div>
	</div>
</template>

<script>
import Creation from "@/views/Creation.vue";
import store from './store';

export default {
    components: {
        store,
        Creation
    },
    mounted() {
        /*function initi() {
            emailjs.init("user_pdCHYvlVdWV6B7vM1zSsx");
        }*/
    }
}
</script>

    
<style>
body,
html {
  height               : 100%;
  width                : 100%;
  overflow             : hidden;
  font-family          : "caviar_dreamsregular";
}

.commun {
  background-attachment: fixed;
  background-image     : url("/images/bg.png");
  background-size      : cover;
  background-repeat    : no-repeat;
}

.vcenter {
  position             : relative;
  top                  : 50%;
  transform            : translateY(-50%);
}

.scroll-page {
  overflow-y           : auto;
}

.header-page,
.section,
.card-close,
.card-close:hover {
  padding-top          : 30;
}

@media (max-width      : 767.98px) {
  .title,
  .nav-right {
    height             : 50% !important;
  }

  .header-page,
  .section {
    padding-top        : 80px;
  }
}

/* FONTS */
@font-face {
  font-family          : "caviar_dreamsregular";
  src                  : url("/fonts/caviar-dreams/CaviarDreams.ttf") format("ttf"),
    url("/fonts/caviar-dreams/caviardreams-webfont.woff2") format("woff2"),
    url("/fonts/caviar-dreams/caviardreams-webfont.woff") format("woff");
  font-weight          : normal;
  font-style           : normal;
}

/* ANIMATION */

/* SLIDE NAV */
.slide-left-enter-active,
.slide-right-enter-active {
  transition           : all 0.8s ease;
}
.slide-left-leave-active,
.slide-right-leave-active {
  transition           : transform 0.8s ease, opacity 0.6s ease 0.2s;
}
.slide-left-enter-to,
.slide-left-leave,
.slide-right-enter-to,
.slide-right-leave {
  transform            : translateX(0);
  opacity              : 1;
}
.slide-left-enter,
.slide-left-leave-to {
  position             : absolute;
  transform            : translateX(-100%);
  opacity              : 0;
}

/* SLIDE RIGHT */
.slide-right-enter,
.slide-right-leave-to {
  position             : absolute;
  left                 : 50%;
  transform            : translateX(100%);
  opacity              : 0;
}

@media (max-width      : 767.98px) {
  .slide-left-enter-to,
  .slide-left-leave,
  .slide-right-enter-to,
  .slide-right-leave {
    transform          : translateY(0);
    opacity            : 1;
  }
  .slide-left-enter,
  .slide-left-leave-to {
    position           : absolute;
    transform          : translateY(-100%);
    opacity            : 0;
  }

  /* SLIDE RIGHT */
  .slide-right-enter,
  .slide-right-leave-to {
    position           : absolute;
    top                : 50%;
    left               : 0%;
    transform          : translateY(100%);
    opacity            : 0;
  }
}

/* FADE */

.fade-enter-active {
  transition           : all 0.5s ease 0.5s;
}
.fade-leave-active {
  transition           : all 0.3s ease;
}
.fade-enter-to,
.fade-leave {
  opacity              : 1;
}
.fade-enter,
.fade-leave-to {
  position             : absolute;
  opacity              : 0;
}
</style>