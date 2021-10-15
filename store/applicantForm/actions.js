import { SET_APPLICANT_DATA, SET_VALIDATE_ERROR } from './mutation-types'

export default {
    validateUser({ commit }, { userData, $axios }) {
        $axios
            .post('/api/validate', userData)
            .then((data) => {
                if (data) {
                    this.$router.push({
                        path: 'applicantForm/confirm',
                    })
                    commit(SET_APPLICANT_DATA, userData)
                    commit(SET_VALIDATE_ERROR, null)
                }
            })
            .catch((err) => {
                commit(SET_VALIDATE_ERROR, err.response.data)
            })
    },
    createUser({ commit }, { formData, $axios }) {
        // console.log("hey")
        // console.log(userData)

        try {
            $axios
                .post('/api/create', formData)
                .then((data) => {
                    if (data) {
                        this.$router.push({
                            name: 'applicantForm-save',
                        })
                        commit(SET_APPLICANT_DATA, null)
                    }
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err.response.data)
                })
        } catch (error) {
            console.error(error)
        }
    },
    cancel({ commit }) {
        commit(SET_APPLICANT_DATA, null)
    },
}