<template>
  <section class="login-section">
    <div class="login-container">
      <img src="../assets/img/logo-light.png" class="logo-light mb-20" alt="logo">
      <h1 class="login-title mb-30">LOGIN</h1>
      <form @submit="submitData" method="POST">
        <div class="slds-form-element custom-form-element mb-30">
          <label class="slds-form-element__label text-white" for="text-input-id-2">EMAIL ID</label>
          <div class="slds-form-element__control">
            <input v-model="loginForm.email" type="text" name="email" id="text-input-id-2" class="slds-input"
              placeholder="Email"  autocomplete="off"/>
              
          </div>
        </div>
        <div class="slds-form-element custom-form-element mb-10">
          <label class="slds-form-element__label text-white" for="text-input-pass">PASSWORD</label>
          <div class="slds-form-element__control position-relative">
            <input v-model="loginForm.password" name="password" type="password" id="text-input-pass"
              placeholder="Password" class="slds-input"  autocomplete="off"/>

            <button type="button" class="eye-btn toggle-password" @click="toggleShow"> <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i></button>
          </div>
          
        </div>
        <div class="forgot-password-link mb-20">
          <router-link to="/forgot-password">Forgot Password?</router-link>

        </div>
        <button type="submit" class="slds-button login-btn">LOGIN</button>
      </form>

    </div>
  </section>

</template>


<style>
@import '@/assets/styles/salesforce-lightning-design-system.min.css';
</style>
<script>

export default {
  name: "LoginNew",
  data() {
    return {

      loginForm: {
        email: '',
        password: '',
        showPassword: false
      },
      allerros: []
    }
  },
  methods: {
    submitData(e) {
      this.axios.post(process.env.VUE_APP_BASE_URL + '/' + process.env.VUE_APP_VERSION + "/call-login", this.loginForm, {
        headers: {

        }
      }).then((result) => {
        console.log(result.data.data)
        this.allerros = [];
        localStorage.setItem("userData", JSON.stringify(result.data.data))
        this.$router.push({ name: 'home' });
      }).catch(error => {
        this.allerros = error.response.data.error_msg;
        this.$toast.error(error.response.data.error_msg);

      })
      setTimeout(this.$toast.clear, 3000)
      e.preventDefault();
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }, mounted() {
    let user = localStorage.getItem("userData")
    if (user) {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
}
</script>
