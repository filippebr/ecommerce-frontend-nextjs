import ProductCard from './ProductCard'

interface ProductCardListProps {
  gridProp: number
  count: number
}

export default function ProductCardList(
  { gridProp, count }: ProductCardListProps,
) {
  const productCards = Array.from({ length: count }, (_, index) => (
    <ProductCard key={index} gridProp={gridProp} />
  ))

  return <>{productCards}</>
}
