<template>
   <div class="blog">
    <a target="_blank" :href="blog.link">
        <h2>{{blog.title.rendered}} by {{blog.author}} <sub> {{blog.date}}</sub></h2>
        <p v-html="truncate(blog.content.rendered, 240)"></p>
        <div class="img" v-if="blog.featured_media !== 0" >
          
          <img :src="this.featured.source_url" :alt="this.featured.alt_text">
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
        
        this.featured = res.data;
      },
      truncate (text, length){
        if(text.length > length){
          return text.substring(0,length) + '..';
        }else {
          return text;
        }
      }
    },
  }
</script>
<style scoped>
  .blog{
    background-color: #494368;
    width: 47%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 15px;
    padding-bottom: 70px;
    margin: 30px auto;
    min-height: 700px;
    align-content: center;
    transition: all ease 0.4s;
    cursor: pointer;
  }

  .blog:hover{
    transform: scale(1.043);
  }

  h2{
    color: #FFF;
    font-size: 31px;
  }

  a{
    text-decoration: none;
    width: 80%;
  }

  img{
    width: 100%;
    height: auto;
  }

  p{
    color: #F4B393 ;
    text-decoration: none;
    font-size: 23px;
    margin-top: 15px;
    margin-bottom: 30px;
    line-height: 1.2;
  }
  
  sub{
    font-size: 16px;
    color: #F4B393;
  }
  
</style>