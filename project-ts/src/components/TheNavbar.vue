<script lang="ts" setup>

</script>
<!------------------------------------------------->
<template>
    <nav>
        <ul>
            <li>
                <h2>
                    <router-link to="/">Tom's Projects</router-link>
                </h2>
            </li>
            <li>
                <a href="https://mb2hub.com">MB2 Hub (external)</a>
            </li>
            <li>
                <router-link :to="{ name: 'Kanban'}">
                    Kanban
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Notes'}">
                    Notes
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Calculator'}">
                    Calculator
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<!------------------------------------------------->
<style scoped>
h2 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
}

nav {
    /* height: 100vh; */
    min-height: 100vh;
    width: 150px;
    min-width: 150px;
    background-color: #4a4a4a;
}

ul {
    margin: 0;
    padding: 10px 0px;
}

li {
    display: flex;
    justify-content: center;
    margin: 15px 0;
    padding-left: 15px;
}

li:first-child {
    border-bottom: 2px solid rgba(0,0,0,0.2);
    padding-bottom: 15px;
    color: var(--gold1);
}

li > * {
    color: unset;
    display: inline-block;
    z-index: 1;
    width: 100%;
    /* text-decoration: none; */
    /* transition: color 0.3s; */
}

/* li > *:visited {
    color: unset;
}

li > *:hover {
    color: var(--purple1);
} */

</style>
