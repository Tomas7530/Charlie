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

<style scoped>
.intro {
  background-image: url("/images/intro-band.jpg");
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
  font-size: 2.8rem;
  font-weight: bold;
  transition: all 0.2s ease;
}

.link:hover .nav-title {
  transition: all 0.2s ease;
  font-size: 3rem !important;
}

.nav-icon {
  background: 0 0;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
  display: block;
  font-size: 38px;
  height: 77px;
  line-height: 71px;
  width: 77px;
  margin: auto auto 10px;
  color: rgb(46, 46, 46);
}

.link:hover .nav-icon {
  transition: all 0.2s ease;
  font-size: 40px !important;
  height: 76px;
  line-height: 71px;
  width: 76px;
}

@media (max-width: 1199.98px) {
  .nav-title {
    font-size: 2.4rem;
  }

  .link:hover .nav-title {
    font-size: 2.6rem !important;
  }

  .nav-icon {
    font-size: 33px;
    height: 68px;
    line-height: 65px;
    width: 68px;
  }

  .link:hover .nav-icon {
    font-size: 40px !important;
    height: 76px;
    line-height: 71px;
    width: 76px;
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
    font-size: 28px;
    height: 59px;
    line-height: 58px;
    width: 59px;
  }

  .link:hover .nav-icon {
    font-size: 40px !important;
    height: 76px;
    line-height: 71px;
    width: 76px;
  }
}

@media (max-width: 767.98px) {
  .nav-title {
    font-size: 2.4rem;
  }

  .link:hover .nav-title {
    font-size: 2.6rem !important;
  }

  .nav-icon {
    font-size: 33px;
    height: 68px;
    line-height: 65px;
    width: 68px;
  }

  .link:hover .nav-icon {
    font-size: 40px !important;
    height: 76px;
    line-height: 71px;
    width: 76px;
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
    font-size: 28px;
    height: 59px;
    line-height: 58px;
    width: 59px;
  }

  .link:hover .nav-icon {
    font-size: 40px !important;
    height: 76px;
    line-height: 71px;
    width: 76px;
  }
}
</style>

