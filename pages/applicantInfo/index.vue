<template>
    <b-container>
        <b-row class="my-4">
            <b-col lg="5" md="5" sm="5" align="center">
                <h2>Applicant List</h2>
            </b-col>
            <b-col lg="2" md="1" sm="2"></b-col>
            <b-col lg="4" md="6" sm="4" class="ml-5">
                <b-form
                    v-if="show"
                    inline
                    class="justify-content-around"
                    @submit.prevent="onSubmitSearch"
                >
                    <!-- <b-form-group
                        id="input-group-search"
                        label-for="input-search"
                    >
                        <b-form-input
                            id="input-search"
                            v-model="form.searchParam"
                            type="text"
                            placeholder="Search keyword"
                            @change="onSubmitSearch"
                        ></b-form-input>
                    </b-form-group>
                    <b-button
                        type="submit"
                        variant="primary"
                        class="text-uppercase"
                    >
                        Filter
                    </b-button> -->
                </b-form>
            </b-col>
        </b-row>
        <b-table
            id="post-table"
            :fields="fields"
            :items="showList"
            :per-page="perPage"
            :current-page="currentPage"
            primary-key="id"
            sticky-header
            show-empty
            hover
        >
            <template #cell(name)="row">
                <NuxtLink
                    :to="{
                        name: 'applicantInfo-detail-id',
                        params: { id: row.item.id },
                    }"
                >
                    {{ row.item.name }}
                </NuxtLink>
            </template>
            <template #cell(operation)="row">
                <b-button
                    class="mr-1"
                    size="sm"
                    @click="info(row.item, row.index, $event.target)"
                >
                    DETAILS
                </b-button>
                 <b-button class="mr-1" size="sm" variant="success" @click="edit(row.item.id)">
                    EDIT
                </b-button>
                <b-button
                    class="mr-1"
                    size="sm"
                    variant="danger"
                    @click="deleteApplicant(row.item.id)"
                >
                    DELETE
                </b-button>
            </template>
        </b-table>
        <!-- Pagination -->
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
            aria-controls="post-table"
        ></b-pagination>
        <!-- Info modal -->
        <b-modal
            :id="infoModal.id"
            :title="infoModal.title"
            ok-only
            @hide="resetInfoModal"
        >
            <pre>{{ infoModal.content }}</pre>
        </b-modal>
    </b-container>
</template>

<script src="../../services/pages/applicantInfo/index.js"></script>

<style
    scoped
    src="~/assets/css/pages/applicantInfo/applicantInfo-list.css"
></style>
