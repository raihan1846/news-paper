import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(()=>{
        if(id == "0"){
        setCategoryNews(data);
        return;
        }else if(id == "1"){
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            // console.log(filteredNews);
            setCategoryNews(filteredNews);
        }else{
            const filteredNews = data.filter(news => news.category_id == id);
            // console.log(filteredNews);
    
            setCategoryNews(filteredNews);
        }
       
        
    },[data, id])
    // console.log(data);
    return (
        <div>
            Total ({categoryNews.length}) News Found
        </div>
    );
};

export default CategoryNews;