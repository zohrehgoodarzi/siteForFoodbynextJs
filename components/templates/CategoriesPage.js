import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import Card from "../module/Card";
import styles from "./CategoriesPage.module.css";


function CategoriesPage({data}) {
    const router=useRouter();
    const [query,setQuery]=useState({difficulty:"",time:""});
    {
      useEffect(()=>{
        const {difficulty,time}=router.query;
       if(query.difficulty!==difficulty || query.time!==time){
        setQuery({difficulty,time})
       }
       
       
      },[])
    }

    const changeHandler=(e)=>{
          setQuery({...query,[e.target.name]:e.target.value})  
    }

    
    const searchHandler=()=>{
                router.push({
                    pathName:"/categories",
                    query
                })
    }





  return (
    <>
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
      <div className={styles.select}>
        <select name="difficulty" value={query.difficulty} onChange={changeHandler}  >
            <option  value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option  value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>

        <select value={query.time} name="time" onChange={changeHandler}  >
       <option value="">Cooking Time</option>
       <option value="more">More than 30 min</option>
       <option value="less">less than 30 min</option>
      </select>
      <button onClick={searchHandler}>Search</button>
    </div>
    
    
      <div className={styles.cards}>
          {!data.length?<img src="/images/search.png" alt="categories" />:null}
        {data.map((food)=>(<Card  key={food.id}{...food}/>))}
      </div>
    
 </div>
</div>
 


    </>

  )
}

export default CategoriesPage