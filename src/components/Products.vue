<template>
    <div class="product d-flex justify-content-center" :value="productData.value">
        <div class="text-center">
            <h3 v-if="productData.name" v-html="productData.name">
            </h3>
            <img :src="productData.img" :alt="productData.alt" />
            <p>
                {{productData.description}}
            </p>
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
img {
  width: 250px;
  height: auto;
}
</style>
