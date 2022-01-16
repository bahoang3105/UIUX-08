import React from 'react'

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/unit-work', name: 'Công việc đơn vị' },
  { path: '/personal-work', name: 'Công việc cá nhân ' },
  { path: '/unit-work/dashboard', name: 'Dashboard', component: Breadcrumbs },
  { path: '/personal-work/dashboard', name: 'Dashboard', component: Accordion },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
]

export default routes
