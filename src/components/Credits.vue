<template>
    <div   class ="col-10 text-center">
        <!-- Credits -->
        <ul   class ="credits-logo list-unstyled d-flex justify-content-center pt-5">

            <li   class ="list-item list-inline-item">
                <i   class ="fab fa-facebook-square"></i>
            </li>
            <li   class ="list-item list-inline-item">
                <i   class ="fab fa-facebook-messenger"></i>
            </li>
            <li   class ="list-item list-inline-item">
                <i   class ="fab fa-pinterest"></i>
            </li>
            <li   class ="list-item list-inline-item">
                <i   class ="fas fa-envelope"></i>
            </li>
            <li   class ="list-item list-inline-item">
                <i   class ="fab fa-etsy"></i>
            </li>
        </ul>
        
        <p   class ="credits text-center">
            @Tomz | Credits : MasterWeb
        </p>
    </div>
</template>

<script>
export default {
    name: "Credits"
};
</script>

<style scoped>
ul li i {
  font-size      : 1.6rem;
}

p {
  font-size      : 1.2rem;
}

@media (max-width: 1199.98px) {
  ul li i {
    font-size    : 1.4rem;
  }

  p {
    font-size    : 1rem;
  }
}

@media (max-width: 991.98px) {
  ul li i {
    font-size    : 1.2rem;
  }

  p {
    font-size    : 0.9rem;
  }
}

@media (max-width: 767.98px) {
  ul li i {
    font-size    : 1.4rem;
  }

  p {
    font-size    : 1rem;
  }
}

@media (max-width: 575.98px) {
  ul li i {
    font-size    : 1.2rem;
  }

  p {
    font-size    : 0.9rem;
  }
}
</style>

