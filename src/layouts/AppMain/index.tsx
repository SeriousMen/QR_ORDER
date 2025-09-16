import { useState,useEffect } from 'react';
import {pages} from '../../pages';
import {Route ,Routes } from 'react-router-dom'
// import AppSide_M from '../AppSide_M';
import AppScroll from '../AppScroll';
const AppMain = () => {
     const [isMobile,setIsMobile] =  useState(false);
    
    // useEffect(()=>{
    //     const checkMobile = () => setIsMobile(window.innerWidth <=768);
    //     checkMobile();
    //     window.addEventListener("resize",checkMobile);

    //     return () => window.removeEventListener("resize",checkMobile);
    // }
    // ,[])

    useEffect(()=>{
        if(typeof window === 'undefined') return;
        const mq = window.matchMedia('(max-width:768px)');
        const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        setIsMobile(mq.matches);
        //브라우저가 내부적으로 이전의 mathMedia랑 달라지는 지 여부를 검토해서 그때만
        mq.addEventListener?.('change',listener); 

        return ()=>{
            mq.removeEventListener?.('change',listener);
        };
    },[])
    return (
        <>
        {isMobile ?  <AppScroll/>
        :
        <Routes>
         {pages.map(({path,element}) =>(
          <Route key ={path} path={path} element={element}/>
        ))}
        </Routes>
        }
        
        </>
    )
}

export default AppMain;