import { CATEGORYCHECKED,TITLECHECKED, AUTHORIMGCHECKED,AUTHORTITLECHECKED, GET_CONTENT, DELETE_CONTENT, UPDATE_CONTENT } from "./actionTypes"
// import initialState from "./initialState";
const initialState = {
    // cart: [],
    // products: [],
    blogs: [],
  };
  
const reducer = (state = initialState, action) =>{
    console.log("paici shalare", state.blogs);
    console.log(" arek paici shalare", action.payload);
    switch(action.type){
        // add new start 
        case GET_CONTENT:
            return {
              ...state,
              blogs: action.payload,
            };
        case UPDATE_CONTENT:
            const { blogId, title } = action.payload;
            console.log("updateContent", blogId, title);
            return state?.blogs?.map((blog)=>{
                if(blog._id !== blogId){
                    return blog;
                }
                return {
                    
                    ...blog,
                    title: title
                };

            })
            // {
            //   ...state,
            //   blogs: action.payload,
            // };
        case DELETE_CONTENT:
            return {
              ...state,
              blogs: state.blogs.filter((data)=>data._id !== action.payload),
            };
        // add new end 
        case CATEGORYCHECKED:
            return state.blogs.filter((todo)=> todo.category === action.payload);
        case TITLECHECKED:
            return state.blogs.filter((todo)=> todo.title === action.payload);
        case AUTHORIMGCHECKED:
            return state.blogs.filter((todo)=> todo.author_img === action.payload);
        case AUTHORTITLECHECKED:
            return state.blogs.filter((todo)=> todo.author_title === action.payload);
        default:
            return state;
    }
 
}
export default reducer;
