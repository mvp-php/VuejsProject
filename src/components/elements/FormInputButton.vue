<template>
    <button type="submit" class="slds-button slds-button_brand btnmain blue-btn "  >{{ ButtonName }}</button>
</template>
<script>
export default {
    name: "InputButton",
    props: ['ButtonName']
};
</script>