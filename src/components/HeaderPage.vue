<template>
	<div class="header-page col-10 text-center">
		<div class="row d-flex justify-content-center">
			<h1 class="pb-4">
				Titre de présentation
			</h1>
			<div class="col-12 col-md-10">
				<img alt="Image Preview" src="/images/header.jpg" /></div>
			<p>
				Lorem ipsum dolor sit amet,
				<strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus.
				<em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.
				<small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "HeaderPage"
};
</script>

<style scoped>
h1 {
  font-size: 4.5rem !important;
}

img {
  width: 100%;
  height: 50%;
  border-radius: 20px;
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
