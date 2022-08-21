const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // 相对于目标元素的左偏移量
  startX = e.pageX - slider.offsetLeft;
  // 已经滚动的距离
  scrollLeft = slider.scrollLeft;
  // console.log(startX);
  // console.log(scrollLeft);
});


// 鼠标离开目标元素时移除
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// 鼠标按键抬起时移除
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) {
    // 鼠标没有按下时不执行
    return;
  }
  e.preventDefault();
  // 实际上slider.offsetLeft一直是0
  // console.log('slider.offsetLeft', slider.offsetLeft);
  // 相对于目标元素的左偏移量
  const x = e.pageX - slider.offsetLeft;
  // 移动的距离
  // 乘以3加快滚动速度
  const walk = (x - startX) * 3;
  // x > startX 时，鼠标向右移动，scrollLeft减小，向左滚动
  // x < startX 时，鼠标向左移动，scrollLeft增大，向右滚动
  slider.scrollLeft = scrollLeft - walk;
});
