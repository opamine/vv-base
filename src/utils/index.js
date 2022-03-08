// 按需解析转换 vite 环境变量值（例如布尔值）
// 使用方式
// import { convertEnvVars } from '../utils/index';
// console.log(convertEnvVars(import.meta.env));
export const convertEnvVars = (envConf) => {
  const result = {};
  for (const envVar of Object.keys(envConf)) {
    let convertedValue = envConf[envVar];
    // 转换 "true"、"false" 为布尔值
    convertedValue =
      convertedValue === 'true' ? true : convertedValue === 'false' ? false : convertedValue;
    // 将 VITE_PORT 的值转换为 Number 类型
    if (envVar === 'VITE_PORT') {
      convertedValue = Number(convertedValue);
    }
    // 解析 VITE_PROXY 为 JSON 对象（原为 JSON 数组字符串）
    if (envVar === 'VITE_PROXY' && convertedValue) {
      try {
        convertedValue = JSON.parse(convertedValue.replace(/'/g, '"'));
      } catch (error) {
        convertedValue = '';
      }
    }
    // 添加至返回的对象中
    result[envVar] = convertedValue;
  }
  return result;
};

// 局部打印: iframe 方案
export const onIframePrint = (fileName) => {
  // 获取局部打印内容
  const printContentHtml = document.getElementsByClassName('print')[0].innerHTML;
  // 创建一个 iframe 并添加至当前 Dom 环境(按情况决定是否需要隐藏)
  const iframe = window.document.createElement('iframe');
  iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
  window.document.body.appendChild(iframe);
  // 调用 iframe.contentDocument.open 方法准备写入
  iframe.contentDocument.open();
  // 将需要局部打印的内容渲染到 iframe 中
  iframe.contentDocument.write(printContentHtml);
  // 修改 document.title 来控制下载文件名
  // 做个 title 备份，打印完毕以后还原 document.title
  const backupTitle = document.title;
  window.document.title = fileName;
  // 创建 iframe 内置文档的 style 标签，添加自定义样式
  const styleSheet = iframe.contentDocument.createElement('style');
  styleSheet.innerText =
    '@page{size:auto;margin:0}.content{font-size:14px;text-align:center}table{width:100%;border:1px solid #000;border-spacing:0;text-align:center;table-layout:fixed;word-break:break-all}tbody tr td{padding:8px;border-right:1px solid #000;border-bottom:1px solid #000}tbody tr td:last-child{border-right:none}tbody tr:first-child td{border-top:none}tbody tr:last-child td{border-bottom:none}';
  iframe.contentDocument.getElementsByTagName('head')[0].appendChild(styleSheet);
  // 由 iframe.contentDocument.open 方法打开的输出流，并显示选定的数据
  iframe.contentDocument.close();
  // 调用 iframe 内置 window 对象的 print 方法
  iframe.contentWindow.print();
  // 移除创建的 iframe
  window.document.body.removeChild(iframe);
  // 还原 document.title
  window.document.title = backupTitle;
};

// 局部打印: html2canvas + jspdf
export const handleDownloadPdf = (fileName) => {
  // 获取局部打印内容
  const target = document.getElementsByClassName('print')[0];
  // 将获取的 DOM 转 canvas
  html2canvas(target).then((canvas) => {
    // 画布宽高(实际 Dom 的宽高)
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    // 一页 pdf 显示 html 页面生成的 canvas 高度;
    const pageHeight = (contentWidth / 592.28) * 841.89;
    // 未生成 pdf 的 html 页面高度
    let leftHeight = contentHeight;
    // 页面偏移
    let position = 0;
    // a4 纸的尺寸 [595.28,841.89]，html 页面生成的 canvas 在 pdf 中图片的宽高
    const imgWidth = 595.28;
    const imgHeight = (592.28 / contentWidth) * contentHeight;
    const pageData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('', 'pt', 'a4');
    // 有两个高度需要区分，一个是 html 页面的实际高度，和生成 pdf 的页面高度(841.89)
    // 当内容未超过 pdf 一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 891;
        // 避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    pdf.save(`${fileName}.pdf`);
  });
};
