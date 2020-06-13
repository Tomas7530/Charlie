<template>
    <div class="container-fluid h-100">
        <div class="row h-100">

            <div class="col-12 col-md-10 scroll-page">
                <div class="row d-flex justify-content-center">

                    <HeaderPage class="header-page" v-if="!opened" />
                    <p></p>

                    <!-- Flip card -->
                    <div class="col-12">
                        <div class="row d-flex justify-content-around">
                            <div v-on:mouseenter="mouseEnterCard($event)" v-on:mouseleave="mouseLeaveCard()" v-on:click="goToProducts(card)" v-for="(card, index) in cards" :key="index" :value="card.category" v-if="!opened">
                                <FlipCard class="flip-card row" v-bind:cardData="card" />
                            </div>
                        </div>
                    </div>

                    <!-- Products -->
                    <div class="col-12">
                        <div class="row d-flex justify-content-around">

                            <transition name="zoom-fade">
                                <div class="section" v-for="(card, index) in cards" :key="index" :value="card.category" v-if="card.open">
                                    <div class="product-card text-center" style="background:#f8f8f8;">
                                        <div class="card-close" v-on:click="closeCard(card)">
                                            <p class="close-icon-section vcenter">X</p>
                                        </div>
                                        <h1 class="product-title">{{card.name}}</h1>
                                        <h3>les créations :</h3>
                                        <div class="row d-flex justify-content-center" v-on:mouseenter="mouseEnterProd($event)">
                                            <Products class="col-lg-6" v-for="(product, index) in products" :key="index" v-if="card.category == product.category" v-bind:product="product" />
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
import Band from "@/components/Band.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import FlipCard from "@/components/FlipCard.vue";
import Products from "@/components/Products.vue";
import Vue from 'vue';
import store from "../store";

export default {
    name: "creation",
    components: {
        Band,
        HeaderPage,
        FlipCard,
        Products,
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
                    name: "Enfants"
                }, {
                    category: "adults",
                    name: "Adultes",
                    title: "cliquez pour voir les produits",
                    text: "zdko zedokn egrg epkznnzd zfjnonbap ozknedonz g zkoefokzn mpooaz"
                }, {
                    category: "plush",
                    name: "Peluches"
                }, {
                    category: "others",
                    name: "Accessoires"
                }]
        }
    },
    created() {
        this.products = store.state.products
        //ProductsList.$data.products
        /* Pour modif : panierProductCopy = JSON.parse(JSON.stringify(product)) */
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
  font-size: 1.8rem;
  top: 2rem;
  left: 1rem;
}

.card-close:hover {
  transition: all 0.1s ease;
  cursor: pointer;
  font-size: 2rem;
  left: 1.2rem;
}

.card-close:active {
    left: 0.8rem;
}

</style>