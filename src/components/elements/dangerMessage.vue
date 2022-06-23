<template>
    <div class="alert-main">
        <div class="cus-alert error-alert mb-10">
            <div class="warning-inner">
                <img src="../../assets/img/svg/ban.svg" alt="" class="warning-img">
                <div>{{ successMessage }}</div>
            </div>
            <button v-on:click="successToasterHide()" class="slds-button alert-btn">
                <img src="../../assets/img/svg/error-close.png" alt="">
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "successToaster",
    props: ['successMessage'],
    data() {
        return {
            hide: true,
        }
    },
    methods: {
        successToasterHide() {
            this.hide = true;
            console.log(this.hide)
        }
    }
}
</script>
