<template>
    <header>
        <nav>
            <h2><router-link to="/">Find a Coach</router-link></h2>
            <ul>
                <li>
                    <router-link to="/coaches">All Coaches</router-link>
                </li>
                <li>
                    <router-link to="/requests">Requests</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
nav {
    display: flex;
    align-items: center;
}

ul {
    list-style: none;
    display: flex;
}

li {
    padding: 0rem 2rem;
}
</style>