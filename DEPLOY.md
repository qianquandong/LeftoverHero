# 部署指南 - Deploy to leftoverhero.com

## 📦 构建文件位置

生产构建文件位于 `out/` 目录，包含以下文件：
- `index.html` - 主 HTML 文件
- `assets/` - CSS 和 JavaScript 文件
- `vite.svg` - 图标文件

## 🚀 部署步骤（SiteGround）

### 方法 1: 通过 SiteGround 文件管理器

1. **登录 SiteGround 控制面板**
   - 访问 https://www.siteground.com/
   - 登录您的账户

2. **打开文件管理器**
   - 进入 "Websites" → 选择 leftoverhero.com
   - 点击 "File Manager" 或 "文件管理器"

3. **导航到网站根目录**
   - 进入 `public_html/` 目录（或您的域名根目录）

4. **上传文件**
   - 删除旧文件（如果有）
   - 上传 `out/` 目录中的所有文件到 `public_html/`
   - 确保 `index.html` 在根目录
   - 确保 `assets/` 文件夹完整上传

5. **设置权限**
   - 确保文件权限正确（通常 644 用于文件，755 用于目录）

### 方法 2: 通过 FTP

1. **获取 FTP 信息**
   - 在 SiteGround 控制面板中找到 FTP 凭据
   - 主机名、用户名、密码

2. **使用 FTP 客户端**
   - 推荐工具：FileZilla, WinSCP, 或 VS Code 的 FTP 扩展
   - 连接到您的服务器

3. **上传文件**
   - 连接到 `public_html/` 目录
   - 上传 `out/` 目录中的所有内容

### 方法 3: 通过 Git（如果配置了）

如果您的 SiteGround 支持 Git 部署：

```bash
# 在本地构建
npm run build

# 如果有 Git 部署配置，可以推送到特定分支
git add out/
git commit -m "Deploy production build"
git push origin main
```

## ✅ 部署后检查清单

- [ ] 访问 https://leftoverhero.com 确认网站正常加载
- [ ] 检查所有资源文件（CSS、JS）是否正确加载
- [ ] 测试食材选择功能
- [ ] 测试食谱匹配功能
- [ ] 检查响应式布局在不同设备上的表现
- [ ] 验证所有链接和按钮正常工作

## 🔧 故障排除

### 问题：页面显示空白
- 检查浏览器控制台是否有错误
- 确认所有资源文件路径正确
- 检查 `.htaccess` 文件（如果需要）

### 问题：资源文件 404 错误
- 确认 `assets/` 文件夹已正确上传
- 检查文件路径是否正确（应该是相对路径）

### 问题：路由不工作
- 如果使用 React Router，可能需要配置 `.htaccess` 文件进行重定向

## 📝 创建 .htaccess 文件（如果需要）

如果部署后路由有问题，在 `public_html/` 目录创建 `.htaccess` 文件：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔄 更新部署

每次更新后：

1. 在本地运行 `npm run build`
2. 上传新的 `out/` 目录内容到服务器
3. 清除浏览器缓存测试

## 📞 需要帮助？

如果遇到问题，可以：
- 查看 SiteGround 文档
- 联系 SiteGround 支持
- 检查浏览器控制台的错误信息

