export default {
    auth: false,
    middleware({ redirect }) {
        return redirect('/applicantForm')
    },
}