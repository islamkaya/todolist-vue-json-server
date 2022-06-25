<template>
<navbar></navbar>
    <div class="row mx-auto">

      <div class="col-xs-10 col-sm-6 col-lg-4 col_centered">
        <div class="card">
          
          <div class="card-body ">
           
            <div class="h4">Giriş Yap</div>
            <form @submit.prevent="login" method="POST">
        <div class="input-group mx-auto">
            <input type="text" v-model="user_email" class="form-control mb-3" placeholder="Email" aria-label="Email" required>
        </div>
        <div class="input-group mx-auto">
            <input type="password" v-model="user_password" class="form-control mb-3" placeholder="Password" aria-label="Password" required>
        </div>

        <div class="input-group mx-auto">
        <button type="submit" class="btn btn-md form-control btn-primary text-white mb-3">Giriş Yap</button>
        </div>
          </form>
     
        <div class="text-center text-danger" v-if="login_err==true">Email ya da Parola Hatalı</div>
          </div>
          
        </div>

      </div>

    </div>

</template>
<script>
import { tr, en } from "@/lang";
import axios from 'axios'
import Navbar from '@/components/nav_bar.vue'
  export default {
    
    components: {
      Navbar
    },
    created() {
    if (navigator.language === "en" || navigator.language === "en-US")
      this.localization = en;
    else this.localization = tr;
    },
    data() {
      return {
          localization: "",
          login_err: false,
          user_email: "",
          user_password:"",
      }
    },
    methods: {
     async login() {
        const header = {
          headers: {
            "Content-Type": "application/json"
          }
          
        }
        const data = {
          email: this.user_email,
          password: this.user_password
        }
        try{
       var response = await axios.post("http://localhost:3000/login",data, header)
        this.$store.commit("set_jwt_token", response.data.accessToken)
         localStorage.setItem("Token", response.data.accessToken)
         this.$router.push("/dashboard")
        }       
        catch{
          this.login_err= true
        }
      },

    }
  }
</script>

<style >

.btn_size{
  width: 70%;
}
.input-group {
    width: 70% ;
}
.h4 {

  margin-left: 37%;
  margin-bottom: 4% !important;
}
.col_centered{
  float: none;
  margin-right: auto;
  margin-left: auto;
}
.card {
  margin-top: 25vh;
}
</style>
