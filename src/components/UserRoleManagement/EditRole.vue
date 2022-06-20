<template>

    <Layout />
    <div class="content-main">
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <img src="../../assets/img/svg/arrow-left.svg" alt="" class="arrow-left">
                        <span>BACK </span>
                    </div>
                    <div class="blue-text mb-20">
                        Create A Role
                    </div>

                    <loading v-model:active="loading" :can-cancel="true" :on-cancel="onCancel"
                        :is-full-page="fullPage" />

                    <Form @submit.prevent="submitData" method="post" v-if="!loading">
                        <div class="create-role-main">
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    User Role Title <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <InputTextBox @blur="e => roleForm.role_name = e.target.value"
                                        class="slds-input custom-grid-input mb-20"
                                        :value="`${editDetail.role_title}`" />

                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="textarea-id-01">Description
                                </label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <textArea @blur="e => roleForm.description = e.target.value" id="textarea-id-01"
                                        placeholder="Description comes here with a character limit."
                                        class="slds-textarea custom-grid-textarea mb-30" :value="`${editDetail.role_description}`" />

                                </div>
                            </div>
                        </div>
                        <div class="btn-align-end">
                            <button type="submit" class="slds-button slds-button_brand btnmain blue-btn ml-10">Save
                                Role</button>

                        </div>

                    </Form>



                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Layout from '../layout/Layout.vue';
import RoleDataService from "../services/RoleDataService";
import InputTextBox from "../elements/FormInputTextBox.vue";
import textArea from "../elements/textArea.vue";
import Loading from 'vue-loading-overlay';
export default {
    name: 'RoleCreate',
    components: {
        Layout,
        InputTextBox,
        textArea, Loading
    },
    data() {
        return {
            editDetail: {},
            allerros: [],
            loading: true,
            placeholder: "Special instructor",

            roleForm: {
                role_name: '',
                descrription: "",

            },
        }
    },
    created() {

        this.getEntitiesAndPermissionList();
        //function here
    },
    mounted() {
        this.getDetailsByRoleId();
    },
    methods: {

        submitData(e) {
            e.preventDefault();
            RoleDataService.create(this.roleForm).then(response => {
                this.$router.push({ name: 'user-management' });
                console.log(response)

            })
                .catch(e => {
                    console.log(e);
                });
            return false;
        },
        async getEntitiesAndPermissionList() {
            RoleDataService.getEntitiesAndPermissionList()
                .then(response => {
                    this.EntitiesList = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        getDetailsByRoleId() {
            var _this = this;


            RoleDataService.getDetailsById(this.$route.params.id)
                .then(response => {
                    _this.loading = false;
                    _this.editDetail = response.data.data;

                })
                .catch(e => {
                    console.log(e);
                });



        }

    }
}
</script>