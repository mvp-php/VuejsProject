<template>
  <section class="login-section">
        <div class="login-container">
            <img src="../assets/img/logo-light.png" class="logo-light mb-20" alt="logo">
            <h1 class="login-title mb-30">LINK SENT SUCCESSFULLY</h1>
            <p class="login-text text-white mb-30">We have successfully sent you an email with a link to reset your password.
                Please click on the link to complete the process.</p>
              <router-link class="slds-button login-btn" to="/reset-password">OK</router-link>
            
        </div>
    </section>

</template>


<style>
    @import '@/assets/styles/salesforce-lightning-design-system.min.css';
    
</style>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
