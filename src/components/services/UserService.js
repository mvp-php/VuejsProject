import http from "../../config/DataService";
import authHeader from '../../config/AuthHeader';
class UserService {
 
  saveUser(data){
    return http.post(`/user-save/`,data, { headers: authHeader() });
  }

  getEditDetails(id){
    return http.get(`/edit-category-detail/${id}`, { headers: authHeader() });
  }

  getAllRoleList(){
    return http.get(`/all-role-list`, { headers: authHeader() });
  }
  
}
export default new UserService();
