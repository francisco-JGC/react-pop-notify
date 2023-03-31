import { IDisplayProps } from './displayProps'

export interface IPopNotifyProps extends IDisplayProps {
  title: string
  subject: string
  onAccept?: () => void
  onCancel?: () => void
  txtAccept?: string
  txtCancel?: string
}
