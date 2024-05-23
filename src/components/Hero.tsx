import Image from "next/image";
import MyPic from '../../public/sticker.webp';
import EmailLogo from '../../public/mail.svg';
import LocationLogo from '../../public/location.svg';
import LinkedIn from '../../public/linkedin-3.svg';
import GitHubLogo from '../../public/github-mark.svg';

export default function Hero() {
    return <section className="mt-16">
        <div className="flex flex-col items-center my-0 mx-auto justify-center max-w-md rounded-tl-[230px] rounded-br-[230px] text-white">
            <Image className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-40 h-40 rounded-full" src={MyPic} width={160} height={160} alt='image of me' />
            <div className="pt-10">
                <p className="font-mono text-sm text-secondary -ml-6">{"</h1>"}</p>
                    <span className="text-6xl font-bold gradient-text">
                        Jemil
                    </span>
                <p className="font-mono text-sm text-secondary mb-6 -mr-6 text-right">{"</h1>"}</p>
            </div>
            {/*<ul className="pt-12 gap-2 flex flex-col">
                <li className="flex">
                    <div className="mr-4 flex space-x-2 items-center">
                        <Image src={EmailLogo} alt='email pic' width={18} height={13} />
                    </div>
                    <a href="mailto:jemil1931@gmail.com">
                        jemil1931@gmail.com
                    </a>
                </li>

                <li className="flex">
                    <div className="mr-4 flex space-x-2 items-center">
                        <Image src={LocationLogo} alt='email pic' width={18} height={13} />
                    </div>
                    <a href="mailto:jemil1931@gmail.com">
                        Stuttgart, Germany
                    </a>
                    
                </li>

                <li className="flex">
                    <div className="mr-4 flex space-x-2 items-center">
                        <Image className="fill-zinc-200" src={LinkedIn} alt='email pic' width={18} height={13} />
                    </div>
                    <a href="https://www.linkedin.com/in/jemil-suleimanov-559852116/">
                        LinkedIn
                    </a>
                </li>

                <li className="flex">
                    <div className="mr-4 flex space-x-2 items-center">
                        <Image className="fill-zinc-200" src={GitHubLogo} alt='email pic' width={18} height={13} />
                    </div>
                    <a href="https://github.com/jemil-c-137">
                        GitHub
                    </a>
                </li>
            </ul> */}

            <div className="mt-20">
                <p className="font-mono text-sm text-secondary">{"<p>"}</p>
                <p className="text-white ml-6 text-lg">
                I am a seasoned full-stack software engineer with over 
                8 years of professional experience, specializing in backend development. 
                My expertise lies in crafting robust and scalable SaaS-based 
                architectures on the Amazon AWS platform.
                </p>
                <p className="font-mono text-sm text-secondary text-right">{"<p>"}</p>
            </div>
        </div>

    </section>
}