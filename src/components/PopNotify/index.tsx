import { type IPopNotifyProps } from '../../constant/types/PopNotify'
import Display from '../Display'

export const PopNotify: React.FC<IPopNotifyProps> = ({
  title,
  subject
}: IPopNotifyProps) => {
  return (
    <Display>
      <div className="pop-notify">
        <div className="pop-notify__title">{title}</div>
        <div className="pop-notify__subject">{subject}</div>
      </div>
    </Display>
  )
}
