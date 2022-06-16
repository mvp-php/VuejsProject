<template>
  <section class="login-section">
        <div class="login-container">
            <img src="../assets/img/logo-light.png" class="logo-light mb-20" alt="logo">
            <h1 class="login-title mb-30">RESET PASSWORD</h1>
            <form @submit="submitData" method="POST">
                <div class="slds-form-element custom-form-element mb-30">
                    <label class="slds-form-element__label text-white" for="text-input-pass">ENTER NEW PASSWORD</label>
                    <div class="slds-form-element__control position-relative">
                        <input type="password" id="text-input-pass" placeholder="Enter new password"  v-model="resetForm.password" name="password" class="slds-input" />
                        <button class="eye-btn toggle-password"><img src="../assets/img/svg/eye.svg" alt="icon"> </button>
                    </div>
                </div>
                <div class="slds-form-element custom-form-element mb-30">
                    <label class="slds-form-element__label text-white" for="text-input-pass2">RE ENTER NEW PASSWORD</label>
                    <div class="slds-form-element__control position-relative">
                        <input type="password" id="text-input-pass2" placeholder="Enter new password" v-model="resetForm.confirm_password" name="confirm_password" class="slds-input" />
                        <button class="eye-btn toggle-password2"><img src="../assets/img/svg/eye.svg" alt="icon"> </button>
                    </div>
                </div>
                <button type="submit" class="slds-button login-btn">RESET MY PASSWORD</button>
            </form>
            
           
        </div>
    </section>

</template>


<style>
    @import '@/assets/styles/salesforce-lightning-design-system.min.css';
    
</style>
<script>
export default {
  name: 'ResetPassword',
    data() {
        return {

            resetForm: {
                password: '',
                confirm_password:''
            }
        }
    },
    methods: {
      
        submitData(e) {
            this.axios.post(process.env.VUE_APP_BASE_URL + '/' + process.env.VUE_APP_VERSION + "/reset-password/"+this.$route.params.id, this.resetForm).then((result) => {
                console.log(result)
                this.$router.push({ name: 'reset-success' });
            }).catch(error => {
                this.$toast.error(error.response.data.error_msg);
            })
            setTimeout(this.$toast.clear, 3000)
            e.preventDefault();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
