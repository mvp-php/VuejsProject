<template>
    <textarea id="textarea-id-01  " v-on:change="chagneme" v-model="categoryDescription"
        placeholder="Description comes here with a character limit."
        class="slds-textarea custom-grid-textarea cat-desc"></textarea>
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