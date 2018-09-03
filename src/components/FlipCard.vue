<template>
  <div class="col-md-4 col-sm-12">
    <div class="flip-container" :class="cardData.category">
      <div class="flipper">

        <div class="front">
          <h5 class="card-title">Créations {{cardData.name}}</h5>
        </div>

        <div class="back" style="background:#f8f8f8;">
          <div class="back-card" :class="cardData.category" :value="cardData.category">
            <div class="logo" value="child"><img :alt="'logo-'+ cardData.category" :src="'/images/cards/card-' + cardData.category+ '.jpg'" /></div>
            <div class="title" value="child">{{cardData.title}}</div>
            <p value="child">{{cardData.text}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import Vue from 'vue';

export default {
  name: "flipcard",
  props: {
    cardData: {
      type: Object,
      default: function () { return {} }
    }
  },
  components: {
    Products
  }
};
</script>

<style scoped>
.flip-container.active,
.flip-container.active .back {
  transition: all 0.5s ease;
  width: 70vw !important;
  height: auto !important;
  padding-bottom: 20px;
}

.flip-container.active .front {
  transform: rotateY(180deg);
}

.flip-container.active .back {
  transform: rotateY(0deg);
}

.flip-container.hover .front {
  transform: rotateY(180deg);
}

.flip-container.hover .back {
  transform: rotateY(0deg);
  cursor: pointer;
}

.flip-container,
.front,
.back {
  transition: all 0.5s ease;
  min-width: 250px;
  width: 18vw;
  height: 350px;
}

.flip-container {
  transition: all 0.5s ease;
  transform: perspective(1500px);
  transform-style: preserve-3d;
}

.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 7px;
}

.front {
  background: rgb(70, 70, 80);
  z-index: 2;
}

.front .card-title {
  font-size: 2em;
  display: inline-block;
  background: rgba(33, 33, 33, 0.9);
  color: #f8f8f8;
  padding: 5px 10px;
  border-radius: 4px;
  bottom: 25%;
  left: 7%;
  position: absolute;
  text-shadow: 0.1em 0.1em 0.05em #333;
  transform: rotate(-20deg);
  width: 15%;
}

.back {
  background: lightblue;
  transform: rotateY(-180deg);
}

.back .logo {
  width: 100%;
  height: auto;
}

.back .logo img {
  width: 100%;
  border-radius: 4px;
}

.back .title {
  font-weight: bold;
  color: #00304a;
  top: 180px;
  left: 0;
  right: 0;
  text-align: center;
  text-shadow: 0.1em 0.1em 0.05em #acd7e5;
  font-family: Courier;
  font-size: 22px;
}

.back p {
  bottom: 40px;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 20px;
  font-size: 18px;
}
</style>