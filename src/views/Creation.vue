<template>
    <div class="container-fluid h-100">
        <div class="row h-100">

            <div class="col-12 col-md-10 scroll-page">
                <div class="row d-flex justify-content-center">

                    <HeaderPage class="header-page" v-if="!opened" />

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
                                <div class="category" v-for="(card, index) in cards" :key="index" :value="card.category" v-if="card.open">
                                    <div class="product-card text-center" style="background:#f8f8f8;">
                                        <div class="card-close" v-on:click="closeCard(card)">
                                            <p class="close-icon vcenter">X</p>
                                        </div>
                                        <h1 class="product-title">{{card.name}}</h1>
                                        <h3>les créations :</h3>
                                        <div class="row d-flex justify-content-center">
                                            <Products class="col-lg-6" v-for="(product, index) in products" :key="index" v-bind:productData="product" />
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
                    category: "adults",
                    name: "Adultes"
                }, {
                    category: "kids",
                    name: "Enfants"
                }, {
                    category: "others",
                    name: "Accessoires"
                }
            ],
            products: [
                {
                    category: "adults",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "adults",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "kids",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "kids",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "others",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "others",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }
            ]

        }
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
.category {
  position: absolute !important;
  height: 800px !important;
  width: 750px !important;
  background-color: blue;
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

.close-icon {
  padding: 0 !important;
  transition: all 0.1s ease;
  font-family: "cocogoose-light";
  font-size: 1.5rem !important;
  font-weight: 100;
  text-shadow: 0.05rem 0.05rem rgba(196, 196, 196, 0.589);
}

.card-close {
  transition: all 0.1s ease;
  text-align: center;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1.3rem;
  border: 0.1rem inset rgb(43, 43, 43);
}

.card-close:hover {
  transition: all 0.1s ease;
  background-color: rgba(0, 0, 0, 0.158);
  cursor: pointer;
  top: 0.66rem;
  right: 0.66rem;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 0.9rem;
}
</style>



