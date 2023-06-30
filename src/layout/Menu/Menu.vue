<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mapPathToMenus } from '@/utils/map'
defineProps<{ isFold: boolean }>()

const menu = ref<Menus[]>([
  {
    text: '系统总览',
    url: '/analysis',
    icon: 'Guide',
    submenu: [
      {
        text: '数据看板',
        url: '/analysis/dashboard',
        icon: 'DataLine'
      }
    ]
  },
  {
    text: '商品管理',
    url: '/product',
    icon: 'ShoppingBag',
    submenu: [
      {
        text: '分类管理',
        url: '/product/category',
        icon: 'CollectionTag'
      },
      {
        text: '商品管理',
        url: '/product/goods',
        icon: 'TakeawayBox'
      }
    ]
  },
  {
    text: '系统管理',
    url: '/system',
    icon: 'Setting',
    submenu: [
      {
        text: '用户管理',
        url: '/system/user',
        icon: 'User'
      },
      {
        text: '角色管理',
        url: '/system/role',
        icon: 'Avatar'
      },
      {
        text: '菜单管理',
        url: '/system/menu',
        icon: 'menu'
      }
    ]
  }
])

// 2. 菜单点击,切换路由
const router = useRouter()
const handleMenuItemClick = (item: Menus) => {
  router.push(item.url)
}

// 3. 默认菜单选中
const route = useRoute()
// 一旦路由变化,就会重新计算
const defaultActive = computed(() => {
  console.log(route, route.path)
  const pathMenu = mapPathToMenus(route.path, menu.value)
  return `${pathMenu?.url}`
})
</script>

<template>
  <div class="aside">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
      <div class="text">智慧家居CMS</div>
    </div>
    <div class="menu">
      <el-menu
        :collapse-transition="false"
        unique-opened
        :default-active="defaultActive"
        :collapse="isFold"
      >
        <template v-for="item in menu" :key="item.id">
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon>
                <component :is="item?.icon" />
              </el-icon>
              <span>{{ item.text }}</span>
            </template>
            <template v-for="subitem in item.submenu" :key="subitem.id">
              <el-menu-item
                :index="subitem.url"
                @click="handleMenuItemClick(subitem)"
              >
                <template #title>
                  <el-icon>
                    <component :is="subitem?.icon" />
                  </el-icon>
                  <span>{{ subitem.text }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="less">
.aside {
  .logo {
    height: 60px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    img {
      margin: 0 15px;
      width: 30px;
    }
    .text {
      width: 140px;
    }
  }
  .menu {
    .el-menu {
      border-right: none;
      transition: width 0.15s;
      -webkit-transition: width 0.15s;
      -moz-transition: width 0.15s;
      -webkit-transition: width 0.15s;
      -o-transition: width 0.15s;
    }
  }
}
</style>
