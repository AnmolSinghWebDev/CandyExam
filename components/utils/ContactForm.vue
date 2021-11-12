<template>
    <div class="container">
        <form >
            <h3 v-if="this.success">Form submitted successfully</h3>
            <div class="form-field">
                <label for="fname">First Name</label>
                <input type="text" v-model="firstName" id="fname" name="firstname" placeholder="Your name..">
            </div>
            <div class="form-field">
                <label for="lname">Last Name</label>
                <input type="text" v-model="lastName" id="lname" name="lastname" placeholder="Your last name..">
            </div>
            <div class="form-field">
                <label for="email">Email Address</label>
                <input type="text" required v-model="email" id="email" name="email" placeholder="Email Address..">
            </div>
            <div class="form-field">
            <label for="subject">Subject</label>
            <textarea id="subject" required v-model="subject" name="subject" placeholder="Write something.."></textarea>
            </div>
            <div class="form-field">
            <label for="message">Message</label>
            <textarea id="message" name="message" v-model="message" placeholder="Write something.."></textarea>
            </div>

            <input type="submit" value="Submit" @click.prevent="submit">
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                firstName : '',
                lastName : '',
                email : '',
                subject : '',
                message: '',
                success: '',
            }
        },
        
        methods: {
            async submit () {
                const formData = {
                    firstname : this.firstName,
                    lastName : this.lastName,
                    email : this.email,
                    subject: this.subject,
                    message: this.message
                }

                const jsonData = JSON.stringify(formData);

                await this.$mail.send({
                    from : this.email,
                    subject: this.subject,
                    text: jsonData,
                   
                });

                const config = {
                    headers: {
                        'Accept' : 'application/json', 
                    }
                }

                try {

                    const res = await axios.post('http://localhost:3000/api/submissions', formData , config);
                    this.success = true;
                } catch(err){

                    console.log(err);

                }

                this.firstName = '';
                this.lastName = '';
                this.email = '';
                this.subject - '';
                this.message = '';
           
            }
        },
    }
</script>
<style>
    form{
        text-align: center;
        width: 40%;
        min-width: 400px;
        margin: 0 auto;

    }

    .form-field{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 15px 0;
    }

    label{
        width: 25%;
        min-width: 60px;
        font-size: 21px;
        text-align: center;
    }

    input{
        width: 70%;
        padding: 10px;
    }

    textarea{
        width: 70%;
        padding: 20px 10px;
    }
    
    input[type=submit]{
        max-width: 250px;
        margin: 0 auto;
        padding: 10px 15px;
        border: 0;
        box-shadow: none;
        background-color: #494368;
        color:white;
        font-size: 17px;
        text-transform: uppercase;
        transform: 0.7s ease-in all;
        cursor: pointer;
    }

    input[type=submit]:hover{
        color: #494368;
        background-color: white;
        border: 1px solid #494368;
    }

</style>
