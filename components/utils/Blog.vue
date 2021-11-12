<template>
   <div class="blog">
    <a target="_blank" :href="blog.link">
        <h2>{{blog.title.rendered}} by {{blog.author}} <sub> {{blog.date}}</sub></h2>
        <p v-html="blog.content.rendered"></p>
        <div class="img" v-if="blog.featured_media !== 0" >
          
          <img :src="this.featured">
        </div>
    </a>
  </div>
</template>
<script>
  import axios from 'axios';
  
  export default {
    name : 'blog',
    props: ['blog', 'id'],

    mounted () {
      if (this.blog.featured_media > 0){
        this.getMedia(this.blog.featured_media)
      }
    },

    data () {
      return{
        featured : [],
      }
    },

    methods: {
      async getMedia (id) {
        const config = {
          headers: {
            'Accept' : 'application/json',
          }
        }
        
        const res = await axios.get(`https://exam.candy-dev.com/wp-json/wp/v2/media/${id}`, config);
        
        this.featured = res.data.source_url;
      }  
    },
  }
</script>
<style scoped>
  .blog{
    border: 1px solid red;
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
  }

  a{
    text-decoration: none;
  }

  h2, p{
    color: black;
    text-decoration: none;
  }
  sub{
    font-size: 16px;
    color: rgb(109, 108, 108);
  }
  
</style>