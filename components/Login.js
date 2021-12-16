import Image from 'next/image';
import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import { GiFoxHead } from 'react-icons/gi';

function login() {
    const { authenticate } = useMoralis();
    return (
        <>
            <Head>
                <title>Login Page</title>
                <link rel="icon" href="/login.svg" />
            </Head>
            <div className="flex flex-col h-screen w-full items-center justify-center bg-light backdrop-blur-md">
                <div className="bg-dark py-20 px-3 sm:py-32 sm:px-14 rounded-2xl shadow-2xl shadow-black/50">
                    {/* PapaFam logo */}
                    <h1 className="text-white font-bold text-2xl text-center sm:text-4xl font-poppins tracking-wide">
                        Welcome to The Future
                    </h1>
                    <div className="bg-dark p-10 rounded-full flex flex-rowitems-center justify-center ">
                        <Image src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png" height={200} width={200} />
                    </div>

                    {/* PapaFam Button */}

                    <button
                        onClick={authenticate}
                        className="group bg-white/10 shadow-xl backdrop-blur-sm rounded-xl py-3 px-6 sm:py-5 sm:px-10 font-bold font-poppins flex flex-row items-center gap-3 justify-center text-white hover:backdrop-blur-none hover:bg-white hover:text-black transition-all ease-in duration-200 sm:tracking-wider mx-auto"
                    >
                        <GiFoxHead className="group-hover:animate-spin text-lg sm:text-2xl font-extrabold " />{' '}
                        MetaMask Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default login;
