import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const logoLight = getImgPath("/images/logo/logo-light.png");
const logoDark  = getImgPath("/images/logo/logo-dark.png");
 
const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={logoLight}
        alt="logo"
        width={135}
        height={100}
        style={{ height: 'auto' }}
        className=" block dark:hidden"
        loading="eager"
      />
      <Image
        src={logoDark}
        alt="logo"
        width={135}
        height={100}
        style={{ height: 'auto' }}
        className=" hidden dark:block"
        loading="eager"
      />
    </Link>
  );
};
 
export default Logo;
 