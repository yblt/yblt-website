# 杨彬林 · 个人网站

Vue 3 + Vite 构建的全栈开发工程师个人作品集网站，免费部署于 Vercel。

## 本地开发

```bash
npm install
npm run dev      # 开发预览 http://localhost:5173
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 目录结构

```
src/
  data/site.js       # 站点所有数据（个人信息/项目/技能/经历）—— 改这里即可更新网站
  components/        # 各板块组件
  App.vue            # 页面组装
public/
  resume.pdf         # 简历下载文件（替换此文件即更新简历下载）
```

## 更新内容

1. **简历**：用新简历 PDF 覆盖 `public/resume.pdf`（保持文件名一致）
2. **项目/技能/经历**：编辑 `src/data/site.js` 对应字段
3. **个人信息**：编辑 `src/data/site.js` 的 `profile`

## 部署到 Vercel（免费）

### 方式一：Vercel CLI

```bash
npm i -g vercel
vercel          # 首次运行，按提示登录并选择项目，之后每次 vercel --prod 发布
```

### 方式二：GitHub + Vercel（推荐，之后 git push 自动部署）

1. 把项目推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "feat: personal website"
   git remote add origin https://github.com/yblt/个人网站仓库名.git
   git push -u origin main
   ```
2. 到 [vercel.com](https://vercel.com) 用 GitHub 登录 → **Add New → Project**
3. 选择刚推送的仓库 → Framework 自动识别为 **Vite** → Build Command 保持默认（`npm run build`），Output Directory 为 `dist`
4. 点击 **Deploy**，几分钟后获得 `https://xxx.vercel.app` 链接
5. 以后 `git push` 自动重新部署

### 绑定域名（可选）

Vercel → 项目 → Settings → Domains，可绑定自己买的域名（如 `yangbinlin.cn`，需备案）。免费域名 `xxx.vercel.app` 国内一般可直接访问。

## 说明

- 头像使用 GitHub 头像：https://github.com/yblt.png（替换 GitHub 头像即同步更新）
- 简历下载指向 `/resume.pdf`，构建时自动从 `public/` 复制
