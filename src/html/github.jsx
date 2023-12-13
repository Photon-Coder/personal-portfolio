import React, { useEffect, useRef } from 'react';

import Nav from './nav';

import ThreeScene from '../components/ThreeScene';
import '../css/style.css';

const Github = () => {
    const threeSceneRef = useRef(null);

    useEffect(() => {
        // ThreeScene의 인스턴스를 생성하고, 해당 인스턴스를 참조에 저장합니다.
        threeSceneRef.current = new ThreeScene();
    
        // Renderer를 DOM에 추가합니다.
        document.body.appendChild(threeSceneRef.current.renderer.domElement);
    
        // animate 메서드를 호출하여 애니메이션을 시작합니다.
        threeSceneRef.current.animate();
    
        // 컴포넌트가 마운트 해제될 때 정리 작업을 수행합니다.
        return () => {
            // Renderer를 DOM에서 제거합니다.
            document.body.removeChild(threeSceneRef.current.renderer.domElement);
        };
    }, []);
    return (
        <React.Fragment>
            <Nav />
        </React.Fragment>
    );
};

export default Github;