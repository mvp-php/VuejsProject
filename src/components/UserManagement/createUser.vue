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
                                        class="slds-input custom-grid-input mb-20" id="first_name" placeHolder="User Name"/>
                                    <span class="text-danger" id="first_name_error" ref="caterror"></span>
                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    Last Name <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <InputTextBox @blur="e => userForm.last_name = e.target.value"
                                        class="slds-input custom-grid-input mb-20" id="last_name" placeHolder="User Name"/>
                                    <span class="text-danger" id="last_name_error" ref="caterror"></span>
                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    Email <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <InputTextBox @blur="e => userForm.email = e.target.value"
                                        class="slds-input custom-grid-input mb-20" id="email" placeHolder="Email"/>
                                        <span class="text-danger" id="email_error" ref="caterror"></span>

                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    Role <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                   <selectDropdown :options="option" class="slds-input custom-grid-input mb-20"/>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="btn-align-end">
                            <ButtonComponent  type="submit" class="slds-button slds-button_brand btnmain blue-btn ml-10" :ButtonName="ButtonName"/>
                        </div>

                    </Form>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from '../layout/Layout.vue';
import ButtonComponent from '../elements/formInputButton.vue';
import InputTextBox from "../elements/FormInputTextBox.vue";
import selectDropdown from "../elements/selectDropdown.vue";
import RoleDataService from "../services/RoleDataService";
import Loading from 'vue-loading-overlay';
export default {
    name: 'Component',
    components: {
        Layout,
        ButtonComponent,
        InputTextBox,
        Loading,
        selectDropdown,
       
      
    },
    data() {
        return {
            ButtonName:"Save User",
            loading: true,
            option:"",
            userForm: {
                first_name: '',
                last_name:'',
                email:'',
              

            },
        }
    },
    created(){
        this.getRoleList();
    },
    methods: {
        async getRoleList(){
            var _this = this;
            RoleDataService.getAllRoleList().then(async response => {
              _this.loading = false;
                    this.responseList= await response.data.data;
                    
                    this.option = this.responseList;
                
                }).catch(e => {
                console.log(e)
            });
        },
        submitData(){
            document.getElementById("first_name_error").textContent = "";
            document.getElementById("catedescerroredit").textContent = "";

            if (!this.userForm.first_name) {
                document.getElementById("first_name_error").textContent = "Enter the major category name";
                event.preventDefault();
            }
        }
    }

}
</script>