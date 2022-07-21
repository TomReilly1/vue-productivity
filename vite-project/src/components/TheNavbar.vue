<script setup>

</script>
<!------------------------------------------------->
<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/kanban">Kanban</router-link>
            </li>
        </ul>
    </nav>
</template>
<!------------------------------------------------->
<style scoped>
nav {
   height: 100%;
   width: 150px;
   background-color: #4a4a4a;
}

ul {
    margin: 0;
    padding: 10px;
}

li {
    display: flex;
    justify-content: center;
    padding: 5px 0;
}

li > * {
    text-decoration: none;
}

li > *:visited {
    color: unset;
}

</style>
