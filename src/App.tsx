import { useState } from 'react';
import ReactLogo from './assets/react.svg';
import ViteLogo from './assets/vite.svg';
import TypescriptLogo from './assets/typescript.svg';
import TailwindLogo from './assets/tailwind.svg';
import PrettierLogo from './assets/prettier.svg';
import EslintLogo from './assets/eslint.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="mt-44 flex items-center justify-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img className="w-24 h-24" src={ViteLogo} alt="Vite logo" />
                </a>
                <a className="ml-12" href="https://react.dev" target="_blank">
                    <img className="w-24 h-24" src={ReactLogo} alt="React logo" />
                </a>
            </div>
            <div className="mt-14 flex items-center justify-center">
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <img className="w-12 h-12" src={TypescriptLogo} alt="Typescript logo" />
                </a>
                <a className="ml-6" href="https://tailwindcss.com/" target="_blank">
                    <img className="w-12 h-12" src={TailwindLogo} alt="Tailwind CSS logo" />
                </a>
                <a className="ml-6" href="https://prettier.io/" target="_blank">
                    <img className="w-12 h-12" src={PrettierLogo} alt="Prettier logo" />
                </a>
                <a className="ml-6" href="https://eslint.org/" target="_blank">
                    <img className="w-12 h-12" src={EslintLogo} alt="ESLint logo" />
                </a>
            </div>
            <div className="mt-12 grid gap-y-8 w-full justify-center">
                <div>
                    <h1 className="text-center text-xl font-semibold">Vite + React</h1>
                    <h2 className="mt-1 text-center font-semibold">
                        with Typescript, Tailwind CSS, Prettier and ESLint
                    </h2>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        className="w-full border border-slate-400 shadow-sm rounded-full px-2 py-1"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is {count}
                    </button>
                    <p className="mt-2">
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="text-slate-400 text-center">Click on the logos to learn more.</p>
            </div>
        </>
    );
}

export default App;
