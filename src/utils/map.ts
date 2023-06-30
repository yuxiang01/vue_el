/**
 * 拿当前菜单去匹配菜单里的某一项
 * @param path 当前路径
 * @param menus 所有的菜单
 */
export const mapPathToMenus = (path: string, menus: Menus[]) => {
  for (const menu of menus) {
    if (!menu.submenu) continue

    for (const submenu of menu.submenu) {
      if (submenu.url === path) return submenu
    }
  }
}