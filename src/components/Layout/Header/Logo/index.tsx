import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const logoDark = getImgPath("/images/logo/logo-dark.png");
const logoLight = getImgPath("/images/logo/logo-light.png");

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === "dark" ? logoDark : logoLight}
        alt="logo"
        width={135}
        height={90}
        quality={100}
        className='h-auto'
      />
    </Link>
  );
};

export default Logo;
