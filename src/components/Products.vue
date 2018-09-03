<template>
    <div class="product" :value="productData.value">
        <div class="text-center">
            <h3 v-if="productData.name" v-html="productData.name">
            </h3>
            <img :src="productData.img" :alt="productData.alt" />
            <p>
                {{productData.description}}
            </p>

            <router-link to="/order" class="creation link col-6" tag="button">
                Personnaliser
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: "products",
    props: {
        productData: {
            type: Object,
            default: function () { return {} }
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