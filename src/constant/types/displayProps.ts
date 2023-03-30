interface Theme {
  dark: string
  light: string
  colorful: string
}

interface Animation {
  slide: string
  none: string
}

export interface IDisplayProps {
  children: React.ReactNode
  theme?: Theme
  shadow?: boolean
  mobile?: boolean
  onClosed?: () => void
  onOpened?: () => void
  autoClose?: boolean
  autoCloseTime?: number
  closeOnClick?: boolean
  animation?: Animation
}
