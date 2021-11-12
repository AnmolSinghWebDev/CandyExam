<template>
    <div class="container header">
        <div class="headerContainer">
            <h1 class="subTitle">Blogs App</h1>
        </div>
        <div class="menuContainer">
            <ul class="menu">
                <li class="menuItem">
                    <nuxt-link to="/">Home</nuxt-link>
                    
                </li>
                <li class="menuItem">
                   
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default {
        name: "Header",

    }
</script>
<style scoped>
    .header{
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
    .subTitle{
        text-align: center;
        font-size: 35px;
    }
    .menuContainer{
        width: 50%;
    }
    .headerContainer{
        width: 50%;
    }
    .menu{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
    }
    .menuItem{
        
        list-style: none;
        font-size: 27px;
        
    }
    .menuItem a{
        text-decoration: none;
        font-weight: bold;
        color: black;
    }
    .menuItem a:focus, .menuItem a:active{
       color: #2d538f;
        
    }
    .menuItem a:hover{
       color:#2d538f;
        
    }
</style>