import { mapGetters } from 'vuex'
export default {
    async asyncData({ $axios, store }) {
        try {
            await store.dispatch('applicantInfo/fetchPostList', { $axios })
        } catch (error) {
            console.log(error)
        }
    },
    auth: true,
    data() {
        return {
            show: true,
            form: {
                searchParam: '',
            },
            currentPage: 1,
            perPage: 5,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                {
                    key: 'phone_no1',
                    label: 'Phone No',
                    sortable: true,
                },
                {
                    key: 'email',
                    label: 'Email',
                    sortable: true,
                },
                {
                    key: 'bachelorUni',
                    label: 'Bachelor University',
                    sortable: true,
                },
                { key: 'operation', label: 'Operation' },
            ],
            showList: [],
            infoModal: {
                id: 'info-modal',
                title: '',
                content: '',
            },
        }
    },
    computed: {
        ...mapGetters({
            applicantList: 'applicantInfo/applicantList',
        }),
        rows() {
            return this.showList.length
        },
    },
    mounted() {
        this.filterPostList()
    },

    methods: {
        /**
         * search form submit and filter applicant list
         */
        onSubmitSearch() {
            console.log('hi')
            this.filterPostList()
                // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        /**
         * get the value form search input form and filter applicant list
         */
        filterPostList() {
            if (this.form.searchParam === '') {
                this.showList = this.applicantList
            } else {
                this.showList = this.applicantList.filter((applicant) => {
                    return (
                        applicant.name
                        .toLowerCase()
                        .includes(this.form.searchParam.toLowerCase()) ||
                        applicant.phone_no1.includes(this.form.searchParam) ||
                        applicant.bachelorUni
                        .toLowerCase()
                        .includes(this.form.searchParam.toLowerCase())
                    )
                })
            }
        },
        info(item, index, button) {
            this.infoModal.title = `Row index: ${index}`
            this.infoModal.content = JSON.stringify(item, null, 2)
            this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
        },
        edit(item, index, button) {
            console.log('@edit...')
        },
    },
}