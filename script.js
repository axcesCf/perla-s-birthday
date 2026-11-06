// 打开 "perlaaa_birthday.ai"：先把启动页淡出（body.is-opening），
// 再显示工作区（body.is-open），花也在这时候才开始长。
const openButton = document.getElementById('open-letter');
const launch = document.querySelector('.launch');
const title = document.getElementById('letter-title');
let opening = false;

function openDocument() {
  if (opening) return;
  opening = true;

  openButton.disabled = true;
  document.body.classList.add('is-opening');
  if (launch) launch.setAttribute('inert', '');

  window.setTimeout(() => {
    document.body.classList.add('is-open');
    document.body.classList.remove('preload');

    // 工作区出现后把焦点交给标题，读屏与键盘用户都能接上
    if (title) title.focus({ preventScroll: true });
  }, 400);
}

// 重新打开时（例如浏览器缓存了表单状态）确保从封面开始
document.body.classList.remove('is-open', 'is-opening');

openButton.addEventListener('click', openDocument);
