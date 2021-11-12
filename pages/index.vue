<template>
  <div class="container">
    <Home/>
    <!-- Display posts from cms here -->
    <blog/>
  </div>
</template>

<script>
import Blog from "~/components/utils/Blog.vue";

export default {    
    components: {
        Blog,
    },
}
</script>