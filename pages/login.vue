<template>
    <b-container class="login-page">
        <b-card title="Login">
            <b-form v-if="show" @submit="userLogin">
                <b-form-group
                    id="input-group-name"
                    label="UserName:"
                    label-for="input-name"
                    description="Please Enter your Username."
                >
                    <b-form-input
                        id="input-name"
                        v-model="form.username"   
                        placeholder="Enter Username"
                        required
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-password"
                    label="Password:"
                    label-for="input-password"
                    description="Password must be 8-20 characters long."
                >
                    <b-form-input
                        id="input-password"
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Login</b-button>
            </b-form>
        </b-card>
    </b-container>
</template>

<script src="../services/pages/user/login.js"></script>

<style scoped src="../assets/css/pages/user/login.css"></style>
