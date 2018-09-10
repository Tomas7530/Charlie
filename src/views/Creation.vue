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
                            <div v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeave()" v-on:click="goToProducts(card)" v-for="(card, index) in cards" :key="index" :value="card.category" v-if="!opened">
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
                                        <div class="row d-flex justify-content-center">
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
import ProductsList from "../ProductsList";

export default {
    name: "creation",
    components: {
        Band,
        HeaderPage,
        FlipCard,
        Products
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
        this.products = ProductsList.$data.products
        /* Pour modif : panierProductCopy = JSON.parse(JSON.stringify(product)) */
    },
    methods: {
        mouseEnter: function (event) {
            var element = event.target,
                value = element.getAttribute('value');
            if (!$('.flip-container').hasClass('active'))
                $('.' + value).addClass('hover');
            return;
        },
        mouseLeave: function () {
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

.close-icon-section {
  font-family: "cocogoose-light";
  top: -0.7rem;
  margin: 0 !important;
  padding: 0 !important;
  transition: all 0.1s ease;
  font-size: 1.5rem !important;
  font-weight: 100;
  text-shadow: 0.05rem 0.05rem rgba(196, 196, 196, 0.589);
}

.card-close {
  transition: all 0.1s ease;
  text-align: center;
  position: absolute;
  margin: 0.1rem;
  right: 0.1rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1.3rem;
  border: 0.1rem inset rgb(43, 43, 43);
}

.card-close:hover {
  transition: all 0.1s ease;
  background-color: rgba(0, 0, 0, 0.158);
  cursor: pointer;
  margin: 0.15rem;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 0.9rem;
}
</style>