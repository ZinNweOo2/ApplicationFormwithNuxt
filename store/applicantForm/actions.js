import { SET_APPLICANT_DATA, SET_VALIDATE_ERROR } from './mutation-types'
export default {
    validateUser({ commit }, { userData, $axios }) {
        $axios
            .post('/api/confirm', userData)
            .then((data) => {
                if (data) {
                    commit(SET_APPLICANT_DATA, userData)
                    commit(SET_VALIDATE_ERROR, null)
                }
                this.$router.push({
                    path: 'applicantForm/confirm',
                })
            })
            .catch((err) => {
                commit(SET_VALIDATE_ERROR, err.response.data)
            })
    },


}