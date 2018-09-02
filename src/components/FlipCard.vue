<template>
	<!-- <router-link to="/adults"> -->
	<div class="col-md-4 col-sm-12">
		<div class="flip-container" :class="cardData.category">
			<div class="flipper">
				<div class="front">
					<h5 class="card-title">Créations {{cardData.name}}</h5>
				</div>
				<div class="back" style="background:#f8f8f8;">
					<div class="back-card" :class="cardData.category" :value="cardData.category">
						<div class="logo" value="child"></div>
						<div class="title" value="child">@davidwalshblog</div>
						<p value="child">Mozilla Web Developer, MooTools &amp; jQuery Consultant, MooTools Core Developer, Javascript Fanatic, CSS Tinkerer, PHP Hacker, and web lover.</p>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- </router-link> -->
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
	},
	methods: {
		mouseEnter: function () {
			if (!$('.flip-container').hasClass('active'))
				$('.flip-container').addClass('hover');
			return;
		},
		mouseLeave: function () {
			$('.flip-container').removeClass('hover');
			return;
		}
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
}

.flip-container,
.front,
.back {
  transition: all 0.5s ease;
  width: 250px;
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
  left: 15%;
  position: absolute;
  text-shadow: 0.1em 0.1em 0.05em #333;
  transform: rotate(-20deg);
  width: 40%;
}

.back {
  background: lightblue;
  transform: rotateY(-180deg);
}

.back .logo {
  top: 40px;
  left: 90px;
  width: 160px;
  height: 117px;
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


