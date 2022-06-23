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
                        Create A User
                    </div>
                    <loading v-model:active="loading" :can-cancel="true" :on-cancel="onCancel"
                        :is-full-page="fullPage" />
                    <Form @submit.prevent="submitData" method="post" v-if="!loading">
                        <div class="create-role-main">
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    First Name <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <InputTextBox @blur="e => userForm.first_name = e.target.value"
                                        class="slds-input custom-grid-input mb-20" id="first_name"
                                        placeHolder="First Name" />
                                    <span class="text-danger" id="first_name_error" ref="caterror"></span>
                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    Last Name <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <InputTextBox @blur="e => userForm.last_name = e.target.value"
                                        class="slds-input custom-grid-input mb-20" id="last_name"
                                        placeHolder="Last Name" />
                                    <span class="text-danger" id="last_name_error" ref="caterror"></span>
                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    Email <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <InputTextBox @blur="e => userForm.email = e.target.value"
                                        class="slds-input custom-grid-input mb-20" id="email" placeHolder="Email" />
                                    <span class="text-danger" id="email_error" ref="caterror"></span>

                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    Role <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <select @blur="e => userForm.role_id = e.target.value"
                                        v-model="userForm.role_id"
                                        class="slds-select mb-20 custom-grid-input" @change="ChangeRole($event)">
                                        <option value="">Select Role</option>
                                        <option v-for="roles in allRoleList" :key="roles"
                                            :value="roles.id">
                                            {{ roles.role_title }}
                                        </option>

                                    </select>
                                    
                                </div>

                            </div>
                            <div id="studentId" v-if="!hides">
                                <div class="slds-form-element custom-grid">
                                    <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                        Select Membership <span class="require-danger">*</span></label>
                                    <div class="slds-form-element__control custom-grid-control">
                                        <select @blur="e => userForm.member_ship_id = e.target.value"
                                        v-model="userForm.member_ship_id"
                                        class="slds-select mb-20 custom-grid-input" >
                                        <option value="">Select Membership</option>
                                        <option v-for="plan in paymentPlan" :key="plan"
                                            :value="plan.id">
                                            {{ plan.title }}
                                        </option>

                                    </select>
                                        
                                        
                                    </div>

                                </div>
                                <div class="slds-form-element custom-grid valid-col1">

                                        <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                            Valid From <span class="require-danger">*</span></label>
                                        <div class="slds-form-element__control custom-grid-control">
                                            <InputTextBox type="date" @blur="e => userForm.valid_from = e.target.value"
                                                class="slds-input custom-grid-input mb-20" id="email"
                                                placeHolder="Amount" />
                                        </div>
                                    </div>
                                    <div class="slds-form-element custom-grid valid-col2">

                                        <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                            Valid To <span class="require-danger">*</span></label>
                                        <div class="slds-form-element__control custom-grid-control">
                                            <InputTextBox type="date" @blur="e => userForm.valid_to = e.target.value"
                                                class="slds-input custom-grid-input mb-20" id="email"
                                                placeHolder="Amount" />
                                        </div>
                                    </div>
                                <div class="valid-row">
                                    
                                </div>

                                <div class="slds-form-element custom-grid">
                                    <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                        Amount <span class="require-danger">*</span></label>
                                    <div class="slds-form-element__control custom-grid-control">
                                        <InputTextBox @blur="e => userForm.amount = e.target.value"
                                            class="slds-input custom-grid-input mb-20" id="email"
                                            placeHolder="Amount" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="btn-align-end">
                            <ButtonComponent type="submit" class="slds-button slds-button_brand btnmain blue-btn ml-10"
                                :ButtonName="ButtonName" />
                        </div>

                    </Form>



                </div>
            </div>
        </div>
    </div>
    <dangerMessage :success-message="successMessage" id="successMsg" class="successMsg"
                            v-if="!dangerHide" ref="successNewMsg" />
</template>
<style>
.valid-row {
    display: flex;
    flex-wrap: wrap;
}

.valid-col1 {
    width: 100%;
    max-width: 50%;
    flex: 0 0 50%;
}

.valid-col2 {
    width: 100%;
    max-width: 50%;
    flex: 0 0 50%;
}
</style>
<script>
import Layout from '../layout/Layout.vue';
import ButtonComponent from '../elements/formInputButton.vue';
import InputTextBox from "../elements/FormInputTextBox.vue";

import RoleDataService from "../services/RoleDataService";
import userService from "../services/UserService";
import PaymentPlanService from "../services/PaymentPlanService";
import Loading from 'vue-loading-overlay';
import dangerMessage from '../elements/warningMessage.vue';
export default {
    name: 'Component',
    components: {
        Layout,
        ButtonComponent,
        InputTextBox,
        Loading,
        dangerMessage

    },
    data() {
        return {
            ButtonName: "Save User",
            loading: true,
            hides: true,
            dangerHide:true,
            allRoleList: [],
            paymentPlan: [],
            successMessage: '',
            userForm: {
                first_name: '',
                last_name: '',
                email: '',
                role_id: ""
            },
        }
    },
    created() {
        this.getRoleList();
        this.PaymentPlanList();
    },
    methods: {
        getRoleList() {

            RoleDataService.getAllRoleList().then(response => {
                this.loading = false;
                this.allRoleList = response.data.data;

            }).catch(e => {
                console.log(e)
            });

        },
        PaymentPlanList() {
            PaymentPlanService.getPaymentPlan().then(response => {
                this.loading = false;
                this.paymentPlan = response.data.data;

            }).catch(e => {
                console.log(e)
            });
        },
        ChangeRole(e) {

            if (e.target.value.trim() == "772769390512275457") {
                this.hides = false;

            } else {
                this.hides = true;
            }
        },
        submitData() {
            document.getElementById("first_name_error").textContent = "";
            document.getElementById("last_name_error").textContent = "";
            document.getElementById("email_error").textContent = "";

            if (!this.userForm.first_name) {
                document.getElementById("first_name_error").textContent = "Enter the first name";
                event.preventDefault();
            }
            if (!this.userForm.last_name) {
                document.getElementById("last_name_error").textContent = "Enter the last name";
                event.preventDefault();
            }
            if (!this.userForm.email) {
                document.getElementById("email_error").textContent = "Enter the email id";
                event.preventDefault();
            }
            userService.saveUser(this.userForm)
                .then((result) => {
                    console.log(result)

                    this.$router.push({ name: 'user-management' });
                }).catch(error => {
                    
                    this.successMessage = error.response.data.error_msg;
                    console.log(error.response.data.error_msg);
                    this.dangerToasterShow();
                

                })
        },
        dangerToasterShow() {
            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
    }

}
</script>