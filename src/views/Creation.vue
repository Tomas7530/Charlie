<template>
    <div class="container-fluid h-100">
        <div class="row h-100">

            <div class="col-12 col-md-10 scroll-page">
                <div class="row d-flex justify-content-center">

                    <HeaderPage />

                    <!-- Products -->
                    <div class="row d-flex justify-content-center">
                        <div class="col-10">
                            <div class="row">
                                <Products class="col-xl-6" v-for="(product, index) in products" :key="index" v-bind:productData="product" />
                            </div>
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
import Products from "@/components/Products.vue";

export default {
    name: "creation",
    components: {
        Band,
        HeaderPage,
        Products
    },
    data() {
        return {
            products: [
                {
                    category: "Adulte",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "Adulte",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "Adulte",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "Adulte",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "Adulte",
                    name: "Trousse simple",
                    surname: "trousse-simple",
                    description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                    price: 50,
                    img: "/images/products/product.jpg",
                    alt: "produit1",
                    option: 2
                }, {
                    category: "Adulte",
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
    }
};
</script>