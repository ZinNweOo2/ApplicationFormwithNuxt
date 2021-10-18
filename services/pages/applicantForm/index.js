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
import constants from '../../../constants'

setInteractionMode('eager')
extend('required', {
    ...required,
    message: '{_field_} can not be empty.',
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

    auth: false,
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
            onezerozero: constants.ONEZEROZERO,
            twofivezero: constants.TWOFIVEZERO,
        }
    },
    computed: {
        ...mapGetters({
            validationError: 'applicantForm/validationError',
        }),
        ...mapGetters({
            userData: 'applicantForm/userData',
        }),
    },
    created() {
        if (this.userData) {
            this.applicant = this.userData
            this.$store.dispatch('applicantForm/cancel')
        }
    },
    mounted() {},
    methods: {
        async submitApplicant() {
            console.log('hello')
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                this.$store.dispatch('applicantForm/validateUser', {
                    userData: this.applicant,
                    $axios: this.$axios,
                })
            }
        },
        onFileChange(e) {
            if (e.target.files[0]) {
                const file = e.target.files[0]
                this.applicant.image = URL.createObjectURL(file)
            }
        },
    },
}