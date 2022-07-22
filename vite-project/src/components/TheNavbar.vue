<script setup>

</script>
<!------------------------------------------------->
<template>
    <nav>
        <ul>
            <li>
                <h2>
                    <router-link to="/">Tom's Portfolio</router-link>
                </h2>
            </li>
            <li>
                <!-- <router-link to="/kanban">Kanban</router-link> -->
                <router-link :to="{ name: 'Project', params: { project: 'kanban' }}">
                    Kanban
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
