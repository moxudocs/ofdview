# ofdview
USDOC 文档在线预览，原生解析国产版式文档标准 OFD，无需先转 PDF。支持签章显示与验签、公文字式还原、电子发票与电子证照预览、按页加载与全文搜索；适配银河麒麟、统信 UOS 等国产系统与鲲鹏、飞腾等国产 CPU，支持内网私有化部署。在线体验：https://www.doczs.cn/example.html


# usdoc.ofd SDK 使用手册

适用版本：0.1.0  
本交付包授权截止时间：2026-12-16T06:59:25.498Z（UTC）

## 1. 产品用途与功能

usdoc.ofd SDK 用于在网站、业务系统和管理平台中嵌入 OFD 文档预览。用户无需安装桌面阅读器，通过浏览器即可查看电子发票、电子公文及其他 OFD 文档。

| 功能         | 使用方式                                                |
| ------------ | ------------------------------------------------------- |
| 本地文件预览 | 业务页面取得 File 对象后调用 `viewer.open(file)`        |
| 下载地址预览 | 调用 `viewer.openUrl(src)`，或使用交付示例的 `src` 参数 |
| 连续阅读     | 上下滚动浏览多页正文                                    |
| 缩略图导航   | 点击左侧缩略图定位页面，可收起侧栏                      |
| 页码跳转     | 顶部输入页码，或使用上一页、下一页按钮                  |
| 缩放         | 默认 100%，支持比例选择、放大缩小和适合宽度             |
| 文档旋转     | 点击旋转按钮，每次顺时针旋转 90°                        |
| 全文搜索     | 左侧“搜索”输入关键词，查看摘要并跳转匹配页面            |
| 快捷操作     | 阅读器内 `Ctrl+F` 搜索，`Ctrl+鼠标滚轮` 缩放正文        |
| 保存文件     | 点击“保存原始文档”按钮下载当前 OFD                      |
| 多实例       | 同一页面可创建多个独立阅读器，分别打开文档              |

阅读器只负责预览，内部不包含文件选择或上传入口。无文档时显示加载动画；文件选择按钮由业务页面按需要提供。正文和缩略图按视口附近页面绘制，减少不必要的页面渲染。

## 2. 交付文件与部署

SDK 目录包含：

| 文件                    | 用途                                | 是否为运行必需 |
| ----------------------- | ----------------------------------- | -------------- |
| `usdoc.ofd.viewer.js`   | 阅读器入口，已包含所需 Vue 运行代码 | 是             |
| `usdoc.ofd.viewer.css`  | 阅读器样式                          | 是             |
| `usdoc.ofd.worker.js`   | 后台文件读取与解析通信              | 是             |
| `usdoc.ofd.core.wasm`   | OFD 解析核心                        | 是             |
| `usdoc.ofd.viewer.d.ts` | TypeScript API 声明                 | 按需           |
| `example.html`          | 可直接部署的文件选择与 src 接入示例 | 按需           |
| `README.md`             | 交付包导航                          | 否             |
| 本使用手册、产品介绍    | 接入说明与产品资料                  | 否             |

将四个运行文件放在同一目录，例如业务站点的 `/ofd-sdk/`。通过 HTTP/HTTPS 提供访问，保持文件名和相对位置。组件会自动加载相邻的 Worker、WASM 和 CSS，通常无需单独引入样式或安装前端依赖。

服务器需正确提供 JavaScript、CSS 和 WASM；WASM 的 MIME 类型为 `application/wasm`。优先将 SDK 与业务页面部署在同一站点。无需在服务器安装 Rust、Node.js 或专用 OFD 解析服务。

请通过 HTTP/HTTPS 访问 `example.html`，不要直接双击磁盘 HTML。浏览器会限制 file:// 页面加载 ES Module、Worker 与 WASM，出现 origin null 或 CORS 错误属于这种访问方式的限制。建议使用新版 Edge、Chrome，并在正式上线前验证目标浏览器及实际文档。

## 3. 先运行交付示例

在 VS Code 中测试时，可安装 **Live Server** 扩展，右键 `example.html` 选择 **Open with Live Server**，浏览器将通过 HTTP 地址访问示例。也可以将 SDK 目录部署到已有的 IIS、Nginx 或其他静态 Web 服务。

部署 SDK 目录后，访问以下地址，路径按实际站点替换：

```text
https://your-domain.example/ofd-sdk/example.html
```

点击“选择 OFD 文档”，选择本地文件，即可验证正文、缩略图、搜索与缩放。该选择按钮位于示例页面外层，不属于阅读器内部。

通过地址直接预览文件：

```javascript
const fileUrl = "https://files.example.com/api/download?id=123&token=abc";
const readerUrl = "/ofd-sdk/example.html?src=" + encodeURIComponent(fileUrl);
window.open(readerUrl, "_blank");
```

`src` 必须是可下载到 OFD 内容的 HTTP/HTTPS 地址或相对地址。对整个下载地址使用 `encodeURIComponent`，避免其 `&`、`?` 等字符影响预览页参数。

`example.html` 为测试接入页面，含文件选择栏。正式业务中需要纯预览时，使用下一节的 API 创建阅读器；SDK 目录不包含演示站点的 `preview.html`。

## 4. 在业务页面中预览 OFD

### 4.1 完整的本地文件接入示例

假定 SDK 部署在站点 `/ofd-sdk/`，将下面的 HTML 作为业务页面通过 Web 服务器访问：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>OFD 文档预览</title>
  </head>
  <body>
    <input id="ofd-file" type="file" accept=".ofd" />
    <div id="ofd-reader" style="height:80vh"></div>

    <script type="module">
      import { usdoc } from "/ofd-sdk/usdoc.ofd.viewer.js";

      const viewer = usdoc.ofd.createViewer(
        document.getElementById("ofd-reader"),
      );

      document
        .getElementById("ofd-file")
        .addEventListener("change", async (event) => {
          const file = event.target.files?.[0];
          if (file) await viewer.open(file);
          event.target.value = "";
        });

      window.addEventListener("pagehide", () => viewer.destroy(), {
        once: true,
      });
    </script>
  </body>
</html>
```

容器必须设置高度，例如 `height:80vh` 或 `height:800px`。创建实例后尚未传入文档时，显示中央加载动画属于正常状态。

### 4.2 直接打开下载地址

```html
<div id="reader" style="height:100vh"></div>
<script type="module">
  import { createViewer } from "/ofd-sdk/usdoc.ofd.viewer.js";

  const viewer = createViewer(document.getElementById("reader"));
  await viewer.openUrl("/api/documents/123/download");

  window.addEventListener("pagehide", () => viewer.destroy(), { once: true });
</script>
```

下载接口可以包含查询参数，也可以没有 `.ofd` 后缀，但响应内容必须是实际 OFD 文件，不能是登录页、错误 HTML 或 JSON。

组件会展示下载与解析状态。当前远程方式为完整下载后解析；本地 File 则采用后台分块读取。远程大文件体验还取决于网络、服务器和浏览器存储能力。

### 4.3 自己的纯预览页支持 src

在上节创建实例后，读取业务页面地址参数并调用 API 即可：

```javascript
const src = new URL(location.href).searchParams.get("src")?.trim();
if (src) await viewer.openUrl(src);
```

例如将该业务页面保存为 `/document-reader.html` 后，访问：

```javascript
location.href = "/document-reader.html?src=" + encodeURIComponent(downloadUrl);
```

这里的 `document-reader.html` 由业务方创建，不是 SDK 自动生成的文件。

## 5. API 参数与调用约定

两种入口等价，按项目习惯选择：

```javascript
import { createViewer, usdoc } from "/ofd-sdk/usdoc.ofd.viewer.js";
// const viewer = createViewer(container);
// const viewer = usdoc.ofd.createViewer(container);
```

| API                                 | 参数与返回值                            | 说明                                        |
| ----------------------------------- | --------------------------------------- | ------------------------------------------- |
| `createViewer(container, options?)` | `HTMLElement`、可选配置；返回阅读器实例 | 创建并挂载到指定容器                        |
| `viewer.open(file)`                 | `File`；返回 `Promise<void>`            | 打开本地或业务系统取得的浏览器 File         |
| `viewer.openUrl(src)`               | 下载地址字符串；返回 `Promise<void>`    | 下载并打开 OFD                              |
| `viewer.destroy()`                  | 无参数，无返回值                        | 释放 Worker、页面缓存和组件 DOM，可重复调用 |

调用 `open` 或 `openUrl` 后，下载或打开错误由阅读器内的错误提示展示。返回的 Promise 不提供“预览成功”布尔值；结束也不代表全部页面已绘制，后续页面继续按需加载。不要将 Promise 的完成当作全文渲染成功事件。

当前公开 API 为上述创建、打开和销毁方法，未提供对外的渲染完成回调、程序化跳页或程序化缩放接口。用户可通过工具栏操作跳页和缩放。

### 5.1 初始化配置

| 参数             | 类型      | 默认值            | 作用                                        |
| ---------------- | --------- | ----------------- | ------------------------------------------- |
| `showThumbnails` | `boolean` | `true`            | 初始展开左侧缩略图；设为 `false` 则初始收起 |
| `wasmUrl`        | `string`  | 自动加载相邻 WASM | 自定义解析核心地址                          |
| `cssUrl`         | `string`  | 自动加载相邻 CSS  | 自定义样式地址                              |

仅希望初始收起缩略图时：

```javascript
const viewer = usdoc.ofd.createViewer(container, {
  showThumbnails: false,
});
```

未传 `showThumbnails` 时默认展开，移动端同样生效。该参数控制创建实例时的初始状态，用户之后仍可点击工具栏按钮展开或收起；不会禁止搜索或手动切换。

SDK 自带的 `example.html` 支持同名地址参数：

```javascript
const url =
  "/ofd-sdk/example.html?showThumbnails=false&src=" +
  encodeURIComponent(downloadUrl);
```

演示站点的 `preview.html`、`test.html` 也支持 `showThumbnails=false`。URL 参数使用字符串 `false` 表示初始收起，省略时展开。自己创建的业务页面需要主动读取 URL 参数并传给 SDK，SDK 不会自动读取任意宿主页面的查询参数。

需要自定义资源地址时：

```javascript
const viewer = usdoc.ofd.createViewer(container, {
  wasmUrl: "/ofd-sdk/usdoc.ofd.core.wasm",
  cssUrl: "/ofd-sdk/usdoc.ofd.viewer.css",
});
```

相对路径按业务页面地址解析。`wasmUrl` 和 `cssUrl` 只覆盖对应资源的位置，Worker 仍跟随 SDK JS 加载；跨域资源还需满足 CORS 和浏览器 Worker 限制。通常保留四个文件相邻部署即可。

### 5.2 多实例与页面卸载

可以向两个不同容器分别调用 `createViewer`，获得独立实例。React、Vue 等框架路由离开或组件卸载时，应调用对应实例的 `destroy()`；原生页面可参考示例监听 `pagehide`。

SDK 已包含所需 Vue 运行代码，原生 HTML 和其他前端框架也可接入。样式在 Shadow DOM 中加载，宿主页面通用按钮样式不会直接覆盖阅读器内部样式。

## 6. 文件服务与访问要求

本地文件通过 `viewer.open(file)` 在浏览器内解析，SDK 不上传该文件。使用 `openUrl` 时，浏览器会访问指定下载服务，随后在本地解析。

跨域下载服务应允许业务页面来源访问。需要显示响应中的文件名时，可返回 `Content-Disposition`；跨域情况下还应暴露该响应头：

```http
Access-Control-Expose-Headers: Content-Disposition
```

默认请求使用同源凭证策略，SDK 没有自定义 Authorization 请求头或跨域 Cookie 选项。需要特殊鉴权时，业务系统可先按自己的规则获取 File，再传给 `viewer.open(file)`，或提供有权限访问的下载地址。

HTTPS 业务页面应使用 HTTPS 下载地址。Windows 磁盘路径不能作为 src，本地文件请使用文件选择控件取得 File。

## 7. 授权与版本更新

请以本手册开头标明的截止时间及交付约定为准。截止时间到达后，核心解析调用会提示：

```text
USDOC预览组件出现问题请联系管理员
```

遇到提示时，先核对设备时间；需要续期请联系供应方取得新的交付包。修改业务页面配置或重新复制旧包不会延长授权。组件持续复查授权，过期后会关闭当前阅读器会话并清理正文、缩略图与缓存；后台页面恢复时会立即复查。

更新 SDK 时建议使用新的版本目录，或按站点发布流程整体替换四个运行文件，并刷新浏览器/CDN 缓存。不要混用不同版本的 Worker、WASM、JS 与 CSS。

## 8. 常见问题与适用范围

| 问题                 | 处理建议                                             |
| -------------------- | ---------------------------------------------------- |
| 一直显示加载动画     | 检查是否已调用 open/openUrl，或传入有效 src          |
| 阅读器区域为空       | 确认容器高度不为零，以及 JS、CSS 请求成功            |
| WASM 无法加载        | 检查 WASM 路径、服务器 MIME 类型和跨域设置           |
| 下载失败或 HTTP 错误 | 检查下载地址、权限、CORS 和响应内容                  |
| 更新后仍提示授权过期 | 检查实际加载的 WASM 版本，刷新 CDN 和浏览器缓存      |
| 字体与其他软件有差异 | 使用包含正确字体资源的源文档，并验证目标设备字体环境 |

文件大小允许上限为 500 GB，超过时提示联系管理员。该值为接入限制，不代表任意 500 GB 文件都能在浏览器顺利打开；实际能力受文档结构、资源预算、设备和浏览器限制。

当前支持 OFD 文字、路径、图片、常用颜色与渐变等内容，以及基础批注和可提取的 PNG/JPEG 签章外观。签章外观显示不等于数字签名验证；加密文档、特殊图片编码及复杂 OFD 特性应使用实际样本验证。

更多产品介绍见同目录的 [usdoc.ofd 产品介绍](usdoc.ofd.产品介绍.md)。


