/// <reference types="vite/client" />
interface Menus {
  text: string
  url: string
  icon: string
  submenu?: Menus[]
}