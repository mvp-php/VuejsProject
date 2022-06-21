<template>

    <select>
        <option value="">Select Role</option>
        <option v-for="subcategory in rolesDropList" :key="subcategory" :value="subcategory.id">
            {{ subcategory.role_title }}</option>
    </select>
</template>
<script>
export default {
    name: "Drop-down-component",
    props: ['rolesDropList'],
    methods: {
        created: function () {
            alert("OK");
            console.log('user data from parent component:')

        },
    }
};
</script>