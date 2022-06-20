import http from "../../config/DataService";
import authHeader from '../../config/AuthHeader';
class CategoryService {
 
  getCategoryList(){
    return http.get(`/category-list/`, { headers: authHeader() });
  }
  saveCategory(data){
    return http.post(`/category-save/`,data, { headers: authHeader() });
  }

  getEditDetails(id){
    return http.get(`/edit-category-detail/${id}`, { headers: authHeader() });
  }

  getAllRoleList(){
    return http.get(`/all-role-list`, { headers: authHeader() });
  }
  
}
export default new CategoryService();
