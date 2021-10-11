<template>
    <b-container>
        <b-card class="px-3 mt-5 mx-5 parent">
            <div class="child">
                <b-img :src="applicantDetail.applicant.profilePhoto"></b-img>
            </div>
            <b-card-title>Personal Information</b-card-title>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Name</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.name }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Profile Photo</span> </b-col>
                <b-col md="6">
                    <b-img
                        :src="applicantDetail.applicant.profilePhoto"
                    ></b-img>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Date Of Birth</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.dob }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Email:</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.email }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span>Phone Number</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.phone_no1 }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Current Address</span> </b-col>
                <b-col md="6">
                    <strong>{{
                        applicantDetail.applicant.currentAddress
                    }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Hometown Address</span> </b-col>
                <b-col md="6">
                    <strong>{{
                        applicantDetail.applicant.hometownAddress
                    }}</strong>
                </b-col>
            </b-row>
            <hr />

            <b-card-title class="mt-5">Education Background</b-card-title>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Bachelor Information</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.bachelorUni }},
                        {{ applicantDetail.applicant.bachelorDegree }},
                        {{ applicantDetail.applicant.bachelorYear }}
                    </strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Master Information</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.masterUni }},
                        {{ applicantDetail.applicant.masterDegree }},
                        {{ applicantDetail.applicant.masterYear }}
                    </strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Deploma Information</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.deplomaName }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Certificate</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.certificate }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span> Programming Language Skill</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.programmingLang }} :
                        {{ applicantDetail.applicant.programmingLevel }}
                    </strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span>English</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.english }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span>Japanese</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.japanese }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span>Other</span> </b-col>
                <b-col md="6">
                    <strong>{{ applicantDetail.applicant.otherLang }}</strong>
                </b-col>
            </b-row>
            <hr />

            <b-card-title class="mt-5">Education Background</b-card-title>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span>Internship Info</span> </b-col>
                <b-col md="6">
                    <strong>{{
                        applicantDetail.applicant.internshipInfo
                    }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span>Job Experience</span> </b-col>
                <b-col md="6">
                    <strong>{{
                        applicantDetail.applicant.jobExperience
                    }}</strong>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><span>Total Experience Year</span> </b-col>
                <b-col md="6">
                    <strong>{{
                            applicantDetail.applicant.totalExperience
                        }}</strong>
                </b-col>
            </b-row>
            <b-card-footer class="mt-3">
                <NuxtLink :to="{ name: 'applicantInfo' }" class="back">
                    BACK
                </NuxtLink>
            </b-card-footer>
        </b-card>
    </b-container>
</template>

<script src="~/services/pages/applicantInfo/detail/index.js"></script>

<style scoped src="~/assets/css/pages/applicantInfo/detail/index.css"></style>
