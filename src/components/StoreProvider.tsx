'use client'

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

const gridContextDefaultValues: GridContextType = {
  grid: 0,
  // eslint-disable-next-line
  setGrid: () => { },
}

const GridContext = createContext<GridContextType | undefined>(
  gridContextDefaultValues,
)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [grid, setGrid] = useState(4)

  return (
    <GridContext.Provider value={{ grid, setGrid }}>
      {children}
    </GridContext.Provider>
  )
}

// export function useGrid() {
//   return useContext(GridContext)
// }

export function useGrid() {
  const context = useContext(GridContext)
  if (!context) {
    throw new Error('useGrid must be used within a StoreProvider')
  }
  return context
}
