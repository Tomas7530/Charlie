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
                        <div id="sel-categ">
                            <select id="category" class="wrapper category" v-model="selected">
                                <option value="aucun">-</option>
                                <option value="adults">Adultes</option>
                                <option value="kids">Enfants</option>
                                <option value="plush">Peluches</option>
                                <option value="others">Accessoires</option>
                            </select>
                        </div>
                    </div>

                    <!--MODEL-->
                    <div class="select-wrap">
                        <label for="category-wrap">Catégorie</label>
                        <div id="">
                            <select id="product" class="wrapper" >
                                <option value="aucun">-</option>
                                <option v-for="(product, index) in products" :key="index" :value="product.nickname" v-show="product.category === category[0]">{{product.name}}</option>
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
    props: {
    },
    data() {
        return {
            products: [],
            select: [],
            category: [],
            name: [],
            selected: []
        }
    },
    created () {
        this.products = store.state.products
        this.select = store.state.select
        this.category = store.state.category
        this.selected = this.category
        this.selectOptionCateg()
        this.selectOptionProd()
    },
    methods: {
        selectOptionCateg() {
            setTimeout(function () {
                $('#category option[class="selected"]').prop('selected', false)
                $('#category option[value='+ store.state.category[0] +']').prop('selected', true)
            }
            ,1000)
        },
        selectOptionProd() {
            setTimeout(function () {
                $('#product option[class="selected"]').prop('selected', false)
                $('#product option[value='+ store.state.name +']').prop('selected', true)
            }
            ,1000)
        }
    }
};


</script>

<style>
</style>