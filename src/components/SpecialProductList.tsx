'use client'

import SpecialProduct from './SpecialProduct'

interface SpecialProductListProps {
  count: number
}

export default function SpecialProductList({ count }: SpecialProductListProps) {
  const specialProduct = Array.from({ length: count }, (_, index) => (
    <SpecialProduct key={index} />
  ))

  return <>{specialProduct}</>
}
