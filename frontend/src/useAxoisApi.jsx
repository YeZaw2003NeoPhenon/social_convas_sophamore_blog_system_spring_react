import { useState , useEffect} from "react";
import postService from "./service/postService";
const useAxiosApi = () => {

    const[data , setData ] = useState([])
    const[fetchError , setFetchError] = useState(null)

    const[isLoading , setIsLoading ] = useState(true)

    useEffect(() => {
        // const source = axios.CancelToken.source()
        let isMounted = true;
        const fetchApi = async () => {
            setIsLoading(true)
            try{
              if(isMounted){
                const posts = await postService.getAllPosts(); 
                setData(posts)
                setFetchError(null)
              }
            }
            catch(err){
                   if(isMounted){
                    setIsLoading(false)
                    setFetchError(`There is debilitating errors fetching Post Datas ${err.message}`)
                    setData([])
                   }
            }
            finally{
                if(isMounted){
                  setTimeout(() => {
                    setIsLoading(false)
                 } , 1500)
              }
            }
             }
             fetchApi()
             return () => {
                console.log(`clean up functions captivagingly debiliatingly called here!`);
                isMounted = false;
             }
    },[])

    return {data , setData , fetchError , isLoading}

}
export default useAxiosApi;

// marked down fulfillingly , that we pick out this compoenet where we unblemishedly rendered out all post datas
// and those datas will efficaciouly be inside App.jsx