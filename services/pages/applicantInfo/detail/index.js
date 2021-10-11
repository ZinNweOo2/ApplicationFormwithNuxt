import { mapGetters } from 'vuex'
export default {
    async asyncData({ $axios, store, params }) {
        try {
            await store.dispatch('applicantInfo/fetchApplicantDetail', {
                params,
                $axios,
            })
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
        ...mapGetters({
            applicantDetail: 'applicantInfo/applicantDetail',
        }),
    },
}
