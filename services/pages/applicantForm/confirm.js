import { mapGetters } from 'vuex'

export default {
    auth: false,
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            userData: 'applicantForm/userData',
        }),
    },
    mounted() {
        if (this.userData == null) {
            this.$router.push('/applicantForm')
        }
    },
    methods: {
        /**
         * click cencel button and change route
         * @returns void
         */
        cancel() {
            this.$router.push('/applicantForm')
        },
        /**
         * if applicant confirm , create new applicant
         * @returns void
         */
        confirmUser() {
            console.log("hey")

            this.$router.push({
                path: '/applicantForm/save',
            })
        },
    },
}