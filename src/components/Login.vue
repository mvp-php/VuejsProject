<template>
  <section class="login-section">
    <div class="login-container">
      <img src="../assets/img/logo-light.png" class="logo-light mb-20" alt="logo">
      <h1 class="login-title mb-30">LOGIN</h1>
      <Form @submit.prevent="submitData" method="post">
        <div class="slds-form-element custom-form-element mb-30">
          <label class="slds-form-element__label text-white" for="text-input-id-2">EMAIL ID</label>
          <div class="slds-form-element__control">
            <input v-model="loginForm.email" type="text" name="email" id="text-input-id-2" class="slds-input"
              placeholder="Email"  autocomplete="off" />
              <span class="text-danger" id="email_error" ref="caterror"></span>
              
          </div>
        </div>
        <div class="slds-form-element custom-form-element mb-10">
          <label class="slds-form-element__label text-white" for="text-input-pass">PASSWORD</label>
          <div class="slds-form-element__control position-relative">
            <input v-model="loginForm.password" name="password" type="password" id="text-input-pass"
              placeholder="Password" class="slds-input"  autocomplete="off"/>
            
            <button type="button" class="eye-btn toggle-password" @click="toggleShow"> <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i></button>
          <span class="text-danger" id="password_error" ref="caterror"></span>
         </div>
          
        </div>
        <div class="forgot-password-link mb-20">
          <router-link to="/forgot-password">Forgot Password?</router-link>

        </div>
        <button type="submit" class="slds-button login-btn">LOGIN</button>
      </form>

    </div>
    <dangerMessage :success-message="dangerMessage" id="successMsg" class="successMsg"
                            v-if="!hides" ref="successNewMsg" />
  </section>

</template>


<style>
@import '@/assets/styles/salesforce-lightning-design-system.min.css';
</style>
<script>
import dangerMessage from './elements/dangerMessage.vue';

export default {
  
  name: "LoginNew",
   components: {
    dangerMessage
   },
  data() {
    return {
    
      loginForm: {
        email: null,
        password:null,
        showPassword: false
      },
      allerros: [],
      isSubmitted: false,
      hides:true,
      dangerMessage:''
      
    }
  },
  
  methods: {
    
    submitData() {
        document.getElementById("email_error").textContent = "";
        document.getElementById("password_error").textContent = "";
        
        var cnt =0;

        if(!this.loginForm.email.trim()){
            document.getElementById("email_error").textContent = "Enter the email address";
            event.preventDefault();
            cnt =1;
        }

        if(!this.loginForm.password.trim()){
            document.getElementById("password_error").textContent = "Enter the password";
            event.preventDefault();
            cnt =1;
        }

        if(cnt ==0){
           this.axios.post(process.env.VUE_APP_BASE_URL + '/' + process.env.VUE_APP_VERSION + "/call-login", this.loginForm, {
          headers: {}
        }).then((result) => {
          
            this.allerros = [];
            localStorage.setItem("userData", JSON.stringify(result.data.data))
            this.$router.push({ name: 'user-management' });
          }).catch(error => {
            this.dangerMessage =error.response.data.error_msg;
            this.dangerToastrShow();
          

        })
        setTimeout(this.$toast.clear, 3000)
        event.preventDefault();
      }
      
      
    },
    dangerToastrShow() {
          this.hides = false;
          setTimeout(() => this.hides = true, 5000);
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
    },
    
  },
  
}
</script>
