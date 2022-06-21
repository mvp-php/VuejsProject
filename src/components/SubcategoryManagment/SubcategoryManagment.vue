<template>
    <Layout />

    <div class="content-main">
        <div class="slds-modal__header modal-main-record-title category-title">
            <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">ADD SUB CATEGORY</h1>
        </div>
        <div class="slds-modal__content slds-p-around_medium modal-content-category" id="modal-content-id-1">
            <form @submit="addSubCategory">
                <div class="modal-row">
                    <div class="modal-category-col1">
                        <p class="mb-0 user-modal-title">Select Major Category</p>
                    </div>
                    <div class="modal-record-col2">
                        <div class="slds-form-element__control  ">
                            <FormInputSelect @blur="e => subCategoryData.majorCategory = e.target.value"
                                :category-list="categoryAllData" class="slds-select mb-20 custom-grid-input"
                                id="select-01" />
                            <span class="text-danger" id="majorCategoryerror" ref="majorCategoryerror"></span>

                        </div>
                    </div>
                </div>
                <div class="modal-row">
                    <div class="modal-category-col1">
                        <p class="mb-0 user-modal-title">Sub Category Name</p>
                    </div>
                    <div class="modal-record-col2">
                        <div class="slds-form-element__control  ">
                            <FormInputTextBox id="SubCategory"
                                @blur="e => subCategoryData.subCategoryName = e.target.value"
                                placeholder="Enter category" />
                            <span class="text-danger" id="subcatnameeerror" ref="subcatnameeerror"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-row">
                    <div class="modal-category-col1">
                        <p class="mb-0 user-modal-title">Category description</p>
                    </div>
                    <div class="modal-record-col2">
                        <div class="mb-0 user-modal-desc">
                            <div class="slds-form-element__control ">
                                <FormInputDescription
                                    @blur="e => subCategoryData.subCategoryDescription = e.target.value" />
                                <span class="text-danger" id="subcatedescerror" ref="subcatedescerror"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-row">
                    <div class="modal-category-col1">
                        <p class="mb-0 user-modal-title">Upload thumbnail</p>
                    </div>
                    <div class="modal-record-col2">
                        <Dropzone />
                    </div>
                </div>
                <div class="btn-align-end p-0">
                    <FormInputButton ButtonName="Add Category" />
                </div>
            </form>
        </div>
    </div>

    <div class="content-main">
        <div class="content">
            <div class="manage-flex-just mb-20">
                <p class="page-title ">MANAGE SUB CATEGORIES </p>
            </div>
            <div class="main-card">
                <div class="tab-main">
                    <div>
                        <div class="table-main manage-table-main">
                            <table aria-multiselectable="true"
                                class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main"
                                role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
                                <thead>
                                    <tr class="slds-line-height_reset">
                                        <th class="slds-text-align_right slds-cell_action-mode" scope="col"
                                            style="width:3.25rem">
                                            <span id="column-group-header" class="slds-assistive-text">Choose a
                                                row</span>
                                            <div class="slds-th__action slds-th__action_form">
                                                <div class="slds-checkbox">
                                                    <input type="checkbox" name="options" id="checkbox-unique-id-293"
                                                        value="checkbox-unique-id-293" tabindex="0"
                                                        aria-labelledby="check-select-all-label column-group-header" />
                                                    <label class="slds-checkbox__label" for="checkbox-unique-id-293"
                                                        id="check-select-all-label">
                                                        <span class="slds-checkbox_faux"></span>
                                                        <span
                                                            class="slds-form-element__label slds-assistive-text">Select
                                                            All</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </th>
                                        <th aria-label="Name" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Name">Sr No.</span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Name column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-533" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Account Name" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Account Name">
                                                        Sub Category</span>
                                                    <span><img src="../../assets/img/svg/filter.svg" alt="filter"
                                                            class="filter"></span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Account Name column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-534" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Account Name" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Account Name">
                                                        Major Category</span>
                                                    <span><img src="../../assets/img/svg/filter.svg" alt="filter"
                                                            class="filter"></span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Account Name column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-534" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Stage" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Stage">Created On</span>
                                                    <span><img src="../../assets/img/svg/filter.svg" alt="filter"
                                                            class="filter"></span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Stage column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-536" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Confidence" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Confidence">Action</span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Confidence column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-537" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(categoryD, index) in getAllSubCatData" :key="categoryD.id"
                                        aria-selected="false" class="slds-hint-parent">
                                        <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                                            <div class="slds-checkbox cus-check1">
                                                <input type="checkbox" name="options" id="checkbox-01" tabindex="0"
                                                    :value="categoryD.id"
                                                    aria-labelledby="check-button-label-01 column-group-header" />
                                                <label class="slds-checkbox__label" for="checkbox-01"
                                                    id="check-button-label-01">
                                                    <span class="slds-checkbox_faux"></span>
                                                    <span class="slds-form-element__label slds-assistive-text">Select
                                                        item 1</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td class="slds-cell_action-mode" role="gridcell">
                                            <div class="slds-truncate" title="1">{{ index + 1 }}</div>
                                        </td>
                                        <td class="slds-cell_action-mode" role="gridcell">
                                            <div class="slds-truncate" title="Network security">
                                                {{ categoryD.category_title }}</div>
                                        </td>
                                        <td class="slds-cell_action-mode" role="gridcell">
                                            <div class="slds-truncate" title="Network security">
                                                {{ categoryD.category_description }}</div>
                                        </td>
                                        <td class="slds-cell_action-mode" role="gridcell">
                                            <div class="slds-truncate" title="27/01/2022">
                                                {{ categoryD.created_at }}
                                            </div>
                                        </td>
                                        <td class="slds-cell_action-mode" role="gridcell">
                                            <div class="slds-truncate" title="">
                                                <div class="slds-truncate" title="30%">
                                                    <div class="action-main manage-content-main">
                                                        <ul class="action-ul">
                                                            <li> <a v-on:click="openViewModel(categoryD.id)"
                                                                    title="View" class="view-modal" href="#"><img
                                                                        src="../../assets/img/svg/eye-blue.svg"
                                                                        alt="icon"></a></li>
                                                            <li> <a v-on:click="openEditModel(categoryD.id)"
                                                                    title="Edit" class="" href="#"><img
                                                                        src="../../assets/img/svg/edit.svg"
                                                                        alt="icon"></a></li>
                                                            <li> <a v-on:click="openDeleteModel(categoryD.id)" class=""
                                                                    href="#"><img src="../../assets/img/svg/delete.svg"
                                                                        alt="icon"></a>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="openSubCategoryModel(categoryD.id)"
                                                                    href="#" title="Add Sub Category">
                                                                    <img src="../../assets/img/svg/plus-add.svg"
                                                                        alt="add-img" class="all-img-add"></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- alerts -->
                        <SuccessMessageVue :success-message="successMessage" id="successMsg" class="successMsg"
                            :class="{ show: hide }" ref="successNewMsg" />
                        <!-- alerts -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Layout from '../layout/Layout.vue';
import Dropzone from '../../components/elements/Dropzone.vue';
import FormInputTextBox from '../../components/elements/FormInputTextBox.vue';
import FormInputDescription from '../../components/elements/FormInputDescription.vue';
import FormInputButton from '../../components/elements/FormInputButton.vue';
import SuccessMessageVue from '../elements/SuccessMessage.vue';
import FormInputSelect from '../elements/FromInputSelect.vue';
import axios from 'axios';
export default {
    name: 'SubCategoryManagment',
    components: {
        Layout,
        Dropzone,
        FormInputTextBox,
        FormInputDescription,
        FormInputButton,
        FormInputSelect,
        SuccessMessageVue,
    },
    data() {
        return {
            error: [],
            categoryName: null,
            categoryeditName: null,
            categoryDescription: null,
            categoryeditDescription: null,
            categoryAllData: [],
            SubCategoryAllData: [],
            editModelData: {
                categoryeditName: '',
                categoryeditDescription: '',
                // categoryImage: '',
            },
            categoryData: {
                categoryName: '',
                categoryDescription: '',
                // categoryImage: '',
            },
            selectedIndex: [],
            updateCategoryData: {
                categoryeditName: '',
                categoryeditDescription: '',
                // categoryImage: '',
            },
            subCategoryData: {
                majorCategory: '',
                subCategoryName: '',
                subCategoryDescription: '',
                // categoryImage: '',
            },
            DeleteId: '',
            hide: false,
            successMessage: '',
        }
    },
    methods: {
        getAllSubCatData() {
            axios.get("http://127.0.0.1:8000/api/get-all-sub-category", this.form).then(
                function (response) {
                    this.SubCategoryAllData = response.data.data;
                }.bind(this)
            );
        },
        openModel() {
            this.$refs.addcategory.classList.add("slds-fade-in-open");
            this.$refs.addcategorybackdrop.classList.add("slds-backdrop_open");
        },
        successToasterShow() {
            this.hide = true;
            setTimeout(() => this.hide = false, 5000);
        },
        openEditModel(id) {
            // get Data By Id
            this.axios.post("http://127.0.0.1:8000/api/get-category/" + id, this.categoryData).then((result) => {
                this.editModelData = result.data.data;
            }).catch((err) => {
                console.error(err);
            });
            this.$refs.editcategory.classList.add("slds-fade-in-open");
            this.$refs.editcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeModel() {
            this.$refs.addcategory.classList.remove("slds-fade-in-open");
            this.$refs.addcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        closeEditModel() {
            this.$refs.editcategory.classList.remove("slds-fade-in-open");
            this.$refs.editcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        openDeleteModel(e) {
            this.$refs.deleteCategoryModel.classList.add("slds-fade-in-open");
            this.DeleteId = e;
        },
        closeDeleteModel() {
            this.$refs.deleteCategoryModel.classList.remove("slds-fade-in-open");
        },
        openViewModel(id) {
            this.axios.post("http://127.0.0.1:8000/api/get-category/" + id, this.categoryData).then((result) => {
                this.editModelData = result.data.data;
            }).catch((err) => {
                console.error(err);
            });
            this.$refs.openViewModelNew.classList.add("slds-fade-in-open");
            this.$refs.openViewModelNewbackdrop.classList.add("slds-backdrop_open");

        },
        closeViewModel() {
            this.$refs.openViewModelNew.classList.remove("slds-fade-in-open");
            this.$refs.openViewModelNewbackdrop.classList.remove("slds-backdrop_open");
        },
        addNewCategory(e) {
            document.getElementById("catnameeerror").textContent = "";
            document.getElementById("catedescerror").textContent = "";
            if (!this.categoryData.categoryName) {
                document.getElementById("catnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.categoryData.categoryDescription) {
                document.getElementById("catedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            this.axios.post("http://127.0.0.1:8000/api/add-category", this.categoryData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((result) => {
                this.closeModel();
                this.getAllCatData();
                this.successMessage = "Successfully Inserted";
                this.successToasterShow();
                console.warn(result)
            }).catch((err) => {
                console.log(err)
            });
            e.preventDefault();
        },
        updateCategory(e) {
            document.getElementById("catnameeerroredit").textContent = "";
            document.getElementById("catedescerroredit").textContent = "";
            if (!this.editModelData.category_title) {
                document.getElementById("catnameeerroredit").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.editModelData.category_description) {
                document.getElementById("catedescerroredit").textContent = "Please enter Description";
                e.preventDefault();
            }
            this.axios.post("http://127.0.0.1:8000/api/update-category", this.editModelData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((result) => {
                if (result) {
                    this.closeEditModel();
                    this.getAllCatData();
                    this.successMessage = "Successfully Update";
                    this.successToasterShow();
                }
            }).catch((err) => {
                console.log(err);
            });
            e.preventDefault();
        },
        deleteCategory() {
            this.axios.post("http://127.0.0.1:8000/api/delete-category", {
                id: this.DeleteId,
            }).then((result) => {
                this.$router.push({ name: 'categoryManagement' })
                console.log(result)
                this.closeDeleteModel();
                this.getAllCatData();
                this.successMessage = "Successfully Deleted";
                this.successToasterShow();
            }).catch((err) => {
                console.log(err);
            });
        },
        openSubCategoryModel() {
            axios.get("http://127.0.0.1:8000/api/category", this.form).then(
                function (response) {
                    this.categoryAllData = response.data.data;
                }.bind(this)
            );
            this.$refs.addsubcategory.classList.add("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeSubCategoryModel() {
            this.$refs.addsubcategory.classList.remove("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        addSubCategory(e) {
            document.getElementById("majorCategoryerror").textContent = "";
            document.getElementById("subcatnameeerror").textContent = "";
            document.getElementById("subcatedescerror").textContent = "";
            if (!this.subCategoryData.majorCategory) {
                document.getElementById("majorCategoryerror").textContent = "Please select Major Category";
                e.preventDefault();
            }
            if (!this.subCategoryData.subCategoryName) {
                document.getElementById("subcatnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.subCategoryData.subCategoryDescription) {
                document.getElementById("subcatedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            this.axios.post("http://127.0.0.1:8000/api/add-sub-category", this.subCategoryData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((result) => {
                document.getElementById("SubCategory").textContent = "";
                this.closeSubCategoryModel();
                this.getAllCatData();
                this.successMessage = "Successfully Inserted";
                this.successToasterShow();
                console.warn(result)
            }).catch((err) => {
                console.log(err)
            });
            e.preventDefault();
        },
    },
    mounted() {
        axios.get("http://127.0.0.1:8000/api/category", this.form).then(
            function (response) {
                this.categoryAllData = response.data.data;
            }.bind(this)
        );
    }
}
</script>