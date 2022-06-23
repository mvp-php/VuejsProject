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
    return http.get(`/get-category/${id}`, { headers: authHeader() });
  }

  updateCategory(data){
    return http.post(`/update-category`,data, { headers: authHeader() });
  }
  
  deleteCategory(id){
    return http.post(`/delete-category/`,{id: id,},{ headers: authHeader() });
  }

  getAllCategoryList(){
    return http.get(`/category`, { headers: authHeader() });
  }

  
  
}
export default new CategoryService();
