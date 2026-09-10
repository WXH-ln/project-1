# 个人简历网页

此仓库下添加了一个简洁并具有交互动效的个人简历静态页面样例，包括：

- index.html — 页面主体（中文示例内容）
- css/styles.css — 样式，采用响应式网格、滚动 reveal 动画与悬停反馈
- js/script.js — 交互脚本（滚动揭示、移动导航、卡片微交互）
- assets/ — SVG 占位图（头像与项目示意图）

如何查看

1. 在本地克隆仓库，进入项目目录。
2. 直接打开 index.html 在浏览器中查看，或使用简单的静态服务器（如：
   - Python: `python -m http.server 8000`
   - VS Code Live Server 插件）

接下来可以：
- 替换头像与项目图片与真实内容
- 将表单提交连接到你的邮件或后端 API
- 引入 Lottie/Gsap 或 AOS 等库做更丰富的动效
