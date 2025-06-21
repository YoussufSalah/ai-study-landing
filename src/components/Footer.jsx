import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiProducthunt } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="py-6 flex justify-center gap-6 text-gray-400 bg-black text-2xl">
            <a
                href="https://github.com/YoussufSalah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>
            <a
                href="https://x.com/YoussufSoloDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
            >
                <FaXTwitter />
            </a>
            <a
                href="https://www.producthunt.com/@youssuf_salah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ProductHunt"
            >
                <SiProducthunt />
            </a>
            <a href="mailto:business.youssuf@gmail.com" aria-label="Email">
                <MdEmail />
            </a>
        </footer>
    );
};

export default Footer;
