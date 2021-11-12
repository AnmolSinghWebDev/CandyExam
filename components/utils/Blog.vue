<template>
   <div class="blog">
    <a target="_blank" :href="blog.link">
        <h2>{{blog.title.rendered}} by {{blog.author}} <sub> {{blog.date}}</sub></h2>
        <p v-html="blog.content.rendered"></p>
        
    </a>
  </div>
</template>
<script>

  export default {
    name : 'blog',
    props: ['blog', 'id'],
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