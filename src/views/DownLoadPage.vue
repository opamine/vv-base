<script setup>
  import html2canvas from 'html2canvas';
  import { jsPDF } from 'jspdf';

  // eslint-disable-next-line no-unused-vars
  const onIframePrint = () => {
    const printContentHtml = document.getElementsByClassName('print')[0].innerHTML;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
    document.body.appendChild(iframe);
    iframe.contentDocument.write(printContentHtml);
    iframe.contentDocument.close();
    iframe.contentWindow.print();
    document.body.removeChild(iframe);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDownloadPdf = (fileName) => {
    const target = document.getElementsByClassName('print')[0];

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
      const fileName = 'test';
      pdf.save(`${fileName}.pdf`);
    });
  };
</script>
<template>
  <div class="print">
    <table>
      <thead>
        <tr>
          <th colspan="4">投资协议</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td colspan="3">with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td colspan="3">with two columns</td>
        </tr>
        <tr>
          <td colspan="4"><img src="../assets/logo.png" style="width: 100px;" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div><a-button @click="handleDownloadPdf">下载页面</a-button></div>
</template>
<style lang="less" scoped>
  // A4 纸: 210mm × 297mm
  // 7 倍
  .print {
    position: absolute;
    top: -9999px;
    left: -9999px;
    padding: 16px 8px;
    width: 1470px;
    height: 2079px;
    font-size: 36px;
    box-sizing: border-box;

    table {
      width: 100%;
      border: 1px solid #333;
      border-spacing: 0;

      thead {
        tr {
          th {
            padding: 8px;
            border-right: 1px solid #333;
            text-align: center;

            &:last-child {
              border-right: none;
            }
          }
        }
      }

      tbody {
        tr {
          td {
            padding: 8px;
            border-right: 1px solid #333;
            border-bottom: 1px solid #333;

            &:last-child {
              border-right: none;
            }
          }

          &:first-child {
            td {
              border-top: 1px solid #333;
            }
          }

          &:last-child {
            td {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
</style>
