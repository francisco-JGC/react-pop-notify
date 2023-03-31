import { useEffect, useState } from 'react'
import { type IDisplayProps } from '../../constant/types/displayProps'
import './index.scss'

const Display: React.FC<IDisplayProps> = ({
  children,
  theme,
  shadow,
  typeNotify,
  mobile,
  onClosed,
  onOpened,
  autoClose,
  autoCloseTime,
  closeOnClick,
  animation
}: IDisplayProps) => {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    if (display) {
      onOpened && onOpened()
    } else {
      onClosed && onClosed()
    }
  }, [display, onOpened, onClosed])

  useEffect(() => {
    let timeoutId: number | undefined

    if (autoClose) {
      timeoutId = setTimeout(() => {
        setDisplay(false)
      }, autoCloseTime)
    }
    return () => clearTimeout(timeoutId)
  }, [autoClose, autoCloseTime])

  return (
    <div
      className={`display`}
      data-theme={theme}
      data-type-notify={typeNotify}
      data-shadow={shadow}
      onClick={() => {
        if (closeOnClick) {
          setDisplay(false)
        }
      }}
    >
      <div className="display__content">{children}</div>
    </div>
  )
}

export default Display
