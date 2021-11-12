<template>
    <div>
        <Header/>
        <h1>Contact Us</h1>
        <!-- show contact form -->
        <ContactForm/>
    </div>
</template>

<script>
import Header from "~/components/Header.vue";
import ContactForm from "~/components/utils/ContactForm.vue";

export default {    
    components: {
        ContactForm,
        Header,
    },
}
</script>