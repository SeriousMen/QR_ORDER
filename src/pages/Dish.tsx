import {useQuery} from  '@tanstack/react-query';
import {fetchShopInfo, fetchShopMenus} from '../api/shopApi';
const Dish = () => {


    const {
        data:shopData,
        isLoading:shopLoading,
        isError:shopIsError,
        error:shopError
    } = useQuery({
        queryKey : ['shopInfo',1], // 원래 하드코딩 안함 변수로 지정해서 queryKey가 바뀌면 다시 queryFn를 호출해서 리패치함
        queryFn : () => fetchShopInfo(1),
        enabled : false
    });
 

      const {
        data:menusData,
        isLoading:menusLoading,
        isError:menusIsError,
        error:menusError
    } = useQuery({
        queryKey : ['shopMenus',shopData?.id], // 
        queryFn : () => fetchShopMenus(shopData?.id,'dish'),
        enabled: !!shopData?.id, 
        refetchOnMount: false,           // 다시 마운트돼도 refetch 안 함
        refetchOnWindowFocus: false,     // 탭 다시 활성화돼도 refetch 안 함
        // staleTime: 1000 * 60     // 1분동안 재 렌더링시에 refetch 안함
    });

     if (shopLoading) return <p>Loading...</p>; if (shopIsError) return <p>Error: {(shopError as Error).message}</p>;

     if (menusLoading) return <p>Loading...</p>; if (menusIsError) return <p>Error: {(menusError as Error).message}</p>;


    return (
        <>
            Dish 입니다.
            <p>{shopData?.introduce}</p>
            {menusData?.map((menu,idx)=>(
                <li key ={idx}>
                    {menu.title}
                </li>
            ))}
        </>
    )
}

export default Dish;