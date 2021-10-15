import { mapGetters } from 'vuex'
export default {
    async asyncData({ $axios, store, params }) {
        try {
            await store.dispatch('applicantInfo/fetchUserDetail', {
                params,
                $axios,
            })
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
        ...mapGetters({
            userDetail: 'applicantInfo/userDetail',
        }),

    }

}