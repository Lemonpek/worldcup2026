# World Cup 2026 Score Forecast App

一个用于 2026 世界杯比分预测和赛果回测的轻量 Web App。

功能包括：

- 自动预测未完赛/进行中的比赛比分
- 自动拉取本届世界杯最新已完赛比分
- 手动刷新比分
- 已完赛比赛的预测比分 vs 实际比分对比
- 预测胜负 vs 实际胜负对比
- 中文比分测试数据回测
- RPS、赛果命中率、完全比分命中率展示
- 球员池、薪资/市场价值、明星球员、Elo、Dixon-Coles/Poisson 等模型因素展示

## 文件结构

```text
.
├── index.html      # 页面结构
├── styles.css      # UI 样式
├── app.js          # 预测模型、数据、交互逻辑
├── server.py       # 静态文件服务 + /api/scores 比分代理
├── Dockerfile      # Zeabur/Docker 部署入口
├── Procfile        # Python/Nixpacks 部署入口
└── README.md
```

## 本地运行

需要 Python 3。

```bash
python server.py
```

然后打开：

```text
http://127.0.0.1:4173/
```

本地接口：

```text
http://127.0.0.1:4173/api/scores
```

`/api/scores` 会代理请求 FixtureDownload 的 2026 世界杯 JSON feed，避免浏览器跨域问题。

## Zeabur 部署

项目已包含 `Dockerfile` 和 `Procfile`。

推荐直接用 Dockerfile 部署。Zeabur 会启动：

```bash
python server.py
```

`server.py` 会自动读取平台环境变量：

```text
HOST=0.0.0.0
PORT=<Zeabur 注入的端口>
```

如果线上打不开，请检查：

- Zeabur 服务是否是 `Running`
- Public Domain 是否绑定到 HTTP 服务端口
- 是否已经 push 最新代码并 Redeploy
- 浏览器是否缓存旧的失败连接，可以尝试无痕窗口或 `Ctrl + F5`

## 数据更新机制

页面打开后会自动请求：

```text
/api/scores
```

也可以点击页面上的 `刷新比分` 按钮手动更新。

逻辑：

- 没有最终比分的比赛会留在 `自动预测` 视图
- 已开赛但还没有最终比分的比赛会显示 `进行中/待完赛`
- 只有拉取到最终比分后，比赛才会进入 `历史对战比分` 对比视图

## 模型说明

当前模型是可解释的前端预测模型，不是官方赔率或保证准确的结果。

主要参考因素：

- 国家队基础实力
- 球员池强度
- 俱乐部层级
- 薪资/市场价值代理
- 明星球员影响
- 教练和战术
- 历史大赛稳定性
- 主办国/赛程环境
- Elo 风格胜率
- Dixon-Coles / Poisson 进球分布

## 回测指标

App 会对已完赛比赛展示：

- 精确比分是否命中
- 胜平负是否命中
- 进球误差
- RPS，Ranked Probability Score

颜色含义：

- 绿色：精确比分命中
- 蓝色：胜负命中但比分未中
- 红色：胜负未中
- 灰色：待赛果

## 注意

FixtureDownload 不是秒级 live 数据源，通常会有更新延迟。这个 App 更适合做“自动同步已更新比分”和预测回测，不适合作为实时直播比分工具。
