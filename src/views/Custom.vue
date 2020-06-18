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
                    <p class="col-12">{{selectedCateg}} {{selectedProd}}</p>

                    <!--CATEGORY-->
                    <div class="select-wrap col-7">
                        <label for="category-wrap">Catégorie</label>
                        <div id="sel-categ">
                            <select id="category" class="wrapper category" v-model="selectedCateg">
                                <option value="aucun">-</option>
                                <option value="adults">Adultes</option>
                                <option value="kids">Enfants</option>
                                <option value="plush">Peluches</option>
                                <option value="others">Accessoires</option>
                            </select>
                        </div>
                    </div>

                    <!--MODEL-->
                    <div class="select-wrap col-7" v-show="selectedCateg !== 'aucun'">
                        <label for="category-wrap">Nom</label>
                        <div id="">
                            <select id="product" class="wrapper" v-model="selectedProd">
                                <option value="aucun">-</option>
                                <option v-for="(product, index) in products" :key="index" :value="product.nickname" v-show="product.category === selectedCateg">{{product.name}}</option>
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
import Vue from 'vue';
import Band from "@/components/Band.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import store from "../store";
    

export default {
    name: "custom",
    components: {
        Band,
        HeaderPage,
        store
    },
    data() {
        return {
            products: [],
            selectedCateg: "",
            selectedProd: ""
        }
    },
    created () {
        this.products = store.state.products
        this.selectedCateg = store.state.category[0]
        this.selectedProd = store.state.name
    },
    updated () {
        if (store.state.category !== this.selectedCateg)
            this.selectedProd = "aucun"
        store.state.category = this.selectedCateg
        store.state.name = this.selectedProd
    }
};


</script>

<style>
</style>