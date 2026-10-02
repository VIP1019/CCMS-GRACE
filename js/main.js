/* ============================================================
   G.R.A.C.E PORTAL — Main JavaScript
   ERD-Aligned | Team Thriv3 | IT 116
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  injectSidebar();   // Inject ERD-aligned sidebar before anything else
  injectProfileModal(); // Inject global user profile modal after sidebar injection
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

  // Role-based user config
  const roleMap = {
    admin:       { name: 'Prince Jheck T. Juan',    initials: 'PJ', label: 'System Administrator',           workspace: 'ADMIN WORKSPACE',       code: 'CCMS-ADM' },
    coordinator: { name: 'Crystelle A. Villanueva', initials: 'CV', label: 'Extension Coordinator',          workspace: 'COORDINATOR WORKSPACE', code: 'CCMS-COORD' },
    proponent:   { name: 'Dr. Mary Grace Bolos',    initials: 'MB', label: 'Project Proponent',              workspace: 'PROPONENT WORKSPACE',   code: 'CCMS-EXT' },
    dean:        { name: 'Mary Grace Bolos',        initials: 'MB', label: 'College Dean',                   workspace: 'DEAN WORKSPACE',        code: 'CCMS-DEAN' },
    ovpre:       { name: 'OVPRE Administrator',     initials: 'OV', label: 'OVPRE Administrator',             workspace: 'OVPRE WORKSPACE',       code: 'CCMS-OVPRE' },
    vpre:        { name: 'OVPRE Administrator',     initials: 'OV', label: 'OVPRE Administrator',             workspace: 'OVPRE WORKSPACE',       code: 'CCMS-OVPRE' },
    assistant:   { name: 'Ana Dela Rosa',           initials: 'AD', label: 'Asst. Extension Officer',         workspace: 'ASST EXT WORKSPACE',    code: 'CCMS-AEXT' }
  };
  const user = roleMap[role] || roleMap['proponent'];

  function navItem(href, icon, label, badge) {
    const isActive = currentPage === href ? ' active' : '';
    const badgeHtml = badge ? `<span class="nav-badge${badge === 'notif' ? ' notif' : ''}">${badge}</span>` : '';
    return `<a href="${href}" class="sidebar-nav-item${isActive}"><span class="nav-icon"><i class="fas ${icon}"></i></span><span>${label}</span>${badgeHtml}</a>`;
  }

  // Role-based nav items per Figma
  let navHTML = '';
  if (role === 'proponent') {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',         'Dashboard')}
      ${navItem('proposals.html',     'fa-file-alt',         'Proposals')}
      ${navItem('projects.html',      'fa-project-diagram',  'Projects')}
      ${navItem('activities.html',    'fa-calendar-check',   'Activities')}
      ${navItem('beneficiaries.html', 'fa-users',            'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',        'Partners')}
      ${navItem('project-teams.html', 'fa-id-badge',         'Project Teams')}
      ${navItem('funding.html',       'fa-coins',            'Funding')}
      ${navItem('documents.html',     'fa-folder-open',      'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',        'Reports')}
      ${navItem('completion.html',    'fa-check-circle',     'Completion')}
      ${navItem('survey.html',        'fa-poll',             'Satisfaction')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html','fa-bell',             'Notifications', '2')}
      <a href="#" class="sidebar-nav-item" onclick="openModal('profile-modal'); return false;"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>Proponent Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>System Logout</span></a>
    `;
  } else if (role === 'coordinator') {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',         'Dashboard')}
      ${navItem('proposals.html',     'fa-file-alt',         'Proposals', '2')}
      ${navItem('approvals.html',     'fa-clipboard-check',  'Approvals', '1')}
      ${navItem('projects.html',      'fa-project-diagram',  'Projects')}
      ${navItem('activities.html',    'fa-calendar-check',   'Activities')}
      ${navItem('beneficiaries.html', 'fa-users',            'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',        'Partners')}
      ${navItem('funding.html',       'fa-coins',            'Funding')}
      ${navItem('documents.html',     'fa-folder-open',      'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',        'Reports')}
      ${navItem('completion.html',    'fa-check-circle',     'Completion')}
      ${navItem('survey.html',        'fa-poll',             'Satisfaction')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html','fa-bell',             'Notifications', '3')}
      <a href="#" class="sidebar-nav-item" onclick="openModal('profile-modal'); return false;"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>Officer Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>System Logout</span></a>
    `;
  } else if (role === 'dean') {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',         'Dashboard')}
      ${navItem('approvals.html',     'fa-clipboard-check',  'Approvals', '1')}
      ${navItem('projects.html',      'fa-project-diagram',  'Projects')}
      ${navItem('reports.html',       'fa-chart-bar',        'Reports')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html','fa-bell',             'Notifications', '1')}
      <a href="#" class="sidebar-nav-item" onclick="openModal('profile-modal'); return false;"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>Dean Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>System Logout</span></a>
    `;
  // ========== VPRE SIDEBAR ==========
  } else if (role === 'vpre' || role === 'ovpre') {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',         'Dashboard')}
      ${navItem('approvals.html',     'fa-clipboard-check',  'Approvals', '1')}
      ${navItem('projects.html',      'fa-project-diagram',  'Projects')}
      ${navItem('funding.html',       'fa-coins',            'Funding')}
      ${navItem('documents.html',     'fa-folder-open',      'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',        'Reports')}
      ${navItem('completion.html',    'fa-check-circle',     'Completion')}
      ${navItem('survey.html',        'fa-poll',             'Satisfaction')}
      <div class="sidebar-nav-label">SYSTEM</div>
      ${navItem('admin.html',         'fa-cog',              'Admin Panel')}
      ${navItem('notifications.html','fa-bell',             'Notifications', '2')}
      <a href="#" class="sidebar-nav-item" onclick="openModal('profile-modal'); return false;"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>Officer Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>System Logout</span></a>
    `;
  // ========== ASSISTANT EXTENSION OFFICER SIDEBAR ==========
  } else if (role === 'assistant') {
    navHTML = `
      ${navItem('dashboard.html',          'fa-th-large',         'Dashboard')}
      ${navItem('asst-workqueue.html',      'fa-tasks',            'My Work Queue', '3')}
      <div class="sidebar-nav-label">OPERATIONS</div>
      ${navItem('projects.html',            'fa-project-diagram',  'Projects')}
      ${navItem('asst-compliance.html',     'fa-shield-alt',       'Compliance')}
      ${navItem('documents.html',           'fa-folder-open',      'Documents')}
      ${navItem('asst-communications.html', 'fa-comments',         'Communications')}
      ${navItem('asst-status.html',         'fa-route',            'Status Updates')}
      <div class="sidebar-nav-label">REPORTING</div>
      ${navItem('reports.html',             'fa-chart-bar',        'Reports')}
      <div class="sidebar-nav-label">USER ACCOUNT</div>
      ${navItem('notifications.html',       'fa-bell',             'Notifications', '2')}
      <a href="#" class="sidebar-nav-item" onclick="openModal('profile-modal'); return false;"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>My Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>System Logout</span></a>
    `;
  } else {
    navHTML = `
      ${navItem('dashboard.html',     'fa-th-large',         'Dashboard')}
      ${navItem('proposals.html',     'fa-file-alt',         'Proposals', '2')}
      ${navItem('approvals.html',     'fa-clipboard-check',  'Approvals', '1')}
      ${navItem('projects.html',      'fa-project-diagram',  'Projects')}
      ${navItem('activities.html',    'fa-calendar-check',   'Activities')}
      ${navItem('beneficiaries.html', 'fa-users',            'Beneficiaries')}
      ${navItem('partners.html',      'fa-handshake',        'Partners')}
      ${navItem('funding.html',       'fa-coins',            'Funding')}
      ${navItem('documents.html',     'fa-folder-open',      'Documents')}
      ${navItem('reports.html',       'fa-chart-bar',        'Reports')}
      ${navItem('completion.html',    'fa-check-circle',     'Completion')}
      ${navItem('survey.html',        'fa-poll',             'Satisfaction')}
      <div class="sidebar-nav-label">SYSTEM</div>
      ${navItem('admin.html',         'fa-cog',              'Admin Panel')}
      ${navItem('notifications.html','fa-bell',             'Notifications', '2')}
      <a href="#" class="sidebar-nav-item" onclick="openModal('profile-modal'); return false;"><span class="nav-icon"><i class="fas fa-user-circle"></i></span><span>Officer Profile</span></a>
      <a href="login.html" class="sidebar-nav-item" onclick="localStorage.clear()"><span class="nav-icon"><i class="fas fa-sign-out-alt"></i></span><span>System Logout</span></a>
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
      <div class="sidebar-user" onclick="openModal('profile-modal'); return false;">
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
        <div class="topbar-user" id="topbar-user-menu" role="button" tabindex="0" title="Open User Profile" onclick="openModal('profile-modal'); return false;" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModal('profile-modal'); }">
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

/* ==========  USER PROFILE MODAL INJECTION  ========== */
/*
   This function dynamically creates the global User Profile modal.
   It uses GRACE.getCurrentUser() from data.js whenever available
   and falls back to the active graceRole information when needed.
*/
function injectProfileModal() {
  // Prevent duplicate profile modals when this script is initialized
  // more than once on the same page.
  const existingProfileModal = document.getElementById('profile-modal');
  if (existingProfileModal) {
    updateProfileModal();
    return;
  }

  const profileModal = document.createElement('div');
  profileModal.id = 'profile-modal';
  profileModal.className = 'modal';
  profileModal.setAttribute('role', 'dialog');
  profileModal.setAttribute('aria-modal', 'true');
  profileModal.setAttribute('aria-labelledby', 'profile-modal-title');

  profileModal.innerHTML = `
    <div class="modal-content profile-modal-content" style="max-width:620px;width:calc(100% - 2rem);">
      <div class="modal-header">
        <div>
          <h2 id="profile-modal-title">User Profile</h2>
          <p style="margin:0.25rem 0 0;color:#6B7280;font-size:0.9rem;">Active G.R.A.C.E. Portal account information</p>
        </div>
        <button type="button" class="modal-close" data-modal-close aria-label="Close User Profile">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body profile-modal-body">
        <div class="profile-modal-identity" style="display:flex;align-items:center;gap:1rem;padding:1rem;margin-bottom:1rem;border-radius:12px;background:#F8FAFC;">
          <div id="profile-modal-avatar" class="profile-modal-avatar" style="width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.25rem;font-weight:700;background:#E5E7EB;color:#374151;">
            --
          </div>

          <div style="min-width:0;">
            <div id="profile-modal-name" style="font-size:1.1rem;font-weight:700;color:#111827;">
              Loading...
            </div>
            <div id="profile-modal-role" style="font-size:0.9rem;color:#6B7280;margin-top:0.2rem;">
              Loading...
            </div>
          </div>
        </div>

        <div class="profile-details-grid" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;">
          <div class="profile-detail-item">
            <div class="profile-detail-label" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#6B7280;margin-bottom:0.3rem;">
              Name
            </div>
            <div id="profile-modal-detail-name" class="profile-detail-value" style="font-size:0.95rem;color:#111827;">
              --
            </div>
          </div>

          <div class="profile-detail-item">
            <div class="profile-detail-label" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#6B7280;margin-bottom:0.3rem;">
              Email
            </div>
            <div id="profile-modal-email" class="profile-detail-value" style="font-size:0.95rem;color:#111827;word-break:break-word;">
              --
            </div>
          </div>

          <div class="profile-detail-item">
            <div class="profile-detail-label" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#6B7280;margin-bottom:0.3rem;">
              Role
            </div>
            <div id="profile-modal-detail-role" class="profile-detail-value" style="font-size:0.95rem;color:#111827;">
              --
            </div>
          </div>

          <div class="profile-detail-item">
            <div class="profile-detail-label" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#6B7280;margin-bottom:0.3rem;">
              Contact Number
            </div>
            <div id="profile-modal-contact" class="profile-detail-value" style="font-size:0.95rem;color:#111827;">
              --
            </div>
          </div>

          <div class="profile-detail-item" style="grid-column:1 / -1;">
            <div class="profile-detail-label" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#6B7280;margin-bottom:0.3rem;">
              Affiliation
            </div>
            <div id="profile-modal-affiliation" class="profile-detail-value" style="font-size:0.95rem;color:#111827;">
              --
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary modal-close" data-modal-close>
          Close
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(profileModal);

  // Populate the modal immediately after it is created.
  updateProfileModal();

  // Bind the close buttons because this modal was dynamically injected
  // after the initial page markup was loaded.
  const profileCloseButtons = profileModal.querySelectorAll('.modal-close, [data-modal-close]');

  profileCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      profileModal.classList.remove('active');

      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.classList.remove('active');
      }
    });
  });

  // Support closing the dynamically-created profile modal by clicking
  // directly on the modal background.
  profileModal.addEventListener('click', (event) => {
    if (event.target === profileModal) {
      profileModal.classList.remove('active');

      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.classList.remove('active');
      }
    }
  });
}

/* ==========  PROFILE USER DATA HELPER  ========== */
/*
   Retrieves the active user through GRACE.getCurrentUser().
   Additional fallback fields are supported so the modal can work
   with slightly different user-object naming conventions.
*/
function getProfileUserData() {
  const role = localStorage.getItem('graceRole') || 'proponent';

  let currentUser = null;

  if (
    window.GRACE &&
    typeof window.GRACE.getCurrentUser === 'function'
  ) {
    try {
      currentUser = window.GRACE.getCurrentUser();
    } catch (error) {
      console.warn('Unable to retrieve current user from GRACE.getCurrentUser().', error);
      currentUser = null;
    }
  }

  if (!currentUser || typeof currentUser !== 'object') {
    currentUser = {};
  }

  const roleMap = {
    admin: {
      name: 'Prince Jheck T. Juan',
      email: 'admin@ucn.edu.ph',
      role: 'System Administrator',
      contactNumber: 'Not provided',
      affiliation: 'University of Camarines Norte'
    },
    coordinator: {
      name: 'Crystelle A. Villanueva',
      email: 'coordinator@ucn.edu.ph',
      role: 'Extension Coordinator',
      contactNumber: 'Not provided',
      affiliation: 'University of Camarines Norte'
    },
    proponent: {
      name: 'Dr. Mary Grace Bolos',
      email: 'proponent@ucn.edu.ph',
      role: 'Project Proponent',
      contactNumber: 'Not provided',
      affiliation: 'University of Camarines Norte'
    },
    dean: {
      name: 'Mary Grace Bolos',
      email: 'dean@ucn.edu.ph',
      role: 'College Dean',
      contactNumber: 'Not provided',
      affiliation: 'University of Camarines Norte'
    },
    ovpre: {
      name: 'OVPRE Administrator',
      email: 'ovpre@ucn.edu.ph',
      role: 'OVPRE Administrator',
      contactNumber: 'Not provided',
      affiliation: 'Office of the Vice President for Research and Extension'
    }
  };

  const fallbackUser = roleMap[role] || roleMap.proponent;

  const profileName =
    currentUser.name ||
    currentUser.fullName ||
    currentUser.displayName ||
    fallbackUser.name;

  const profileEmail =
    currentUser.email ||
    currentUser.emailAddress ||
    currentUser.mail ||
    fallbackUser.email;

  const profileRole =
    currentUser.roleName ||
    currentUser.roleLabel ||
    currentUser.role ||
    fallbackUser.role;

  const profileContact =
    currentUser.contactNumber ||
    currentUser.contact ||
    currentUser.phone ||
    currentUser.phoneNumber ||
    currentUser.mobile ||
    currentUser.mobileNumber ||
    fallbackUser.contactNumber;

  const profileAffiliation =
    currentUser.affiliation ||
    currentUser.organization ||
    currentUser.department ||
    currentUser.office ||
    currentUser.college ||
    fallbackUser.affiliation;

  return {
    name: String(profileName),
    email: String(profileEmail),
    role: String(profileRole),
    contactNumber: String(profileContact),
    affiliation: String(profileAffiliation)
  };
}

/* ==========  PROFILE HTML ESCAPING  ========== */
/*
   Prevents profile information retrieved from the data layer
   from being inserted into the modal as executable HTML.
*/
function escapeProfileHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========  PROFILE INITIALS HELPER  ========== */
/*
   Generates initials for the profile avatar using the user's
   first and last available name components.
*/
function getProfileInitials(name) {
  const cleanName = String(name || '').trim();

  if (!cleanName) {
    return 'US';
  }

  const nameParts = cleanName.split(/\s+/).filter(Boolean);

  if (nameParts.length === 1) {
    return nameParts[0].substring(0, 2).toUpperCase();
  }

  const firstInitial = nameParts[0].charAt(0);
  const lastInitial = nameParts[nameParts.length - 1].charAt(0);

  return `${firstInitial}${lastInitial}`.toUpperCase();
}

/* ==========  UPDATE PROFILE MODAL  ========== */
/*
   Refreshes all profile information whenever the modal is prepared.
   This ensures the displayed information follows the active user
   returned by GRACE.getCurrentUser().
*/
function updateProfileModal() {
  const profileModal = document.getElementById('profile-modal');
  if (!profileModal) return;

  const profileUser = getProfileUserData();
  const initials = getProfileInitials(profileUser.name);

  const profileAvatar = document.getElementById('profile-modal-avatar');
  const profileName = document.getElementById('profile-modal-name');
  const profileRole = document.getElementById('profile-modal-role');
  const profileDetailName = document.getElementById('profile-modal-detail-name');
  const profileEmail = document.getElementById('profile-modal-email');
  const profileDetailRole = document.getElementById('profile-modal-detail-role');
  const profileContact = document.getElementById('profile-modal-contact');
  const profileAffiliation = document.getElementById('profile-modal-affiliation');

  if (profileAvatar) {
    profileAvatar.textContent = initials;
  }

  if (profileName) {
    profileName.textContent = profileUser.name;
  }

  if (profileRole) {
    profileRole.textContent = profileUser.role;
  }

  if (profileDetailName) {
    profileDetailName.textContent = profileUser.name;
  }

  if (profileEmail) {
    profileEmail.textContent = profileUser.email;
  }

  if (profileDetailRole) {
    profileDetailRole.textContent = profileUser.role;
  }

  if (profileContact) {
    profileContact.textContent = profileUser.contactNumber;
  }

  if (profileAffiliation) {
    profileAffiliation.textContent = profileUser.affiliation;
  }
}

/* ==========  OPEN USER PROFILE  ========== */
/*
   Global helper that can be used by dynamically-generated
   profile links throughout the portal.
*/
function openProfileModal() {
  updateProfileModal();
  openModal('profile-modal');
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
  // Refresh profile information immediately before opening
  // the profile modal so the active user's information is current.
  if (modalId === 'profile-modal') {
    updateProfileModal();
  }

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

    /* ========== OVPRE USER INFORMATION ADDED ========== */
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

    /* ========== OVPRE ADMIN NAVIGATION ACCESS ADDED ========== */
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