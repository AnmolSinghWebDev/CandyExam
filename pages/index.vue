<template>
  <div class="container">
    <Header/>
    <Home/>
    <!-- Display posts from cms here -->
    <blog/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"; 
import Blog from "~/components/utils/Blog.vue";

export default {    
    components: {
        Blog,
        Header,
    },
}
</script>
<style>
  .container{
    width: 80%;
    margin: 0 auto;
  }
  
</style>