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
                       />
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
                <table aria-multiselectable="true"
                class="group-table1 slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main border-0"
                role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
                <thead>
                    <tr class="slds-line-height_reset">


                        <th class=" slds-cell_action-mode" scope="col" style="width:3.25rem" v-for="item in header"
                            :key="item">
                            <div v-if="item == ''">
                                <span id="column-group-header" class="slds-assistive-text">Choose a
                                    row</span>
                                <div class="slds-th__action slds-th__action_form p-0">
                                    <div class="slds-checkbox">
                                        <input type="checkbox" name="options" id="checkbox-unique-id-293"
                                            value="checkbox-unique-id-293" tabindex="0"
                                            aria-labelledby="check-select-all-label column-group-header" />
                                        <label class="slds-checkbox__label" for="checkbox-unique-id-293"
                                            id="check-select-all-label">
                                            <span class="slds-checkbox_faux"></span>
                                            <span class="slds-form-element__label slds-assistive-text">Select
                                                All</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                                    <span class="slds-assistive-text">Sort by: </span>
                                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                        <span class="slds-truncate" title="Name">{{ item }}</span>
                                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                aria-hidden="true">
                                                <use
                                                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                                </use>
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                                <div class="slds-resizable">
                                    <input type="range" aria-label="Name column width"
                                        class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-533"
                                        max="1000" min="20" tabindex="0" />

                                </div>
                            </div>

                        </th>

                    </tr>
                </thead>
                <tbody>

                    <tr aria-selected="false" class="slds-hint-parent" v-for="(item, key) in tableData" :key="item">

                        <td class="slds-cell_action-mode" role="gridcell" v-for="(column, k) in item" :key="column">

                            <div v-if="column === ''">
                                <div class="slds-checkbox cus-check1">
                                    <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0"
                                        aria-labelledby="check-button-label-01 column-group-header" />
                                    <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                                        <span class="slds-checkbox_faux"></span>
                                        <span class="slds-form-element__label slds-assistive-text">Select
                                            item 1</span>
                                    </label>
                                </div>
                            </div>
                            <div v-else-if="k == 'id'">
                                {{ key + 1 }}
                            </div>
                            <div v-else>
                                <div class="slds-truncate" title="4">{{ column }}</div>
                            </div>

                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                            <div class="slds-truncate" title="30%">
                                <div class="action-main">
                                    <ul class="action-ul">
                                        <li> 
                                            <a href="javascript:void(0)" v-on:click="openViewModel(item.id)"
                                                :id='item.id'><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a>
                                        </li>
                                        <li>
                                            <router-link :to="`/edit-user/${item.id}`" class=""><img
                                                    src="../../assets/img/svg/edit.svg" alt="icon"></router-link>
                                        </li>

                                        <li> <a class="" href="#" v-on:click="openDeleteModel(item.id)" ><img src="../../assets/img/svg/delete.svg" alt="icon"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
               </div>

            </div>
         

          </div>
        </div>
      </div>
    </div>
  </div>
  
   <SuccessMessageVue :success-message="successMessage" id="successMsg" class="successMsg"
                            v-if="!hides" ref="successNewMsg" />
    <warningMessage :success-message="successMessage" id="successMsg" class="successMsg"
                            v-if="!hides" ref="successNewMsg" />
    <dangerMessage :success-message="successMessage" id="successMsg" class="successMsg"
                            v-if="!hides" ref="successNewMsg" />
<div class="user-record-modal">
        <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal "
            id="add-category" ref="addsubcategory">
            <div class="slds-modal__container addcategory-dialog-modal p-0">
                <div class="slds-modal__header modal-main-record-title category-title">
                    <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">User Detail</h1>
                    <button
                        class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                            viewBox="0 0 11.354 11.385" v-on:click="closeViewModel()">
                            <g id="icons_utility_close-copy" data-name="icons/utility/close-copy"
                                transform="translate(-0.462 -0.462)">
                                <path id="Mask"
                                    d="M7.677,5.954l4-4.031a.446.446,0,0,0,0-.646L11.062.631a.446.446,0,0,0-.646,0L6.385,4.662a.3.3,0,0,1-.431,0L1.923.6a.446.446,0,0,0-.646,0l-.646.646a.446.446,0,0,0,0,.646L4.662,5.923a.3.3,0,0,1,0,.431L.6,10.415a.446.446,0,0,0,0,.646l.646.646a.446.446,0,0,0,.646,0L5.923,7.677a.3.3,0,0,1,.431,0l4.031,4.031a.446.446,0,0,0,.646,0l.646-.646a.446.446,0,0,0,0-.646l-4-4.031a.3.3,0,0,1,0-.431Z"
                                    fill="#06529c" />
                            </g>
                        </svg>
                        <span class="slds-assistive-text">Cancel and close</span>
                    </button>
                </div>
                <div class="slds-modal__content slds-p-around_medium modal-content-group-view" id="modal-content-id-1">
                    <div class="modal-manage-group-main">
                        <div class="group-row-main">
                            <div class="group-col1">
                                <div class="course-row-manage">
                                    <div class="course-col1">
                                        <div class="course-title-main">
                                            <p class="mb-0">User Name</p>
                                        </div>
                                    </div>
                                    <div class="course-col2">
                                        <div class="course-title-desc">
                                            <p class="mb-0">{{ viewDetails.first_name}} {{ viewDetails.last_name}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-row-manage">
                                    <div class="course-col1">
                                        <div class="course-title-main">
                                            <p class="mb-0">Email Id</p>
                                        </div>
                                    </div>
                                    <div class="course-col2">
                                        <div class="course-title-desc">
                                            <p class="mb-0">{{ viewDetails.email}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-row-manage">
                                    <div class="course-col1">
                                        <div class="course-title-main">
                                            <p class="mb-0">Role</p>
                                        </div>
                                    </div>
                                    <div class="course-col2">
                                        <div class="course-title-desc">
                                            <p class="mb-0">{{ viewDetails.role_title}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="studentId" v-if="!viewHides">
                                    <div class="course-row-manage">
                                    <div class="course-col1">
                                        <div class="course-title-main">
                                            <p class="mb-0">Member Ship</p>
                                        </div>
                                    </div>
                                    <div class="course-col2">
                                        <div class="course-title-desc">
                                            <p class="mb-0">{{ viewDetails.title}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-row-manage">
                                    <div class="course-col1">
                                        <div class="course-title-main">
                                            <p class="mb-0">Valid From</p>
                                        </div>
                                    </div>
                                    <div class="course-col2">
                                        <div class="course-title-desc">
                                            <p class="mb-0">{{ viewDetails.valid_from}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-row-manage">
                                    <div class="course-col1">
                                        <div class="course-title-main">
                                            <p class="mb-0">Valid Till</p>
                                        </div>
                                    </div>
                                    <div class="course-col2">
                                        <div class="course-title-desc">
                                            <p class="mb-0">{{ viewDetails.valid_till}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-row-manage">
                                    <div class="course-col1">
                                        <div class="course-title-main">
                                            <p class="mb-0">Price</p>
                                        </div>
                                    </div>
                                    <div class="course-col2">
                                        <div class="course-title-desc">
                                            <p class="mb-0">{{ viewDetails.price}}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                </div>
                                

                            </div>
                            
                        </div>
                    </div>
                </div>
              </div>

            
        </section>
        <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="addsubcategorybackdrop"></div>
        <div class="slds-backdrop " role="presentation" id="edit-category-backdrop" ref="editsubcategorybackdrop"></div>
    </div>
    <div class="user-record-modal">
        <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal"
            id="delete-modal" ref="deleteCategoryModel">
            <div class="slds-modal__container record-dialog-modal">
                <div class="slds-modal__header modal-main-record-title">
                    <!-- <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">USER ROLE DETAILS</h1> -->
                    <button v-on:click="closeDeleteModel()"
                        class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                            viewBox="0 0 11.354 11.385">
                            <g id="icons_utility_close-copy" data-name="icons/utility/close-copy"
                                transform="translate(-0.462 -0.462)">
                                <path id="Mask"
                                    d="M7.677,5.954l4-4.031a.446.446,0,0,0,0-.646L11.062.631a.446.446,0,0,0-.646,0L6.385,4.662a.3.3,0,0,1-.431,0L1.923.6a.446.446,0,0,0-.646,0l-.646.646a.446.446,0,0,0,0,.646L4.662,5.923a.3.3,0,0,1,0,.431L.6,10.415a.446.446,0,0,0,0,.646l.646.646a.446.446,0,0,0,.646,0L5.923,7.677a.3.3,0,0,1,.431,0l4.031,4.031a.446.446,0,0,0,.646,0l.646-.646a.446.446,0,0,0,0-.646l-4-4.031a.3.3,0,0,1,0-.431Z"
                                    fill="#06529c" />
                            </g>
                        </svg>
                        <span class="slds-assistive-text">Cancel and close</span>
                    </button>
                </div>
                <div class="slds-modal__content slds-p-around_medium modal-content-record" id="modal-content-id-1">
                    <div class="delete-modal-main">
                        <div class="del-big-img">
                            <img src="../../assets/img/svg/delete.svg" alt="icon">
                        </div>
                        <div class="delete-text">
                            <h3>Are you sure you want to delete this user?</h3>
                            <p>Do you really want to delete these user? This
                                process cannot be undone</p>
                        </div>
                    </div>
                    <div class="delete-modal-footer">
                        <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                            aria-label="Cancel and close" v-on:click="deleteUser()">Yes</button>
                        <button class="slds-button slds-button_brand btnmain light-blue-btn modal-btn" id="close-btn1"
                            v-on:click="closeDeleteModel()">No </button>
                    </div>
                </div>
            </div>
        </section>
        <div class="slds-backdrop" role="presentation" id="delete-modal-backdrop">
        </div>
    </div>
</template>

<script>
import Layout from '../layout/Layout.vue';


import RoleDataService from "../services/RoleDataService";
import userService from "../services/UserService";
import SuccessMessageVue from '../elements/SuccessMessage.vue';
import warningMessage from '../elements/warningMessage.vue';
import dangerMessage from '../elements/warningMessage.vue';
import Loading from 'vue-loading-overlay';
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    likes: Number,
  
  },
  components: {
    Layout,
    SuccessMessageVue,
    warningMessage,
    dangerMessage,
    Loading
  },
  
  data() {
    return {
      messagetest: 'testme',
      currentSelection:'roles',
      header:[],
      responseList :[],
      tableData:[],
      viewDetails:[],
      loading: true,
       DeleteId: '',
      roleAddLink:"create-role",
      commonLabel:"",
      hides:true,
      viewHides:true
      
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
    openViewModel(id) {
      
            
          userService.getViewUserDetail(id).then((result) => {
              this.viewDetails = result.data.data;
              console.log(this.viewDetails);

              if (this.viewDetails.role_id == "772769390512275457") {
                    this.viewHides = false;

                } else {
                    this.viewHides = true;
                }
          }).catch((err) => {
              console.error(err);
          });

          this.$refs.addsubcategory.classList.add("slds-fade-in-open");
          this.$refs.addsubcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeViewModel() {
            this.$refs.addsubcategory.classList.remove("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        openDeleteModel(id) {
            this.$refs.deleteCategoryModel.classList.add("slds-fade-in-open");
            this.DeleteId = id;
        },
        closeDeleteModel() {
            this.$refs.deleteCategoryModel.classList.remove("slds-fade-in-open");
        },
        deleteUser(){
            
            userService.deleteUser(this.DeleteId).then((result) => {
                console.log(result);
              this.$router.push({ name: 'user-management' })
             this.closeDeleteModel();
             this.userList();
             this.successMessage = "Successfully Deleted";
              this.successToasterShow();
            }).catch((err) => {
                console.error(err);
            });
        },
        successToasterShow() {
            this.hides = false;
            setTimeout(() => this.hides = true, 5000);
        },
        
    
  }
}

</script>
