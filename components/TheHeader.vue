<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container>
            <NuxtLink to="/" class="navbar-brand">{{ appTitle }}</NuxtLink>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li class="nav-item">
                        <NuxtLink
                            :to="{ name: 'applicantInfo' }"
                            class="nav-link"
                        >
                            Admin
                        </NuxtLink>
                    </li>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <li class="nav-item" v-if="!$auth.loggedIn">
                        <NuxtLink :to="{ name: 'login' }" class="nav-link">
                            Login
                        </NuxtLink>
                    </li>
                    <b-nav-item-dropdown right v-if="$auth.loggedIn">
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>{{ $auth.user.email }}</em>
                        </template>
                        <li role="presentation">
                            
                        </li>
                        <b-dropdown-item @click="logoutUser">
                            Logout
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script src="../services/components/the-header.js"></script>

<style scoped src="../assets/css/components/the-header.css"></style>
