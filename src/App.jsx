import './App.scss';
import useMousePosition from './useHook/useMousePosition';
import { Tilt } from 'react-tilt';
import { useRef } from 'react';

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  // scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

function App() {
  const follow = useRef();
  const mousePosition = useMousePosition();
  const frameStyle = {
    '--mouse-y': `${mousePosition.y + 30}px`,
    '--mouse-x': `${mousePosition.x + 10}px`,
  };

  return (
    <div class="bod">
      {/* {JSON.stringify(mousePosition)} */}
      <div ref={follow} class="details CardDetails" style={frameStyle}>
        <div class="head">
          <span>Portfolio</span>
          <span>Role:Program & UI/UX</span>
        </div>
        <div class="content">
          <div class="badgeList">
            <span class="badge">Next.js</span>
            <span class="badge">Tailwind</span>
          </div>
          <p>
            Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.
          </p>
        </div>
      </div>
      <div
        class="frame"
        onMouseOut={() => {
          follow.current.style.display = 'none';
        }}
        onMouseOver={() => {
          follow.current.style.display = 'block';
        }}
      >
        <div class="frame_Wrapper"></div>
        <Tilt
          options={defaultOptions}
          style={{ height: '100%', width: '100%' }}
        >
          <a href="https://github.com/EyzRyder" class="git">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <img
            src="https://raw.githubusercontent.com/EyzRyder/EyzRyder/main/img/Banner.png"
            alt="banner"
          ></img>
        </Tilt>
      </div>
    </div>
  );
}

export default App;
