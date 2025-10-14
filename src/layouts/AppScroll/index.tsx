import { useEffect, useRef, useState } from 'react';
import { pages } from '../../pages';


const AppScroll = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [headerHeight,setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(()=>{
    const updateHeaderHeight = () =>{
        if(headerRef.current){
          setHeaderHeight(headerRef.current.offsetHeight);
        }
    }

    updateHeaderHeight();
    window.addEventListener("resize",updateHeaderHeight);

    //useEffect에서 return은 2가지 경우에 실행, unmount될 때, 의존성 배열에 따라 재실행될 때
    return () => window.removeEventListener("resize",updateHeaderHeight);
  },[]);

  //header를 고려해서 스크롤 위치 계산 
  const scrollToElement = (el: HTMLElement) =>{
    const y = el.getBoundingClientRect().top + window.scrollY -headerHeight;
    window.scrollTo({top: y, behavior: "smooth"});
  };

  // IntersectionObserver로 스크롤에 따른 활성 탭 변경
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
      
          if (entry.isIntersecting) {
            setActiveTab(index);
            // scrollToElement(entry.target as HTMLElement);
          }
        });
      },
      { threshold: 0.5 } // 화면의 절반 이상 보이면 활성
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) 
          // observer.unobserve(section);
        observer.disconnect();
      });
    };
  }, [headerHeight]);

  const scrollToSection = (index: number) => {
    // sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' ,block: "start"});
     const el = sectionRefs.current[index];
  if (el) scrollToElement(el); // headerHeight 보정 적용
  };

  return (
    <div>
      {/* 상단 탭 버튼 */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 flex justify-around p-2 border-b">
        {pages.map((page, idx) => (
          <button
            key={idx}
            className={`p-2 ${activeTab === idx ? 'text-blue-500 font-bold' : 'text-gray-600'}`}
            onClick={() => scrollToSection(idx)}
          >
            {page.title}
          </button>
        ))}
      </div>

      {/* 스크롤 섹션 */}
      <div className="pt-16">
        {pages.map((page, idx) => (
          <section
            key={idx}
            ref={(el) => {sectionRefs.current[idx] = el}}
            className="h-screen  items-center justify-center text-4xl border"
          >
            <div className='border-2 border-solid'>{page.element}</div>
            
          </section>
        ))}
      </div>
    </div>
  );
};

export default AppScroll;