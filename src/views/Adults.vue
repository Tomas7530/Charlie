<template>
	<div>
		<div>
			<h1>yoooo</h1>
		</div>

		<Band />
	</div>
</template>

<script>
import Band from "@/components/Band.vue";

export default {
	name: "adults",
	components: {
		Band
	}
};
</script>

<style>
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.8s ease;
}
.slide-left-leave-active,
.slide-right-leave-active {
  transition: transform 0.8s ease, opacity 0.6s ease 0.2s;
}
.slide-left-enter-to,
.slide-left-leave,
.slide-right-enter-to,
.slide-right-leave {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-enter,
.slide-left-leave-to {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}
</style>


