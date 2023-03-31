interface Animation {
  slide?: string
  none?: string
}

export interface IDisplayProps {
  children?: React.ReactNode
  theme?: 'light' | 'dark' | 'colored'
  shadow?: boolean
  typeNotify?: string
  mobile?: boolean
  onClosed?: () => void
  onOpened?: () => void
  autoClose?: boolean
  autoCloseTime?: number
  closeOnClick?: boolean
  animation?: Animation
}
