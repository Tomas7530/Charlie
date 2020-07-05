<template>
    <div   class ="col-md-4 col-sm-12">
        <div   class ="flip-container" 
              :class ="cardData.category+'-pos'" >

            <div   class ="flipper hexagon">
                <div class="hexagon-in1">
                <div class="hexagon-in2">

                <div   class ="front">
                    <h5   class ="card-title">
                        Créations {{ cardData.name }}
                    </h5>
                </div>

                <div   class ="back">
                    <div   class ="back-card" 
                          :class ="cardData.category" 
                          :value ="cardData.category">

                        <div   class ="logo" value="child">
                            <img  :src ="'../images/cards/'+cardData.image" 
                                  :alt ="'logo-'+ cardData.category" />
                        </div>

                        <div   class ="title" 
                               value ="child" >
                            {{ cardData.title }}
                        </div>

                        <p   value ="child">
                            {{ cardData.text }}
                        </p> 
                    </div>
                </div>

                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Products from "@/components/Products.vue";

export default {
  name       : "flipcard",
  components : {
    Products
  },
  props      : {
    category : '',
    cardData : {
      type   : Object,
      default: function () { return {} }
    }
  },
  mounted() {

  },
  methods : {
      overCard () {
          
      }
  }
};
</script>

<style scoped>
/* .flip-container.active,
.flip-container.active .back {
  transition         : all 0.5s ease;
  width              : 70vw !important;
  height             : auto !important;
  padding-bottom     : 20px;
}

.flip-container.active .front {
  transform          : rotateY(180deg);
}

.flip-container.active .back {
  transform          : rotateY(0deg);
}

.flip-container.hover .front {
  transform          : rotateY(180deg);
}

.flip-container.hover .back {
  transform          : rotateY(0deg);
  cursor             : pointer;
}

.flip-container {
  transition         : all 0.5s ease;
  transform          : perspective(1500px);
  transform-style    : preserve-3d;
}

.flipper {
  transition         : 0.6s;
  transform-style    : preserve-3d;
  position           : relative;
} */


.flip-container:before{
    content: " ";
    width: 0; height: 0;
    border-bottom: 50px solid rgb(150, 150, 150);
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    position: absolute;
    top: -50px;
}

.flip-container:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -99px;
    border-top: 50px solid rgb(150, 150, 150);
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
}

.flip-container,
.front,
.back {
    transition         : all 0.5s ease;
    margin-top: 50px;
    width: 200px;
    height: 60px;
    background-color: rgb(150, 150, 150);
    position: absolute;
}

.front,
.back {
  backface-visibility: hidden;
  transition         : 0.6s;
  transform-style    : preserve-3d;
  transform          : rotateY(0deg);
  top                : 0;
  left               : 0;
}

.front {
    z-index            : 2;
}

.front .card-title {
  font-size          : 2em;
  display            : inline-block; 
  padding            : 5px 10px;
  border-radius      : 4px;
  bottom             : 30px;
  left               : 5px;
  position           : relative;
  color: rgb(241, 241, 241);
  text-shadow        : 0.1em 0.1em 0.05em #333;
  /* transform          : rotate(-20deg); */
  width              : 15%;
}

.back {
  background         : lightblue;
  transform          : rotateY(-180deg);
}

.back .logo {
  width              : 100%;
  height             : auto;
}

.back .logo img {
  width              : 100%;
  border-radius      : 4px;
}

.back .title {
  font-weight        : bold;
  color              : #00304a;
  top                : 180px;
  left               : 0;
  right              : 0;
  text-align         : center;
  text-shadow        : 0.1em 0.1em 0.05em #acd7e5;
  font-family        : Courier;
  font-size          : 22px;
}

.back p {
  bottom             : 40px;
  left               : 0;
  right              : 0;
  text-align         : center;
  padding            : 0 20px;
  font-size          : 18px;
}
</style>