# 从 Git 部署到 SiteGround 完整指南

## 📋 概述

SiteGround 不支持直接从 Git 仓库推送部署。需要以下步骤：
1. 从 Git 拉取最新代码（或使用本地代码）
2. 本地构建项目
3. 将构建文件上传到 SiteGround

---

## 🚀 方法 1: 手动部署（推荐）

### 步骤 1: 确保代码是最新的

```bash
# 如果从其他电脑工作，先拉取最新代码
git pull origin main
```

### 步骤 2: 安装依赖（如果需要）

```bash
npm install
```

### 步骤 3: 构建项目

```bash
npm run build
```

构建完成后，文件会在 `out/` 目录中。

### 步骤 4: 上传到 SiteGround

#### 选项 A: 使用 SiteGround 文件管理器

1. **登录 SiteGround**
   - 访问 https://www.siteground.com/
   - 登录您的账户

2. **打开文件管理器**
   - 进入 "Websites" → 选择 `leftoverhero.com`
   - 点击 "File Manager"

3. **导航到网站根目录**
   - 进入 `public_html/` 目录

4. **删除旧文件（可选但推荐）**
   - 删除 `index.html`
   - 删除 `assets/` 文件夹（如果存在）
   - 保留 `.htaccess` 文件（如果已存在）

5. **上传新文件**
   - 从本地 `out/` 目录上传所有文件：
     - `index.html`
     - `assets/` 文件夹（整个文件夹）
     - `vite.svg`（如果存在）
   - 确保 `.htaccess` 文件也在根目录

#### 选项 B: 使用 FTP/SFTP

1. **获取 FTP 凭据**
   - 在 SiteGround 控制面板 → "FTP Accounts"
   - 记录：主机名、用户名、密码、端口

2. **使用 FTP 客户端**
   - **FileZilla** (推荐): https://filezilla-project.org/
   - **WinSCP** (Windows): https://winscp.net/
   - **VS Code FTP 扩展**: SFTP/FTP sync

3. **连接并上传**
   ```
   主机: ftp.leftoverhero.com (或您的FTP主机)
   用户名: 您的FTP用户名
   密码: 您的FTP密码
   端口: 21 (FTP) 或 22 (SFTP)
   ```

4. **上传文件**
   - 连接到 `public_html/` 目录
   - 上传 `out/` 目录中的所有内容

---

## 🔄 方法 2: 自动化部署脚本（高级）

创建一个自动化脚本，简化部署流程：

### Windows PowerShell 脚本

创建 `deploy.ps1`:

```powershell
# 部署脚本
Write-Host "开始部署到 SiteGround..." -ForegroundColor Green

# 1. 拉取最新代码
Write-Host "拉取最新代码..." -ForegroundColor Yellow
git pull origin main

# 2. 安装依赖（如果需要）
Write-Host "检查依赖..." -ForegroundColor Yellow
npm install

# 3. 构建项目
Write-Host "构建项目..." -ForegroundColor Yellow
npm run build

# 4. 显示构建结果
Write-Host "构建完成！" -ForegroundColor Green
Write-Host "构建文件位置: out/" -ForegroundColor Cyan
Write-Host ""
Write-Host "下一步：" -ForegroundColor Yellow
Write-Host "1. 登录 SiteGround 文件管理器" -ForegroundColor White
Write-Host "2. 进入 public_html/ 目录" -ForegroundColor White
Write-Host "3. 上传 out/ 目录中的所有文件" -ForegroundColor White
```

运行脚本：
```powershell
.\deploy.ps1
```

---

## 🔧 方法 3: 使用 GitHub Actions（如果 SiteGround 支持）

如果 SiteGround 提供 Git 部署功能：

1. **在 SiteGround 配置 Git**
   - 在控制面板中找到 "Git" 或 "Deployment" 选项
   - 连接您的 GitHub 仓库

2. **配置自动部署**
   - 设置部署分支（通常是 `main`）
   - 配置构建命令：`npm install && npm run build`
   - 设置部署目录：`out/`

---

## ✅ 部署检查清单

部署后，请检查：

- [ ] 访问 https://leftoverhero.com 确认网站正常加载
- [ ] 检查浏览器控制台是否有错误
- [ ] 测试食材选择功能
- [ ] 测试食谱匹配和详情页面
- [ ] 测试路由（如 `/recipe/1`）
- [ ] 检查暗色模式切换
- [ ] 验证移动端响应式布局

---

## 🐛 常见问题

### Q: 页面显示空白
**A:** 
- 检查浏览器控制台错误
- 确认 `assets/` 文件夹已完整上传
- 检查 `.htaccess` 文件是否存在

### Q: 路由不工作（404错误）
**A:** 
- 确保 `.htaccess` 文件在 `public_html/` 根目录
- 检查 `.htaccess` 内容是否正确

### Q: CSS/JS 文件加载失败
**A:** 
- 确认 `assets/` 文件夹已上传
- 检查文件路径是否正确（相对路径）
- 清除浏览器缓存

### Q: 如何回滚到之前的版本？
**A:** 
- 在 Git 中切换到之前的提交
- 重新构建：`npm run build`
- 重新上传 `out/` 目录

---

## 📝 快速部署命令

```bash
# 完整部署流程（一行命令）
git pull && npm install && npm run build && echo "构建完成！请上传 out/ 目录到 SiteGround"
```

---

## 🔐 安全提示

- 不要将 FTP 密码提交到 Git
- 使用环境变量存储敏感信息
- 定期更新依赖包以修复安全漏洞

---

## 📞 需要帮助？

- SiteGround 支持文档: https://www.siteground.com/kb/
- SiteGround 支持: 通过控制面板联系
- 项目问题: 检查 GitHub Issues

