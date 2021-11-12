<template>
    <div class="container">
        <form>
            <div class="form-field">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
            </div>
            <div class="form-field">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">
            </div>
            <div class="form-field">
                <label for="email">Email Address</label>
                <input type="text" id="email" name="email" placeholder="Email Address..">
            </div>
            <div class="form-field">
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            </div>
            <div class="form-field">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.."></textarea>
            </div>

            <input type="submit" value="Submit">
        </form>
    </div>
</template>