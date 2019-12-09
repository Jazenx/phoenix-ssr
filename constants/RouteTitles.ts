const BasicTitle = '铁马冰河入梦来'

type RouteTitlesType = {
  [key: string]: string
}

export const RouteTitles: RouteTitlesType = {
  ['/']: `首页-${BasicTitle}`,
  ['/hot']: `热榜-${BasicTitle}`
}
