import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import { GiFoxHead } from 'react-icons/gi';

function login() {
    const { authenticate } = useMoralis();
    return (
        <>
            <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-10 text-black">
                {/* PapaFam logo */}
                <h1 className="text-white font-bold text-5xl mb-10">
                    Welcome to Web 3
                </h1>
                <Image
                    className="object-cover bg-dark"
                    src="/login.svg"
                    height={300}
                    width={300}
                />

                {/* PapaFam Button */}
                <button
                    onClick={authenticate}
                    className="bg-white/20 drop-shadow-xl backdrop-blur-sm rounded-xl py-5 px-10 font-bold font-poppins flex flex-row items-center gap-3 justify-center text-white hover:backdrop-blur-none hover:bg-white hover:text-black transition-all ease-in duration-200 tracking-wider"
                >
                    <GiFoxHead className="text-2xl font-extrabold" /> MetaMask
                    Login
                </button>
            </div>
            <div className="w-full h-screen relative">
                {/* Login form */}
                <Image
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1999/production/_92935560_robot976.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </>
    );
}

export default login;
