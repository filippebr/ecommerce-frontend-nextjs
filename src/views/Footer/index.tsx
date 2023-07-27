import FooterBottom from '@/components/FooterBottom'
import FooterMiddle from '@/components/FooterMiddle'
import FooterTop from '@/components/FooterTop'

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
