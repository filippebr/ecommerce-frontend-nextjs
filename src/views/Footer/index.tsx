import FooterBottom from '@/components/Footer/FooterBottom'
import FooterMiddle from '@/components/Footer/FooterMiddle'
import FooterTop from '@/components/Footer/FooterTop'

export default function Footer() {
  return (
    <>
      <FooterTop />
      <hr className="text-waterloo" />
      <FooterMiddle />
      <hr className="text-waterloo" />
      <FooterBottom />
    </>
  )
}
