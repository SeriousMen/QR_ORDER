import {useQuery} from  '@tanstack/react-query';
import {fetchShopInfo} from '../api/shopApi';
const Dish = () => {


      const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey : ['shopInfo',1], // 원래 하드코딩 안함 변수로 지정해서 queryKey가 바뀌면 다시 queryFn를 호출해서 리패치함
        queryFn : () => fetchShopInfo(1),
        enabled : false
    });

     if (isLoading) return <p>Loading...</p>; if (isError) return <p>Error: {(error as Error).message}</p>;


    return (
        <>
            Dish 입니다.
            <p>{data?.introduce}</p>
        </>
    )
}

export default Dish;