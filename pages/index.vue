<template>
  <div class="container">
    <Header/>
    <Home/>
    <!-- Display posts from cms here -->
    <div class="blogContainer">
      <Blog v-for="blog in blogs" :key="blog.id" :id="blog.id" :blog="blog"/>
    </div>
  </div>
</template>

<script>
  import Header from "~/components/Header.vue"; 
  import Blog from "~/components/utils/Blog.vue";
  import axios from "axios";

  export default {    
      components: {
          Blog,
          Header,
      },

      data() {
        return {
          blogs: [],
        }
      },

      async created () {
        const config = {
          headers: {
            'Accept' : 'application/json',
          }
        }

        try {
          const res = await axios.get('https://exam.candy-dev.com/wp-json/wp/v2/posts', config);
          this.blogs = res.data; 
        
        } catch(err){
          console.log(err);
        }
      },
  }
</script>
<style>
  .container{
    width: 80%;
    margin: 0 auto;
  }
  .blogContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>