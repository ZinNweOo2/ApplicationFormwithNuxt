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
                    key: 'email',
                    label: 'Email',
                    sortable: true,
                },
                {
                    key: 'phone_no1',
                    label: 'Phone No',
                    sortable: true,
                },
                {
                    key: 'bachelorUni',
                    label: ' University (Bachelor)',
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
            userList: 'applicantInfo/userList',
        }),
        rows() {
            return this.showList.length
        },
    },

    mounted() {
        this.AllApplicant()
    },

    methods: {
        onSubmitSearch() {
            this.filterPostList()
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        AllApplicant() {
            this.$axios.get('/api/show').then((res) => {
                this.resultList = res.data
                this.showList = this.resultList
            })
        },
        filterPostList() {
            if (this.form.searchParam === '') {
                this.showList = this.userList
            } else {
                this.showList = this.userList.filter((applicant) => {
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
        edit(id) {
            this.$router.push({
                name: 'applicantInfo-update-id',
                params: { id },
            })
        },
        deleteApplicant(id) {
            if (confirm('Are you sure?')) {
                this.$axios
                    .delete('/api/destroy/?id=' + id)
                    .then((response) => {
                        if (response) {
                            this.AllApplicant()
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
    },
}