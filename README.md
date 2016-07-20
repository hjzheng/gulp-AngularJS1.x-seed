# gulp-AngularJS1.x-seed

gulp + AngularJS1.x 简易开发环境搭建

### 功能
- src 中文件改动(包括增加和删除),自动注入 index.html 并刷新页面, 无需重启.
- mock 后端数据功能, 通过配置书写简单的 js 文件, 添加 mock 数据简单方便, mock/config 目录中有示例, 自己可以轻松配置 (受 wiremock 启发)
- ESlint 校验
- precommit 和 prepush
- 后端代理功能 mock环境与真实环境轻松切换

### 使用
- npm install
- npm run dev // 开发
- npm run build // build
