<template>
    <b-container>
        <b-form @submit.prevent="confirmUser">
            <b-card class="px-3 mt-5 mx-5">
                <b-card-title align="center">Check Your Information</b-card-title>

                <b-row class="mt-3">
                    <b-col md="6"><span> Name</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.name }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Profile Photo</span> </b-col>
                    <b-col md="6">
                        <b-img :src="userData.image"></b-img>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Date Of Birth</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.dob }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Email</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.email }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Phone No</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.phone_no1 }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Current Address</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.currentAddress }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Hometown Address</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.hometownAddress }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Bachelor </span> </b-col>
                    <b-col md="6">
                        <span
                            >{{ userData.bachelorUni }},
                            {{ userData.bachelorDegree }},
                            {{ userData.bachelorYear }}
                        </span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Master</span> </b-col>
                    <b-col md="6">
                        <span
                            >{{ userData.masterUni }},
                            {{ userData.masterDegree }},
                            {{ userData.masterYear }}
                        </span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Deploma Name</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.diplomaName }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Certificate:</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.certificate }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"
                        ><span> Programming Language Skill</span>
                    </b-col>
                    <b-col md="6">
                        <span
                            >{{ userData.programmingLang }} :
                            {{ userData.programmingLevel }}
                        </span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>English Language Skill</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.english }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Japanese Language Skill</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.japanese }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Other Language Skill</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.otherLang }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Internship Information</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.internshipInfo }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Job Experience:</span> </b-col>
                    <b-col md="6">
                        <span>{{ userData.jobExperience }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Total Experience Year</span> </b-col>
                    <b-col md="6">
                        <span
                            >{{ userData.totalExperience }}year</span
                        >
                    </b-col>
                </b-row>
                    <b-button @click="cancel" variant="danger"
                        >Cancel</b-button
                    >
                    <b-button type="submit" variant="primary">Confirm</b-button>
            </b-card>
        </b-form>
    </b-container>
</template>

<script src="../../services/pages/applicantForm/confirm.js"></script>

<style src="../../assets/css/pages/applicantForm/confirm.css"></style>
