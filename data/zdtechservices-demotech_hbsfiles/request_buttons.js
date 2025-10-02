// request_buttons.js
// Adds two header-styled buttons that route to specific ticket form IDs.
// Behavior: only shows on /hc/.../requests/new when no ticket_form_id is present in the URL.

document.addEventListener('DOMContentLoaded', function () {
  const isLandingPage = window.location.href.includes('/requests/new') && !window.location.href.includes('ticket_form_id');
  if (!isLandingPage) return;

  // Try to find the ticket form dropdown selector that Zendesk injects.
  const formSelector = document.querySelector('.request_ticket_form_id');

  // Create container similar to site spacing
  const container = document.createElement('div');
  container.className = 'flex flex-wrap gap-4';

  // Helper to create a header-styled button (larger, equal-width)
  function createRoleButton(label, iconClass, formId, extraClasses) {
    const btn = document.createElement('button');
    btn.type = 'button';
    // Larger, centered content. We'll control width via container flex-basis.
    btn.className = 'w-full flex flex-col items-center justify-center px-6 py-6 bg-primary text-white rounded-xl text-lg font-semibold hover:opacity-95 ' + (extraClasses || '');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('role', 'button');
    btn.setAttribute('style', 'padding: 0.75rem 1.5rem;')

    // icon container
    const iconWrap = document.createElement('span');
    iconWrap.className = 'mdi ' + iconClass + ' text-3xl';
    iconWrap.setAttribute('aria-hidden', 'true');

    const title = document.createElement('div');
    title.className = 'font-semibold text-base';
    title.textContent = label;

    btn.appendChild(iconWrap);
    btn.appendChild(title);

    btn.addEventListener('click', function () {
      const url = `/hc/en-us/requests/new?ticket_form_id=${encodeURIComponent(formId)}`;
      window.location.href = url;
    });

    return btn;
  }

  // Demo Architect (formId: 9317522572314)
  const architectBtn = createRoleButton('Demo Architecture Requests', 'mdi-account-cog', '9317522572314', '');
  // Demo Engineer (formId: 9312830097690)
  const engineerBtn = createRoleButton('Solution Developer Requests', 'mdi-laptop', '9312830097690', '');

  // Descriptions to display under each button (outside button)
  const architectDesc = 'Shared Demo Accounts, bugs, feedback & recommendations, etc';
  const engineerDesc = 'POC ZAF Apps, Help Center themes, mobile POCs, etc.';

  // Wrap each button + subtitle into a column so they get equal width
  function makeColumn(btn, subtitleText) {
    const col = document.createElement('div');
    // On larger screens we'll give them equal width; on small screens they'll stack
    col.className = 'flex-1 min-w-[260px]';

    const inner = document.createElement('div');
    inner.className = 'flex flex-col items-stretch';

    inner.appendChild(btn);

    const sub = document.createElement('div');
    sub.className = 'mt-3 text-sm text-muted-foreground';
    sub.textContent = subtitleText;

    inner.appendChild(sub);
    col.appendChild(inner);
    return col;
  }

  container.appendChild(makeColumn(architectBtn, architectDesc));
  container.appendChild(makeColumn(engineerBtn, engineerDesc));

  // Insert near the form selector if possible, otherwise prepend to main content
  const dropdownWrapper = formSelector?.parentNode;
  if (dropdownWrapper) {
    dropdownWrapper.appendChild(container);

    // Hide the original ticket form dropdown wrapper so the buttons are the primary choice
    const ticketWrapper = document.querySelector('.form-field.select.optional.request_ticket_form_id');
    if (ticketWrapper) ticketWrapper.style.display = 'none';
  } else {
    const main = document.querySelector('#main-content') || document.querySelector('main') || document.body;
    // place after the page title if possible
    const heading = main.querySelector('h1');
    if (heading && heading.parentNode) {
      heading.parentNode.insertBefore(container, heading.nextSibling);
    } else {
      main.insertBefore(container, main.firstChild);
    }
  }
});