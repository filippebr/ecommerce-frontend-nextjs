import HeaderBottom from '@/components/HeaderBottom'
import HeaderMiddle from '@/components/HeaderMiddle'
import HeaderTop from '@/components/HeaderTop'

export default function Header() {
  return (
    <>
      <HeaderTop />
      {/* <hr className="text-waterloo" /> */}
      <HeaderMiddle />
      <HeaderBottom />
    </>
  )
}
