import { useEffect, useState,useRef } from "react";
import { collection, doc, getDoc, getDocs ,query,where } from "firebase/firestore";
import { db } from "../firebase-config";
import {useQuery} from  '@tanstack/react-query';

/**
주의할 점 fireStore는 호출 단위로 인해 요금이 과금된다.
읽기(read): 문서 1개를 읽으면 1건(getDoc) 호출 횟수가 아님...

쓰기(write): 문서 1개를 쓰면 1건

삭제(delete): 문서 1개 삭제 1건

무료 요금: 월 5만 건 읽기, 5만 건 쓰기, 1GB 저장 등
 * 
 */

const fetchShopInfo = async () =>{
    const resultFireQuery = query(
                    collection(db,"shops"),
                    where("key", "==", 1)
                );

    const snapshot = await getDocs(resultFireQuery);
    console.log("fetchShopInfo");
    if(snapshot.empty) {
        throw new Error("No doc found");
    }

      const firstDoc = snapshot.docs[0];

      return firstDoc.data();

}

const Main = () =>{

    console.log("렌더main");
    
    //서버 데이터를 리랜더마다 호출하는 것을 방지하기 위해 React Query 사용
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey : ['shopInfo',1], // 원래 하드코딩 안함 변수로 지정해서 queryKey가 바뀌면 다시 queryFn를 호출해서 리패치함
        queryFn :fetchShopInfo,
        refetchOnMount: false,           // 다시 마운트돼도 refetch 안 함
        refetchOnWindowFocus: false,     // 탭 다시 활성화돼도 refetch 안 함
    });
    
  
     if (isLoading) return <p>Loading...</p>; if (isError) return <p>Error: {(error as Error).message}</p>;

 
    return(
<>
<div>
   <h1>메인페이지 소개 </h1>
   <p>{data?.introduce}</p>
</div>
</>
    )
}

export default Main;