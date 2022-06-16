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
            <a class="slds-button slds-button_brand btnmain blue-btn ml-10"
              href="user-management-create-role.html">Create Role</a>
            <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10">Set Default
              Roles</button>
          </div>
          <div class="slds-tabs_default cus-tab-default">
            <ul class="slds-tabs_default__nav cus-tab-nav nav-top" role="tablist">
              <li class="slds-tabs_default__item slds-is-active " title="Item One" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true"
                  aria-controls="tab-default-1" id="tab-default-1__item">User
                  Roles</a>
              </li>
              <li class="slds-tabs_default__item " title="Item Two" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false"
                  aria-controls="tab-default-2" id="tab-default-2__item">Users</a>
              </li>
              <li class="slds-tabs_default__item" title="Item Three" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false"
                  aria-controls="tab-default-3" id="tab-default-3__item">Enterprices</a>
              </li>
            </ul>
            <div id="tab-default-1" class="slds-tabs_default__content slds-show slds-p-top_none" role="tabpanel"
              aria-labelledby="tab-default-1__item">
              <div>
                <div class="table-main">
                  <table aria-multiselectable="true"
                    class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main border-0"
                    role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
                    <thead>
                      <tr class="slds-line-height_reset">
                        <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
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
                                <span class="slds-form-element__label slds-assistive-text">Select
                                  All</span>
                              </label>
                            </div>
                          </div>
                        </th>
                        <th aria-label="Name" aria-sort="none"
                          class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                            <span class="slds-assistive-text">Sort by: </span>
                            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                              <span class="slds-truncate" title="Name">Sr No.</span>
                              <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                  aria-hidden="true">
                                  <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                  </use>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <div class="slds-resizable">
                            <input type="range" aria-label="Name column width"
                              class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-533" max="1000"
                              min="20" tabindex="0" />

                          </div>
                        </th>
                        <th aria-label="Account Name" aria-sort="none"
                          class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                            <span class="slds-assistive-text">Sort by: </span>
                            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                              <span class="slds-truncate" title="Account Name">Role
                                title</span>
                              <span><img src="../../assets/img/svg/filter.svg" alt="filter" class="filter"></span>
                              <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                  aria-hidden="true">
                                  <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                  </use>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <div class="slds-resizable">
                            <input type="range" aria-label="Account Name column width"
                              class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-534" max="1000"
                              min="20" tabindex="0" />

                          </div>
                        </th>
                        <th aria-label="Close Date" aria-sort="none"
                          class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                            <span class="slds-assistive-text">Sort by: </span>
                            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                              <span class="slds-truncate" title="Close Date">No.of
                                Users</span>
                              <span><img src="../../assets/img/svg/filter.svg" alt="filter" class="filter"></span>
                              <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                  aria-hidden="true">
                                  <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                  </use>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <div class="slds-resizable">
                            <input type="range" aria-label="Close Date column width"
                              class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-535" max="1000"
                              min="20" tabindex="0" />

                          </div>
                        </th>
                        <th aria-label="Stage" aria-sort="none"
                          class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                            <span class="slds-assistive-text">Sort by: </span>
                            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                              <span class="slds-truncate" title="Stage">Created On</span>
                              <span><img src="../../assets/img/svg/filter.svg" alt="filter" class="filter"></span>
                              <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                  aria-hidden="true">
                                  <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                  </use>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <div class="slds-resizable">
                            <input type="range" aria-label="Stage column width"
                              class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-536" max="1000"
                              min="20" tabindex="0" />

                          </div>
                        </th>
                        <th aria-label="Confidence" aria-sort="none"
                          class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                            <span class="slds-assistive-text">Sort by: </span>
                            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                              <span class="slds-truncate" title="Confidence"></span>
                              <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                  aria-hidden="true">
                                  <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                  </use>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <div class="slds-resizable">
                            <input type="range" aria-label="Confidence column width"
                              class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-537" max="1000"
                              min="20" tabindex="0" />

                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr aria-selected="false" class="slds-hint-parent">
                        <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                          <div class="slds-checkbox cus-check1">
                            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0"
                              aria-labelledby="check-button-label-01 column-group-header" />
                            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-form-element__label slds-assistive-text">Select
                                item 1</span>
                            </label>
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="1">1</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="Admin">Admin</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="2">2</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="27/01/2022">27/01/2022
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="">
                            <div class="slds-truncate" title="30%">
                              <div class="action-main">
                                <ul class="action-ul">
                                  <li> <a class="" href="#"><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a></li>
                                  <li> <a class="" href="#"><img src="../../assets/img/svg/edit.svg" alt="icon"></a></li>
                                  <li> <a class="" href="#"><img src="../../assets/img/svg/delete.svg" alt="icon"></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr aria-selected="false" class="slds-hint-parent">
                        <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                          <div class="slds-checkbox cus-check1">
                            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0"
                              aria-labelledby="check-button-label-01 column-group-header" />
                            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-form-element__label slds-assistive-text">Select
                                item 1</span>
                            </label>
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="2">2</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="Manager">Manager</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="6">6 </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="27/01/2022">27/01/2022
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="30%">
                            <div class="action-main">
                              <ul class="action-ul">
                                <li> <a class="" href="#"><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/edit.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/delete.svg" alt="icon"></a></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr aria-selected="false" class="slds-hint-parent">
                        <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                          <div class="slds-checkbox cus-check1">
                            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0"
                              aria-labelledby="check-button-label-01 column-group-header" />
                            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-form-element__label slds-assistive-text">Select
                                item 1</span>
                            </label>
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="3">3</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="Instructor">Instructor</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="6">6 </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="27/01/2022">27/01/2022
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="30%">
                            <div class="action-main">
                              <ul class="action-ul">
                                <li> <a class="" href="#"><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/edit.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/delete.svg" alt="icon"></a></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr aria-selected="false" class="slds-hint-parent">
                        <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                          <div class="slds-checkbox cus-check1">
                            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0"
                              aria-labelledby="check-button-label-01 column-group-header" />
                            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-form-element__label slds-assistive-text">Select
                                item 1</span>
                            </label>
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="4">4</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="Group Manager">Group Manager</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="6">6 </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="27/01/2022">27/01/2022
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="30%">
                            <div class="action-main">
                              <ul class="action-ul">
                                <li> <a class="" href="#"><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/edit.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/delete.svg" alt="icon"></a></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr aria-selected="false" class="slds-hint-parent">
                        <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                          <div class="slds-checkbox cus-check1">
                            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0"
                              aria-labelledby="check-button-label-01 column-group-header" />
                            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-form-element__label slds-assistive-text">Select
                                item 1</span>
                            </label>
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="5">5</div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="Course Manager">Course Manager
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="6">6 </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="27/01/2022">27/01/2022
                          </div>
                        </td>
                        <td class="slds-cell_action-mode" role="gridcell">
                          <div class="slds-truncate" title="30%">
                            <div class="action-main">
                              <ul class="action-ul">
                                <li> <a class="" href="#"><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/edit.svg" alt="icon"></a></li>
                                <li> <a class="" href="#"><img src="../../assets/img/svg/delete.svg" alt="icon"></a></li>
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
            <div id="tab-default-2" class="slds-tabs_default__content slds-hide" role="tabpanel"
                            aria-labelledby="tab-default-2__item">Item Two Content</div>
              <div id="tab-default-3" class="slds-tabs_default__content slds-hide" role="tabpanel"
                  aria-labelledby="tab-default-3__item">Item Three Content</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Layout from '../layout/Layout.vue';

export default {
  name: 'HelloWorld',
  components: {
    Layout
  }
}
</script>