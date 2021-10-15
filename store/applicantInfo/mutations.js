import { SET_APPLICANT_LIST, SET_APPLICANT_DETAIL } from './mutation-types'
export default {
    [SET_APPLICANT_LIST](state, list) {
        state.applicantList = list
    },
    [SET_APPLICANT_DETAIL](state, detail) {
        state.userDetail = detail
    },
}