import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";

function FoodDetail({data}) {
   const router=useRouter();
   if(router.isFallback){
   return  <h2>Loading Page...</h2>
   }
  return (
    <>
        <DetailsPage {...data}/>

    </>
    
  )
}

export default FoodDetail


export async function getStaticPaths() {
    const res=await fetch(`${process.env.BASE_URL}/data`);
    const data=await res.json();
    const result=data.slice(0,10);
   const paths= result.map((food)=>({params:{id:food.id.toString()}}));
    
return{
    paths,
    fallback:true,
}
  
       
    
}


export async function getStaticProps(context) {
    const {params:{id}}=context;
    
    //${params.id}={params:{id}} distructure id az prams
    const res=await fetch(`${process.env.BASE_URL}/data/${id}`);
    const data=await res.json();
    if(!data.id){
       return{
         notFound:true,
       }
    }
    return{
        props:{
            data
        },
        revalidate:10,
    }
}