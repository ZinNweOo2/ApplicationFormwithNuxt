<template>
    <b-container>
        <ValidationObserver ref="observer">
            <b-form @submit.prevent="submitApplicant">
                <b-card class="px-3 mt-5 mx-5 background-image">
                    <b-card-title align="center"
                        >Fill Your Information</b-card-title
                    >
                    <!-- <ValidationProvider v-slot="{ errors }" rules="required"> -->
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Name"
                        :rules="{
                            required: true,
                            max: this.onezerozero,
                        }"
                    >
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff">Name**</label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.name"
                                    type="text"
                                    rules="max"
                                ></b-form-input>

                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>
                    <b-row class="my-1">
                        <b-col>
                            <label style="color: #ffffff">Profile Photo</label>
                        </b-col>
                        <b-col sm="9">
                            <!-- <input
                                ref="image"
                                class="hide-input"
                                type="file"
                                accept="image/*"
                                @change="onFileChange"
                            /> -->
                            <b-form-file
                                id="profilePhoto"
                                type="file"
                                accept="image/*"
                                v-model="applicant.profilePhoto"
                                @change="onFileChange"
                            ></b-form-file>
                        </b-col>
                    </b-row>
                    <ValidationProvider
                        name="Date of Birth"
                        :rules="{
                            required: true,
                        }"
                    >
                        <!-- v-slot="{ errors }" -->
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Birthday Date**</label
                                >
                            </b-col>
                            <b-col sm="9">
                                <b-form-datepicker
                                    v-model="applicant.dob"
                                ></b-form-datepicker>
                            </b-col>
                            <!-- <span class="invalid-message" align="center">
                                {{ errors[0] }}</span
                            > -->
                        </b-row>
                    </ValidationProvider>
                    <!-- <ValidationProvider v-slot="{ errors }" rules="max:12"> -->
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Phone No"
                        :rules="{
                            required: true,
                            digits: 11,
                        }"
                    >
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Phone No**
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.phone_no1"
                                    type="number"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Email"
                        :rules="{
                            required: true,
                            max: this.onezerozero,
                        }"
                    >
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff">Email** </label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input
                                    id="input-email"
                                    v-model="applicant.email"
                                >
                                </b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>
                    <!-- <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|max:255"
                    > -->
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Current Address"
                        :rules="{
                            required: true,
                            max: this.twofivezero,
                        }"
                    >
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Current Address:**
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-textarea
                                    rows="3"
                                    id="input-name"
                                    v-model="applicant.currentAddress"
                                    max-rows="6"
                                    type="text"
                                >
                                </b-form-textarea>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" rules="max:255">
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Hometown Address
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-textarea
                                    rows="3"
                                    v-model="applicant.hometownAddress"
                                    max-rows="6"
                                    id="input-name"
                                    type="text"
                                >
                                </b-form-textarea>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>
                    <b-row class="my-1">
                        <b-col class="edu">
                            <label style="color: #ffffff"
                                >Education Level**
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <h5 style="color: #17a2b8">Bachelor</h5>
                            <!-- <ValidationProvider
                                v-slot="{ errors }"
                                rules="required|max:100"
                            > -->
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="University"
                                :rules="{
                                    required: true,
                                    max: this.onezerozero,
                                }"
                            >
                                <label style="color: #ffffff">University</label>
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.bachelorUni"
                                    type="text"
                                >
                                </b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                            <!-- <ValidationProvider
                                v-slot="{ errors }"
                                rules="required|max:20"
                            > -->
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Year"
                                :rules="{
                                    required: true,
                                    max: this.onezerozero,
                                }"
                            >
                                <label style="color: #ffffff">Year</label>
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.bachelorYear"
                                    type="text"
                                >
                                </b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Degree"
                                :rules="{
                                    required: true,
                                    max: this.onezerozero,
                                }"
                            >
                                <label style="color: #ffffff">Degree</label>
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.bachelorDegree"
                                    type="text"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                            <h5 style="color: #17a2b8">Master</h5>
                            <ValidationProvider
                                v-slot="{ errors }"
                                rules="max:100"
                            >
                                <label style="color: #ffffff">University</label>
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.masterUni"
                                    type="text"
                                ></b-form-input>
                                <span> {{ errors[0] }}</span>
                            </ValidationProvider>
                            <ValidationProvider
                                v-slot="{ errors }"
                                rules="max:20"
                            >
                                <label style="color: #ffffff">Year</label>
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.masterYear"
                                    type="text"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                            <ValidationProvider
                                v-slot="{ errors }"
                                rules="max:100"
                            >
                                <label style="color: #ffffff">Degree</label>
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.masterDegree"
                                    type="text"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                        </b-col>
                    </b-row>

                    <ValidationProvider v-slot="{ errors }" rules="max:100">
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Deploma Name</label
                                >
                            </b-col>
                            <b-col sm="9">
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.deplomaName"
                                    type="text"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" rules="max:100">
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Other Certificates</label
                                >
                            </b-col>
                            <b-col sm="9">
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.certificate"
                                    type="text"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>

                    <b-row class="my-1">
                        <b-col>
                            <label style="color: #ffffff"
                                >Programming Skills</label
                            >
                        </b-col>
                        <b-col sm="9">
                            <li class="d-flex">
                                <label style="color: #ffffff">Language</label>
                                <label style="color: #ffffff" class="lvl"
                                    >Level</label
                                >
                            </li>
                            <li class="d-flex">
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.programmingLang"
                                    type="text"
                                    class="w-25"
                                ></b-form-input>
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.programmingLevel"
                                    type="text"
                                    class="w-25"
                                ></b-form-input>
                                <!-- <b-button variant="info">+</b-button> -->
                            </li>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col>
                            <label style="color: #ffffff"
                                >Language Skills</label
                            >
                        </b-col>
                        <b-col sm="9">
                            <h5 style="color: #17a2b8">English</h5>
                            <ValidationProvider
                                v-slot="{ errors }"
                                rules="max:100"
                            >
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.english"
                                    type="text"
                                    class="w-25"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                            <h5 style="color: #17a2b8">Japanese</h5>
                            <ValidationProvider
                                v-slot="{ errors }"
                                rules="max:100"
                            >
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.japanese"
                                    type="text"
                                    class="w-25"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                            <h5 style="color: #17a2b8">Other</h5>
                            <ValidationProvider
                                v-slot="{ errors }"
                                rules="max:100"
                            >
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.otherLang"
                                    type="text"
                                    class="w-25"
                                ></b-form-input>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </ValidationProvider>
                        </b-col>
                    </b-row>
                    <ValidationProvider v-slot="{ errors }" rules="max:255">
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Internship Info
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-textarea
                                    rows="3"
                                    id="input-name"
                                    max-rows="6"
                                    v-model="applicant.internshipInfo"
                                    type="text"
                                ></b-form-textarea>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" rules="max:255">
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Job Experience
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-textarea
                                    rows="3"
                                    id="input-name"
                                    max-rows="6"
                                    v-model="applicant.jobExperience"
                                    type="text"
                                ></b-form-textarea>
                                <span class="invalid-message">
                                    {{ errors[0] }}</span
                                >
                            </b-col>
                        </b-row>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" rules="max:3">
                        <b-row class="my-1">
                            <b-col>
                                <label style="color: #ffffff"
                                    >Total Experience Year</label
                                >
                            </b-col>
                            <b-col sm="9">
                                <b-form-input
                                    id="input-name"
                                    v-model="applicant.totalExperience"
                                    type="number"
                                    placeholder="0"
                                ></b-form-input>
                                <span class="invalid-message">{{
                                    errors[0]
                                }}</span>
                            </b-col>
                        </b-row>
                    </ValidationProvider>

                    <!-- </ValidationObserver> -->

                    <div class="errorMsg" :v-if="validationError">
                        <div
                            v-for="(err, index) in validationError"
                            :key="index"
                        >
                            <p>- {{ index + ' : ' + err[0] }}</p>
                        </div>
                    </div>

                    <b-button type="reset" variant="danger" class="mr-3"
                        >Reset</b-button
                    >
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-card>
            </b-form>
        </ValidationObserver>
    </b-container>
</template>

<script src="../../services/pages/applicantForm/index.js"></script>
<style src="../../assets/css/pages/applicantForm/index.css"></style>
