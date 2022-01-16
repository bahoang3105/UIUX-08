import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilNotes } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Công việc đơn vị',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Dashboard công việc đơn vị',
        to: '/unit-work/dashboard',
      },
      {
        component: CNavItem,
        name: 'Danh sách công việc đơn vị',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Công việc cá nhân',
    to: '/buttons',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Dashboard công việc cá nhân',
        to: '/personal-work/dashboard',
      },
      {
        component: CNavItem,
        name: 'Danh sách công việc cá nhân',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Mẫu công việc',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Mẫu quy trình',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Danh sách quy trình',
        to: '/base/navs',
      },
    ],
  },
]

export default _nav
