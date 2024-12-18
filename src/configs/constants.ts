import { NavItem } from '@/@types/navItem.type'

export const ACCESS_TOKEN = 'accessToken'
export const USER_ID = 'userId'

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'EMPLOYEE',
    menu: [
      {
        key: 'employee-management',
        icon: 'users',
        title: 'Employee Management',
        subMenu: [
          {
            key: 'employee-list',
            title: 'Employee List',
            url: '/employee/list'
          },
          {
            key: 'master-data',
            title: 'Master Data',
            url: '/employee/master-data'
          },
          {
            key: 'organizational-chart',
            title: 'Organizational Chart',
            url: '/employee/organizational-chart'
          }
        ]
      }
    ]
  },
  {
    label: 'PROJECT',
    menu: [
      {
        key: 'project-management',
        icon: 'clipboard',
        title: 'Project Management',
        subMenu: [
          {
            key: 'project-list',
            title: 'Project List',
            url: '/project/list'
          }
        ]
      }
    ]
  },
  {
    label: 'USER',
    menu: [
      {
        key: 'user-management',
        icon: 'users',
        title: 'User Management',
        subMenu: [
          {
            key: 'user-list',
            title: 'User List',
            url: '/user/list'
          },
          {
            key: 'user-role',
            title: 'User Role',
            url: '/user/role'
          }
        ]
      }
    ]
  }
]
