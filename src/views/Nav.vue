<template>
	<!-- NAV -->
	<div class="col-md-6 col-12 h-100">
		<div class="row h-50">
			<router-link to="/intro" class="intro link col-6" tag="div">
				<div class="text-center vcenter">
					<i class="nav-icon fas fa-user-alt"></i>
					<h3 class="nav-title">
						Charlie
					</h3>
				</div>
			</router-link>
			<router-link to="/creation" class="creation link col-6" tag="div">
				<div class="text-center vcenter">
					<i class="nav-icon fas fa-cut"></i>
					<h3 class="nav-title">
						Créations
					</h3>
				</div>
			</router-link>
		</div>
		<div class="row h-50">
			<router-link to="/order" class="order link col-6" tag="div">
				<div class="text-center vcenter">
					<i class="nav-icon fas fa-shopping-bag"></i>
					<h3 class="nav-title">
						Panier
					</h3>
				</div>
			</router-link>
			<router-link to="/contact" class="contact link col-6" tag="div">
				<div class="text-center vcenter">
					<i class="nav-icon fas fa-comment-alt"></i>
					<h3 class="nav-title">
						Contact
					</h3>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
// export default {
// 	data() {
// 		return {
// 			products: [
// 				//ADULTES
// 				{
// 					category: "adults",
// 					name: "Trousse simple",
// 					nickname: "trousse-simple",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "adults",
// 					name: "Trousse plate",
// 					nickname: "trousse-plate",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "adults",
// 					name: "Trousse berlingot",
// 					nickname: "trousse-berlingot",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "adults",
// 					name: "Trousse de toilette",
// 					nickname: "trousse-toilette",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "adults",
// 					name: "Trousse de toilette",
// 					nickname: "trousse-toilette",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "adults",
// 					name: "Trousse de toilette rabat-rangement",
// 					nickname: "trousse-toilette-rabat",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "adults",
// 					name: "Vide poche",
// 					nickname: "vide-poche",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				},

// 				//ENFANTS
// 				{
// 					category: "kids",
// 					name: "Protège carnet de santé",
// 					nickname: "protege-carnet-sante",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Trousse à langer",
// 					nickname: "trousse-langer",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Housse de table à langer",
// 					nickname: "housse-table-langer",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Barboteuse",
// 					nickname: "barboteuse",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Sortie de bain",
// 					nickname: "sortie-bain",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Tour de lit",
// 					nickname: "tour-lit",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Mobile bébé",
// 					nickname: "mobile-bebe",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Bavoir",
// 					nickname: "bavoir",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Doudou",
// 					nickname: "doudou",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Hochet",
// 					nickname: "hochet",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "kids",
// 					name: "Vide poche",
// 					nickname: "vide-poche",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				},
// 				//PELUCHES
// 				{
// 					category: "plush",
// 					name: "Lapin",
// 					nickname: "lapin",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "plush",
// 					name: "Chat",
// 					nickname: "chat",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "plush",
// 					name: "Tortue",
// 					nickname: "tortue",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "plush",
// 					name: "Hippopotame",
// 					nickname: "hippopotame",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "plush",
// 					name: "Rhinocéros",
// 					nickname: "rhinoceros",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "plush",
// 					name: "Girafe",
// 					nickname: "girafe",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				},
// 				//ACCESSOIRES
// 				{
// 					category: "others",
// 					name: "Trousse simple",
// 					nickname: "trousse-simple",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}, {
// 					category: "others",
// 					name: "Trousse simple",
// 					nickname: "trousse-simple",
// 					description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
// 					price: 50,
// 					img: "/images/products/product.jpg",
// 					alt: "produit1",
// 					option: 2
// 				}
// 			]
// 		}
// 	}
// }
</script>

<style scoped>
.intro {
  background-image: url("/images/intro-band.jpg");
}

.fa-user-alt {
  background-color: #e5f0ec;
}

.creation {
  background-image: url("/images/creation-band.jpg");
}

.order {
  background-image: url("/images/order-band.jpg");
}

.contact {
  background-image: url("/images/contact-band.jpg");
}

.link {
  transition: all 0.1s ease;
}

.link:hover {
  transition: all 0.1s ease;
  cursor: pointer;
  opacity: 0.85;
}

.nav-title {
  font-size: 2.4rem;
  font-weight: bold;
  transition: all 0.2s ease;
}

.link:hover .nav-title {
  transition: all 0.1s ease;
  font-size: 2.6rem !important;
}

.nav-icon {
  background: 0 0;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
  display: block;
  font-size: 35px;
  height: 70px;
  line-height: 70px;
  width: 70px;
  margin: auto auto 10px;
  color: rgb(46, 46, 46);
}

.link:hover .nav-icon {
  transition: all 0.1s ease;
  font-size: 40px !important;
  height: 70px;
  line-height: 70px;
  width: 70px;
}

@media (max-width: 1199.98px) {
  .nav-title {
    font-size: 2.2rem;
  }

  .link:hover .nav-title {
    font-size: 2.4rem !important;
  }

  .nav-icon {
    font-size: 30px;
    height: 60px;
    line-height: 60px;
    width: 60px;
  }

  .link:hover .nav-icon {
    font-size: 33px !important;
    height: 60px;
    line-height: 60px;
    width: 60px;
  }
}

@media (max-width: 991.98px) {
  .nav-title {
    font-size: 2rem;
  }

  .link:hover .nav-title {
    font-size: 2.2rem !important;
  }

  .nav-icon {
    font-size: 26px;
    height: 52px;
    line-height: 52px;
    width: 52px;
  }

  .link:hover .nav-icon {
    font-size: 28px !important;
    height: 52px;
    line-height: 52px;
    width: 52px;
  }
}

@media (max-width: 767.98px) {
  .nav-title {
    font-size: 2.2rem;
  }

  .link:hover .nav-title {
    font-size: 2.4rem !important;
  }

  .nav-icon {
    font-size: 30px;
    height: 60px;
    line-height: 60px;
    width: 60px;
  }

  .link:hover .nav-icon {
    font-size: 33px !important;
    height: 60px;
    line-height: 60px;
    width: 60px;
  }
}

@media (max-width: 575.98px) {
  .nav-title {
    font-size: 2rem;
  }

  .link:hover .nav-title {
    font-size: 2.2rem !important;
  }

  .nav-icon {
    font-size: 26px;
    height: 52px;
    line-height: 52px;
    width: 52px;
  }

  .link:hover .nav-icon {
    font-size: 28px !important;
    height: 52px;
    line-height: 52px;
    width: 52px;
  }
}
</style>

