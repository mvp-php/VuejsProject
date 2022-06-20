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
                    <Form @submit.prevent="submitData" method="post">
                        <div class="create-role-main">
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                    User Role Title <span class="require-danger">*</span></label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <InputTextBox @blur="e => roleForm.role_name = e.target.value"
                                        class="slds-input custom-grid-input mb-20" />

                                </div>
                            </div>
                            <div class="slds-form-element custom-grid">
                                <label class="slds-form-element__label custom-label" for="textarea-id-01">Description
                                </label>
                                <div class="slds-form-element__control custom-grid-control">
                                    <textArea @blur="e => roleForm.description = e.target.value" id="textarea-id-01"
                                        placeholder="Description comes here with a character limit."
                                        class="slds-textarea custom-grid-textarea mb-30" />

                                </div>
                            </div>
                            <div v-for="item in EntitiesList" :key="item">
                                <div class="slds-form-element check-element-main mb-35" v-for="(value, key) in item" :key="value">
                                    <label class="slds-form-element__label custom-label" for="textarea-id-01">{{ key }}
                                        <span class="require-danger">*</span>
                                    </label>
                                    
                                    
                                    
                                    <div class="check-boxes" v-for="operation in value" :key="operation">
                                    
                                        <div class="slds-form-element  check-element-inner">
                                            <div class="slds-form-element__control">
                                                <div class="slds-checkbox role-check-main">
                                                    <input type="checkbox" name="options" id="${operation.id}"
                                                        value="checkbox-unique-id-1" class="role-check" />
                                                    <label class="slds-checkbox__label" for="checkbox-unique-id-1">
                                                        <span class="slds-checkbox_faux"></span>
                                                        <span class="slds-form-element__label">{{operation.permission_code}}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                            
                                    </div>
                                    
                                        
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
export default {
    name: 'RoleCreate',
    components: {
        Layout,
        InputTextBox,
        textArea
    },
    data() {
        return {
            EntitiesList: [],
            allerros: [],
            placeholder: "Special instructor",

            roleForm: {
                role_name: '',
                descrription: "",

            },
        }
    },
    mounted() {
        this.getEntitiesAndPermissionList();
        //function here
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
                    this.EntitiesList = response.data.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
}
</script>