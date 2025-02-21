
# SnapFlomo Chrome 扩展

一个优雅的 Chrome 浏览器扩展,用于快速保存网页内容到 Flomo,支持 AI 智能总结、多主题切换和侧边栏模式。

![主界面](/public/screenshots/main.png)

## ✨ 主要功能

### 1. 内容采集
- 自动获取当前页面标题和 URL
- 支持手动输入文章摘要(5000字限制)
- 支持添加个人感想(1000字)
- AI 智能总结
  - 支持智谱 AI(默认)和 Deepseek
  - 自动提取网页核心内容
  - 智能生成结构化摘要

![AI 智能总结](/public/screenshots/ai-summary.png)

### 2. 界面交互
- 侧边栏模式:沉浸阅读体验
- 响应式布局设计
- 多主题系统
  - 默认主题:简约清新
  - 圣诞主题:节日氛围
  - 新年主题:喜庆温暖
  - 蛇年主题:生肖特色
- 友好的交互反馈
- 便捷的浮动按钮

![主题展示](/public/screenshots/theme-default.png)

### 3. 快捷键支持
- Mac: `Command + Shift + F`
- Windows: `Alt + Shift + F` 
- 支持自定义快捷键
- 文本选择快捷操作

### 4. 数据管理
- Flomo 同步
- 本地数据管理
- 数据统计分析
- 历史记录查看

![数据统计](/public/screenshots/statistics.png)

## 🚀 快速开始

### 安装步骤

1. 下载源代码

```bash
git clone https://github.com/Acorn2/flomo-plugin.git
```

2. 安装依赖
```bash
pnpm install
```

3. 本地开发
```bash
pnpm dev
```

4. 构建发布
```bash
pnpm build
```

### 浏览器安装

1. 打开 Chrome 浏览器,进入扩展程序页面（chrome://extensions/）
2. 开启"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择项目构建后的 dist 目录

## ⚙️ 配置说明

### Flomo 配置
1. 登录 Flomo 账号（需要会员）
2. 进入个人账号 -> 扩展中心 & API
3. 获取专属 Webhook URL
4. 在扩展设置中填入 URL

### AI 配置（可选）
支持两种 AI 服务:
- 智谱 AI（默认）
  - 支持 GLM-4 模型
  - 更适合中文场景
- Deepseek
  - 支持多语言
  - 擅长专业领域

需要在设置页面配置对应服务的 API Key。

![设置界面](/public/screenshots/setting.png)

## 🔒 安全与隐私

- API Key 安全存储
- 内容安全策略(CSP)
- 最小数据采集
- 本地优先存储
- 支持数据清理
- 网站黑名单

## 🛠 技术栈

- 前端框架: Astro + TailwindCSS
- 状态管理: Alpine.js
- 构建工具: Vite
- 部署平台: Cloudflare Pages

## 📝 开源协议

[MIT License](LICENSE)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

## 💖 支持项目

如果这个项目对你有帮助,欢迎给个 Star ⭐️
