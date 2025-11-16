# 部署检查清单

## 🔍 问题诊断：MIME 类型错误

错误信息：`Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/html"`

这意味着服务器返回了 HTML 而不是 JavaScript 文件。

## ✅ 检查步骤

### 1. 验证文件是否上传

在 SiteGround 文件管理器中，检查 `public_html/` 目录结构：

```
public_html/
├── index.html
├── .htaccess          ← 必须存在
├── vite.svg
└── assets/
    ├── index-BXzAcVU4.js      ← 必须存在
    ├── index-BXzAcVU4.js.map  ← 可选
    └── index-D5VtNAhC.css     ← 必须存在
```

### 2. 直接测试资源文件

在浏览器中直接访问这些 URL，看是否能下载文件：

- https://leftoverhero.com/assets/index-BXzAcVU4.js
- https://leftoverhero.com/assets/index-D5VtNAhC.css

**如果返回 404 或 HTML：**
- 文件没有正确上传
- 路径不正确
- `.htaccess` 仍在拦截请求

**如果返回文件内容：**
- 文件存在，但 MIME 类型设置有问题

### 3. 检查 .htaccess 文件

确保 `.htaccess` 文件：
- ✅ 在 `public_html/` 根目录
- ✅ 文件名正确（注意前面的点：`.htaccess`）
- ✅ 内容是最新版本（已更新，包含 MIME 类型设置）

### 4. 检查文件权限

在 SiteGround 文件管理器中：
- 文件权限应该是 `644`
- 目录权限应该是 `755`

### 5. 清除缓存

- 浏览器缓存：`Ctrl + Shift + R`
- SiteGround 缓存（如果有）：在控制面板中清除

## 🛠️ 解决方案

### 方案 1: 重新上传所有文件

1. **删除旧文件**
   - 在 SiteGround 文件管理器中，删除 `public_html/` 中的所有文件
   - 保留 `.htaccess`（或重新上传新的）

2. **上传新文件**
   - 从本地 `out/` 目录上传所有文件
   - 确保 `assets/` 文件夹完整上传

### 方案 2: 检查 .htaccess 是否生效

如果 SiteGround 禁用了 `.htaccess`：
- 联系 SiteGround 支持，确认 `mod_rewrite` 已启用
- 确认允许使用 `.htaccess` 文件

### 方案 3: 使用相对路径（如果绝对路径有问题）

如果问题持续，可能需要修改构建配置使用相对路径。但这需要修改 `vite.config.ts`。

## 📝 当前 .htaccess 配置

最新的 `.htaccess` 文件应该包含：

```apache
# Set correct MIME types first
<IfModule mod_mime.c>
  AddType application/javascript js
  AddType application/javascript mjs
  AddType text/css css
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite assets directory - must be first
  RewriteRule ^assets/ - [L]
  
  # Don't rewrite existing files
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]
  
  # Don't rewrite existing directories
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  
  # Don't rewrite specific file types
  RewriteRule \.(js|css|map|svg|png|jpg|jpeg|gif|ico|woff|woff2|ttf|eot)$ - [L]
  
  # Rewrite everything else to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔄 重新部署步骤

1. **确保本地文件是最新的**
   ```bash
   npm run build
   ```

2. **检查 out/ 目录**
   - 确认所有文件存在
   - 确认 `.htaccess` 是最新版本

3. **上传到 SiteGround**
   - 删除 `public_html/` 中的旧文件
   - 上传 `out/` 目录中的所有内容

4. **验证**
   - 访问 https://leftoverhero.com
   - 检查浏览器控制台
   - 直接访问资源文件 URL

## 📞 如果问题仍然存在

请提供：
1. 直接访问 `https://leftoverhero.com/assets/index-BXzAcVU4.js` 的结果（截图或描述）
2. SiteGround 文件管理器中 `public_html/` 目录的截图
3. 浏览器 Network 标签页中失败的请求详情

