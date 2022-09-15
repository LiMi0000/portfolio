import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineDocumentText } from 'react-icons/hi';

export const socialLinks = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/çlirim-misini-b523b8196/',
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/LiMi0000',
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:limimisini@hotmail.com',
  },
  {
    id: 4,
    child: (
      <>
        Resume <HiOutlineDocumentText size={30} />
      </>
    ),
    href: '/Çlirim-Misini-CV.pdf',
    style: 'rounded-br-md',
    download: true,
  },
];
