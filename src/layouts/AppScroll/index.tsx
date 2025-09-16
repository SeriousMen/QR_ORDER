import { useEffect, useRef, useState } from 'react';
import { pages } from '../../pages';


const AppScroll = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // IntersectionObserver로 스크롤에 따른 활성 탭 변경
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting) {
            setActiveTab(index);
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
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
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
            className="h-screen flex items-center justify-center text-4xl border"
          >
            {page.title} 
          </section>
        ))}
      </div>
    </div>
  );
};

export default AppScroll;