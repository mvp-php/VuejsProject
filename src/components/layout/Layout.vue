<template>
 
  <Header />
  <Sidebar />
</template>
<style>
@import '@/assets/styles/salesforce-lightning-design-system.min.css';
@import '@/assets/styles/style.css';
</style>
<script>
import Header from '../include/Header.vue';
import Sidebar from '../include/Sidebar.vue';
export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  }
}
</script>