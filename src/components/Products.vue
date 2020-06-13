<template>
    <div class="product" :id="product.nickname">
        <div class="text-center" :class="product.category" :value="product.category" >
            <h3 v-if="product.name" v-html="product.name">
            </h3>
            <img :src="product.img" :alt="product.alt" />
            <p>
                {{product.description}}
            </p>

            <router-link to="/custom" class="creation link col-6" tag="button">
                <h4 :value="product.nickname" v-on:click="custom($event)">Personnaliser</h4>
            </router-link>

        </div>
    </div>
</template>

<script>
import store from "../store";

export default {
    name: "products",
    props: {
        product: Object
    },
    created() {
        this.products = store.state.products
    },
    methods: {
        custom: function (event) {
            var element = event.target,
                value = element.getAttribute('value')
            store.state.name = value
            store.commit('getProduct')
        }
    }
};
</script>

<style>
p {
  margin-bottom: 5px !important;
}

img {
  width: 250px;
  height: auto;
}

.product {
  padding-bottom: 20px;
  z-index: 1;
}

button {
  padding: 4px 10px;
  background-color: rgba(126, 126, 126, 0.568);
  border: none;
  border-radius: 5px;
  box-shadow: 1px 3px rgb(0, 0, 0);
}

button:hover {
  cursor: pointer;
  background-color: rgba(126, 126, 126, 0.767);
}

button:active {
  box-shadow: 0 1px #666;
  transform: translate(1px, 2px);
  background-color: rgb(126, 126, 126);
}
</style>