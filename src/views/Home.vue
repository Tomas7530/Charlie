<template>
  <!-- <div class="home">
		<img src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div> -->

  <div>
    <!-- TITLE -->
    <div class="row d-flex justify-content-center vcenter">
      <h1 class="text-center pb-3">
        Charlie's Créa
      </h1>
      <h5 class="text-center">
        Lorem ipsum dolor sit amet,
        <strong>consectetur adipiscing elit</strong>.
      </h5>

      <Credits />
    </div>
  </div>

  <!-- Page content -->
  <!-- <div class="container-fluid">
			<transition name="fade">
				<router-view class="view-content" />
			</transition>
		</div> -->
</template>

<script>
// @ is an alias to /src
import Credits from "@/components/Credits.vue";

export default {
  name: "home",
  components: {
    Credits
  }
};
</script>

<style scoped>
h1 {
  font-size: 4.5rem;
}

h5 {
  font-size: 1.75rem;
}

.credits {
  font-size: 0.9rem;
}

@media (max-width: 1199.98px) {
  h1 {
    font-size: 4rem;
  }

  h5 {
    font-size: 1.5rem;
  }
}

@media (max-width: 991.98px) {
  h1 {
    font-size: 3rem;
  }

  h5 {
    font-size: 1.3rem;
  }
}

@media (max-width: 767.98px) {
  h1 {
    font-size: 4rem;
  }

  h5 {
    font-size: 1.5rem;
  }
}

@media (max-width: 575.98px) {
  h1 {
    font-size: 3rem;
  }

  h5 {
    font-size: 1.3rem;
  }
}
</style>

