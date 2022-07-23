<script setup>

</script>
<!------------------------------------------------->
<template>
<main>
    <section>
        <div>
            <p>
                Hello, and welcome to my portfolio website!
                <br>
                <br>
                This is where most of my projects can be seen and used live! If you would like to check out the source code for each project, check out my
                <a href="https://github.com/TomReilly1">github</a>.
                <br>
                <br>
            </p>
        </div>
        <div>
            <h3>About Me</h3>
            <img src="../assets/portrait.webp" alt="profile picture of Thomas Reilly">
            <p>
                My name is Thomas Reilly, and I am a software engineer specializing in full-stack technologies. I am a recent graduate from the University of South Florida (Go Bulls!) with a Bachelor's Degree in Information Technology.
                <br>
                <br>
                I love technology in general and am eager to learn new concepts and tools!
                <br>
                <br>
                If you would like to connect and/or have a coffee chat, feel free to contact me! 
            </p>
            <h4>Tools</h4>
            <p>
                HTML - CSS - JavaScript - TypeScript
                <br>
                Vue.js - Node.js - Express.js
                <br>
                Python - Flask - NGINX
                <br>
                PostgreSQL - MySQL - JSON
                <br>
                Bash - Linux - AWS/Cloud
            </p>
            <h4>Contact Info</h4>
            <ul>
                <!--&nbsp;  &ensp;  &emsp;  -->
                <li>
                    <span>Email:</span>
                    <span>reilly.thomas.c@gmail.com</span>
                </li>
                <li>
                    <span>GitHub:</span>
                    <span>https://github.com/TomReilly1</span>
                </li>
                <li>
                    <span>LinkedIn:</span>
                    <span>https://www.linkedin.com/in/thomas-reilly-dev/</span>
                </li>
            </ul>
        </div>
    </section>
</main>
</template>
<!------------------------------------------------->
<style scoped>
main {
    min-height: calc(100% - 200px);
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

section > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 74%;
}

section > div:last-child {
    width: fit-content;
    background-color: var(--black2);
    border-radius: 10px;
    padding: 20px;
    box-shadow: inset 0 0 5px 2px rgba(100, 100, 100, 0.2);
}

img {
    width: 200px;
    height: 200px;
    margin: 0 0 20px;
}

h3 {
    font-size: 1.6rem;
}

a {
    color: unset;
    color: var(--gold1);
}

a:visited {
    color: unset;
    color: var(--gold1);
}

a:hover {
    color: var(--purple1);
}

p {
    text-align: center;
    /* max-width: 70%; */
    width: 94%;
    margin: 0;
    padding: 0;
}

div p:first-child {
    font-size: 1.2rem;
}

h4 {
    color: var(--purple1);
}

h4 {
    margin-bottom: 0;
}

ul {
    margin-top: 0;
    list-style: none;
}

li span:first-child {
    display: inline-block;
    width: 85px;
}
</style>
