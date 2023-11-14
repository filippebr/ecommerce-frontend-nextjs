import StoreMain from '@/components/StoreMain'
import { StoreProvider } from '@/components/StoreProvider'

export default function OurStore() {
  return (
    <StoreProvider>
      <StoreMain />
    </StoreProvider>
  )
}
