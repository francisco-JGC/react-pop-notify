import { useEffect, useState } from 'react'
import { type IDisplayProps } from '../../constant/types/displayProps'

const Display: React.FC<IDisplayProps> = ({
  children,
  theme,
  shadow,
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
      className={`display ${display ? 'display--open' : 'display--close'} ${
        shadow ? 'display--shadow' : ''
      } ${mobile ? 'display--mobile' : ''} ${
        theme ? `display--${theme}` : 'display--light'
      } ${animation ? `display--${animation}` : 'display--slide'}`}
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
