import { qs, qsAll } from "./function.js";

qsAll('li.hover-menu').forEach(li => {//쓰로틀링 혹은 디바운싱 필요
  li.addEventListener('mouseenter', e => {
    li.classList.add('active');
    let subMenuHeight = li.children[1].offsetHeight;
    const headerNavHeight = qs('ul.header-main').offsetHeight;
    qs('div.sub-background').style.height = subMenuHeight + headerNavHeight + 'px';
});

  li.addEventListener('mouseleave', e => {
    li.classList.remove('active');
    qs('div.sub-background').style.height = '0px';
  });
});


qsAll('li.click-menu').forEach(li => {
  li.children[0].addEventListener('click', e => {
    li.classList.toggle('active');
    let subMenuHeight = li.children[1].offsetHeight;
    const headerNavHeight = qs('ul.header-main').offsetHeight;
    if(qs('div.sub-background').style.height === '' || qs('div.sub-background').style.height === '0px'){
      qs('div.sub-background').style.height = subMenuHeight + headerNavHeight + 'px';
    }else {
      qs('div.sub-background').style.height = '0px'
    }
  });

  li.addEventListener('mouseleave', e => {
    li.classList.remove('active');
    qs('div.sub-background').style.height = '0px';
  });
});