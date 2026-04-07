# 技术文档

## 1. 项目架构

- **框架**: Vue 3
- **构建工具**: Vite
- **UI 组件库**: Ant Design Vue
- **图表库**: ECharts
- **路由**: Vue Router
- **状态管理**: Pinia
- **样式**: Tailwind CSS

## 2. 目录结构

```
src
├── assets           # 静态资源
├── components       # 公共组件
│   └── Chart.vue    # 图表组件
├── pages            # 页面
│   ├── Login.vue    # 登录页
│   └── Home.vue     # 主页
├── router           # 路由配置
│   └── index.ts
├── stores           # 状态管理
│   ├── user.ts      # 用户信息
│   └── tickets.ts   # 工单数据
├── App.vue          # 根组件
└── main.ts          # 入口文件
```

## 3. 组件设计

- **`Login.vue`**: 登录页面，包含用户名和密码输入框，处理登录逻辑并根据用户名设置用户角色。
- **`Home.vue`**: 主页面，包含工单表格和项目工时分布图表。根据用户角色显示或隐藏“删除”按钮。
- **`Chart.vue`**: 图表组件，接收处理后的数据并使用 ECharts 渲染柱状图。

## 4. 状态管理

- **`user.ts`**: 使用 Pinia 创建一个 store，用于存储当前登录用户的角色（`admin` 或 `user`）。
- **`tickets.ts`**: 使用 Pinia 创建一个 store，用于管理工单数据，包括获取、删除工单以及计算各项目总工时。

## 5. 路由设计

- `/login`: 登录页面。
- `/`: 主页，需要登录才能访问。

## 6. 数据接口

- 本地模拟数据，无需后端接口。
