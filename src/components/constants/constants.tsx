import { FileCheckIcon } from '../../assets/icons/FileCheckIcon'
import { FilesIcon } from '../../assets/icons/FilesIcon'
import { PersonCheckIcon } from '../../assets/icons/PersonCheckIcon'
import { QuestionIcon } from '../../assets/icons/QuestionIcon'
import { SettingsIcon } from '../../assets/icons/SettingsIcon'
import { UserIcon } from '../../assets/icons/UserIcon'

export {}

export interface MenuItem {
  title: string
  icon: JSX.Element
  route: string
}

export const menuItems: MenuItem[] = [
  {
    title: 'Личная информация',
    icon: <UserIcon />,
    route: '/account/profile'
  },
  {
    title: 'Список проектов',
    icon: <FilesIcon />,
    route: '/account/projects'
  },
  {
    title: 'Сохраненные проекты',
    icon: <FileCheckIcon />,
    route: '/account/saved-projects'
  },
  {
    title: 'Мои специалисты',
    icon: <PersonCheckIcon />,
    route: '/account/specialists'
  },
  {
    title: 'Информация',
    icon: <QuestionIcon />,
    route: '/account/info'
  },
  {
    title: 'Настройки',
    icon: <SettingsIcon />,
    route: '/account/settings'
  }
]
