<template>
	<div   class ="container-fluid h-100">
		<div   class ="row h-100">
			<div   class ="col-12 col-md-10">

				<div  class ="row d-flex justify-content-center">

					<HeaderPage />

				</div>
			</div>

			<Band />
		
        </div>
	</div>
</template>

<script>
// @ is an alias to /src
import Band from "@/components/Band.vue";
import HeaderPage from "@/components/HeaderPage.vue";

export default {
	name      : "intro",
	components: {
		Band,
		HeaderPage
	}
};
</script>


