<template>
	<!-- NAV -->
	<div   class ="col-md-6 col-12 h-100">
		<div   class ="row h-50">

			<router-link   class ="intro link col-6" 
                              to ="/intro"
                             tag ="div" >

				<div   class ="text-center vcenter">

					<i   class ="nav-icon fas fa-user-alt"></i>

					<h3   class ="nav-title">
						Charlie
					</h3>
				</div>
			</router-link>

			<router-link   class ="creation link col-6"
                              to ="/creation"  
                             tag ="div" >

				<div   class ="text-center vcenter">

					<i   class ="nav-icon fas fa-cut"></i>

					<h3   class ="nav-title">
						Créations
					</h3>
				</div>
			</router-link>

		</div>

		<div   class ="row h-50">

			<router-link   class ="basket link col-6" 
                              to ="/basket" 
                             tag ="div" >

				<div   class ="text-center vcenter">

					<i   class ="nav-icon fas fa-shopping-bag"></i>

					<h3  class ="nav-title">
						Panier
					</h3>
				</div>
			</router-link>

			<router-link  class ="contact link col-6"
                             to ="/contact" 
                            tag ="div" >

				<div   class ="text-center vcenter">

					<i   class ="nav-icon fas fa-comment-alt"></i>

					<h3   class ="nav-title">
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

.fa-user-alt {
  background-color: #e5f0ec;
}

.creation {
  background-image: url("/images/creation-band.jpg");
}

.basket {
  background-image: url("/images/basket-band.jpg");
}

.contact {
  background-image: url("/images/contact-band.jpg");
}

.link {
  transition      : all 0.1s ease;
}

.link:hover {
  transition      : all 0.1s ease;
  cursor          : pointer;
  opacity         : 0.85;
}

.nav-title {
  font-size       : 2.4rem;
  font-weight     : bold;
  transition      : all 0.2s ease;
}

.link:hover .nav-title {
  transition      : all 0.1s ease;
  font-size       : 2.6rem !important;
}

.nav-icon {
  background      : 0 0;
  border-radius   : 50%;
  border          : 1px solid rgb(0, 0, 0);
  display         : block;
  font-size       : 35px;
  height          : 70px;
  line-height     : 70px;
  width           : 70px;
  margin          : auto auto 10px;
  color           : rgb(46, 46, 46);
}

.link:hover .nav-icon {
  transition      : all 0.1s ease;
  font-size       : 40px !important;
  height          : 70px;
  line-height     : 70px;
  width           : 70px;
}

@media (max-width : 1199.98px) {
  .nav-title {
    font-size     : 2.2rem;
  }

  .link:hover .nav-title {
    font-size     : 2.4rem !important;
  }

  .nav-icon {
    font-size     : 30px;
    height        : 60px;
    line-height   : 60px;
    width         : 60px;
  }

  .link:hover .nav-icon {
    font-size     : 33px !important;
    height        : 60px;
    line-height   : 60px;
    width         : 60px;
  }
}

@media (max-width : 991.98px) {
  .nav-title {
    font-size     : 2rem;
  }

  .link:hover .nav-title {
    font-size     : 2.2rem !important;
  }

  .nav-icon {
    font-size     : 26px;
    height        : 52px;
    line-height   : 52px;
    width         : 52px;
  }

  .link:hover .nav-icon {
    font-size     : 28px !important;
    height        : 52px;
    line-height   : 52px;
    width         : 52px;
  }
}

@media (max-width : 767.98px) {
  .nav-title {
    font-size     : 2.2rem;
  }

  .link:hover .nav-title {
    font-size     : 2.4rem !important;
  }

  .nav-icon {
    font-size     : 30px;
    height        : 60px;
    line-height   : 60px;
    width         : 60px;
  }

  .link:hover .nav-icon {
    font-size     : 33px !important;
    height        : 60px;
    line-height   : 60px;
    width         : 60px;
  }
}

@media (max-width : 575.98px) {
  .nav-title {
    font-size     : 2rem;
  }

  .link:hover .nav-title {
    font-size     : 2.2rem !important;
  }

  .nav-icon {
    font-size     : 26px;
    height        : 52px;
    line-height   : 52px;
    width         : 52px;
  }

  .link:hover .nav-icon {
    font-size     : 28px !important;
    height        : 52px;
    line-height   : 52px;
    width         : 52px;
  }
}
</style>

