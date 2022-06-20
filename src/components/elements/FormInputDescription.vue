<template>
    <textarea ></textarea>
</template>
<script>
export default {
    name: "InputDescription",
    props: ["data"],
    data() {
        return {
            dataV: this.data,
        }
    },
    methods: {
        chagneme(evt) {
            this.$emit("myEvent", this.data, evt.target.value)
        },
    }
};
</script>