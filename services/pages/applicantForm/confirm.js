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
        cancel() {
            this.$router.push('/applicantForm')
        },

        confirmUser() {
            // console.log(this.userData)

            const formData = new FormData()
            if (this.userData.profilePhoto !== null) {
                formData.append('imgfile', this.userData.profilePhoto)
                Object.entries(this.userData).forEach(([key, value]) => {
                    formData.append(key, value)
                })
                console.log(this.userData.profilePhoto)
            }

            formData.append('profilePhoto', this.userData.profilePhoto.name)
            this.$store.dispatch('applicantForm/createUser', {
                formData,
                $axios: this.$axios,
            })
        },
    },
}