<template>
    <b-container>
        <b-card class="px-3 mt-5 mx-5 parent">
            <b-card-title align="center">Personal Information</b-card-title>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Name</strong> </b-col>
                <b-col md="6">
                  {{ userDetail.applicant.name }}
                </b-col>
            </b-row>
            <hr />
             <b-row class="mt-3">
                <b-col md="6"><strong> Profile Photo</strong> </b-col>
                <b-col md="6">
                    <b-img :src="userDetail.applicant.profilePhoto"></b-img>

                </b-col>
            </b-row> 
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Date Of Birth</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.dob }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Email:</strong> </b-col>
                <b-col md="6">
                  {{ userDetail.applicant.email }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong>Phone Number</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.phone_no1 }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Current Address</strong> </b-col>
                <b-col md="6">
                    {{
                        userDetail.applicant.currentAddress
                    }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Hometown Address</strong> </b-col>
                <b-col md="6">
                    {{
                        userDetail.applicant.hometownAddress
                    }}
                </b-col>
            </b-row>
            <hr />

            <b-card-title class="mt-5" align="center">Education Background</b-card-title>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Bachelor Information</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.bachelorUni }},
                    {{ userDetail.applicant.bachelorDegree }},
                    {{ userDetail.applicant.bachelorYear }}
                    
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Master Information</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.masterUni }},
                    {{ userDetail.applicant.masterDegree }},
                    {{ userDetail.applicant.masterYear }}
                  
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Deploma Information</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.deplomaName }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Certificate</strong> </b-col>
                <b-col md="6">
                   {{ userDetail.applicant.certificate }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong> Programming Language Skill</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.programmingLang }} :
                        {{ userDetail.applicant.programmingLevel }}
                   
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong>English</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.english }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong>Japanese</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.japanese }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong>Other</strong> </b-col>
                <b-col md="6">
                    {{ userDetail.applicant.otherLang }}
                </b-col>
            </b-row>
            <hr />

            <b-card-title class="mt-5" align="center">Experience</b-card-title>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong>Internship Info</strong> </b-col>
                <b-col md="6">
                    {{
                        userDetail.applicant.internshipInfo
                    }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong>Job Experience</strong> </b-col>
                <b-col md="6">
                    {{
                        userDetail.applicant.jobExperience
                    }}
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3">
                <b-col md="6"><strong>Total Experience Year</strong> </b-col>
                <b-col md="6">
                    <strong>{{
                            userDetail.applicant.totalExperience
                        }}</strong>
                </b-col>
            </b-row>
            <b-card-footer class="mt-3">
                <NuxtLink :to="{ name: 'applicantInfo' }" class="back" align="center">
                    BACK
                </NuxtLink>
            </b-card-footer>
        </b-card>
    </b-container>
</template>

<script src="~/services/pages/applicantInfo/detail/index.js"></script>

<style scoped src="~/assets/css/pages/applicantInfo/detail/index.css"></style>
