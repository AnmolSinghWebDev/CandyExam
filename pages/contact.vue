<template>
    <div>
        <h1>Contact Us</h1>
        <!-- show contact form -->
        <contact-form/>
    </div>
</template>

<script>
import ContactForm from "~/components/utils/ContactForm.vue";

export default {    
    components: {
        ContactForm,
    },
}
</script>