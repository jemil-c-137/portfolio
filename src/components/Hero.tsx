import Image from "next/image";
import MyPic from '../../public/me.jpg';
import EmailLogo from '../../public/mail.svg';
import LocationLogo from '../../public/location.svg';
import LinkedIn from '../../public/linkedin-3.svg';
import GitHubLogo from '../../public/github-mark.svg';

export default function Hero() {
    return <section className="mt-16">
        <div className="border-2 flex flex-col items-center py-16 max-w-md rounded-tl-[230px] rounded-br-[230px] text-white">
            <Image className="w-40 h-40 rounded-full" src={MyPic} width={96} height={96} alt='image of me' />
            <span className="pt-10 text-3xl">
                Jemil
            </span>
            <span className="pt-4">
                Frontend Developer
            </span>
            <ul className="pt-12 gap-2 flex flex-col">
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
            </ul>
        </div>
    </section>
}