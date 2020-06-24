'use strict';
{
  const btn = document.getElementById('btn');
  const p = document.createElement('p');
  p.classList.add('text');
  document.body.appendChild(p);
  const nums = ['大吉', '中吉', '末吉', '吉', '凶', '大凶']
  btn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * nums.length);
    p.textContent = nums[index];
    if (p.classList.contains('tl')) {
      p.classList.remove('tl');
    } else {
      p.classList.add('tl');
    }
  });
}