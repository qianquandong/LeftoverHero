# 网站更新后没有显示的排查指南

## 🔍 常见原因

### 1. 浏览器缓存（最常见）

**解决方案：**
- **强制刷新**：按 `Ctrl + Shift + R` (Windows) 或 `Cmd + Shift + R` (Mac)
- **清除缓存**：
  - Chrome/Edge: 按 `F12` → 右键刷新按钮 → 选择"清空缓存并硬性重新加载"
  - 或：设置 → 隐私和安全 → 清除浏览数据 → 选择"缓存的图片和文件"
- **无痕模式测试**：按 `Ctrl + Shift + N` (Windows) 或 `Cmd + Shift + N` (Mac)

### 2. 文件没有正确上传

**检查步骤：**
1. 登录 SiteGround 文件管理器
2. 检查 `public_html/` 目录下的文件：
   - `index.html` - 应该是最新构建的版本
   - `assets/` 文件夹 - 应该包含最新的 JS 和 CSS 文件
   - `.htaccess` - 应该是最新版本

3. **检查文件时间戳**：
   - 确认文件的上传时间是最新的
   - 如果时间戳是旧的，说明文件没有成功上传

### 3. 文件路径问题

**检查：**
- 确保 `assets/` 文件夹在 `public_html/` 根目录下
- 确保 `index.html` 中引用的文件路径正确

**验证方法：**
在浏览器中直接访问：
- `https://leftoverhero.com/assets/index-BCfGhqdl.js`
- `https://leftoverhero.com/assets/index-CyrunFCJ.css`

如果返回 404，说明文件路径不对或文件没有上传。

### 4. SiteGround 缓存

**解决方案：**
1. 登录 SiteGround 控制面板
2. 找到 "Speed" 或 "Caching" 选项
3. 清除所有缓存：
   - SuperCacher (如果启用)
   - Memcached (如果启用)
   - 静态文件缓存

### 5. CDN 缓存（如果使用了 CDN）

如果网站使用了 Cloudflare 或其他 CDN：
1. 登录 CDN 控制面板
2. 清除缓存
3. 或使用 "Purge Everything" 选项

### 6. 文件权限问题

**检查：**
在 SiteGround 文件管理器中：
- 文件权限应该是 `644`
- 目录权限应该是 `755`

**修改权限：**
- 右键点击文件/文件夹 → 权限 → 设置为 `644` (文件) 或 `755` (目录)

## 🛠️ 快速解决方案

### 方案 1: 完全重新上传

1. **删除旧文件**（保留 `.htaccess`）：
   - 删除 `public_html/index.html`
   - 删除 `public_html/assets/` 整个文件夹

2. **上传新文件**：
   - 从本地 `out/` 目录上传所有文件
   - 确保 `assets/` 文件夹完整上传

3. **清除所有缓存**：
   - 浏览器缓存
   - SiteGround 缓存
   - CDN 缓存（如果有）

### 方案 2: 添加版本号到文件名（推荐）

Vite 已经自动为文件添加了哈希值（如 `index-BCfGhqdl.js`），这应该能防止缓存问题。

如果问题仍然存在，检查：
- `index.html` 中引用的文件名是否与 `assets/` 文件夹中的文件名匹配
- 文件名不匹配 = 文件没有正确上传

### 方案 3: 检查 .htaccess 缓存设置

已更新 `.htaccess` 文件，添加了防止 HTML 文件缓存的设置。

**如果 SiteGround 不支持 mod_headers：**
- 缓存控制可能不生效
- 主要依赖浏览器强制刷新

## 📋 验证清单

- [ ] 浏览器强制刷新 (`Ctrl + Shift + R`)
- [ ] 无痕模式测试
- [ ] 检查文件上传时间戳
- [ ] 验证文件路径（直接访问 JS/CSS 文件）
- [ ] 清除 SiteGround 缓存
- [ ] 清除 CDN 缓存（如果有）
- [ ] 检查文件权限
- [ ] 确认 `.htaccess` 文件是最新版本

## 🔧 调试步骤

1. **打开浏览器开发者工具** (`F12`)
2. **查看 Network 标签页**：
   - 刷新页面
   - 检查 `index.html` 的状态码
   - 检查 JS/CSS 文件的状态码
   - 如果看到 `304 Not Modified`，说明浏览器使用了缓存

3. **查看 Console 标签页**：
   - 检查是否有 JavaScript 错误
   - 检查是否有资源加载失败

4. **检查文件内容**：
   - 在 Network 标签页中，点击 `index.html`
   - 查看 "Response" 标签，确认内容是否是最新的

## 💡 预防措施

1. **每次部署后**：
   - 使用强制刷新测试
   - 检查文件时间戳
   - 验证文件内容

2. **使用版本控制**：
   - Vite 自动为文件添加哈希值
   - 确保每次构建后文件名都不同

3. **定期检查**：
   - 确认 `.htaccess` 配置正确
   - 确认缓存设置合理

