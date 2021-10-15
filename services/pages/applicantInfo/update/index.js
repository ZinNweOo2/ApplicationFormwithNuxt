import {
    extend,
    ValidationProvider,
    ValidationObserver,
    setInteractionMode,
} from 'vee-validate'
import {
    required,
    email,
    image,
    digits,
    regex,
    numeric,
    max,
    size,
} from 'vee-validate/dist/rules'
import { mapGetters } from 'vuex'
// import constants from '../../../../constants'

setInteractionMode('eager')
extend('required', {
    ...required,
    message: '{_field_} can not be empty',
})
extend('numeric', {
    ...numeric,
    required: '{_field_} must be number',
})
extend('email', {
    ...email,
    message: 'Your email name is invalid',
})
extend('image', {
    ...image,
    message: 'please select img file',
})
extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ',
})
extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
})
extend('size', {
    ...size,
    message: `file size is grater than {size} kb`,
})
extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match 09*********',
})

export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data() {
        return {
            applicant: {
                name: '',
                profilePhoto: null,
                dob: '',
                phone_no1: '',
                email: '',
                currentAddress: '',
                hometownAddress: '',
                bachelorUni: '',
                bachelorYear: '',
                bachelorDegree: '',
                masterUni: '',
                masterYear: '',
                masterDegree: '',
                deplomaName: '',
                certificate: '',
                programmingLang: '',
                programmingLevel: '',
                english: '',
                japanese: '',
                otherLang: '',
                internshipInfo: '',
                jobExperience: '',
                totalExperience: '',
                image: null,
            },
            dob: '',
            edituserData: null,
            min: '1990-01-01',
            max: new Date(),
        }
    },
    beforeCreate() {
        this.$axios
            .get(`/api/detail?id=${this.$route.params.id}`)
            .then((userData) => {
                this.dob = userData.data.dob
                this.applicant = userData.data.applicant
            })
            .catch((err) => {
                if (err) {
                    this.applicant = null
                }
            })
    },
    computed: {
        ...mapGetters({
            validateError: 'applicantForm/validateError',
        }),
    },
    created() {},
    mounted() {},
    methods: {

        async updateUser() {
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                const formData = new FormData()
                if (this.applicant.image != null) {
                    formData.append('imgfile', this.applicant.image)
                    Object.entries(this.applicant).forEach(([key, value]) => {
                        formData.append(key, value)
                    })
                    formData.append(
                        'profilePhoto',
                        this.applicant.image.name
                    )
                }

                this.$axios
                    .patch('/api/update', formData)
                    .then((data) => {
                        if (data) {
                            alert('SUCCESSFUL!')
                            this.$router.push({
                                name: 'applicantInfo-detail-id',
                                params: { id: this.applicant.id },
                            })
                        }
                    })

                .catch((err) => {
                    console.log(err)
                })
            }
        },

        onFileChange(e) {
            if (e.target.files[0]) {
                const file = e.target.files[0]
                this.applicant.image = URL.createObjectURL(file)
            }
        },
        backToList() {
            this.$router.push({
                name: 'applicantInfo',
            })
        },
    },
}