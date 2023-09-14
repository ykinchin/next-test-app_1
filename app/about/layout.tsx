import Link from 'next/link';
import { FC } from 'react';

type AboutLayoutProps = {
  children: React.ReactNode;
};

const AboutLayout: FC<AboutLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link href='/about/contacts'>Contacts</Link>
        </li>
        <li>
          <Link href='/about/team'>Our Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
