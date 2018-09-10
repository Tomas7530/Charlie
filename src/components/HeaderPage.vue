<template>
	<div class="header-page col-8 text-center">
		<div class="row d-flex justify-content-center">
			<h1 class="pb-4">
				{{content.title}}
			</h1>
			<span class="image col-12">
				<img alt="Image Preview" :src="'/images/header/' + content.image" />
			</span>
			<p v-if="content.text" v-html="content.text">
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "HeaderPage",
	data() {
		return {
			content: {},
			headerData: {
				intro: {
					image: "header.jpg",
					title: "Charlie",
					text: "Lorem ipsum dolor sit amet,<strong>consectetur adipiscing elit</strong><em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em><small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ult</small>"
				},
				creation: {
					image: "creation.jpg",
					text: "<h1>Categories :</h1>"
				},
				order: {
					image: "header.jpg",
					title: "Panier",
					text: "Lorem ipsum dolor sit amet,<strong>consectetur adipiscing elit</strong><em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em><small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ult</small>"
				},
				custom: {
					image: "header.jpg",
					title: "Perso",
					text: "Lorem ipsum dolor sit amet,<strong>consectetur adipiscing elit</strong><em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em><small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ult</small>"
				},
				contact: {
					image: "header.jpg",
					title: "Contact",
					text: "Lorem ipsum dolor sit amet,<strong>consectetur adipiscing elit</strong><em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em><small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ult</small>"
				}
			}
		}
	},
	mounted() {

		var route = this._routerRoot._route.name;
		this.content = this.headerData[route];
	}

};
</script>

<style scoped>
.header-page.small {
  transition: all 0.4s ease;
  height: 30px;
  opacity: 0;
}

h1 {
  font-size: 4.5rem !important;
}

.image {
  padding-bottom: 2rem;
}

img {
  border-radius: 10px;
  width: 100%;
  height: auto;
}

@media (max-width: 1599.98px) {
  h1 {
    font-size: 4rem !important;
  }
}

@media (max-width: 1199.98px) {
  h1 {
    font-size: 3.5rem !important;
  }
}

@media (max-width: 991.98px) {
  h1 {
    font-size: 3rem !important;
  }
}

@media (max-width: 767.98px) {
  .header-page.small {
    transition: all 0.4s ease;
    height: 110px;
    opacity: 0;
  }

  h1 {
    font-size: 3rem !important;
  }
}

@media (max-width: 575.98px) {
  h1 {
    font-size: 2.5rem !important;
  }
}

@media (max-width: 460.98px) {
  h1 {
    font-size: 2rem !important;
  }
}
</style>
