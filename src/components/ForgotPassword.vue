<template>
    <section class="login-section">
        <div class="login-container">
            <img src="../assets/img/logo-light.png" class="logo-light mb-20" alt="logo">
            <h1 class="login-title mb-30">PASSWORD RESET</h1>
            <p class="login-text text-white mb-30">To reset your password, please enter your registered email address
                below.
                We will send you an email with a link to reset the password.</p>
            <form @submit="submitData" method="POST">
                <div class="slds-form-element custom-form-element mb-30">
                    <label class="slds-form-element__label text-white" for="text-input-id-2">EMAIL ID</label>
                    <div class="slds-form-element__control">
                        <input type="text"  v-model="forgotForm.email" name="email" id="text-input-id-2" placeholder="" 
                            class="slds-input" />
                    </div>
                </div>

                <button type="submit" class="slds-button login-btn mb-40">GET RESET LINK</button>
                <div class="back-login-link">
                <router-link to="/">Back to Login page</router-link>

            </div>
            </form>
            
            
        </div>
    </section>

</template>


<style>
@import '@/assets/styles/salesforce-lightning-design-system.min.css';
</style>
<script>
export default {
    name: 'ForgotPassword',
    data() {
        return {

            forgotForm: {
                email: ''
            }
        }
    },
    methods: {
      
        submitData(e) {
            this.axios.post(process.env.VUE_APP_BASE_URL + '/' + process.env.VUE_APP_VERSION + "/forgot-password", this.forgotForm).then((result) => {
                console.log(result)
                this.$router.push({ name: 'link-successfully' });
            }).catch(error => {
                this.$toast.error(error);
                //this.$toast.error(error.response.data.error_msg);

            })
            setTimeout(this.$toast.clear, 3000)
            e.preventDefault();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
