import { SET_APPLICANT_LIST, SET_APPLICANT_DETAIL } from './mutation-types'

export default {
    /**
     * Fetch Applicant List API
     * @param {Object} storeContext
     * @param {Object} nuxtContext
     * @returns
     */
    fetchPostList({ commit }, { $axios }) {
        return $axios.$get('/api').then((data) => {
            commit(SET_APPLICANT_LIST, data)
        })
    },
    /**
     * Fetch Applicant Detail with ID , API
     * @param {Object} storeContext
     * @param {Object} nuxtContext
     * @returns
     */
    fetchApplicantDetail({ commit }, { params, $axios }) {
        return $axios
            .$get(`/api/detail/?id=${params.id}`)
            .then((data) => {
                commit(SET_APPLICANT_DETAIL, data)
            })
    },
}