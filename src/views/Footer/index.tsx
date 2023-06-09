import FooterTop from '@/components/FooterTop';
import FooterMiddle from '@/components/FooterMiddle';
import FooterBottom from '@/components/FooterBottom';

export default function Footer() {
  return (
    <>
      <FooterTop />
      <hr className="text-waterloo" />
      <FooterMiddle />
      <hr className="text-waterloo" />
      <FooterBottom />
    </>
  );
}
