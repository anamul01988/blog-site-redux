import { CATEGORYCHECKED,TITLECHECKED, AUTHORIMGCHECKED,AUTHORTITLECHECKED, GET_CONTENT, DELETE_CONTENT, ADD_CONTENT, UPDATE_CONTENT } from "./actionTypes"

export const categoryChecked = (blogCategory) =>{
    return {
        type: CATEGORYCHECKED,
        payload: blogCategory,
    }
}
export const titleChecked = (blogTitle) =>{
    return {
        type: TITLECHECKED,
        payload: blogTitle,
    }
}
export const authorImgChecked = (blogAuthorImg) =>{
    return {
        type: AUTHORIMGCHECKED,
        payload: blogAuthorImg,
    }
}
export const authorTitleChecked = (blogAuthorTitle) =>{
    return {
        type: AUTHORTITLECHECKED,
        payload: blogAuthorTitle,
    }
}

// added new 
export const getContent = (data) =>{
    return {
        type: GET_CONTENT,
        payload: data,
    }
}
export const addContent = (data) =>{
    return {
        type: ADD_CONTENT,
        payload: data,
    }
}
export const updateContent = (blogId, title) =>{
    console.log("aciton",blogId, title)
    return {
        type: UPDATE_CONTENT,
        payload: {
            blogId,
            title
        },
    }
}
export const deleteContent = (data) =>{
    return {
        type: DELETE_CONTENT,
        payload: data,
    }
}