import HeaderBottom from '@/components/Header/HeaderBottom'
import HeaderMiddle from '@/components/Header/HeaderMiddle'
import HeaderTop from '@/components/Header/HeaderTop'

export default function Header() {
  return (
    <>
      <HeaderTop />
      <hr className="text-waterloo" />
      <HeaderMiddle />
      <HeaderBottom />
    </>
  )
}
