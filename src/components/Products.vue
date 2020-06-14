<template>
    <div class="product" :id="product.nickname">
        <div class="text-center" :class="product.category" :value="product.category" >
            <h3 v-if="product.name" v-html="product.name">
            </h3>
            <img :src="product.img" :alt="product.alt" class="image float-left col-6"/>
            <p class="parag float-right col-6">
                {{product.description}}
            </p>

            <router-link to="/custom" class="creation link col-3 button" tag="button">
                <h4 :value="product.nickname" v-on:click="custom($event)">Personnaliser</h4>
            </router-link>

        </div>
    </div>
</template>

<script>
import Custom from "../views/Custom";

export default {
    name: "products",
    components: {
        Custom
    },
    props: {
        product: Object
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
.parag {
    padding : 5% 5%;
}

.product {
    background-color: rgb(240, 240, 240);
    border-radius: 0.75rem;
    box-shadow: 5px 2px 2px 2px rgba(230, 230, 230, 0.9);
    padding: 10px 10px;
    margin-top: 12px;
    margin-left: 12px;
    margin-right: 12px;
}

p {
  margin-bottom: 5px;
}

img {
  width: 250px;
  height: auto;
  border-radius: 1.5rem;
}

h4 {	
	font-size: 1rem;
	margin: 0.2rem 0.2rem;
}

button {
  padding: 4px 10px;
  background-color: rgba(126, 126, 126, 0.568);
  border: none;
  border-radius: 3px;
	box-shadow: 1px 1px rgb(0, 0, 0);
    padding: 0.5% 0;
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