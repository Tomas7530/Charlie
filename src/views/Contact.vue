<template>
    <div   class ="container-fluid h-100">
        <div   class ="row h-100">
            <div   class ="col-12 col-md-10 scroll-page">
                <div   class ="row d-flex justify-content-center">

                    <HeaderPage />

                    <!-- Form Contact -->
                    <form   class ="col-10 text-center" 
                             role ="form" >

                        <div   class ="row">

                            <div   class ="col-lg-1 col-xl-2"></div>

                            <div   class ="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-4 form-group">

                                <label   for ="exampleInputName">
                                    Nom :
                                </label>
                                
                                <input   class ="form-control"
                                          type ="text" 
                                            id ="exampleInputName" >
                            </div>

                            <div   class ="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-4 form-group">

                                <label   for ="exampleInputEmail1">
                                    Email :
                                </label>

                                <input   class ="form-control"
                                            id ="exampleInputEmail1"
                                          type ="email" >
                            </div>

                            <div   class ="col-lg-1 col-xl-2"></div>
                        </div>

                        <div   class ="form-group ">

                            <label   for ="exampleInputFile">
                                Ajouter un fichier
                            </label>

                            <div>

                                <input   class ="form-control-filed-flex justify-content-center" 
                                            id ="exampleInputFile"
                                          type ="file" >
                                
                                <p   class ="help-block">
                                    Example block-level help text here.
                                </p>
                            </div>
                        </div>

                        <button   class ="btn btn-primary"
                                   type ="submit" >
                            Envoyer
                        </button>
                    </form>

                    <Credits />

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
import Credits from "@/components/Credits.vue";

export default {
    name      : "creation",
    components: {
        Band,
        HeaderPage,
        Credits
    }
};
</script>

<style scoped>
label {
  font-size      : 2rem;
}

@media (max-width: 1199.98px) {
  label {
    font-size    : 1.8rem;
  }
}

@media (max-width: 991.98px) {
  label {
    font-size    : 1.6rem;
  }
}

@media (max-width: 767.98px) {
  label {
    font-size    : 1.8rem;
  }
}

@media (max-width: 575.98px) {
  label {
    font-size    : 1.6rem;
  }
}
</style>