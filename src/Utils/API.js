import axios from "axios";

// export default API {
//   // Gets all saved books
//   getSavedTasks: function() {
//     return axios.get("/api/tasks");
//   },
//   // Deletes the saved book with the given id
//   deleteTask: function(id) {
//     return axios.delete("/api/tasks/" + id);
//   },
//   // Saves an book to the database
//   saveUser: function(userData) {
//     return axios.post("/api/tasks", userData);
//   }
// };


// need to set headers so i can post data? 
// and work on changing STATE. 
const API = {
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/signup", userData);
  }
}
export default API
