/* ============================================================
   G.R.A.C.E PORTAL — Main JavaScript
   ERD-Aligned | Team Thriv3 | IT 116
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  injectSidebar();   // Inject ERD-aligned sidebar before anything else
  initNavbar();
  initScrollAnimations();
  initCounterAnimations();
  initScrollToTop();
  initTabs();
  initSidebar();
  initFormWizard();
  initSearchFilter();
  initViewToggle();
  initTimeDisplay();
  initDropdowns();
  initModalTriggers();
  initRoleUI();
});

/* ==========  DYNAMIC SIDEBAR INJECTION  ========== */
function injectSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const role = localStorage.getItem('graceRole') || 'proponent';
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // 6 portal roles per proposal — correctly named personas
  const roleMap = {
    admin:       { name: 'Prince Jheck T. Juan',     initials: 'PJ', label: 'System Administrator',          workspace: 'ADMIN WORKSPACE',       code: 'CCMS-ADMIN' },
    coordinator: { name: 'Crystelle A. Villanueva',  initials: 'CV', label: 'Extension Coordinator',         workspace: 'COORDINATOR WORKSPACE', code: 'CCMS-COORD' },
    proponent:   { name: 'Lei-anne C. Araña',        initials: 'LA', label: 'Project Proponent',             workspace: 'PROPONENT WORKSPACE',   code: 'CCMS-PROP' },
    dean:        { name: 'Mary Grace Bolos',         initials: 'MB', label: 'Dean / Director',               workspace: 'DEAN WORKSPACE',        code: 'CCMS-DEAN' },
    vpre:        { name: 'Arthur Gonzales',          initials: 'AG', label: 'VP for Research & Extension',   workspace: 'VPRE / OVPRE WORKSPACE', code: 'CCMS-VPRE' },
    assistant:   { name: 'Ana Dela Rosa',            initials: 'AD', label: 'Assistant Extension Officer',   workspace: 'ASST. EXT. WORKSPACE',  code: 'CCMS-ASST' }
  };
  const user = roleMap[role] || roleMap['proponent'];

  function navItem(href, icon, label, badge) {
    const isActive = currentPage === href ? ' active' : '';
    const badgeHtml = badge ? `<span class="nav-badge${badge === 'notif' ? ' notif' : ''}">${badge}</span>` : '';
    return `<a href="${href}" class="sidebar-nav-item${isActive}"><span class="nav-icon"><i class="fas ${icon}"></i></span><span>${label}</span>${badgeHtml}</a>`;
  }

  // Role-based nav items — per proposal Section VI (6 portal roles)
  let navHTML = '';
  if (role === 'proponent') {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',        'Dashboard')}
      <div class="sidebar-nav-label">MY PROPOSALS</div>
      ${navItem('proposals.html',     'fa-file-alt',        'My Proposals')}
      ${navItem('project-form.html',  'fa-plus-circle',     'Submit Proposal')}
      <div class="sidebar-nav-label">ACTIVE PROJECTS</div>
      ${navItem('projects.html',      'fa-project-diagram', 'Projects')}
      ${navItem('activities.html',    'fa-calendar-check',  'Activities & Training')}
      ${navItem('beneficiaries.html', 'fa-users',           'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',       'Partners')}
      ${navItem('participation.html', 'fa-id-badge',        'Participation')}
      <div class="sidebar-nav-label">DOCUMENTATION</div>
      ${navItem('documents.html',     'fa-folder-open',     'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',       'Reports')}
      ${navItem('completion.html',    'fa-check-circle',    'Completion')}
      ${navItem('survey.html',        'fa-poll',            'Client Satisfaction')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html', 'fa-bell',            'Notifications', '2')}
      <a href="#" class="sidebar-nav-item"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>My Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>Logout</span></a>
    `;
  } else if (role === 'coordinator') {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',        'Dashboard')}
      <div class="sidebar-nav-label">PROPOSAL MANAGEMENT</div>
      ${navItem('proposals.html',     'fa-file-alt',        'Proposals', '2')}
      ${navItem('approvals.html',     'fa-clipboard-check', 'Approval Tracking', '1')}
      <div class="sidebar-nav-label">PROJECT MANAGEMENT</div>
      ${navItem('projects.html',      'fa-project-diagram', 'Projects')}
      ${navItem('activities.html',    'fa-calendar-check',  'Activities & Training')}
      ${navItem('beneficiaries.html', 'fa-users',           'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',       'Partners')}
      ${navItem('participation.html', 'fa-id-badge',        'Participation Records')}
      <div class="sidebar-nav-label">RESOURCES & REPORTING</div>
      ${navItem('funding.html',       'fa-coins',           'Funding Monitor')}
      ${navItem('documents.html',     'fa-folder-open',     'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',       'Reports')}
      ${navItem('completion.html',    'fa-check-circle',    'Completion')}
      ${navItem('survey.html',        'fa-poll',            'Client Satisfaction')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html', 'fa-bell',            'Notifications', '3')}
      <a href="#" class="sidebar-nav-item"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>My Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>Logout</span></a>
    `;
  } else if (role === 'dean') {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',        'Dashboard')}
      <div class="sidebar-nav-label">REVIEW & ENDORSEMENT</div>
      ${navItem('proposals.html',     'fa-file-alt',        'Proposals for Review', '2')}
      ${navItem('approvals.html',     'fa-clipboard-check', 'Endorsement Actions', '2')}
      <div class="sidebar-nav-label">PROJECT OVERVIEW</div>
      ${navItem('projects.html',      'fa-project-diagram', 'Projects Overview')}
      ${navItem('documents.html',     'fa-folder-open',     'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',       'Reports')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html', 'fa-bell',            'Notifications', '2')}
      <a href="#" class="sidebar-nav-item"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>My Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>Logout</span></a>
    `;
  } else if (role === 'vpre') {
    // VPRE: full OVPRE-level review, eligibility, compliance, Technical Evaluation, institutional processing
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',        'Dashboard')}
      <div class="sidebar-nav-label">OVPRE PROCESSING</div>
      ${navItem('proposals.html',     'fa-file-alt',        'Proposals Queue', '3')}
      ${navItem('approvals.html',     'fa-clipboard-check', 'Approval Pipeline', '2')}
      <div class="sidebar-nav-label">PROJECT MONITORING</div>
      ${navItem('projects.html',      'fa-project-diagram', 'All Projects')}
      ${navItem('activities.html',    'fa-calendar-check',  'Activities')}
      ${navItem('beneficiaries.html', 'fa-users',           'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',       'Partners')}
      <div class="sidebar-nav-label">RESOURCES & REPORTING</div>
      ${navItem('funding.html',       'fa-coins',           'Funding Monitor')}
      ${navItem('documents.html',     'fa-folder-open',     'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',       'Reports')}
      ${navItem('completion.html',    'fa-check-circle',    'Completion')}
      ${navItem('survey.html',        'fa-poll',            'Client Satisfaction')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html', 'fa-bell',            'Notifications', '4')}
      <a href="#" class="sidebar-nav-item"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>My Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>Logout</span></a>
    `;
  } else if (role === 'assistant') {
    // Assistant Extension Officer: coordination, status recording, compliance support, docs
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',        'Dashboard')}
      <div class="sidebar-nav-label">COORDINATION</div>
      ${navItem('proposals.html',     'fa-file-alt',        'Proposals', '1')}
      ${navItem('approvals.html',     'fa-clipboard-check', 'Status Tracking')}
      <div class="sidebar-nav-label">PROJECT SUPPORT</div>
      ${navItem('projects.html',      'fa-project-diagram', 'Projects')}
      ${navItem('activities.html',    'fa-calendar-check',  'Activities')}
      ${navItem('beneficiaries.html', 'fa-users',           'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',       'Partners')}
      ${navItem('participation.html', 'fa-id-badge',        'Participation')}
      <div class="sidebar-nav-label">DOCUMENTATION</div>
      ${navItem('funding.html',       'fa-coins',           'Funding Info')}
      ${navItem('documents.html',     'fa-folder-open',     'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',       'Reports')}
      ${navItem('completion.html',    'fa-check-circle',    'Completion')}
      ${navItem('survey.html',        'fa-poll',            'Client Satisfaction')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html', 'fa-bell',            'Notifications', '2')}
      <a href="#" class="sidebar-nav-item"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>My Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>Logout</span></a>
    `;
  } else {
    // admin (default fallback) — full access + system admin panel
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',        'Dashboard')}
      <div class="sidebar-nav-label">PROPOSAL MANAGEMENT</div>
      ${navItem('proposals.html',     'fa-file-alt',        'Proposals', '2')}
      ${navItem('approvals.html',     'fa-clipboard-check', 'Approvals', '1')}
      <div class="sidebar-nav-label">PROJECT MANAGEMENT</div>
      ${navItem('projects.html',      'fa-project-diagram', 'Projects')}
      ${navItem('activities.html',    'fa-calendar-check',  'Activities')}
      ${navItem('beneficiaries.html', 'fa-users',           'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',       'Partners')}
      ${navItem('participation.html', 'fa-id-badge',        'Participation')}
      <div class="sidebar-nav-label">RESOURCES & REPORTING</div>
      ${navItem('funding.html',       'fa-coins',           'Funding')}
      ${navItem('documents.html',     'fa-folder-open',     'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',       'Reports')}
      ${navItem('completion.html',    'fa-check-circle',    'Completion')}
      ${navItem('survey.html',        'fa-poll',            'Satisfaction')}
      <div class="sidebar-nav-label">SYSTEM</div>
      ${navItem('admin.html',         'fa-cog',             'Admin Panel')}
      ${navItem('notifications.html', 'fa-bell',            'Notifications', '2')}
      <a href="#" class="sidebar-nav-item"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>Admin Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>Logout</span></a>
    `;
  }


  sidebar.innerHTML = `
    <div class="sidebar-header">
      <div class="sidebar-workspace-badge">${user.workspace}</div>
      <div class="sidebar-code-badge">${user.code}</div>
    </div>
    <nav class="sidebar-nav">
      ${navHTML}
    </nav>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="sidebar-avatar">${user.initials}</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${user.name.split(' ').slice(0,3).join(' ')}</div>
          <div class="sidebar-user-role">● ${user.label}</div>
        </div>
      </div>
    </div>`;

  // Inject Figma-style top portal header bar
  const topbar = document.querySelector('.topbar');
  if (topbar) {
    topbar.innerHTML = `
      <div class="topbar-brand">
        <button class="sidebar-toggle" id="sidebar-toggle" style="background:none;border:none;cursor:pointer;margin-right:0.75rem;color:inherit;">
          <i class="fas fa-bars" style="font-size:1rem;color:#6B7280;"></i>
        </button>
        <div class="topbar-logo-mark">GP</div>
        <div class="topbar-brand-text">
          <span class="topbar-brand-name">CCMS G.R.A.C.E. PORTAL</span>
          <span class="topbar-brand-tagline">Gateway for Responsive Academic Community Extension • University of Camarines Norte</span>
        </div>
        <span class="topbar-node-badge">UCN NODE</span>
      </div>
      <div class="topbar-center">
        <span class="topbar-semester">A.Y. 2026–2027 • 1st Semester</span>
      </div>
      <div class="topbar-right">
        <button class="topbar-icon-btn" title="Notifications"><i class="fas fa-bell"></i><span class="notif-dot"></span></button>
        <div class="topbar-user" id="topbar-user-menu">
          <div class="topbar-user-avatar">${user.initials}</div>
          <div class="topbar-user-details">
            <span class="topbar-user-name">${user.name}</span>
            <span class="topbar-user-role">● ${user.label}</span>
          </div>
          <span class="topbar-user-chevron"><i class="fas fa-chevron-down"></i></span>
        </div>
      </div>`;
  }
}

/* ==========  NAVBAR  ========== */
function initNavbar() {
  const toggle = document.querySelector('.navbar-toggle');
  const nav = document.querySelector('.navbar-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // Close nav when clicking a link (mobile)
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggle.classList.remove('active');
          nav.classList.remove('open');
        }
      });
    });
  }

  // Sticky navbar shadow
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

/* ==========  SCROLL ANIMATIONS  ========== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ==========  COUNTER ANIMATIONS  ========== */
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-counter'));
  const suffix = element.getAttribute('data-suffix') || '';
  const prefix = element.getAttribute('data-prefix') || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.floor(eased * target);

    element.textContent = prefix + current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ==========  SCROLL TO TOP  ========== */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========  TABS  ========== */
function initTabs() {
  const tabGroups = document.querySelectorAll('[data-tabs]');

  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const panels = group.querySelectorAll('.tab-panel');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');

        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPanel = group.querySelector(`#${targetId}`);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  });
}

/* ==========  SIDEBAR  ========== */
function initSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const mainContent = document.querySelector('.main-content');

  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      sidebar.classList.toggle('mobile-open');
    } else {
      sidebar.classList.toggle('collapsed');
      if (mainContent) mainContent.classList.toggle('expanded');
    }
  });

  // Close sidebar on mobile when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992 &&
        sidebar.classList.contains('mobile-open') &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // Set active nav item
  const navItems = sidebar.querySelectorAll('.sidebar-nav-item');
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage)) {
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    }
  });
}

/* ==========  MULTI-STEP FORM WIZARD  ========== */
function initFormWizard() {
  const wizard = document.querySelector('.form-wizard');
  if (!wizard) return;

  const steps = wizard.querySelectorAll('.wizard-step');
  const stepperCircles = wizard.querySelectorAll('.step');
  const nextBtns = wizard.querySelectorAll('[data-wizard-next]');
  const prevBtns = wizard.querySelectorAll('[data-wizard-prev]');
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });

    stepperCircles.forEach((circle, i) => {
      circle.classList.remove('active', 'completed');
      if (i < index) circle.classList.add('completed');
      if (i === index) circle.classList.add('active');
    });

    // Update buttons
    prevBtns.forEach(btn => {
      btn.style.visibility = index === 0 ? 'hidden' : 'visible';
    });

    nextBtns.forEach(btn => {
      btn.textContent = index === steps.length - 1 ? '✓ Submit Project' : 'Next Step →';
    });
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      } else {
        // Submit action
        showNotification('Project submitted successfully!', 'success');
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  showStep(0);
}

/* ==========  SEARCH & FILTER  ========== */
function initSearchFilter() {
  const searchInputs = document.querySelectorAll('[data-search-target]');

  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const targetSelector = input.getAttribute('data-search-target');
      const items = document.querySelectorAll(targetSelector);

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });

  // Status filter
  const statusFilters = document.querySelectorAll('[data-filter-status]');
  statusFilters.forEach(filter => {
    filter.addEventListener('change', (e) => {
      const status = e.target.value;
      const targetSelector = filter.getAttribute('data-filter-status');
      const items = document.querySelectorAll(targetSelector);

      items.forEach(item => {
        if (!status || status === 'all') {
          item.style.display = '';
        } else {
          const itemStatus = item.getAttribute('data-status');
          item.style.display = itemStatus === status ? '' : 'none';
        }
      });
    });
  });
}

/* ==========  VIEW TOGGLE  ========== */
function initViewToggle() {
  const toggles = document.querySelectorAll('.view-toggle');

  toggles.forEach(toggle => {
    const buttons = toggle.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const view = btn.getAttribute('data-view');
        const grid = document.querySelector('.projects-grid');

        if (grid && view === 'list') {
          grid.style.gridTemplateColumns = '1fr';
        } else if (grid) {
          grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(340px, 1fr))';
        }
      });
    });
  });
}

/* ==========  TIME DISPLAY  ========== */
function initTimeDisplay() {
  const timeEl = document.querySelector('.time-display');
  if (!timeEl) return;

  function updateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    timeEl.textContent = 'Philippine Standard Time: ' + now.toLocaleDateString('en-US', options);
  }

  updateTime();
  setInterval(updateTime, 60000);
}

/* ==========  DROPDOWNS  ========== */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (!toggle) return;

    // For touch devices
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');

        // Close other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove('active');
        });
      }
    });
  });

  // Close dropdowns on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  });
}

/* ==========  MODALS  ========== */
function initModalTriggers() {
  const triggers = document.querySelectorAll('[data-modal]');
  const closeButtons = document.querySelectorAll('.modal-close, [data-modal-close]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      const backdrop = document.querySelector('.modal-backdrop');
      if (modal) modal.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
    });
  });

  // Close on backdrop click
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
      backdrop.classList.remove('active');
    });
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.querySelector('.modal-backdrop');

  if (modal) modal.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}

/* ==========  NOTIFICATIONS  ========== */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `toast-notification toast-${type}`;
  notification.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span class="toast-message">${message}</span>
  `;

  // Style
  Object.assign(notification.style, {
    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',
    padding: '0.85rem 1.5rem',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    zIndex: '9999',
    animation: 'slideDown 0.3s ease, fadeIn 0.3s ease',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    fontFamily: "'Inter', sans-serif"
  });

  if (type === 'success') {
    notification.style.background = '#059669';
    notification.style.color = '#fff';
  } else if (type === 'error') {
    notification.style.background = '#DC2626';
    notification.style.color = '#fff';
  } else {
    notification.style.background = '#3B82F6';
    notification.style.color = '#fff';
  }

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-10px)';
    notification.style.transition = '0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

/* ==========  PAGINATION (Simple Client-Side)  ========== */
function initPagination(containerId, itemsPerPage = 10) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const rows = Array.from(container.querySelectorAll('tbody tr'));
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    rows.forEach((row, index) => {
      row.style.display = (index >= start && index < end) ? '' : 'none';
    });

    // Update pagination buttons
    const paginationEl = container.querySelector('.pagination');
    if (paginationEl) {
      paginationEl.querySelectorAll('.page-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
      });
    }

    // Update info
    const infoEl = container.querySelector('.table-info');
    if (infoEl) {
      infoEl.textContent = `Showing ${start + 1}-${Math.min(end, rows.length)} of ${rows.length} entries`;
    }
  }

  showPage(1);

  // Bind pagination clicks
  const paginationEl = container.querySelector('.pagination');
  if (paginationEl) {
    paginationEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.page-btn');
      if (!btn) return;

      const page = parseInt(btn.dataset.page);
      if (page && page >= 1 && page <= totalPages) {
        currentPage = page;
        showPage(currentPage);
      }
    });
  }
}

/* ==========  ROLE-BASED UI RENDERING  ========== */
function initRoleUI() {
  const role = localStorage.getItem('graceRole') || 'admin';
  const isLoggedIn = localStorage.getItem('graceLoggedIn') === 'true';
  
  // Protect dashboard routes
  const currentPath = window.location.pathname.split('/').pop() || '';
  const isPublicPage = currentPath === 'index.html' || currentPath === 'login.html' || currentPath === '';
  
  if (!isLoggedIn && !isPublicPage) {
    window.location.href = 'login.html';
    return;
  }
  
  if (!isPublicPage) {
    // Determine user info based on role
    let userName = 'Prince Jheck';
    let userInitials = 'PJ';
    let userRoleStr = 'Administrator';
    
    if (role === 'coordinator') {
      userName = 'Crystelle V.';
      userInitials = 'CV';
      userRoleStr = 'Extension Coordinator';
    } else if (role === 'proponent') {
      userName = 'Lei-anne A.';
      userInitials = 'LA';
      userRoleStr = 'Project Proponent';
    } else if (role === 'dean') {
      userName = 'Mary Grace B.';
      userInitials = 'MB';
      userRoleStr = 'College Dean';
    }
    // ========== OVPRE USER INFORMATION ADDED ==========
    else if (role === 'ovpre') {
      userName = 'OVPRE Administrator';
      userInitials = 'OV';
      userRoleStr = 'OVPRE Administrator';
    }
    
    // Update sidebar user info
    const sidebarAvatar = document.querySelector('.sidebar-avatar');
    const sidebarName = document.querySelector('.sidebar-user-name');
    const sidebarRole = document.querySelector('.sidebar-user-role');
    
    if (sidebarAvatar) sidebarAvatar.textContent = userInitials;
    if (sidebarName) sidebarName.textContent = userName;
    if (sidebarRole) sidebarRole.textContent = userRoleStr;
    
    // Update topbar user info
    const topbarAvatar = document.querySelector('.topbar-user-avatar');
    const topbarName = document.querySelector('.topbar-user-name');
    
    if (topbarAvatar) topbarAvatar.textContent = userInitials;
    if (topbarName) topbarName.textContent = userName;
    
    // Hide restricted nav items
    if (role !== 'admin' && role !== 'ovpre') {
      const adminNavs = document.querySelectorAll('.sidebar-nav-item[data-role="admin"], .sidebar-nav-item[href="admin.html"]');
      adminNavs.forEach(nav => nav.style.display = 'none');
    }
    
    if (role === 'proponent') {
      // Proponents might not see funding details or system reports depending on design, 
      // but hiding admin is the main requirement.
      const restrictedNavs = document.querySelectorAll('.sidebar-nav-item[href="funding.html"]');
      restrictedNavs.forEach(nav => nav.style.display = 'none');
    }

    // ========== OVPRE ADMIN NAVIGATION ACCESS ADDED ==========
    if (role === 'ovpre') {
      // OVPRE uses the same system-level navigation as the Admin sidebar.
      // Restore Admin Panel visibility because the OVPRE sidebar is intentionally
      // rendered with the Admin navigation structure.
      const ovpreAdminNavs = document.querySelectorAll('.sidebar-nav-item[href="admin.html"]');
      ovpreAdminNavs.forEach(nav => nav.style.display = '');

      // Restore global operational navigation for OVPRE.
      const ovpreGlobalNavs = document.querySelectorAll(
        '.sidebar-nav-item[href="proposals.html"],' +
        '.sidebar-nav-item[href="approvals.html"],' +
        '.sidebar-nav-item[href="projects.html"],' +
        '.sidebar-nav-item[href="activities.html"],' +
        '.sidebar-nav-item[href="beneficiaries.html"],' +
        '.sidebar-nav-item[href="partners.html"],' +
        '.sidebar-nav-item[href="funding.html"],' +
        '.sidebar-nav-item[href="documents.html"],' +
        '.sidebar-nav-item[href="reports.html"],' +
        '.sidebar-nav-item[href="completion.html"],' +
        '.sidebar-nav-item[href="survey.html"]'
      );

      ovpreGlobalNavs.forEach(nav => nav.style.display = '');
    }

    // Role-specific Dashboard Content (Only runs on dashboard.html)
    if (currentPath === 'dashboard.html' || currentPath === 'dashboard.html#') {
      if (role === 'proponent') {
        // 1. Top Row Stats
        const topCards = document.querySelectorAll('.summary-cards:first-of-type .summary-card-info');
        if (topCards.length >= 4) {
          topCards[0].querySelector('h3').textContent = '4';
          topCards[0].querySelector('p').textContent = 'My Proposals';
          topCards[0].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-arrow-up"></i> 1 new this semester';
          
          topCards[1].querySelector('h3').textContent = '2';
          topCards[1].querySelector('p').textContent = 'Active Projects';
          topCards[1].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-arrow-up"></i> 1 ongoing';
          
          topCards[2].querySelector('h3').textContent = '1';
          topCards[2].querySelector('p').textContent = 'Pending Approval';
          topCards[2].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-clock"></i> In Review';
          
          topCards[3].querySelector('h3').textContent = '1';
          topCards[3].querySelector('p').textContent = 'Completed';
          topCards[3].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-check"></i> Last year';
        }

        // 2. Secondary Row Stats
        const secCards = document.querySelectorAll('.summary-cards:nth-of-type(2) .summary-card-info');
        if (secCards.length >= 4) {
          secCards[0].querySelector('h3').textContent = '3';
          secCards[0].querySelector('p').textContent = 'My Activities';
          secCards[0].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-calendar"></i> This month';

          secCards[1].querySelector('h3').textContent = '120';
          secCards[1].querySelector('p').textContent = 'Target Beneficiaries';
          secCards[1].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-users"></i> Across 2 projects';

          secCards[2].querySelector('h3').textContent = '8';
          secCards[2].querySelector('p').textContent = 'Documents Uploaded';
          secCards[2].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-arrow-up"></i> 2 this week';

          secCards[3].querySelector('h3').textContent = '4.8';
          secCards[3].querySelector('p').textContent = 'Avg. Satisfaction';
          secCards[3].querySelector('.summary-card-trend').innerHTML = '<i class="fas fa-star"></i> out of 5.0';
        }

        // 3. Table Rows
        const tableRows = document.querySelectorAll('.table-container tbody tr');
        if (tableRows.length >= 5) {
          tableRows[1].style.display = 'none'; // Basud Library
          tableRows[2].style.display = 'none'; // DOST
          tableRows[3].style.display = 'none'; // Brgy. Lag-on
        }

        // 4. Quick Actions
        const quickActions = document.querySelectorAll('.quick-action-btn');
        if (quickActions.length >= 6) {
          quickActions[2].style.display = 'none'; // Generate Report
          quickActions[4].style.display = 'none'; // Check Funding
          quickActions[5].style.display = 'none'; // Client Survey
        }

        // 5. Hide Global Pipeline & Funding
        const globalSection = document.querySelector('.dashboard-grid-equal');
        if (globalSection) {
          globalSection.style.display = 'none';
        }

        // 6. Timeline
        const timelines = document.querySelectorAll('.timeline-item');
        if (timelines.length >= 4) {
          timelines[1].style.display = 'none'; // Funding verified
          timelines[2].style.display = 'none'; // Marked complete
          timelines[3].style.display = 'none'; // New proposal submitted
        }
      } else if (role === 'coordinator') {
        // Extension Coordinator sees global stats, but hide Proposal creation action to differentiate slightly
        const quickActions = document.querySelectorAll('.quick-action-btn');
        if (quickActions.length >= 6) {
           quickActions[0].style.display = 'none'; // New Proposal
        }
      } else if (role === 'dean') {
        // Dean sees high-level overview, hide operational quick actions
        const quickActions = document.querySelectorAll('.quick-action-btn');
        if (quickActions.length >= 6) {
           quickActions[0].style.display = 'none'; // New Proposal
           quickActions[1].style.display = 'none'; // Log Activity
           quickActions[2].style.display = 'none'; // Upload Doc
        }
      }

      /* ============================================================
         OVPRE GLOBAL DASHBOARD STATISTICS
         OVPRE is granted global dashboard visibility similar to Admin.
         This block intentionally does not hide global statistics,
         pipeline information, funding information, or timeline entries.
         ============================================================ */
      if (role === 'ovpre') {
        // 1. Ensure all dashboard summary cards are visible.
        const ovpreSummaryCards = document.querySelectorAll('.summary-card');
        ovpreSummaryCards.forEach(card => {
          card.style.display = '';
        });

        // 2. Ensure both summary-card groups are visible.
        const ovpreSummaryGroups = document.querySelectorAll('.summary-cards');
        ovpreSummaryGroups.forEach(group => {
          group.style.display = '';
        });

        // 3. Ensure global pipeline and funding sections are visible.
        const ovpreGlobalSection = document.querySelector('.dashboard-grid-equal');
        if (ovpreGlobalSection) {
          ovpreGlobalSection.style.display = '';
        }

        // 4. Ensure dashboard tables remain visible for global monitoring.
        const ovpreTableContainers = document.querySelectorAll('.table-container');
        ovpreTableContainers.forEach(table => {
          table.style.display = '';
        });

        // 5. Ensure all dashboard timeline entries remain visible.
        const ovpreTimelines = document.querySelectorAll('.timeline-item');
        ovpreTimelines.forEach(timeline => {
          timeline.style.display = '';
        });

        // 6. Ensure global quick actions are available.
        const ovpreQuickActions = document.querySelectorAll('.quick-action-btn');
        ovpreQuickActions.forEach(action => {
          action.style.display = '';
        });

        // 7. Restore all global navigation-related dashboard elements.
        const ovpreDashboardSections = document.querySelectorAll(
          '.dashboard-grid,' +
          '.dashboard-grid-equal,' +
          '.summary-cards,' +
          '.summary-card,' +
          '.timeline,' +
          '.timeline-container'
        );

        ovpreDashboardSections.forEach(section => {
          section.style.display = '';
        });

        // 8. Mark the dashboard as using global statistics for OVPRE.
        document.body.setAttribute('data-role', 'ovpre');
        document.body.setAttribute('data-dashboard-scope', 'global');

        // 9. Add a global statistics indicator when a matching dashboard
        // element exists. This does not replace existing dashboard content.
        const globalStatsLabels = document.querySelectorAll(
          '.dashboard-title,' +
          '.page-title,' +
          '.section-title'
        );

        globalStatsLabels.forEach(label => {
          if (
            label.textContent &&
            (
              label.textContent.toLowerCase().includes('dashboard') ||
              label.textContent.toLowerCase().includes('statistics') ||
              label.textContent.toLowerCase().includes('overview')
            )
          ) {
            label.setAttribute('data-ovpre-global-statistics', 'true');
          }
        });

        // 10. Ensure hidden global cards from other role-specific
        // dashboard logic are restored when OVPRE is the active role.
        const ovpreHiddenCards = document.querySelectorAll(
          '.summary-card-info,' +
          '.summary-card-trend'
        );

        ovpreHiddenCards.forEach(cardElement => {
          cardElement.style.display = '';
        });
      }
    }
  }
}

/* ==========  SYSTEM ADMIN BACKUP & RESTORE  ========== */
function exportDatabaseBackup() {
  if (!window.GRACE) {
    showNotification('Error: Database not found.', 'error');
    return;
  }
  const dataStr = JSON.stringify(window.GRACE, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  const exportFileDefaultName = `grace_backup_${new Date().toISOString().split('T')[0]}.json`;

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
  showNotification('Database backup exported successfully.', 'success');
}

function importDatabaseRestore(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (importedData && importedData.system && importedData.system.name === 'G.R.A.C.E PORTAL') {
        window.GRACE = importedData;
        showNotification('System state restored successfully! Please refresh.', 'success');
        // Optionally refresh the page after a brief timeout
        setTimeout(() => window.location.reload(), 2000);
      } else {
        showNotification('Invalid backup file format.', 'error');
      }
    } catch (error) {
      showNotification('Error reading backup file.', 'error');
    }
  };
  reader.readAsText(file);
}