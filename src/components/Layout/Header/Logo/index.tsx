import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/logo.png")}
        alt="logo"
        width={135}
        height={90}
        // style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
    </Link>
  );
};

export default Logo;
