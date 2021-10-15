import {
    SET_APPLICANT_LIST,
    SET_APPLICANT_DETAIL,

} from './mutation-types'

export default {
    fetchPostList({ commit }, { $axios }) {
        return $axios.$get('/api/show').then((data) => {
            commit(SET_APPLICANT_LIST, data)
        })
    },

    fetchUserDetail({ commit }, { params, $axios }) {
        return $axios.$get(`/api/detail/?id=${params.id}`).then((data) => {
            commit(SET_APPLICANT_DETAIL, data)
        })
    },

}