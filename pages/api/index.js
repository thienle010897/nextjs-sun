import axios from "axios";

export const loadProjectsApi = async () => 
    await axios.get("https://ruttienmattuthe.com/wp-json/api/v1/type-active/list"); 
    
export const loadNewsApi = async () => 
    await axios.post("https://ruttienmattuthe.com/wp-json/api/v1/news/landing");  
        
export const loadCareersApi = async () => 
    await axios.get("https://ruttienmattuthe.com/wp-json/api/v1/recruitments"); 

export const loadProjectDetailApi = async (id) => 
    await axios.get(`https://ruttienmattuthe.com/wp-json/api/v1/news/detail/${id}`);  


