import axios from "axios";
// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },
  saveBooks: function(book) {
    
    const {title, author, description} = book;
    console.log("\ninside saveBooks method", title, author, description);
    return axios.post("/api/savedbooks", { title, author, description });
  }
};

