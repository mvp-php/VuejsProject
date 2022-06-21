<template>

  <Layout />
  <div class="content-main">
    <div class="content">
      <p class="page-title mb-20">USER MANAGEMENT</p>
      <div class="main-card">
        <div class="tab-main">
          <div class="btn-align-end">
            <div class="slds-form-element">
              <div class="slds-form-element__control search-inp-control">
                <input type="text" id="text-input-id-50" placeholder="Search role here…"
                  class="slds-input search-inp" />
              </div>
            </div>
            <a :href="`${roleAddLink}`" class="slds-button slds-button_brand btnmain blue-btn ml-10">{{ commonLabel}}</a>
            
            <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10" href="#">Set Default
              Roles</button>
          </div>
           <loading v-model:active="loading" :can-cancel="true" :on-cancel="onCancel"
                        :is-full-page="fullPage" />
          <div class="slds-tabs_default cus-tab-default">
            <ul class="slds-tabs_default__nav cus-tab-nav nav-top" role="tablist">

              <li class="slds-tabs_default__item  " v-bind:class = "(this.currentSelection=='roles')?'slds-is-active':''"  title="Item One" role="presentation" id="item-one">
                <a class="slds-tabs_default__link" href="#" role="tab" @click="hideShow('roles')" tabindex="0"
                  aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">User
                  Roles</a>
              </li>
              <li class="slds-tabs_default__item "  v-bind:class = "(this.currentSelection=='users')?'slds-is-active':''"    title="Item Two" role="presentation" id="item-two">
                <a class="slds-tabs_default__link" href="#" role="tab" @click="hideShow('users')" tabindex="-1"
                  aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Users</a>
              </li>

            </ul>
            <div id="user-role" class="slds-tabs_default__content slds-show slds-p-top_none" role="tabpanel"
              aria-labelledby="tab-default-1__item">
              <div>
                <Table :messagetest="currentSelection" :header='header' :data="tableData" />
              </div>

            </div>
         

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="alert-main">
    <!-- <div class="cus-alert warning-alert mb-10">
            <div class="warning-inner">
                <img src="../../assets/img/svg/warning.svg" alt="" class="warning-img">
                <div>Warning message comes here...</div>
            </div>
            <button class="slds-button alert-btn">
                <img src="../../assets/img/svg/warning-close.svg" alt="">
            </button>
        </div>
        <div class="cus-alert error-alert mb-10">
            <div class="warning-inner">
                <img src="../../assets/img/svg/ban.svg" alt="" class="warning-img">
                <div>Warning message comes here...</div>
            </div>
            <button class="slds-button alert-btn">
                <img src="../../assets/img/svg/error-close.png" alt="">
            </button>
        </div>
        <div class="cus-alert success-alert ">
            <div class="warning-inner">
                <img src="../../assets/img/svg/success-alert.png" alt="" class="warning-img">
                <div>Success message comes here...</div>
            </div>
            <button class="slds-button alert-btn">
                <img src="../../assets/img/svg/success-close.png" alt="">
            </button>
        </div> -->
  </div>

</template>

<script>
import Layout from '../layout/Layout.vue';
import Table from '../elements/dataTable.vue';

import RoleDataService from "../services/RoleDataService";
import userService from "../services/UserService";
import Loading from 'vue-loading-overlay';
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    likes: Number,
  
  },
  components: {
    Layout,
    Table,
    Loading
  },
  
  data() {
    return {
      messagetest: 'testme',
      currentSelection:'roles',
      header:[],
      responseList :[],
      tableData:[],
      loading: true,
    
      roleAddLink:"create-role",
      commonLabel:""
     
      
    }

  },
  created(){
    this.header = ["",'Sr No.','Role Title','No.of Users','Created On','Action'];
    this.responseList = this.roleList();
    this.roleAddLink="create-role";
    this.commonLabel="Create Role";
  },
  methods: {
    hideShow(value) {
      this.tableData=[];
      this.header=[];
      if(value=="roles"){
        this.currentSelection='roles'
        this.header=["",'Sr No.','Role Title','No.of Users','Created On','Action'];
        this.responseList = this.roleList();
        this.roleAddLink="create-role";
        this.commonLabel="Create Role";
      }else{
        this.currentSelection='users'
        this.userList();
        this.header=["",'SrNo','User Name','Email Id','Role','Created On','Action'];
        
        this.roleAddLink="create-user";
        this.commonLabel="Create User";
      }

     
    },
    
   async roleList() {
      var _this = this;
      await RoleDataService.getRoleList()
          .then(async response => {
            _this.loading = false;
            this.responseList= await response.data.data;
            
            this.tableData = this.responseList;
      
      }).catch(e => {
        console.log(e)
    });
      
    },
    async userList(){
      this.loading =true
      var _this = this;
      await userService.getUserList()
            .then(async response => {
              _this.loading = false;
              this.responseList= await response.data.data;
              
              this.tableData = this.responseList;
        
        }).catch(e => {
          console.log(e)
      });
    },
  }

}

</script>
