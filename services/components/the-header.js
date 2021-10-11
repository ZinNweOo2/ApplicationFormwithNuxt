export default {
    data({ $config: { appTitle } }) {
        return {
            appTitle,
        }
    },
    methods: {
        /**
         * logout admin account
         * @returns void
         */
        async logoutUser() {
            try {
                await this.$auth.logout()
            } catch (error) {
                console.error(error)
            }
        },
    },
}
