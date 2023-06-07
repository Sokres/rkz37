document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__list-btn');
  const tabsContent = document.querySelectorAll('.tabs__content-item');
  const viewer = document.querySelector('.tabs__list-viewer');
  const tabsWrap = document.querySelector('.tabs__wrap-header');

  if (tabs) {
    viewer.addEventListener('click', () => {
      tabsWrap.classList.toggle('tabs__wrap-header--active');
      viewer.classList.toggle('tabs__list-viewer--active');

    });
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__list-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
        console.log(e.target.textContent);
        viewer.innerText =  e.target.textContent;
        tabsWrap.classList.remove('tabs__wrap-header--active');
        viewer.classList.remove('tabs__list-viewer--active');
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => {el.classList.remove('tabs__content-item--active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content-item--active');
  };
});
