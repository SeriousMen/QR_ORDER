import { useEffect, useState } from "react";
import { collection, doc, getDoc,getDocs ,query,where } from "firebase/firestore";
import { db } from "../firebase-config";

/**
 * 
 * @returns 
 
주의할 점 fireStore는 호출 단위로 인해 요금이 과금된다.
읽기(read): 문서 1개를 읽으면 1건(getDoc) 호출 횟수가 아님...

쓰기(write): 문서 1개를 쓰면 1건

삭제(delete): 문서 1개 삭제 1건

무료 요금: 월 5만 건 읽기, 5만 건 쓰기, 1GB 저장 등
 * 
 */
const Main = () =>{
    const [introduce, setIntroduce] = useState<string>("");
    console.log("렌더main");
    useEffect(()=>{
        const fetchInfo = async () =>{
            try{
                //query를 이용해서 특정 조건으로 찾을때(자동키로 만들어진 문서를 찾을때)
                
                //최상위 컬렉션 조회중에 where 조건을 가진 문서 조회
                const resultQuery = query(
                    collection(db,"shops"),
                    where("key", "==", 1)
                );
                const snapshot = await getDocs(resultQuery);
                    console.log("snapshot",snapshot);
               if(!snapshot.empty){
                //결과가 하나만 올 것을 알고있기 때문에 아래처럼 가능
                const firstDoc = snapshot.docs[0];

                //문서 전체 필드 가져온다. 
                const data = firstDoc.data();
                if(data){
                    console.log("data",data);
                    setIntroduce(data.introduce);
                }else{
                    console.log("data is not exist");
                }
               }
              
                //아래는 직접 키를 지정할떄
                // const docRef = doc(db,"infos","main_info");
                // const docSnap = await getDoc(docRef);
                
                // if(docSnap.exists()){
                //     setIntroduce(docSnap.data().introduce);
                // }else{
                //     setIntroduce("Intro data is not exist");
                // };
            } catch(error){
                console.log("there are fetching info errors");
                setIntroduce("error exists");
            }
        }

        fetchInfo();
    }
    ,[])
    return(
<>
<div>
   <h1>메인페이지 소개 </h1>
   <p>{introduce}</p>
</div>
</>
    )
}

export default Main;