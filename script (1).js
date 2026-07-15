
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabButtons.forEach(b => {
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });

    tabPanels.forEach(panel => {
      const isMatch = panel.id === `panel-${target}`;
      panel.classList.toggle('is-active', isMatch);
      panel.hidden = !isMatch;
    });
  });
});

const viewToggleButtons = document.querySelectorAll('.view-toggle__btn');
const viewPanels = document.querySelectorAll('[data-view-panel]');

viewToggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;

    viewToggleButtons.forEach(b => {
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });

    viewPanels.forEach(panel => {
      const isMatch = panel.dataset.viewPanel === view;
      panel.hidden = !isMatch;
    });
  });
});


function wireToggle(buttonId, targetSelector, expandedLabel, collapsedLabel){
  const button = document.getElementById(buttonId);
  if(!button) return;
  const target = document.querySelector(targetSelector);
  button.addEventListener('click', () => {
    const expanded = target.classList.toggle('is-expanded');
    button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    button.textContent = expanded ? expandedLabel : collapsedLabel;
  });
}

wireToggle('toggleTags', '#industryTags', 'Show less', 'Show more');
wireToggle('toggleChips', '#searchChips', 'Show less', 'Show more');
wireToggle('toggleAbout', '#aboutText', 'Show less', 'Explore more');


const accordionTriggers = document.querySelectorAll('.accordion__trigger');

accordionTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const panel = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    trigger.setAttribute('aria-expanded', (!isOpen).toString());
    panel.hidden = isOpen;
  });
});


function syncTabsBarOffset(){
  const header = document.getElementById('siteHeader');
  const tabsBar = document.getElementById('tabsBar');
  if(header && tabsBar){
    tabsBar.style.top = `${header.offsetHeight}px`;
  }
}
window.addEventListener('resize', syncTabsBarOffset);
window.addEventListener('load', syncTabsBarOffset);
syncTabsBarOffset();
