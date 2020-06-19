<template>
    <div   class ="container-fluid h-100">
        <div   class ="row h-100 "
                  id ="bc" >

            <div   class ="col-12 col-md-10 scroll-page">
                <div   class ="row d-flex justify-content-center">

                    <HeaderPage   class ="header-page" 
                                   v-if ="!opened" />

                    <!-- Flip card -->
                    <div   class ="col-12">
                        <div   class ="row d-flex justify-content-around">

                            <div   v-on:mouseenter ="mouseEnterCard($event)"
                                   v-on:mouseleave ="mouseLeaveCard()" 
                                        v-on:click ="goToProducts(card)" 
                                             v-for ="(card, index) in cards" 
                                              :key ="index" :value="card.category" 
                                              v-if ="!opened">

                                <FlipCard   v-bind:cardData ="card"
                                                      class ="flip-card row"  />

                            </div>
                        </div>
                    </div>

                    <!-- Products -->
                    <div   class ="col-12">
                        <div   class ="row d-flex justify-content-around">

                            <transition   name ="zoom-fade">
                                <div   class ="section" 
                                       v-for ="(card, index) in cards" 
                                        :key ="index" :value="card.category" 
                                        v-if ="card.open" >

                                    <div   class ="product-card text-center" 
                                           style ="background:#11ffee00;" >

                                        <div   v-on:click ="closeCard(card)"
                                                    class ="card-close"  >

                                            <p   class ="fas fa-arrow-left vcenter"></p>
                                        </div>

                                        <h1   class ="product-title">
                                            {{ card.name }}
                                        </h1>

                                        <h3>
                                            les créations :
                                        </h3>

                                        <div   v-on:mouseenter ="mouseEnterProd($event)"
                                                         class ="row d-flex justify-content-center" >
                                            
                                            <Products   v-bind:product ="product"
                                                                 class ="col-lg-5" 
                                                                 v-for ="(product, index) in products" 
                                                                  :key ="index" 
                                                                  v-if ="card.category == product.category" />
                                        
                                        </div>
                                    </div>
                                </div>
                            </transition>

                        </div>
                    </div>
                </div>
            </div>

            <Band />

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import App from "@/App.vue";
import Band from "@/components/Band.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import FlipCard from "@/components/FlipCard.vue";
import Products from "@/components/Products.vue";
import Custom from "@/views/Custom.vue";
import Vue from 'vue';
import store from "../store";

export default {
    name: "creation",
    components: {
        App,
        Band,
        HeaderPage,
        FlipCard,
        Products,
        Custom,
        store
    },
    props: {
        product: Object
    },
    data() {
        return {
            opened: null,
            cards: [
                {
                    category: "kids",
                    name: "Enfants",
                    title: "cliquez pour voir les produits",
                    text: "zdko zedokn egrg epkznnzd zfjnonbap ozknedonz g zkoefokzn mpooaz",
                    image: "logo-kids.jpg",
                    color: "vert"
                }, {
                    category: "adults",
                    name: "Adultes",
                    title: "cliquez pour voir les produits",
                    text: "zdko zedokn egrg epkznnzd zfjnonbap ozknedonz g zkoefokzn mpooaz",
                    image: "logo-adults.jpg",
                    color: "bleu"
                }, {
                    category: "plush",
                    name: "Peluches",
                    title: "cliquez pour voir les produits",
                    text: "zdko zedokn egrg epkznnzd zfjnonbap ozknedonz g zkoefokzn mpooaz",
                    image: "logo-plush.jpg",
                    color: "rose"
                }, {
                    category: "others",
                    name: "Accessoires",
                    title: "cliquez pour voir les produits",
                    text: "zdko zedokn egrg epkznnzd zfjnonbap ozknedonz g zkoefokzn mpooaz",
                    image: "logo-others.jpg",
                    color: "marron"
                }]
        }
    },
    created() {
        this.products = store.state.products
    },
    methods: {
        mouseEnterCard: function (event) {
            var element = event.target,
                value = element.getAttribute('value');

            if (!$('.flip-container').hasClass('active'))
                $('.' + value).addClass('hover');
            return;
            
        },
        mouseLeaveCard: function () {
            $('.flip-container').removeClass('hover');
            return;
        },
        mouseEnterProd: function (event) {
            var element = event.target,
                value = element.getAttribute('value');
        
            if (!$('.flip-container').hasClass('active'))
                $('.' + value).addClass('hover');
            return;
        },
        mouseLeaveProd: function () {
            $('.flip-container').removeClass('hover');
            return;
        },
        goToProducts: function (card) {

            for (var c of this.cards) {
                c.open = false;
            }

            this.opened = card;
            card.open = true;
        },
        closeCard: function (card) {
            this.opened = null;
            card.open = false;
        }
    },
    destroyed() {
        store.state.backgroundSize = ""
    }
};

</script>

<style>
.section {
  position: absolute !important;
  height: auto !important;
  width: 70vw !important;
  padding-bottom: 20px;
}

.flip-card {
  margin-bottom: 25px;
}

.zoom-fade-enter-active {
  transition: all 0.5s;
  transform: scale(1);
}

.zoom-fade-leave-active {
  transition: opacity 0.5s;
}

.zoom-fade-enter,
.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.card-close {
  transition: all 0.1s ease;
  text-align: center;
  position: absolute;
  font-size: 2rem;
  top: 2rem;
  left: 1rem;
}

.card-close:hover {
  transition: all 0.1s ease;
  cursor: pointer;
  left: 1.2rem;
}

.card-close:active {
    left: 0.8rem;
}

</style>