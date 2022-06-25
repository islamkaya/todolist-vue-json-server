<template>
  <navbar></navbar>
  <div class="row mx-auto">
    <div class="col-xs-10 col-sm-6 col-lg-4 col_centered">
      <div class="card">
        <div class="card-body">
          <div class="h4">Kayıt Ol</div>
          <form
            @submit.prevent="register"
            method="POST"
            oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'
          >
            <div class="input-group mx-auto">
              <input
                type="text"
                v-model="email"
                class="form-control mb-3"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
            <div class="input-group mx-auto">
              <input
                type="password"
                v-model="password"
                class="form-control mb-3"
                placeholder="Password"
                name="up"
                required
              />
            </div>
            <div class="input-group mx-auto">
              <input
                type="password"
                class="form-control mb-3"
                placeholder="Confirm Password"
                name="up2"
                required
              />
            </div>
            <div class="input-group mx-auto"></div>
            <div class="input-group mx-auto">
              <button
                type="submit"
                class="btn btn-md form-control btn-primary text-white"
              >
                Kayıt Ol
              </button>
            </div>
            <div class="register_control text-center mt-2">
              <div class="text-success" v-if="registerSuccess == true">
                Kayıt Başarılı
              </div>
              <div class="text-danger">{{ registerErr }}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/nav_bar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      email: "",
      password: "",
      registerSuccess: false,
      registerErr: "",
    };
  },
  methods: {
    async register() {
      const data = {
        email: this.email,
        password: this.password,
      };
      try {
        var response = await axios.post("http://localhost:3000/register", data);
        if (response.status === 201) {
          this.registerSuccess = true;
        }
      } catch (e) {
        this.registerErr = e.response.data;
      }
    },
  },
};
</script>
<style>
.btn_size {
  width: 70%;
}
.input-group {
  width: 70%;
}
.h4 {
  margin-left: 37%;
  margin-bottom: 4% !important;
}

.col_centered {
  float: none;
  margin-right: auto;
  margin-left: auto;
}
.card {
  margin-top: 25vh !important;
}
</style>
