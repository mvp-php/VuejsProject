import http from "../../config/DataService";
import authHeader from '../../config/AuthHeader';
class UserService {
 
  saveUser(data){
    return http.post(`/user-save/`,data, { headers: authHeader() });
  }

  getUserList(){
    return http.get(`/user-list/`,{ headers: authHeader() });
  }
  
  getUserDetails(id){
    return http.get(`/edit-user-detail/${id}`, { headers: authHeader() });
  }
}
export default new UserService();
