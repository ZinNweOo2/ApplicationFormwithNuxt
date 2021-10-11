import { SET_APPLICANT_DATA, SET_VALIDATE_ERROR } from './mutation-types'
export default {
    [SET_APPLICANT_DATA](state, applicantInfo) {
        state.userData = applicantInfo
    },
    [SET_VALIDATE_ERROR](state, validationError) {
        state.validationError = validationError
    },
}