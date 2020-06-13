<template>
    <div class="header-page container-fluid h-100">
        <div class="row h-100">
            <div class="col-12 col-md-10">
                <!--
                <div class="row d-flex justify-content-center">
                    <HeaderPage />
                </div>
                -->

                <div class="row d-flex justify-content-center">

                    <!--CATEGORY-->
                    <div class="select-wrap">
                        <label for="category-wrap">Catégorie</label>
                        <div class="">
                            <select name="category" class="wrapper">
                                <option value="aucun">-</option>
                                <option value="kids">Enfant</option>
                                <option value="adults">Adulte</option>
                                <option value="plush">Peluches</option>
                                <option value="others">Accessoires</option>
                            </select>
                        </div>
                    </div>

                    <!--MODEL-->
                    <div class="select-wrap">
                        <label for="category-wrap">Catégorie</label>
                        <div class="">
                            <select name="category" class="wrapper">
                                <option value="aucun">-</option>
                                <option value="kids"></option>
                            </select>
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
import store from "../store";

export default {
    name: "custom",
    props: {
        product: Object
    },
    components: {
        Band,
        HeaderPage,
        Products
    },
    created() {
        this.products = store.state.products
    }
};

</script>

<style>
</style>