# 空白页面故障排除指南

## 🔍 常见原因和解决方案

### 1. 资源文件路径问题

**问题：** `out/index.html` 中的资源路径是绝对路径 `/assets/...`，在某些服务器配置下可能无法加载。

**检查方法：**
- 打开浏览器开发者工具（F12）
- 查看 Console 标签页，看是否有 404 错误
- 查看 Network 标签页，检查 `index-BXzAcVU4.js` 和 `index-D5VtNAhC.css` 是否加载成功

**解决方案：**
如果资源文件返回 404，可能是路径问题。检查：
- `assets/` 文件夹是否在 `public_html/` 目录下
- 文件路径是否正确

### 2. .htaccess 配置问题

**检查：**
- `.htaccess` 文件是否在 `public_html/` 根目录
- SiteGround 是否启用了 `mod_rewrite` 模块

**解决方案：**
确保 `.htaccess` 文件内容正确：
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

### 3. 文件上传不完整

**检查清单：**
- [ ] `index.html` 在 `public_html/` 根目录
- [ ] `assets/` 文件夹在 `public_html/` 根目录
- [ ] `assets/` 文件夹包含：
  - `index-BXzAcVU4.js`
  - `index-BXzAcVU4.js.map`
  - `index-D5VtNAhC.css`
- [ ] `.htaccess` 文件在 `public_html/` 根目录
- [ ] `vite.svg` 文件（可选）

### 4. 浏览器缓存问题

**解决方案：**
- 按 `Ctrl + Shift + R` (Windows) 或 `Cmd + Shift + R` (Mac) 强制刷新
- 清除浏览器缓存
- 使用无痕模式访问

### 5. JavaScript 错误

**检查方法：**
1. 打开浏览器开发者工具（F12）
2. 查看 Console 标签页
3. 查看是否有红色错误信息

**常见错误：**
- `Uncaught SyntaxError` - 可能是文件损坏或编码问题
- `Uncaught ReferenceError` - 可能是依赖问题
- `Failed to load resource` - 资源文件未找到

### 6. 文件权限问题

**检查：**
在 SiteGround 文件管理器中，检查文件权限：
- 文件权限应该是 `644`
- 目录权限应该是 `755`

### 7. React Router 配置问题

**检查：**
- 确保使用 `BrowserRouter`（已在代码中配置）
- 确保 `.htaccess` 正确配置了重定向规则

## 🔧 快速诊断步骤

### 步骤 1: 检查浏览器控制台
1. 打开 https://leftoverhero.com
2. 按 F12 打开开发者工具
3. 查看 Console 标签页的错误信息
4. 查看 Network 标签页，检查哪些资源加载失败

### 步骤 2: 验证文件结构
在 SiteGround 文件管理器中，`public_html/` 目录应该包含：
```
public_html/
├── index.html
├── .htaccess
├── vite.svg
└── assets/
    ├── index-BXzAcVU4.js
    ├── index-BXzAcVU4.js.map
    └── index-D5VtNAhC.css
```

### 步骤 3: 测试资源文件
直接在浏览器中访问：
- https://leftoverhero.com/assets/index-BXzAcVU4.js
- https://leftoverhero.com/assets/index-D5VtNAhC.css

如果这些 URL 返回 404，说明文件路径或上传有问题。

### 步骤 4: 检查 .htaccess
确保 `.htaccess` 文件：
- 在 `public_html/` 根目录
- 文件名正确（注意前面的点）
- 内容正确

## 🛠️ 修复步骤

### 如果资源文件 404：

1. **重新上传文件**
   - 删除 `public_html/assets/` 文件夹
   - 重新上传 `out/assets/` 文件夹
   - 确保文件夹结构正确

2. **检查路径**
   - 确保 `index.html` 中的路径是 `/assets/...`
   - 如果网站部署在子目录，可能需要修改路径

### 如果 JavaScript 错误：

1. **重新构建**
   ```bash
   npm run build
   ```

2. **检查构建输出**
   - 确保没有构建错误
   - 检查 `out/` 目录中的文件

3. **重新上传**
   - 删除旧文件
   - 上传新的构建文件

## 📞 需要更多帮助？

如果以上步骤都无法解决问题，请提供：
1. 浏览器控制台的完整错误信息（截图或复制文本）
2. Network 标签页中失败的请求（截图）
3. SiteGround 文件管理器中 `public_html/` 目录的文件列表（截图）

