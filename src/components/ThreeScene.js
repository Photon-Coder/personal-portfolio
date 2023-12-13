import * as THREE from 'three';

class ThreeScene {
  constructor() {
    // 씬 생성
    this.scene = new THREE.Scene();

    // 카메라 생성
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // 렌더러 생성
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // 큐브 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);

    // 큐브 위치 조정
    this.cube.position.set(2, 2, -3);

    // 큐브 앞 뒤 조정
    this.cube.renderOrder = 1;
    this.scene.add(this.cube);
  }

  animate() {
    // 애니메이션 프레임 요청
    requestAnimationFrame(() => this.animate());
    // 큐브 회전
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }
}

export default ThreeScene;