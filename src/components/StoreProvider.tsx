import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type GridContextType = {
  grid: number
  setGrid: Dispatch<SetStateAction<number>>
}

const GridContext = createContext<GridContextType | undefined>(undefined)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [grid, setGrid] = useState(0)

  return (
    <GridContext.Provider value={{ grid, setGrid }}>
      {children}
    </GridContext.Provider>
  )
}

const useGrid = () => {
  const context = useContext(GridContext)
  if (!context) {
    throw new Error('useGrid must be used within a GridProvider')
  }
  return context
}

export { useGrid }
// eslint-disable-next-line prettier/prettier

