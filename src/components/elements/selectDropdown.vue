<template>
{{options}}
    <select>
        <option value="">Select Role</option>
        <option v-for="option in options" :key="option" :value="option.id" >{{ option.role_title}}</option>
    </select>
</template>
<script>
export default {
    name: "SelectOption",
    prop: ['options'],
    
};
</script>