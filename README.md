# 熊熊带我们大家吃好吃的

## 项目结构

- `frontend/` Angular 单页应用，包含“熊熊今天吃什么”按钮和推荐展示区域。
- `backend/` Python FastAPI 服务，提供午餐推荐的 REST API。
- `main.py` 早期的命令行版推荐脚本。

## 下一步

1. 安装 Node.js（18+）和 Angular CLI，生成 `frontend/` 项目骨架。
2. 在 `backend/` 目录下创建虚拟环境并安装依赖：`pip install -r requirements.txt`。
3. 启动后端：`uvicorn main:app --reload --port 8000`。
4. 启动前端开发服务器（默认 `npm start`），在页面点击按钮即可拉取推荐结果。
