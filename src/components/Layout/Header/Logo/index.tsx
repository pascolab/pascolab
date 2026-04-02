import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/Pascolab_Logo.svg")}
        alt="logo"
        width={135}
        height={90}
        quality={100}
        className=''
      />
    </Link>
  );
};

export default Logo;
