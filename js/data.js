/* ============================================================
   CCMS G.R.A.C.E PORTAL — Centralized Data Store
   ERD-Aligned (3NF) — 20+ Core Entities + Junction Tables
   Team Thriv3 | IT 116: System Analysis and Design
   University of Camarines Norte — CCMS Extension Office

   APPROVAL WORKFLOW (per proposal institutional process):
   Stage 1: Completeness Check
   Stage 2: Dean/Director Review & Endorsement
   Stage 3: Eligibility Check              [Indicator: E]
   Stage 4: Compliance / Required Revisions
   Stage 5: Technical Evaluation           [Indicator: TE]
   Stage 6: Institutional Endorsement (President / Board Secretary)
   Stage 7: Board of Trustees Approval
   Stage 8: Notice to Proceed (NTP) Issuance  [Indicator: M = With MOA]
   ============================================================ */

const GRACE = {

  /* ===== SYSTEM INFO ===== */
  system: {
    name: 'G.R.A.C.E PORTAL',
    fullName: 'CCMS G.R.A.C.E PORTAL',
    acronym: 'Gateway for Responsive Academic Community Extension',
    subtitle: 'A Web-Based Extension Project Management and Monitoring System',
    office: 'CCMS Extension Office',
    university: 'University of Camarines Norte',
    college: 'College of Computing and Multimedia Studies',
    team: 'Team Thriv3',
    members: ['Juan, Prince Jheck T.', 'Villanueva, Crystelle A.', 'Araña, Lei-anne C.'],
    course: 'IT 116: System Analysis and Design',
    instructor: 'Mary Grace Bolos',
    academicYear: 'AY 2026-2027',
    semester: '1st Semester',
    version: '2.0.0',
    // --- System Administrator Configurable Variables ---
    maintenance_mode: false,
    active_semester: '1st Semester',
    active_term_cycle: 'Extension Term Cycle A',
    allow_new_proposals: true
  },

  /* ===== 1. ROLE ===== */
  /* Revised system: only 3 portal users:
     (1) Project Proponent - proposal submission, implementation, report submission
     (2) Extension Coordinator - central coordination, status updating, document monitoring;
         records verified official institutional updates (no OVPRE / Assistant accounts)
     (3) College Dean - proposal review and college-level endorsement */
  roles: [
    { role_id: 'R002', role_name: 'coordinator', description: 'Extension Office / Coordinator — proposal and project management, process and status monitoring, communication updates, funding-information recording, documentation, reporting, completion and post-implementation monitoring', is_active: true },
    { role_id: 'R003', role_name: 'proponent',   description: 'Project Proponent — authorized faculty, project leaders, and project team members; submits and updates proposal information, compliance requirements, activities, implementation progress, participation, and supporting documents per assigned permissions', is_active: true },
    { role_id: 'R004', role_name: 'dean',        description: 'College Dean — confirms and endorses the proposal of the project proponents and extension office coordinator before it proceeds to further institutional processing (tracked by the Coordinator); provides high-level academic oversight.', is_active: true },
  ],

  /* ===== 2. PERSON ===== */
  persons: [
    { person_id: 'PER001', first_name: 'Prince Jheck', last_name: 'Juan',       email: 'pjuan@ucn.edu.ph',         contact_no: '09171234567', affiliation: 'CCMS — Information Technology', designation: 'Project Leader / Project Proponent' },
    { person_id: 'PER002', first_name: 'Mary Grace',   last_name: 'Bolos',      email: 'mgbolos@ucn.edu.ph',       contact_no: '09182345678', affiliation: 'CCMS — Extension Office',       designation: 'Extension Coordinator' },
    { person_id: 'PER003', first_name: 'Lei-anne',     last_name: 'Araña',      email: 'larana@ucn.edu.ph',        contact_no: '09193456789', affiliation: 'CCMS — Information Technology', designation: 'Project Proponent' },
    { person_id: 'PER004', first_name: 'Maria',        last_name: 'Santos',     email: 'msantos@ucn.edu.ph',       contact_no: '09204567890', affiliation: 'CCMS — Computer Science',      designation: 'Project Proponent' },
    { person_id: 'PER005', first_name: 'Roberto',      last_name: 'De Leon',    email: 'rdeleon@ucn.edu.ph',       contact_no: '09215678901', affiliation: 'CCMS — Information Systems',   designation: 'Project Proponent' },
    { person_id: 'PER006', first_name: 'Daniel',       last_name: 'Maligat',    email: 'dmaligat@ucn.edu.ph',      contact_no: '09226789012', affiliation: 'CCMS — Office of the Dean',     designation: 'College Dean' },
    { person_id: 'PER007', first_name: 'Mark Anthony', last_name: 'Reyes',      email: 'mreyes@ucn.edu.ph',        contact_no: '09237890123', affiliation: 'CCMS — Information Technology', designation: 'Faculty / Hardware & Network Specialist' },
    { person_id: 'PER008', first_name: 'Clarissa',     last_name: 'Mendoza',    email: 'cmendoza@ucn.edu.ph',      contact_no: '09248901234', affiliation: 'CCMS — Computer Science',      designation: 'Faculty / AI & Data Science Lead' },
    { person_id: 'PER009', first_name: 'Jonathan',     last_name: 'Alcantara',  email: 'jalcantara@ucn.edu.ph',    contact_no: '09259012345', affiliation: 'CCMS — Information Systems',   designation: 'Faculty / Cybersecurity Specialist' },
    { person_id: 'PER010', first_name: 'Sarah Mae',    last_name: 'Bautista',   email: 'sbautista@ucn.edu.ph',     contact_no: '09260123456', affiliation: 'CCMS — Multimedia Arts',        designation: 'Faculty / UI-UX & Media Lead' },
  ],

  /* ===== 3. USER_ACCOUNT ===== */
  userAccounts: [
    { user_id: 'U001', person_id: 'PER001', role_id: 'R003',  username: 'pjuan@ucn.edu.ph',    password_hash: '[bcrypt_hashed]', account_status: 'active', created_at: '2026-01-15' },
    { user_id: 'U002', person_id: 'PER002', role_id: 'R002',  username: 'mgbolos@ucn.edu.ph',  password_hash: '[bcrypt_hashed]', account_status: 'active', created_at: '2026-01-15' },
    { user_id: 'U003', person_id: 'PER003', role_id: 'R003',  username: 'larana@ucn.edu.ph',   password_hash: '[bcrypt_hashed]', account_status: 'active', created_at: '2026-01-15' },
    { user_id: 'U004', person_id: 'PER004', role_id: 'R003',  username: 'msantos@ucn.edu.ph',  password_hash: '[bcrypt_hashed]', account_status: 'active', created_at: '2026-01-15' },
    { user_id: 'U005', person_id: 'PER005', role_id: 'R003',  username: 'rdeleon@ucn.edu.ph',  password_hash: '[bcrypt_hashed]', account_status: 'active', created_at: '2026-02-01' },
    { user_id: 'U006', person_id: 'PER006', role_id: 'R004',  username: 'dmaligat@ucn.edu.ph', password_hash: '[bcrypt_hashed]', account_status: 'active', created_at: '2026-01-10' },
  ],

  /* ===== 4. PROJECT ===== */
  /* source_type: 'External Request' | 'Faculty-Initiated'
     service_type: 'Skills Enhancement Training' | 'Consultancy Services' |
                   'System Development & Implementation' | 'Community Extension Service' */
  projects: [
    {
      project_id: 'EXT-2026-001', project_code: 'CCMS-EXT-001',
      title: 'Community Health Outreach: Digital Literacy & Basic ICT Skills Training',
      description: 'A community extension program providing digital health literacy and basic ICT operations training to community health workers and local residents.',
      service_type: 'Community Extension Service', source_type: 'Faculty-Initiated',
      start_date: '2026-09-15', end_date: '2026-11-20',
      project_status: 'Submitted', ntp_issued: false, ntp_date: null, ntp_reference: null, moa_signed: false, moa_reference: null,
      created_by: 'PER001'
    },
    {
      project_id: 'EXT-2026-048', project_code: 'CCMS-EXT-048',
      title: 'Web Development Training for Daet LGU Employees',
      description: 'A comprehensive web development training program for employees of the Daet Local Government Unit covering HTML, CSS, JavaScript, and basic web application development to enhance digital skills of government workers.',
      service_type: 'Skills Enhancement Training', source_type: 'External Request',
      start_date: '2026-08-28', end_date: '2026-10-15',
      project_status: 'Ongoing', ntp_issued: true, ntp_date: '2026-08-26', ntp_reference: 'NTP-2026-048', moa_signed: true, moa_reference: 'MOA-2026-048-LGU',
      created_by: 'PER001'
    },
    {
      project_id: 'EXT-2026-045', project_code: 'CCMS-EXT-045',
      title: 'Basud Municipal Library Management System',
      description: 'Development and implementation of a Library Management System for the Basud Municipal Library to automate cataloging, borrowing, and returning of library materials.',
      service_type: 'System Development & Implementation', source_type: 'External Request',
      start_date: '2026-06-01', end_date: '2026-09-30',
      project_status: 'Under Review', ntp_issued: true, ntp_date: '2026-05-28', ntp_reference: 'NTP-2026-045', moa_signed: true, moa_reference: 'MOA-2026-045-BASUD',
      created_by: 'PER004'
    },
    {
      project_id: 'EXT-2026-041', project_code: 'CCMS-EXT-041',
      title: 'ICT Consultancy Services for DOST CamNorte',
      description: 'ICT consultancy services to assist DOST Camarines Norte in evaluating and improving their information systems infrastructure and digital services delivery.',
      service_type: 'Consultancy Services', source_type: 'External Request',
      start_date: '2026-07-15', end_date: '2026-12-15',
      project_status: 'Approved', ntp_issued: true, ntp_date: '2026-07-12', ntp_reference: 'NTP-2026-041', moa_signed: false, moa_reference: null,
      created_by: 'PER005'
    },
    {
      project_id: 'EXT-2026-038', project_code: 'CCMS-EXT-038',
      title: 'Digital Literacy Program for Brgy. Lag-on',
      description: 'A community-based digital literacy program targeting residents of Brgy. Lag-on, focusing on basic computer operations, internet safety, and online government services.',
      service_type: 'Community Extension Service', source_type: 'Faculty-Initiated',
      start_date: '2026-04-10', end_date: '2026-06-20',
      project_status: 'Completed', ntp_issued: true, ntp_date: '2026-04-08', ntp_reference: 'NTP-2026-038', moa_signed: false, moa_reference: null,
      created_by: 'PER001'
    },
    {
      project_id: 'EXT-2026-035', project_code: 'CCMS-EXT-035',
      title: 'Data Analytics Workshop for CamNorte Provincial Office',
      description: 'A workshop series on data analytics fundamentals for provincial government employees, covering data collection, analysis, visualization, and data-driven decision making.',
      service_type: 'Skills Enhancement Training', source_type: 'External Request',
      start_date: '2026-09-01', end_date: '2026-11-30',
      project_status: 'Pending', ntp_issued: false, ntp_date: null, ntp_reference: null, moa_signed: false, moa_reference: null,
      created_by: 'PER001'
    },
    {
      project_id: 'EXT-2026-033', project_code: 'CCMS-EXT-033',
      title: 'Network Infrastructure Assessment for Vinzons Municipal Hall',
      description: 'Technical assessment of the network infrastructure at Vinzons Municipal Hall including topology analysis, security audit, performance evaluation, and upgrade recommendations.',
      service_type: 'Consultancy Services', source_type: 'External Request',
      start_date: '2026-08-01', end_date: '2026-10-31',
      project_status: 'Ongoing', ntp_issued: true, ntp_date: '2026-07-30', ntp_reference: 'NTP-2026-033', moa_signed: false, moa_reference: null,
      created_by: 'PER005'
    }
  ],

  /* ===== 5. PROPOSAL ===== */
  proposals: [
    { proposal_id: 'PROP-001', project_id: 'EXT-2026-048', version_no: 1, submission_date: '2026-08-15', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'All requirements met. Approved for implementation.' },
    { proposal_id: 'PROP-002', project_id: 'EXT-2026-045', version_no: 1, submission_date: '2026-05-20', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'MOA signed with Basud Municipal Library.' },
    { proposal_id: 'PROP-003', project_id: 'EXT-2026-041', version_no: 1, submission_date: '2026-07-01', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'Approved by DOST CamNorte liaison.' },
    { proposal_id: 'PROP-004', project_id: 'EXT-2026-038', version_no: 1, submission_date: '2026-03-25', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'Project completed successfully. Final report on file.' },
    { proposal_id: 'PROP-005', project_id: 'EXT-2026-035', version_no: 1, submission_date: '2026-09-01', evaluation_status: 'Under Evaluation', approval_status: 'Pending', remarks: 'Currently undergoing Technical Evaluation.' },
    { proposal_id: 'PROP-006', project_id: 'EXT-2026-035', version_no: 2, submission_date: '2026-09-10', evaluation_status: 'Under Evaluation', approval_status: 'Pending', remarks: 'Revised budget resubmitted per evaluator recommendation.' },
    { proposal_id: 'PROP-007', project_id: 'EXT-2026-033', version_no: 1, submission_date: '2026-07-25', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'Approved by municipal administrator and CCMS Head.' }
  ],

  /* ===== 6. BENEFICIARY ===== */
  /* NOTE: BENEFICIARY = individuals/communities who RECEIVE the service */
  beneficiaries: [
    { beneficiary_id: 'BEN001', beneficiary_name: 'Daet LGU Employees (Web Dev Batch)',  beneficiary_type: 'Government Employees', address: 'Daet Municipal Hall, Daet, Camarines Norte',          contact_person: 'LGU HR Officer',          contact_no: '054-440-1234' },
    { beneficiary_id: 'BEN002', beneficiary_name: 'Basud Library Staff & Patrons',        beneficiary_type: 'Community Members',    address: 'Basud Municipal Library, Basud, Camarines Norte',   contact_person: 'Head Librarian',           contact_no: '054-440-5678' },
    { beneficiary_id: 'BEN003', beneficiary_name: 'DOST CamNorte Technical Staff',        beneficiary_type: 'Government Employees', address: 'DOST Regional Office, Daet, Camarines Norte',        contact_person: 'DOST Provincial Director', contact_no: '054-440-9012' },
    { beneficiary_id: 'BEN004', beneficiary_name: 'Brgy. Lag-on Community Members',       beneficiary_type: 'Community Members',    address: 'Brgy. Lag-on, Daet, Camarines Norte',               contact_person: 'Barangay Captain',         contact_no: '09301234567' },
    { beneficiary_id: 'BEN005', beneficiary_name: 'CamNorte Provincial Office Staff',     beneficiary_type: 'Government Employees', address: 'Provincial Capitol, Daet, Camarines Norte',          contact_person: 'Provincial IT Head',       contact_no: '054-440-3456' },
    { beneficiary_id: 'BEN006', beneficiary_name: 'Vinzons Municipal Hall Personnel',     beneficiary_type: 'Government Employees', address: 'Vinzons Municipal Hall, Vinzons, Camarines Norte',   contact_person: 'Municipal Administrator',  contact_no: '054-440-7890' }
  ],

  /* ===== 7. PROJECT_BENEFICIARY (Junction) ===== */
  projectBeneficiaries: [
    { project_id: 'EXT-2026-048', beneficiary_id: 'BEN001', participation_role: 'Primary Training Recipients',   remarks: '30 employees enrolled in web development training' },
    { project_id: 'EXT-2026-045', beneficiary_id: 'BEN002', participation_role: 'System End Users',               remarks: 'Library staff and patrons will use the management system' },
    { project_id: 'EXT-2026-041', beneficiary_id: 'BEN003', participation_role: 'Consultancy Recipients',          remarks: 'ICT assessment and recommendations for DOST staff' },
    { project_id: 'EXT-2026-038', beneficiary_id: 'BEN004', participation_role: 'Digital Literacy Trainees',       remarks: '50 barangay residents attended digital literacy sessions' },
    { project_id: 'EXT-2026-038', beneficiary_id: 'BEN001', participation_role: 'Secondary Participants',          remarks: '10 additional LGU staff joined the internet safety session' },
    { project_id: 'EXT-2026-035', beneficiary_id: 'BEN005', participation_role: 'Workshop Participants',           remarks: '25 provincial office employees enrolled' },
    { project_id: 'EXT-2026-033', beneficiary_id: 'BEN006', participation_role: 'Network Assessment Recipients',   remarks: 'All municipal hall network users benefit from the assessment' }
  ],

  /* ===== 8. PARTNER ===== */
  /* NOTE: PARTNER = organizations that COLLABORATE or COMMISSION the project */
  partners: [
    { partner_id: 'PAR001', organization_name: 'Daet Local Government Unit',              organization_type: 'Local Government Unit', address: 'Daet Municipal Hall, Daet, Camarines Norte',           contact_person: 'Mayor, Daet',              contact_no: '054-440-1000' },
    { partner_id: 'PAR002', organization_name: 'Basud Municipal Government',              organization_type: 'Local Government Unit', address: 'Basud Municipal Hall, Basud, Camarines Norte',          contact_person: 'Mayor, Basud',             contact_no: '054-440-2000' },
    { partner_id: 'PAR003', organization_name: 'DOST Camarines Norte',                   organization_type: 'Government Agency',     address: 'DOST Regional Office, Daet, Camarines Norte',          contact_person: 'Provincial Director',      contact_no: '054-440-3000' },
    { partner_id: 'PAR004', organization_name: 'Barangay Lag-on, Daet',                  organization_type: 'Barangay Government',   address: 'Brgy. Lag-on Hall, Daet, Camarines Norte',             contact_person: 'Barangay Captain',         contact_no: '09301234567' },
    { partner_id: 'PAR005', organization_name: 'Provincial Government of Camarines Norte',organization_type: 'Provincial Government', address: 'Provincial Capitol, Daet, Camarines Norte',            contact_person: 'Provincial Administrator', contact_no: '054-440-4000' },
    { partner_id: 'PAR006', organization_name: 'Vinzons Municipal Government',            organization_type: 'Local Government Unit', address: 'Vinzons Municipal Hall, Vinzons, Camarines Norte',      contact_person: 'Municipal Administrator',  contact_no: '054-440-5000' }
  ],

  /* ===== 9. PROJECT_PARTNER (Junction) ===== */
  projectPartners: [
    { project_id: 'EXT-2026-048', partner_id: 'PAR001', partnership_role: 'Host Organization & Co-Implementer', remarks: 'Provides venue and participant coordination for training' },
    { project_id: 'EXT-2026-045', partner_id: 'PAR002', partnership_role: 'Client Organization',               remarks: 'Basud Municipal commissioned the library system development' },
    { project_id: 'EXT-2026-041', partner_id: 'PAR003', partnership_role: 'Client Organization',               remarks: 'DOST formally requested ICT consultancy services via letter' },
    { project_id: 'EXT-2026-038', partner_id: 'PAR004', partnership_role: 'Host Community',                    remarks: 'Provides barangay hall as training venue and community mobilization' },
    { project_id: 'EXT-2026-038', partner_id: 'PAR001', partnership_role: 'Co-Sponsor',                        remarks: 'LGU provided supplemental logistics and materials support' },
    { project_id: 'EXT-2026-035', partner_id: 'PAR005', partnership_role: 'Client Organization',               remarks: 'Provincial government formally requested data analytics training' },
    { project_id: 'EXT-2026-033', partner_id: 'PAR006', partnership_role: 'Client Organization',               remarks: 'Municipal government commissioned the network infrastructure assessment' }
  ],

  /* ===== 10. PROJECT_TEAM (Junction) ===== */
  projectTeams: [
    { project_team_id: 'PT001', project_id: 'EXT-2026-048', person_id: 'PER001', team_role: 'Project Leader',            participation_status: 'Active',     date_joined: '2026-08-15', date_ended: null,         remarks: 'Lead trainer and overall project coordinator' },
    { project_team_id: 'PT002', project_id: 'EXT-2026-048', person_id: 'PER002', team_role: 'Co-Trainer',                participation_status: 'Active',     date_joined: '2026-08-15', date_ended: null,         remarks: 'Handles CSS and design modules' },
    { project_team_id: 'PT003', project_id: 'EXT-2026-048', person_id: 'PER003', team_role: 'Co-Trainer',                participation_status: 'Active',     date_joined: '2026-08-15', date_ended: null,         remarks: 'Handles JavaScript modules' },
    { project_team_id: 'PT004', project_id: 'EXT-2026-045', person_id: 'PER004', team_role: 'Project Leader',            participation_status: 'Active',     date_joined: '2026-06-01', date_ended: null,         remarks: 'Lead developer and project manager' },
    { project_team_id: 'PT005', project_id: 'EXT-2026-045', person_id: 'PER003', team_role: 'Technical Support',          participation_status: 'Active',     date_joined: '2026-06-01', date_ended: null,         remarks: 'Assists in system testing and documentation' },
    { project_team_id: 'PT006', project_id: 'EXT-2026-041', person_id: 'PER005', team_role: 'Lead Consultant',            participation_status: 'Active',     date_joined: '2026-07-15', date_ended: null,         remarks: 'Lead ICT consultant for DOST assessment' },
    { project_team_id: 'PT007', project_id: 'EXT-2026-038', person_id: 'PER001', team_role: 'Project Leader',            participation_status: 'Completed',  date_joined: '2026-04-10', date_ended: '2026-06-20', remarks: 'Led all digital literacy training sessions' },
    { project_team_id: 'PT008', project_id: 'EXT-2026-038', person_id: 'PER003', team_role: 'Co-Trainer',                participation_status: 'Completed',  date_joined: '2026-04-10', date_ended: '2026-06-20', remarks: 'Handled internet safety and eGov module' },
    { project_team_id: 'PT009', project_id: 'EXT-2026-035', person_id: 'PER001', team_role: 'Project Leader',            participation_status: 'Active',     date_joined: '2026-09-01', date_ended: null,         remarks: 'Lead data analytics workshop facilitator' },
    { project_team_id: 'PT010', project_id: 'EXT-2026-033', person_id: 'PER005', team_role: 'Lead Consultant',            participation_status: 'Active',     date_joined: '2026-08-01', date_ended: null,         remarks: 'Lead network infrastructure assessor' }
  ],

  /* ===== 11. ACTIVITY ===== */
  activities: [
    { activity_id: 'ACT001', project_id: 'EXT-2026-048', activity_name: 'Module 1: HTML Fundamentals',       activity_type: 'Training',     description: 'Introduction to HTML structure, elements, semantic markup and basic web page creation', schedule_start: '2026-08-28 08:00', schedule_end: '2026-09-04 17:00', venue: 'CCMS Computer Lab, UCN',            activity_status: 'Completed' },
    { activity_id: 'ACT002', project_id: 'EXT-2026-048', activity_name: 'Module 2: CSS & Styling',           activity_type: 'Workshop',     description: 'CSS selectors, box model, Flexbox, Grid layout, and responsive design principles',       schedule_start: '2026-09-05 08:00', schedule_end: '2026-09-12 17:00', venue: 'CCMS Computer Lab, UCN',            activity_status: 'Completed' },
    { activity_id: 'ACT003', project_id: 'EXT-2026-048', activity_name: 'Module 3: JavaScript Basics',       activity_type: 'Training',     description: 'JavaScript fundamentals, DOM manipulation, event handling, and AJAX basics',               schedule_start: '2026-09-13 08:00', schedule_end: '2026-09-25 17:00', venue: 'CCMS Computer Lab, UCN',            activity_status: 'Ongoing'   },
    { activity_id: 'ACT004', project_id: 'EXT-2026-048', activity_name: 'Module 4: Final Project Dev',       activity_type: 'Workshop',     description: 'Participants build a functional government website applying all learned skills',             schedule_start: '2026-09-26 08:00', schedule_end: '2026-10-10 17:00', venue: 'Daet LGU Annex Building',           activity_status: 'Scheduled' },
    { activity_id: 'ACT005', project_id: 'EXT-2026-048', activity_name: 'Project Evaluation & Closing',      activity_type: 'Assessment',   description: 'Final project presentation, panel evaluation, and certificate distribution ceremony',       schedule_start: '2026-10-11 08:00', schedule_end: '2026-10-15 17:00', venue: 'Daet LGU Conference Hall',          activity_status: 'Scheduled' },
    { activity_id: 'ACT006', project_id: 'EXT-2026-045', activity_name: 'Requirements Gathering',            activity_type: 'Meeting',      description: 'Stakeholder meetings to gather system requirements, workflows, and data documentation',    schedule_start: '2026-06-01 08:00', schedule_end: '2026-06-15 17:00', venue: 'Basud Municipal Library',           activity_status: 'Completed' },
    { activity_id: 'ACT007', project_id: 'EXT-2026-045', activity_name: 'Database Design & Development',     activity_type: 'Development',  description: 'Database schema design and core system module development (catalog, borrowing, returns)',   schedule_start: '2026-06-16 08:00', schedule_end: '2026-07-31 17:00', venue: 'CCMS Software Lab, UCN',            activity_status: 'Completed' },
    { activity_id: 'ACT008', project_id: 'EXT-2026-045', activity_name: 'User Acceptance Testing (UAT)',     activity_type: 'Testing',      description: 'System testing with library staff, bug resolution, final QA, and system handover',          schedule_start: '2026-08-01 08:00', schedule_end: '2026-09-15 17:00', venue: 'Basud Municipal Library',           activity_status: 'Ongoing'   },
    { activity_id: 'ACT009', project_id: 'EXT-2026-038', activity_name: 'Basic Computer Operations',         activity_type: 'Training',     description: 'Introduction to computers, peripherals, OS navigation, and basic productivity software',   schedule_start: '2026-04-10 08:00', schedule_end: '2026-05-10 17:00', venue: 'Brgy. Lag-on Covered Court',        activity_status: 'Completed' },
    { activity_id: 'ACT010', project_id: 'EXT-2026-038', activity_name: 'Internet Safety & eGov Services',  activity_type: 'Seminar',      description: 'Safe internet practices, online government portals, PhilSys, and digital communication',    schedule_start: '2026-05-15 08:00', schedule_end: '2026-06-15 17:00', venue: 'Brgy. Lag-on Covered Court',        activity_status: 'Completed' },
    { activity_id: 'ACT011', project_id: 'EXT-2026-033', activity_name: 'Network Infrastructure Audit',      activity_type: 'Assessment',   description: 'On-site network topology mapping, hardware inventory, and connectivity audit',              schedule_start: '2026-08-01 08:00', schedule_end: '2026-08-20 17:00', venue: 'Vinzons Municipal Hall',             activity_status: 'Completed' },
    { activity_id: 'ACT012', project_id: 'EXT-2026-033', activity_name: 'Security & Upgrade Recommendations',activity_type: 'Consultancy',  description: 'Network security vulnerability assessment, penetration test summary, and upgrade roadmap',  schedule_start: '2026-08-21 08:00', schedule_end: '2026-09-30 17:00', venue: 'Vinzons Municipal Hall',             activity_status: 'Ongoing'   }
  ],

  /* ===== 12. ACTIVITY_PARTICIPANT (Junction) ===== */
  activityParticipants: [
    { activity_participant_id: 'AP001', activity_id: 'ACT001', participant_name: 'Maria Gonzales',  participant_role: 'Trainee', affiliation: 'Daet LGU — Admin Department',    contact_no: '09301234568', attendance_status: 'Present' },
    { activity_participant_id: 'AP002', activity_id: 'ACT001', participant_name: 'Jose Reyes',      participant_role: 'Trainee', affiliation: 'Daet LGU — Finance Department',  contact_no: '09301234569', attendance_status: 'Present' },
    { activity_participant_id: 'AP003', activity_id: 'ACT001', participant_name: 'Ana Cruz',        participant_role: 'Trainee', affiliation: 'Daet LGU — IT Department',       contact_no: '09301234570', attendance_status: 'Present' },
    { activity_participant_id: 'AP004', activity_id: 'ACT001', participant_name: 'Roberto Gomez',   participant_role: 'Trainee', affiliation: 'Daet LGU — HR Department',       contact_no: '09301234571', attendance_status: 'Absent'  },
    { activity_participant_id: 'AP005', activity_id: 'ACT002', participant_name: 'Maria Gonzales',  participant_role: 'Trainee', affiliation: 'Daet LGU — Admin Department',    contact_no: '09301234568', attendance_status: 'Present' },
    { activity_participant_id: 'AP006', activity_id: 'ACT002', participant_name: 'Jose Reyes',      participant_role: 'Trainee', affiliation: 'Daet LGU — Finance Department',  contact_no: '09301234569', attendance_status: 'Present' },
    { activity_participant_id: 'AP007', activity_id: 'ACT002', participant_name: 'Ana Cruz',        participant_role: 'Trainee', affiliation: 'Daet LGU — IT Department',       contact_no: '09301234570', attendance_status: 'Present' },
    { activity_participant_id: 'AP008', activity_id: 'ACT003', participant_name: 'Maria Gonzales',  participant_role: 'Trainee', affiliation: 'Daet LGU — Admin Department',    contact_no: '09301234568', attendance_status: 'Present' },
    { activity_participant_id: 'AP009', activity_id: 'ACT003', participant_name: 'Jose Reyes',      participant_role: 'Trainee', affiliation: 'Daet LGU — Finance Department',  contact_no: '09301234569', attendance_status: 'Present' },
    { activity_participant_id: 'AP010', activity_id: 'ACT009', participant_name: 'Pedro Dela Cruz', participant_role: 'Community Learner', affiliation: 'Brgy. Lag-on',          contact_no: '09301234572', attendance_status: 'Present' },
    { activity_participant_id: 'AP011', activity_id: 'ACT009', participant_name: 'Nena Santos',     participant_role: 'Community Learner', affiliation: 'Brgy. Lag-on',          contact_no: '09301234573', attendance_status: 'Present' },
    { activity_participant_id: 'AP012', activity_id: 'ACT009', participant_name: 'Ricardo Flores',  participant_role: 'Community Learner', affiliation: 'Brgy. Lag-on',          contact_no: '09301234574', attendance_status: 'Present' },
    { activity_participant_id: 'AP013', activity_id: 'ACT010', participant_name: 'Pedro Dela Cruz', participant_role: 'Community Learner', affiliation: 'Brgy. Lag-on',          contact_no: '09301234572', attendance_status: 'Present' },
    { activity_participant_id: 'AP014', activity_id: 'ACT010', participant_name: 'Nena Santos',     participant_role: 'Community Learner', affiliation: 'Brgy. Lag-on',          contact_no: '09301234573', attendance_status: 'Present' },
    { activity_participant_id: 'AP015', activity_id: 'ACT010', participant_name: 'Gloria Reyes',    participant_role: 'Community Learner', affiliation: 'Brgy. Lag-on',          contact_no: '09301234575', attendance_status: 'Present' }
  ],

  /* ===== 13. FUNDING_SOURCE ===== */
  fundingSources: [
    { funding_source_id: 'FS001', source_name: 'CCMS Institutional Fund',         source_type: 'Institutional',     description: 'Annual budget allocated by UCN-CCMS for extension activities and community programs', is_active: true  },
    { funding_source_id: 'FS002', source_name: 'Daet LGU Co-Funding Allocation',  source_type: 'External — LGU',   description: 'Co-funding from Daet Local Government Unit for community extension programs',          is_active: true  },
    { funding_source_id: 'FS003', source_name: 'UCN Extension Office Fund',        source_type: 'Institutional',     description: 'Centralized extension fund managed directly by UCN Extension Office',                 is_active: true  },
    { funding_source_id: 'FS004', source_name: 'Vinzons Municipal Budget',         source_type: 'External — LGU',   description: 'Municipal government budget allocation for ICT consultancy and technical services',       is_active: true  },
    { funding_source_id: 'FS005', source_name: 'Provincial Government Grant',      source_type: 'External — LGU',   description: 'Special grant from Provincial Government of Camarines Norte for skills training',        is_active: false }
  ],

  /* ===== 14. PROJECT_FUNDING (Junction) ===== */
  projectFunding: [
    { project_funding_id: 'PF000', project_id: 'EXT-2026-001', funding_source_id: 'FS001', approved_amount: 50000, funding_status: 'Partially Released', remarks: '₱25,000 released; ₱25,000 pending completion of Phase 2' },
    { project_funding_id: 'PF001', project_id: 'EXT-2026-048', funding_source_id: 'FS001', approved_amount: 30000, funding_status: 'Partially Released', remarks: '₱27,000 released; ₱3,000 withheld pending completion report submission' },
    { project_funding_id: 'PF002', project_id: 'EXT-2026-048', funding_source_id: 'FS002', approved_amount: 15000, funding_status: 'Released',           remarks: 'LGU co-funding fully released upon MOA signing' },
    { project_funding_id: 'PF003', project_id: 'EXT-2026-045', funding_source_id: 'FS001', approved_amount: 60000, funding_status: 'Released',           remarks: 'Full institutional funding released for system development' },
    { project_funding_id: 'PF004', project_id: 'EXT-2026-041', funding_source_id: 'FS003', approved_amount: 35000, funding_status: 'Released',           remarks: 'UCN Extension Office fund fully released for consultancy services' },
    { project_funding_id: 'PF005', project_id: 'EXT-2026-038', funding_source_id: 'FS001', approved_amount: 25000, funding_status: 'Released',           remarks: 'Institutional funding fully disbursed — project completed' },
    { project_funding_id: 'PF006', project_id: 'EXT-2026-038', funding_source_id: 'FS002', approved_amount: 25000, funding_status: 'Released',           remarks: 'LGU co-funding fully disbursed upon project completion' },
    { project_funding_id: 'PF007', project_id: 'EXT-2026-035', funding_source_id: 'FS001', approved_amount: 30000, funding_status: 'Pending',            remarks: 'Awaiting proposal approval before fund release authorization' },
    { project_funding_id: 'PF008', project_id: 'EXT-2026-033', funding_source_id: 'FS004', approved_amount: 25000, funding_status: 'Partially Released', remarks: '₱15,000 released for initial assessment phase; balance upon delivery of final report' }
  ],

  /* ===== 15. APPROVAL ===== */
  /* INSTITUTIONAL APPROVAL STAGES (per proposal workflow):
     Stage 1: Completeness Check — verification of proposal and supporting documents
     Stage 2: Dean/Director Review & Endorsement
     Stage 3: Eligibility Check [Indicator: E] — Coordinator records the verified eligibility result
     Stage 4: Compliance/Revisions — if required after eligibility
     Stage 5: Technical Evaluation [Indicator: TE] — panel technical review
     Stage 6: Institutional Endorsement (President / Board Secretary)
     Stage 7: Board of Trustees Approval — distribution of BOT-approved proposal
     Stage 8: Notice to Proceed Issuance [Indicator: M = With MOA if applicable]
     NOTE: System records these stages based on authorized institutional actions;
           does NOT independently determine eligibility or approve proposals. */
  approvals: [
    /* EXT-2026-048: Web Dev Training — Daet LGU (FULLY PROCESSED) */
    { approval_id: 'APR001', project_id: 'EXT-2026-048', approval_stage: 'Completeness Check',             decision: 'Approved', decision_date: '2026-08-16', approved_by: 'PER002', signature_reference: 'EXT-2026-048-CC-01',  remarks: 'Extension Project Proposal and all required supporting documents verified complete.' },
    { approval_id: 'APR002', project_id: 'EXT-2026-048', approval_stage: 'Dean/Director Endorsement',      decision: 'Approved', decision_date: '2026-08-17', approved_by: 'PER006', signature_reference: 'EXT-2026-048-DD-01',  remarks: 'Reviewed and endorsed by the College Dean.' },
    { approval_id: 'APR004', project_id: 'EXT-2026-048', approval_stage: 'Eligibility Check',              decision: 'Approved', decision_date: '2026-08-19', approved_by: 'PER002', signature_reference: 'EXT-2026-048-EC-01',  remarks: 'All eligibility requirements satisfied. Cleared for Technical Evaluation. [Indicator: E]' },
    { approval_id: 'APR005', project_id: 'EXT-2026-048', approval_stage: 'Technical Evaluation',           decision: 'Approved', decision_date: '2026-08-21', approved_by: 'PER006', signature_reference: 'EXT-2026-048-TE-01',  remarks: 'Technical requirements and methodology approved by evaluation panel. [Indicator: TE]' },
    { approval_id: 'APR006', project_id: 'EXT-2026-048', approval_stage: 'Institutional Endorsement',      decision: 'Approved', decision_date: '2026-08-23', approved_by: 'PER006', signature_reference: 'EXT-2026-048-IE-01',  remarks: 'Endorsed to the President and Board Secretary for Board of Trustees processing.' },
    { approval_id: 'APR007', project_id: 'EXT-2026-048', approval_stage: 'Board of Trustees Approval',     decision: 'Approved', decision_date: '2026-08-25', approved_by: 'PER006', signature_reference: 'EXT-2026-048-BOT-01', remarks: 'Approved by Board of Trustees. BOT-approved proposal distributed to project implementers.' },
    { approval_id: 'APR008', project_id: 'EXT-2026-048', approval_stage: 'Notice to Proceed (NTP)',        decision: 'Approved', decision_date: '2026-08-26', approved_by: 'PER006', signature_reference: 'NTP-2026-048',        remarks: 'NTP issued. MOA signed with Daet LGU. Project implementers officially designated. [Indicator: M]' },
    /* EXT-2026-045: Basud Library System */
    { approval_id: 'APR009', project_id: 'EXT-2026-045', approval_stage: 'Completeness Check',             decision: 'Approved', decision_date: '2026-05-21', approved_by: 'PER002', signature_reference: 'EXT-2026-045-CC-01',  remarks: 'Proposal and supporting documents complete.' },
    { approval_id: 'APR010', project_id: 'EXT-2026-045', approval_stage: 'Dean/Director Endorsement',      decision: 'Approved', decision_date: '2026-05-22', approved_by: 'PER006', signature_reference: 'EXT-2026-045-DD-01',  remarks: 'Endorsed by the College Dean.' },
    { approval_id: 'APR012', project_id: 'EXT-2026-045', approval_stage: 'Eligibility Check',              decision: 'Approved', decision_date: '2026-05-24', approved_by: 'PER002', signature_reference: 'EXT-2026-045-EC-01',  remarks: 'Eligibility confirmed. [Indicator: E]' },
    { approval_id: 'APR013', project_id: 'EXT-2026-045', approval_stage: 'Technical Evaluation',           decision: 'Approved', decision_date: '2026-05-26', approved_by: 'PER006', signature_reference: 'EXT-2026-045-TE-01',  remarks: 'Technical methodology approved. [Indicator: TE]' },
    { approval_id: 'APR014', project_id: 'EXT-2026-045', approval_stage: 'Notice to Proceed (NTP)',        decision: 'Approved', decision_date: '2026-05-28', approved_by: 'PER006', signature_reference: 'NTP-2026-045',        remarks: 'NTP issued. MOA with Basud Municipal signed. [Indicator: M]' },
    /* EXT-2026-041: DOST Consultancy */
    { approval_id: 'APR015', project_id: 'EXT-2026-041', approval_stage: 'Completeness Check',             decision: 'Approved', decision_date: '2026-07-02', approved_by: 'PER002', signature_reference: 'EXT-2026-041-CC-01',  remarks: 'Consultancy request documentation verified complete.' },
    { approval_id: 'APR016', project_id: 'EXT-2026-041', approval_stage: 'Eligibility Check',              decision: 'Approved', decision_date: '2026-07-03', approved_by: 'PER002', signature_reference: 'EXT-2026-041-EC-01',  remarks: 'Eligibility confirmed. External request validated. [Indicator: E]' },
    { approval_id: 'APR017', project_id: 'EXT-2026-041', approval_stage: 'Notice to Proceed (NTP)',        decision: 'Approved', decision_date: '2026-07-12', approved_by: 'PER006', signature_reference: 'NTP-2026-041',        remarks: 'NTP issued to project consultants. [Indicator: M]' },
    /* EXT-2026-038: Digital Literacy — Faculty-Initiated (COMPLETED) */
    { approval_id: 'APR018', project_id: 'EXT-2026-038', approval_stage: 'Completeness Check',             decision: 'Approved', decision_date: '2026-03-26', approved_by: 'PER002', signature_reference: 'EXT-2026-038-CC-01',  remarks: 'Faculty-initiated proposal documents verified complete.' },
    { approval_id: 'APR019', project_id: 'EXT-2026-038', approval_stage: 'Dean/Director Endorsement',      decision: 'Approved', decision_date: '2026-03-27', approved_by: 'PER006', signature_reference: 'EXT-2026-038-DD-01',  remarks: 'Endorsed by the College Dean.' },
    { approval_id: 'APR020', project_id: 'EXT-2026-038', approval_stage: 'Eligibility Check',              decision: 'Approved', decision_date: '2026-03-28', approved_by: 'PER002', signature_reference: 'EXT-2026-038-EC-01',  remarks: 'Faculty-initiated proposal cleared eligibility check. [Indicator: E]' },
    { approval_id: 'APR021', project_id: 'EXT-2026-038', approval_stage: 'Technical Evaluation',           decision: 'Approved', decision_date: '2026-04-04', approved_by: 'PER006', signature_reference: 'EXT-2026-038-TE-01',  remarks: 'Approved. Excellent proposal presentation. [Indicator: TE]' },
    { approval_id: 'APR022', project_id: 'EXT-2026-038', approval_stage: 'Notice to Proceed (NTP)',        decision: 'Approved', decision_date: '2026-04-08', approved_by: 'PER006', signature_reference: 'NTP-2026-038',        remarks: 'NTP issued to project proponent and implementers. [Indicator: M]' },
    /* EXT-2026-035: Data Analytics (PENDING — at Eligibility Check stage) */
    { approval_id: 'APR023', project_id: 'EXT-2026-035', approval_stage: 'Completeness Check',             decision: 'Approved', decision_date: '2026-09-02', approved_by: 'PER002', signature_reference: 'EXT-2026-035-CC-01',  remarks: 'Proposal submitted. Documents verified.' },
    { approval_id: 'APR024', project_id: 'EXT-2026-035', approval_stage: 'Eligibility Check',              decision: 'Pending',  decision_date: null,         approved_by: null,      signature_reference: null,                   remarks: 'Awaiting eligibility check determination. [Indicator: E — in progress]' },
    /* EXT-2026-033: Network Assessment — Vinzons */
    { approval_id: 'APR025', project_id: 'EXT-2026-033', approval_stage: 'Completeness Check',             decision: 'Approved', decision_date: '2026-07-26', approved_by: 'PER002', signature_reference: 'EXT-2026-033-CC-01',  remarks: 'Consultancy documents verified complete.' },
    { approval_id: 'APR026', project_id: 'EXT-2026-033', approval_stage: 'Eligibility Check',              decision: 'Approved', decision_date: '2026-07-27', approved_by: 'PER002', signature_reference: 'EXT-2026-033-EC-01',  remarks: 'Eligibility confirmed. [Indicator: E]' },
    { approval_id: 'APR027', project_id: 'EXT-2026-033', approval_stage: 'Technical Evaluation',           decision: 'Approved', decision_date: '2026-07-29', approved_by: 'PER006', signature_reference: 'EXT-2026-033-TE-01',  remarks: 'Technical scope approved. [Indicator: TE]' },
    { approval_id: 'APR028', project_id: 'EXT-2026-033', approval_stage: 'Notice to Proceed (NTP)',        decision: 'Approved', decision_date: '2026-07-30', approved_by: 'PER006', signature_reference: 'NTP-2026-033',        remarks: 'NTP issued to assessment team. [Indicator: M]' }
  ],

  /* ===== 16. DOCUMENT ===== */
  documents: [
    { document_id: 'DOC001', project_id: 'EXT-2026-048', document_type: 'Proposal',          file_name: 'Project_Proposal_v1.pdf',           file_path: '/uploads/EXT-2026-048/DOC001.pdf',  file_size: '2.4 MB',  file_type: 'PDF',  version_no: 1, uploaded_by: 'PER001', uploaded_at: '2026-08-15' },
    { document_id: 'DOC002', project_id: 'EXT-2026-048', document_type: 'Budget',            file_name: 'Budget_Breakdown.xlsx',             file_path: '/uploads/EXT-2026-048/DOC002.xlsx', file_size: '156 KB',  file_type: 'XLSX', version_no: 1, uploaded_by: 'PER001', uploaded_at: '2026-08-20' },
    { document_id: 'DOC003', project_id: 'EXT-2026-048', document_type: 'MOA',               file_name: 'MOA_Daet_LGU.docx',                 file_path: '/uploads/EXT-2026-048/DOC003.docx', file_size: '890 KB',  file_type: 'DOCX', version_no: 1, uploaded_by: 'PER002', uploaded_at: '2026-08-25' },
    { document_id: 'DOC004', project_id: 'EXT-2026-048', document_type: 'Training Material', file_name: 'Training_Modules_WebDev.pptx',       file_path: '/uploads/EXT-2026-048/DOC004.pptx', file_size: '5.2 MB',  file_type: 'PPTX', version_no: 1, uploaded_by: 'PER001', uploaded_at: '2026-08-26' },
    { document_id: 'DOC005', project_id: 'EXT-2026-048', document_type: 'Attendance Record', file_name: 'Attendance_Module1.pdf',             file_path: '/uploads/EXT-2026-048/DOC005.pdf',  file_size: '340 KB',  file_type: 'PDF',  version_no: 1, uploaded_by: 'PER001', uploaded_at: '2026-09-04' },
    { document_id: 'DOC006', project_id: 'EXT-2026-048', document_type: 'Attendance Record', file_name: 'Attendance_Module2.pdf',             file_path: '/uploads/EXT-2026-048/DOC006.pdf',  file_size: '355 KB',  file_type: 'PDF',  version_no: 1, uploaded_by: 'PER002', uploaded_at: '2026-09-12' },
    { document_id: 'DOC007', project_id: 'EXT-2026-045', document_type: 'Proposal',          file_name: 'System_Requirements_Doc.docx',       file_path: '/uploads/EXT-2026-045/DOC007.docx', file_size: '1.8 MB',  file_type: 'DOCX', version_no: 1, uploaded_by: 'PER004', uploaded_at: '2026-06-15' },
    { document_id: 'DOC008', project_id: 'EXT-2026-038', document_type: 'Report',            file_name: 'Narrative_Report_Final.pdf',         file_path: '/uploads/EXT-2026-038/DOC008.pdf',  file_size: '3.1 MB',  file_type: 'PDF',  version_no: 1, uploaded_by: 'PER001', uploaded_at: '2026-06-25' },
    { document_id: 'DOC009', project_id: 'EXT-2026-038', document_type: 'Survey Results',    file_name: 'Client_Satisfaction_Results.pdf',    file_path: '/uploads/EXT-2026-038/DOC009.pdf',  file_size: '890 KB',  file_type: 'PDF',  version_no: 1, uploaded_by: 'PER001', uploaded_at: '2026-06-22' },
    { document_id: 'DOC010', project_id: 'EXT-2026-038', document_type: 'Photo Documentation',file_name: 'Photo_Documentation.zip',           file_path: '/uploads/EXT-2026-038/DOC010.zip',  file_size: '45 MB',   file_type: 'ZIP',  version_no: 1, uploaded_by: 'PER003', uploaded_at: '2026-06-20' },
    { document_id: 'DOC011', project_id: 'EXT-2026-038', document_type: 'Certificate',       file_name: 'Completion_Certificates.pdf',        file_path: '/uploads/EXT-2026-038/DOC011.pdf',  file_size: '2.8 MB',  file_type: 'PDF',  version_no: 1, uploaded_by: 'PER001', uploaded_at: '2026-06-20' }
  ],

  /* ===== 17. REPORT ===== */
  /* Required CCMS Extension Office report types per proposal:
     - Quarterly Monitoring and Accomplishment Report (CNSC-OP-EXT-01F11)
     - Progress Report (CNSC-OP-EXT-01F17)
     - Narrative Report (post-activity/post-implementation)
     - Participatory Rural Appraisal/Impact Assessment (PRA/IA)
     - Client Satisfaction Survey Report
     - Extension Activity Documentation Report */
  reports: [
    { report_id: 'RPT001', project_id: 'EXT-2026-038', report_type: 'Narrative Report',                              form_reference: null,              reporting_period: 'Apr 10 – Jun 20, 2026',   submitted_date: '2026-06-25', report_status: 'Approved',  submitted_by: 'PER001' },
    { report_id: 'RPT002', project_id: 'EXT-2026-038', report_type: 'Client Satisfaction Survey Report',             form_reference: 'Annex B',         reporting_period: 'Jun 20, 2026',             submitted_date: '2026-06-22', report_status: 'Approved',  submitted_by: 'PER001' },
    { report_id: 'RPT003', project_id: null,            report_type: 'Quarterly Monitoring & Accomplishment Report',  form_reference: 'CNSC-OP-EXT-01F11', reporting_period: 'Jul 1 – Sep 30, 2026',   submitted_date: '2026-09-08', report_status: 'Approved',  submitted_by: 'PER002' },
    { report_id: 'RPT004', project_id: 'EXT-2026-048', report_type: 'Progress Report',                               form_reference: 'CNSC-OP-EXT-01F17', reporting_period: 'Aug 28 – Sep 16, 2026',  submitted_date: '2026-09-16', report_status: 'Submitted', submitted_by: 'PER001' },
    { report_id: 'RPT005', project_id: 'EXT-2026-045', report_type: 'Progress Report',                               form_reference: 'CNSC-OP-EXT-01F17', reporting_period: 'Jun 1 – Sep 15, 2026',   submitted_date: '2026-09-15', report_status: 'Submitted', submitted_by: 'PER004' },
    { report_id: 'RPT006', project_id: null,            report_type: 'Funding Status Report',                        form_reference: null,              reporting_period: 'Jul 1 – Sep 30, 2026',   submitted_date: '2026-09-30', report_status: 'Approved',  submitted_by: 'PER002' }
  ],

  /* ===== 18. REPORT_DOCUMENT (Junction) ===== */
  reportDocuments: [
    { report_id: 'RPT001', document_id: 'DOC008' },
    { report_id: 'RPT001', document_id: 'DOC009' },
    { report_id: 'RPT001', document_id: 'DOC010' },
    { report_id: 'RPT001', document_id: 'DOC011' }
  ],

  /* ===== 19. COMPLETION ===== */
  completions: [
    {
      completion_id: 'COMP001',
      project_id: 'EXT-2026-038',
      completion_date: '2026-06-20',
      completion_status: 'Fully Completed',
      accomplishment_summary: 'Successfully conducted digital literacy training for 50 community members in Brgy. Lag-on. All 2 modules completed on schedule, 48 participants received completion certificates, and a final narrative report was submitted and approved. Average client satisfaction rating of 4.7/5.0 based on 48 survey respondents.'
    }
  ],

  /* ===== 20. SATISFACTION ===== */
  /* 5 Required satisfaction dimensions per proposal (CNSC client satisfaction survey):
     1. relevance_rating       — Relevance and usefulness of the project
     2. quality_rating         — Quality of implementation
     3. benefit_impact_rating  — Benefits and impact
     4. overall_satisfaction   — Overall satisfaction
     5. recommendation         — Willingness to recommend the project */
  satisfactions: [
    { satisfaction_id: 'SAT001', project_id: 'EXT-2026-038', respondent_name: 'Pedro Dela Cruz', affiliation: 'Brgy. Lag-on', relevance_rating: 5, quality_rating: 5, benefit_impact_rating: 4, overall_satisfaction: 5, recommendation: 'Yes', comments: 'Very helpful program, learned a lot about internet safety.',         response_date: '2026-06-20' },
    { satisfaction_id: 'SAT002', project_id: 'EXT-2026-038', respondent_name: 'Nena Santos',     affiliation: 'Brgy. Lag-on', relevance_rating: 5, quality_rating: 4, benefit_impact_rating: 5, overall_satisfaction: 5, recommendation: 'Yes', comments: 'The trainers were very patient and knowledgeable.',                response_date: '2026-06-20' },
    { satisfaction_id: 'SAT003', project_id: 'EXT-2026-038', respondent_name: 'Ricardo Flores',  affiliation: 'Brgy. Lag-on', relevance_rating: 4, quality_rating: 5, benefit_impact_rating: 5, overall_satisfaction: 4, recommendation: 'Yes', comments: 'We hope there will be more programs like this in our barangay.', response_date: '2026-06-20' },
    { satisfaction_id: 'SAT004', project_id: 'EXT-2026-038', respondent_name: 'Gloria Reyes',    affiliation: 'Brgy. Lag-on', relevance_rating: 5, quality_rating: 4, benefit_impact_rating: 4, overall_satisfaction: 5, recommendation: 'Yes', comments: 'I can now access government services online independently.',         response_date: '2026-06-20' },
    { satisfaction_id: 'SAT005', project_id: 'EXT-2026-038', respondent_name: 'Manuel Torres',   affiliation: 'Brgy. Lag-on', relevance_rating: 4, quality_rating: 5, benefit_impact_rating: 4, overall_satisfaction: 4, recommendation: 'Yes', comments: 'Excellent training. Would recommend this to other barangays.',     response_date: '2026-06-20' }
  ],

  /* ===== 21. BACKUP_LOGS ===== */
  backupLogs: [
    { backup_id: 'BKP-001', timestamp: '2026-09-01 02:00 AM', triggered_by: 'System Auto-Backup', file_size: '4.2 MB', status: 'Success' },
    { backup_id: 'BKP-002', timestamp: '2026-09-15 02:00 AM', triggered_by: 'System Auto-Backup', file_size: '4.5 MB', status: 'Success' },
    { backup_id: 'BKP-003', timestamp: '2026-09-22 11:30 AM', triggered_by: 'PER001', file_size: '4.8 MB', status: 'Success' }
  ],

  /* ===== 22. FACULTY_SERVICE_REQUESTS (Speaker, Trainer/Coach, Focal Person) ===== */
  facultyRequests: [
    {
      request_id: 'FREQ-2026-001',
      request_code: 'CCMS-FREQ-2026-001',
      project_id: 'EXT-2026-048',
      activity_id: 'ACT003',
      activity_title: 'Module 3: Advanced JavaScript & Asynchronous Web APIs Workshop',
      faculty_id: 'PER004',
      faculty_name: 'Prof. Maria Santos',
      faculty_dept: 'Computer Science Department',
      faculty_expertise: 'Web Architectures & JavaScript Systems',
      proponent_id: 'PER001',
      proponent_name: 'Prince Jheck T. Juan',
      requested_role: 'Resource Speaker',
      event_date: '2026-10-18',
      event_time: '08:30 AM – 12:30 PM (4.0 hrs)',
      venue: 'CCMS Computer Lab 2, UCN Main Campus',
      modality: 'Face-to-Face Hands-On',
      inclusions: ['Certificate of Appreciation', 'Official Service Credits', 'Honorarium (₱3,000.00)'],
      justification: 'The web development workshop requires advanced technical instruction on asynchronous JavaScript and DOM manipulation for Daet LGU IT and administrative staff.',
      documents: {
        letter_of_intent: {
          name: 'Letter_of_Intent_Santos_WebDev.pdf',
          size: '245 KB',
          uploaded_at: '2026-10-02',
          file_type: 'PDF'
        },
        invitation_letter: {
          name: 'Official_Invitation_LGU_Daet_Santos.pdf',
          size: '312 KB',
          uploaded_at: '2026-10-02',
          file_type: 'PDF'
        },
        activity_program: {
          name: 'Activity_Matrix_JS_Training_Day3.pdf',
          size: '480 KB',
          uploaded_at: '2026-10-02',
          file_type: 'PDF'
        }
      },
      current_stage: 'Post-Event Compliance',
      status: 'Awaiting Post-Event Compliance',
      coordinator_review: {
        reviewed_by: 'Dr. Mary Grace Bolos',
        decision: 'Approved',
        decision_date: '2026-10-03',
        remarks: 'Faculty workload verified. No academic teaching schedule conflict. Endorsed for College Dean approval.'
      },
      dean_approval: {
        approved_by: 'Dr. Daniel Maligat',
        decision: 'Approved',
        decision_date: '2026-10-05',
        special_order_ref: 'CCMS-SO-2026-088',
        remarks: 'Approved as official community extension engagement. Special Order No. 2026-088 issued.'
      },
      post_event: {
        required: true,
        is_submitted: false,
        narrative_report: null,
        certificate_copy: null,
        submission_date: null,
        clearance_status: 'Pending Submission'
      }
    },
    {
      request_id: 'FREQ-2026-002',
      request_code: 'CCMS-FREQ-2026-002',
      project_id: 'EXT-2026-051',
      activity_id: 'ACT009',
      activity_title: 'Cybersecurity Hygiene & Threat Prevention Workshop for Barangay Leaders',
      faculty_id: 'PER007',
      faculty_name: 'Engr. Mark Anthony Reyes',
      faculty_dept: 'Information Technology Department',
      faculty_expertise: 'Network Security, Firewalls & Hardware Infrastructure',
      proponent_id: 'PER001',
      proponent_name: 'Prince Jheck T. Juan',
      requested_role: 'Technical Trainer / Coach',
      event_date: '2026-11-05',
      event_time: '01:00 PM – 05:00 PM (4.0 hrs)',
      venue: 'Daet Municipal Gymnasium Multi-Purpose Hall',
      modality: 'Face-to-Face',
      inclusions: ['Certificate of Recognition', 'Official Service Credits', 'Transportation Allowance'],
      justification: 'Hands-on live demonstration on phishing simulations and securing router hardware for barangay council staff.',
      documents: {
        letter_of_intent: {
          name: 'LOI_Reyes_Cybersecurity_Daet.pdf',
          size: '280 KB',
          uploaded_at: '2026-10-15',
          file_type: 'PDF'
        },
        invitation_letter: {
          name: 'Invitation_Liga_ng_mga_Barangay_Reyes.pdf',
          size: '350 KB',
          uploaded_at: '2026-10-15',
          file_type: 'PDF'
        },
        activity_program: {
          name: 'Cyber_Hygiene_Program_Matrix.pdf',
          size: '510 KB',
          uploaded_at: '2026-10-15',
          file_type: 'PDF'
        }
      },
      current_stage: 'College Dean Endorsement',
      status: 'Pending Dean Approval',
      coordinator_review: {
        reviewed_by: 'Dr. Mary Grace Bolos',
        decision: 'Approved',
        decision_date: '2026-10-17',
        remarks: 'Completeness check verified. Official invitation matches activity program. Routed to Dean Maligat for Special Order endorsement.'
      },
      dean_approval: null,
      post_event: {
        required: true,
        is_submitted: false,
        narrative_report: null,
        certificate_copy: null,
        submission_date: null,
        clearance_status: 'Awaiting Event Execution'
      }
    },
    {
      request_id: 'FREQ-2026-003',
      request_code: 'CCMS-FREQ-2026-003',
      project_id: 'EXT-2026-053',
      activity_id: 'ACT012',
      activity_title: 'Stakeholder Inception & System Architecture Consultation',
      faculty_id: 'PER005',
      faculty_name: 'Prof. Roberto De Leon',
      faculty_dept: 'Information Systems Department',
      faculty_expertise: 'Database Management Systems & Enterprise Architecture',
      proponent_id: 'PER001',
      proponent_name: 'Prince Jheck T. Juan',
      requested_role: 'Focal Person / Extension Representative',
      event_date: '2026-11-12',
      event_time: '09:00 AM – 03:00 PM (6.0 hrs)',
      venue: 'Brgy. Mangcamagong Session Hall, Basud',
      modality: 'Face-to-Face Field Deployment',
      inclusions: ['Certificate of Appreciation', 'Official Service Credits', 'Lunch & Travel Allowance'],
      justification: 'Lead institutional architectural validation and stakeholder consultation with the Sangguniang Barangay.',
      documents: {
        letter_of_intent: {
          name: 'LOI_DeLeon_Mangcamagong.pdf',
          size: '210 KB',
          uploaded_at: '2026-10-19',
          file_type: 'PDF'
        },
        invitation_letter: {
          name: 'LGU_Basud_Council_Invitation_DeLeon.pdf',
          size: '290 KB',
          uploaded_at: '2026-10-19',
          file_type: 'PDF'
        },
        activity_program: {
          name: 'Inception_Consultation_Program.pdf',
          size: '415 KB',
          uploaded_at: '2026-10-19',
          file_type: 'PDF'
        }
      },
      current_stage: 'Coordinator Completeness Review',
      status: 'Pending Coordinator Review',
      coordinator_review: null,
      dean_approval: null,
      post_event: {
        required: true,
        is_submitted: false,
        narrative_report: null,
        certificate_copy: null,
        submission_date: null,
        clearance_status: 'Awaiting Event Execution'
      }
    },
    {
      request_id: 'FREQ-2026-004',
      request_code: 'CCMS-FREQ-2026-004',
      project_id: 'EXT-2026-048',
      activity_id: 'ACT002',
      activity_title: 'Module 2: CSS3 Grid & Responsive Layouts Lab Session',
      faculty_id: 'PER003',
      faculty_name: 'Prof. Lei-anne Araña',
      faculty_dept: 'Information Technology Department',
      faculty_expertise: 'Front-End Development & Responsive Design',
      proponent_id: 'PER001',
      proponent_name: 'Prince Jheck T. Juan',
      requested_role: 'Module Facilitator',
      event_date: '2026-11-20',
      event_time: '01:30 PM – 04:30 PM (3.0 hrs)',
      venue: 'CCMS Computer Lab 1, UCN Main Campus',
      modality: 'Face-to-Face Laboratory',
      inclusions: ['Certificate of Appreciation', 'Official Service Credits'],
      justification: 'Assist participants in resolving individual layout and responsive design challenges during hands-on exercises.',
      documents: {
        letter_of_intent: {
          name: 'LOI_Arana_LabFacilitator.pdf',
          size: '195 KB',
          uploaded_at: '2026-10-14',
          file_type: 'PDF'
        },
        invitation_letter: {
          name: 'Invitation_Daet_LGU_Draft.docx',
          size: '110 KB',
          uploaded_at: '2026-10-14',
          file_type: 'DOCX'
        },
        activity_program: {
          name: 'Schedule_CSS_Grid_Module2.pdf',
          size: '320 KB',
          uploaded_at: '2026-10-14',
          file_type: 'PDF'
        }
      },
      current_stage: 'Returned for Revision',
      status: 'Returned for Revision',
      coordinator_review: {
        reviewed_by: 'Dr. Mary Grace Bolos',
        decision: 'Returned',
        decision_date: '2026-10-16',
        remarks: 'Please re-upload a signed copy of the Official Invitation Letter (the current upload is an unsigned draft). Ensure venue room reservation is indicated.'
      },
      dean_approval: null,
      post_event: {
        required: true,
        is_submitted: false,
        narrative_report: null,
        certificate_copy: null,
        submission_date: null,
        clearance_status: 'Awaiting Event Execution'
      }
    },
    {
      request_id: 'FREQ-2026-005',
      request_code: 'CCMS-FREQ-2026-005',
      project_id: 'EXT-2026-041',
      activity_id: 'ACT006',
      activity_title: 'DOST ICT Consultancy & Technology Needs Assessment Seminar',
      faculty_id: 'PER008',
      faculty_name: 'Prof. Clarissa Mendoza',
      faculty_dept: 'Computer Science Department',
      faculty_expertise: 'Artificial Intelligence & Predictive Analytics',
      proponent_id: 'PER001',
      proponent_name: 'Prince Jheck T. Juan',
      requested_role: 'Resource Speaker',
      event_date: '2026-09-25',
      event_time: '09:00 AM – 12:00 PM (3.0 hrs)',
      venue: 'DOST CamNorte Provincial Science & Technology Center, Daet',
      modality: 'Face-to-Face',
      inclusions: ['Certificate of Plaque', 'Official Service Credits', 'Honorarium (₱3,500.00)'],
      justification: 'Provide expert technical lecture on emerging AI and workflow automation tools for provincial government and DOST personnel.',
      documents: {
        letter_of_intent: {
          name: 'LOI_Mendoza_DOST_Talk.pdf',
          size: '260 KB',
          uploaded_at: '2026-09-10',
          file_type: 'PDF'
        },
        invitation_letter: {
          name: 'DOST_Official_Speaker_Invite_Mendoza.pdf',
          size: '420 KB',
          uploaded_at: '2026-09-10',
          file_type: 'PDF'
        },
        activity_program: {
          name: 'DOST_Consultancy_Program_Matrix.pdf',
          size: '390 KB',
          uploaded_at: '2026-09-10',
          file_type: 'PDF'
        }
      },
      current_stage: 'Archived & Cleared',
      status: 'Completed & Cleared',
      coordinator_review: {
        reviewed_by: 'Dr. Mary Grace Bolos',
        decision: 'Approved',
        decision_date: '2026-09-12',
        remarks: 'Endorsed with full compliance to university extension guidelines.'
      },
      dean_approval: {
        approved_by: 'Dr. Daniel Maligat',
        decision: 'Approved',
        decision_date: '2026-09-14',
        special_order_ref: 'CCMS-SO-2026-071',
        remarks: 'Approved. Special Order issued for DOST technical engagement.'
      },
      post_event: {
        required: true,
        is_submitted: true,
        narrative_report: {
          name: 'Terminal_Narrative_Report_DOST_Mendoza.pdf',
          size: '1.8 MB',
          uploaded_at: '2026-09-28',
          file_type: 'PDF'
        },
        certificate_copy: {
          name: 'Certificate_Appreciation_DOST_Mendoza.pdf',
          size: '950 KB',
          uploaded_at: '2026-09-28',
          file_type: 'PDF'
        },
        submission_date: '2026-09-28',
        cleared_by: 'Dr. Mary Grace Bolos',
        cleared_at: '2026-09-29',
        clearance_status: 'Cleared & Archived'
      }
    }
  ],

  /* ===== NOTIFICATIONS (Legacy Fallback) ===== */
  notifications: [
    { notif_id: 'NOT001', type: 'approval',    title: 'Module 3 progress update — EXT-2026-048',  message: 'Activity ACT003 is 65% complete. JavaScript module ongoing.',                time: '2 hours ago',  read: false, icon: 'fa-tasks',        color: 'var(--maroon)' },
    { notif_id: 'NOT002', type: 'funding',     title: 'Funding released for EXT-2026-041',         message: 'UCN Extension Office Fund ₱35,000 fully released.',                           time: '5 hours ago',  read: false, icon: 'fa-coins',        color: 'var(--gold)' },
    { notif_id: 'NOT003', type: 'completion',  title: 'EXT-2026-038 completion approved',          message: 'Narrative report approved by Extension Coordinator. Project archived.',       time: '1 day ago',    read: true,  icon: 'fa-check-circle', color: '#16a34a' },
    { notif_id: 'NOT004', type: 'submission',  title: 'New proposal submitted — EXT-2026-035 v2',  message: 'Revised Data Analytics Workshop proposal awaiting eligibility check.',        time: '2 days ago',   read: true,  icon: 'fa-file-alt',     color: '#2563eb' },
    { notif_id: 'NOT005', type: 'deadline',    title: 'ACT003 ends Sep 25 — action needed',        message: 'EXT-2026-048 Module 3 schedule ends in 3 days. Please update attendance.',   time: '3 days ago',   read: true,  icon: 'fa-calendar-alt', color: '#d97706' }
  ],

  /* ===== USER-SPECIFIC NOTIFICATIONS (Partitioned per User Persona) ===== */
  roleNotifications: {
    proponent: [
      {
        notif_id: 'NOT-P01',
        role: 'proponent',
        type: 'approval',
        title: 'Stage 2 Dean Endorsement Routing: PROP-001',
        message: 'Dr. Mary Grace Bolos (Extension Coordinator) completed completeness verification for "Web Development Training for CamNorte Out-of-School Youth" (EXT-2026-048) and officially routed it to College Dean Dr. Daniel Maligat for final college endorsement.',
        time: '15 mins ago',
        read: false,
        icon: 'fa-clipboard-check',
        color: '#8B1A1A',
        actionUrl: 'proposals.html',
        actionLabel: 'View Proposal'
      },
      {
        notif_id: 'NOT-P02',
        role: 'proponent',
        type: 'documents',
        title: 'Document Verified: Attendance Sheet Approved',
        message: 'Submitted document "DOC006: Attendance_Module2.pdf" for EXT-2026-048 was verified and signed by Extension Coordinator Dr. Mary Grace Bolos. Honorarium processing cleared.',
        time: '2 hours ago',
        read: false,
        icon: 'fa-file-signature',
        color: '#2563EB',
        actionUrl: 'documents.html',
        actionLabel: 'View Documents'
      },
      {
        notif_id: 'NOT-P03',
        role: 'proponent',
        type: 'deadline',
        title: 'Upcoming Milestone Deadline: Module 3 Completion',
        message: 'Project EXT-2026-048 — Module 3: JavaScript Basics schedule concludes on Sep 25. Ensure student assessments and participant evaluation records are uploaded.',
        time: '1 day ago',
        read: false,
        icon: 'fa-calendar-alt',
        color: '#D97706',
        actionUrl: 'activities.html',
        actionLabel: 'Check Activity'
      },
      {
        notif_id: 'NOT-P04',
        role: 'proponent',
        type: 'funding',
        title: 'Institutional Extension Grant Released (₱35,000)',
        message: 'Fund release verified for Project EXT-2026-041 (ICT Consultancy Services for DOST CamNorte). Tranche 1 ₱35,000 is now available for operational disbursement.',
        time: '2 days ago',
        read: true,
        icon: 'fa-coins',
        color: '#DAA520',
        actionUrl: 'funding.html',
        actionLabel: 'View Funding'
      },
      {
        notif_id: 'NOT-P05',
        role: 'proponent',
        type: 'completion',
        title: 'Project EXT-2026-038 Marked Completed',
        message: 'Digital Literacy Program for Brgy. Lag-on — Terminal & Narrative Report approved by Extension Office. Official Certificate of Extension Completion generated.',
        time: '3 days ago',
        read: true,
        icon: 'fa-check-circle',
        color: '#16A34A',
        actionUrl: 'completion.html',
        actionLabel: 'View Certificate'
      },
      {
        notif_id: 'NOT-P06',
        role: 'proponent',
        type: 'submission',
        title: 'Proposal Revision Notice: PROP-005',
        message: 'Coordinator Bolos returned "IT Solutions for Micro-Enterprises" (EXT-2026-043) with remarks: "Please update Form 01B Line-Item Budget to reflect current travel guidelines."',
        time: '4 days ago',
        read: true,
        icon: 'fa-undo',
        color: '#DC2626',
        actionUrl: 'proposals.html',
        actionLabel: 'Revise Proposal'
      }
    ],
    coordinator: [
      {
        notif_id: 'NOT-C01',
        role: 'coordinator',
        type: 'submission',
        title: 'New Faculty Proposal Submitted for Checking',
        message: 'Prof. Roberto De Leon submitted proposal PROP-010 ("Community Cyber Hygiene & Online Safety" — EXT-2026-053). Completeness & eligibility check required before endorsement.',
        time: '30 mins ago',
        read: false,
        icon: 'fa-file-alt',
        color: '#2563EB',
        actionUrl: 'proposals.html',
        actionLabel: 'Review Proposal'
      },
      {
        notif_id: 'NOT-C02',
        role: 'coordinator',
        type: 'documents',
        title: 'New Extension Documents Uploaded (4 files)',
        message: 'Faculty proponents uploaded 4 new verification files today: Work & Financial Plan (EXT-2026-051), Module 2 Attendance (EXT-2026-048), and 2 Photo Documentation sheets.',
        time: '3 hours ago',
        read: false,
        icon: 'fa-folder-open',
        color: '#7C3AED',
        actionUrl: 'documents.html',
        actionLabel: 'Verify Files'
      },
      {
        notif_id: 'NOT-C03',
        role: 'coordinator',
        type: 'approval',
        title: 'Dean Maligat Endorsed Proposal PROP-002',
        message: 'College Dean Dr. Daniel Maligat officially signed and endorsed "Automated Barangay Clearance & Profiling System" (EXT-2026-045). Ready for routing to University Extension Council.',
        time: '6 hours ago',
        read: false,
        icon: 'fa-signature',
        color: '#8B1A1A',
        actionUrl: 'approvals.html',
        actionLabel: 'View Approval'
      },
      {
        notif_id: 'NOT-C04',
        role: 'coordinator',
        type: 'deadline',
        title: 'Missing Mandatory Requirement: PROP-013',
        message: 'Proposal PROP-013 ("Barangay Health Center Digital Records" — EXT-2026-056) is missing Barangay Council Resolution / LGU Endorsement letter. Action reminder sent to proponent.',
        time: '1 day ago',
        read: true,
        icon: 'fa-exclamation-triangle',
        color: '#D97706',
        actionUrl: 'proposals.html',
        actionLabel: 'View Item'
      },
      {
        notif_id: 'NOT-C05',
        role: 'coordinator',
        type: 'approval',
        title: 'Community Partner MOA Validated',
        message: 'LGU Daet Municipal Social Welfare & Development Office signed partner agreement for Project EXT-2026-048. Partner profile updated in registry.',
        time: '2 days ago',
        read: true,
        icon: 'fa-handshake',
        color: '#059669',
        actionUrl: 'partners.html',
        actionLabel: 'View Partner'
      },
      {
        notif_id: 'NOT-C06',
        role: 'coordinator',
        type: 'deadline',
        title: 'Q3 Extension Accomplishment Report Due',
        message: 'Quarterly Extension Accomplishment Report deadline is in 5 calendar days. 18 active projects logged with 88% average milestone completion.',
        time: '3 days ago',
        read: true,
        icon: 'fa-calendar-check',
        color: '#6B7280',
        actionUrl: 'reports.html',
        actionLabel: 'Open Reports'
      }
    ],
    dean: [
      {
        notif_id: 'NOT-D01',
        role: 'dean',
        type: 'approval',
        title: 'Action Required: Dean Endorsement for PROP-001',
        message: 'Extension Coordinator Dr. Mary Grace Bolos completed Stage 1 verification and routed "Web Development Training for CamNorte Out-of-School Youth" (EXT-2026-048) for your College Dean Endorsement.',
        time: '1 hour ago',
        read: false,
        icon: 'fa-stamp',
        color: '#8B1A1A',
        actionUrl: 'approvals.html',
        actionLabel: 'Endorse Proposal'
      },
      {
        notif_id: 'NOT-D02',
        role: 'dean',
        type: 'funding',
        title: 'College Budget Utilization Alert: 88.0% Committed',
        message: 'College Extension Budget utilization has reached ₱405,000.00 of the ₱460,000.00 allocated A.Y. 2026-2027 fund. Available contingency reserve is now ₱55,000.00.',
        time: '4 hours ago',
        read: false,
        icon: 'fa-chart-pie',
        color: '#DAA520',
        actionUrl: 'funding.html',
        actionLabel: 'Audit Budget'
      },
      {
        notif_id: 'NOT-D03',
        role: 'dean',
        type: 'approval',
        title: 'Executive Endorsement Recorded: PROP-002',
        message: 'Your executive endorsement for "Automated Barangay Clearance System" (EXT-2026-045) was transmitted to Vice President for Research & Extension (OVPRE).',
        time: '1 day ago',
        read: true,
        icon: 'fa-check-double',
        color: '#16A34A',
        actionUrl: 'approvals.html',
        actionLabel: 'View Log'
      },
      {
        notif_id: 'NOT-D04',
        role: 'dean',
        type: 'reports',
        title: 'Faculty Extension Participation Quota: 84.2%',
        message: '32 out of 38 CCMS faculty members are actively involved in approved community extension projects this term. Department of Information Technology leads at 88% engagement.',
        time: '2 days ago',
        read: true,
        icon: 'fa-users',
        color: '#2563EB',
        actionUrl: 'reports.html',
        actionLabel: 'View Quota'
      },
      {
        notif_id: 'NOT-D05',
        role: 'dean',
        type: 'completion',
        title: 'Terminal Audit & Sign-off: EXT-2026-038',
        message: 'Project EXT-2026-038 (Digital Literacy for Brgy. Lag-on) completed all deliverables, financial liquidations, and community impact surveys. Archived by Coordinator Bolos.',
        time: '4 days ago',
        read: true,
        icon: 'fa-archive',
        color: '#6B7280',
        actionUrl: 'completion.html',
        actionLabel: 'Audit Project'
      }
    ]
  },

  /* ===== SYSTEM STATS (Aggregated) ===== */
  stats: {
    totalProjects: 48, activeProjects: 18, pendingApprovals: 7, completedProjects: 23,
    facultyParticipants: 32, studentParticipants: 78, communityBeneficiaries: 2850,
    partnerOrganizations: 35, totalHoursLogged: 1240,
    totalFunding: { institutional: 285000, external: 120000, pending: 55000, total: 460000 }
  },

  /* ===== AUDIT LOG ===== */
  auditLog: [
    { timestamp: 'Sep 22, 10:52 AM', user: 'Juan, Prince Jheck',    action: 'Login',    details: 'Successful login',                                        ip: '192.168.1.100', badge: 'badge-review' },
    { timestamp: 'Sep 22, 8:30 AM',  user: 'Bolos, Mary Grace',     action: 'Approve',  details: 'Approved APR001 — EXT-2026-048 Eligibility Check',         ip: '192.168.1.102', badge: 'badge-approved' },
    { timestamp: 'Sep 21, 5:15 PM',  user: 'Araña, Lei-anne',       action: 'Upload',   details: 'Uploaded DOC006 Attendance_Module2.pdf for EXT-2026-048',  ip: '192.168.1.105', badge: 'badge-progress' },
    { timestamp: 'Sep 21, 3:00 PM',  user: 'Santos, Maria R.',      action: 'Update',   details: 'Updated UAT progress status for EXT-2026-045 ACT008',      ip: '192.168.1.108', badge: 'badge-pending' },
    { timestamp: 'Sep 20, 2:30 PM',  user: 'Juan, Prince Jheck',    action: 'Create',   details: 'Registered 3 ACTIVITY_PARTICIPANT records for ACT003',     ip: '192.168.1.100', badge: 'badge-completed' }
  ],

  /* ===== HELPER / LOOKUP FUNCTIONS ===== */
  getProjectById(id) {
    let proj = this.projects.find(p => p.project_id === id);
    if (!proj) {
      try {
        const custom = JSON.parse(localStorage.getItem('grace_custom_projects')) || [];
        proj = custom.find(p => p.project_id === id);
      } catch (e) {}
    }
    return proj;
  },
  getPersonById(id)            { return this.persons.find(p => p.person_id === id); },
  getPersonName(id)            { const p = this.getPersonById(id); return p ? `${p.first_name} ${p.last_name}` : 'Unknown'; },
  getUserByRole(role)          { const map={coordinator:'U002',proponent:'U001',dean:'U006'}; return this.userAccounts.find(u=>u.user_id===map[role]); },
  getActivitiesByProject(pid)  { return this.activities.filter(a => a.project_id === pid); },
  getDocumentsByProject(pid)   { return this.documents.filter(d => d.project_id === pid); },
  getTeamByProject(pid)        { return this.projectTeams.filter(t => t.project_id === pid); },
  getApprovalsByProject(pid)   { return this.approvals.filter(a => a.project_id === pid); },
  getFundingByProject(pid)     { return this.projectFunding.filter(f => f.project_id === pid); },
  getParticipantsByActivity(aid){ return this.activityParticipants.filter(p => p.activity_id === aid); },
  getBeneficiariesByProject(pid){ return this.projectBeneficiaries.filter(pb => pb.project_id === pid); },
  getPartnersByProject(pid)    { return this.projectPartners.filter(pp => pp.project_id === pid); },
  getProposalsByProject(pid)   { return this.proposals.filter(p => p.project_id === pid); },
  getCompletionByProject(pid)  { return this.completions.find(c => c.project_id === pid); },
  getSatisfactionsByProject(pid){ return this.satisfactions.filter(s => s.project_id === pid); },
  getDocumentsForReport(rid)   {
    const rdocs = this.reportDocuments.filter(rd => rd.report_id === rid);
    return rdocs.map(rd => this.documents.find(d => d.document_id === rd.document_id)).filter(Boolean);
  },
  getFundingSourceById(id)     { return this.fundingSources.find(fs => fs.funding_source_id === id); },
  getPartnerById(id)           { return this.partners.find(p => p.partner_id === id); },
  getBeneficiaryById(id)       { return this.beneficiaries.find(b => b.beneficiary_id === id); },
  formatCurrency(amount)       { return '₱' + Number(amount).toLocaleString(); },
  getCurrentRole()             { return localStorage.getItem('graceRole') || 'proponent'; },
  getCurrentUser() {
    const role = this.getCurrentRole();
    const acc = this.getUserByRole(role);
    if (!acc) return null;
    return { ...acc, person: this.getPersonById(acc.person_id) };
  },

  /* ===== ROLE NOTIFICATIONS MANAGEMENT API ===== */
  getNotificationsForRole(targetRole) {
    const role = targetRole || this.getCurrentRole();
    const base = (this.roleNotifications && this.roleNotifications[role]) ? JSON.parse(JSON.stringify(this.roleNotifications[role])) : [];
    
    // Merge dynamic notifications from localStorage
    let dynamic = [];
    try {
      const allDynamic = JSON.parse(localStorage.getItem('grace_dynamic_notifications')) || [];
      dynamic = allDynamic.filter(item => {
        if (!item) return false;
        if (Array.isArray(item.roles)) return item.roles.includes(role);
        return item.role === role || item.role === 'all';
      });
    } catch (e) {
      dynamic = [];
    }
    
    const combined = [...dynamic, ...base];
    
    // Apply user read/delete state overrides
    let state = {};
    try {
      state = JSON.parse(localStorage.getItem(`grace_notif_state_${role}`)) || {};
    } catch (e) {
      state = {};
    }
    
    return combined
      .filter(item => !state[item.notif_id]?.deleted)
      .map(item => {
        if (state[item.notif_id] && typeof state[item.notif_id].read === 'boolean') {
          return { ...item, read: state[item.notif_id].read };
        }
        return item;
      });
  },

  getUnreadCount(targetRole) {
    const list = this.getNotificationsForRole(targetRole);
    return list.filter(n => !n.read).length;
  },

  markNotificationRead(notifId, targetRole, isRead = true) {
    const role = targetRole || this.getCurrentRole();
    let state = {};
    try {
      state = JSON.parse(localStorage.getItem(`grace_notif_state_${role}`)) || {};
    } catch (e) {}
    state[notifId] = { ...(state[notifId] || {}), read: isRead };
    localStorage.setItem(`grace_notif_state_${role}`, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('grace-notifs-updated', { detail: { role, notifId, isRead } }));
  },

  markAllNotificationsRead(targetRole) {
    const role = targetRole || this.getCurrentRole();
    const list = this.getNotificationsForRole(role);
    let state = {};
    try {
      state = JSON.parse(localStorage.getItem(`grace_notif_state_${role}`)) || {};
    } catch (e) {}
    list.forEach(item => {
      state[item.notif_id] = { ...(state[item.notif_id] || {}), read: true };
    });
    localStorage.setItem(`grace_notif_state_${role}`, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('grace-notifs-updated', { detail: { role } }));
  },

  deleteNotification(notifId, targetRole) {
    const role = targetRole || this.getCurrentRole();
    let state = {};
    try {
      state = JSON.parse(localStorage.getItem(`grace_notif_state_${role}`)) || {};
    } catch (e) {}
    state[notifId] = { ...(state[notifId] || {}), deleted: true };
    localStorage.setItem(`grace_notif_state_${role}`, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('grace-notifs-updated', { detail: { role, notifId, deleted: true } }));
  },

  addDynamicNotification(notif) {
    if (!notif) return;
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem('grace_dynamic_notifications')) || [];
    } catch (e) {
      list = [];
    }
    const fullNotif = {
      notif_id: notif.notif_id || ('NOT-DYN-' + Date.now()),
      time: notif.time || 'Just now',
      read: false,
      icon: notif.icon || 'fa-bell',
      color: notif.color || '#8B1A1A',
      ...notif
    };
    list.unshift(fullNotif);
    localStorage.setItem('grace_dynamic_notifications', JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('grace-notifs-updated', { detail: { newNotif: fullNotif } }));
    return fullNotif;
  },

  resetNotificationsForRole(targetRole) {
    const role = targetRole || this.getCurrentRole();
    localStorage.removeItem(`grace_notif_state_${role}`);
    window.dispatchEvent(new CustomEvent('grace-notifs-updated', { detail: { role, reset: true } }));
  },

  /* ===== FACULTY SERVICE REQUESTS API ===== */
  getFacultyRequests() {
    let custom = [];
    try {
      custom = JSON.parse(localStorage.getItem('grace_faculty_requests')) || [];
    } catch (e) {
      custom = [];
    }
    const base = this.facultyRequests || [];
    const customIds = new Set(custom.map(r => r.request_id));
    const merged = [...custom, ...base.filter(r => !customIds.has(r.request_id))];
    return merged;
  },

  getFacultyRequestById(id) {
    const list = this.getFacultyRequests();
    return list.find(r => r.request_id === id);
  },

  saveFacultyRequest(req) {
    if (!req) return;
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem('grace_faculty_requests')) || [];
    } catch (e) {
      list = [];
    }
    const idx = list.findIndex(r => r.request_id === req.request_id);
    if (idx > -1) {
      list[idx] = req;
    } else {
      list.unshift(req);
    }
    localStorage.setItem('grace_faculty_requests', JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('grace-faculty-requests-updated', { detail: { request: req } }));
    return req;
  },

  updateFacultyRequestReview(reqId, decision, remarks, reviewerRole, specialOrderRef = '') {
    const req = this.getFacultyRequestById(reqId);
    if (!req) return null;
    const today = new Date().toISOString().slice(0, 10);

    if (reviewerRole === 'coordinator') {
      req.coordinator_review = {
        reviewed_by: 'Dr. Mary Grace Bolos',
        decision: decision,
        decision_date: today,
        remarks: remarks || (decision === 'Approved' || decision === 'Endorsed' ? 'Endorsed for College Dean approval.' : '')
      };

      if (decision === 'Endorsed' || decision === 'Endorse to Dean' || decision === 'Endorsement to Dean') {
        req.status = 'Pending Dean Approval';
        req.current_stage = 'College Dean Endorsement';
        if (typeof this.addDynamicNotification === 'function') {
          this.addDynamicNotification({
            role: 'dean',
            type: 'approval',
            title: `Dean Action Required: Faculty Request ${req.request_id}`,
            message: `Coordinator Dr. Mary Grace Bolos endorsed faculty service request for ${req.faculty_name} (${req.requested_role}) on ${req.project_id}. Awaiting College Dean Special Order.`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'Review Request'
          });
          this.addDynamicNotification({
            role: 'proponent',
            type: 'approval',
            title: `Coordinator Endorsed to Dean: ${req.request_id}`,
            message: `Dr. Bolos endorsed your faculty request for ${req.faculty_name} to College Dean Dr. Daniel Maligat for Special Order issuance.`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'Track Request'
          });
        }
      } else if (decision === 'Approved') {
        req.status = 'Approved / Special Order Issued';
        req.current_stage = 'Awaiting Post-Event Compliance';
        if (typeof this.addDynamicNotification === 'function') {
          this.addDynamicNotification({
            role: 'proponent',
            type: 'approval',
            title: `Coordinator Approved: ${req.request_id}`,
            message: `Extension Coordinator Dr. Bolos approved faculty request for ${req.faculty_name}.`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'View Request'
          });
        }
      } else if (decision === 'Returned' || decision === 'Revised') {
        req.status = 'Returned for Revision';
        req.current_stage = 'Proponent Revision Required';
        if (typeof this.addDynamicNotification === 'function') {
          this.addDynamicNotification({
            role: 'proponent',
            type: 'submission',
            title: `Faculty Request Returned for Revision: ${req.request_id}`,
            message: `Coordinator Dr. Bolos requested revisions for ${req.faculty_name}: "${remarks}". Please update and resubmit.`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'Revise Request'
          });
        }
      } else if (decision === 'Rejected') {
        req.status = 'Rejected';
        req.current_stage = 'Request Rejected';
        if (typeof this.addDynamicNotification === 'function') {
          this.addDynamicNotification({
            role: 'proponent',
            type: 'submission',
            title: `Faculty Request Rejected: ${req.request_id}`,
            message: `Coordinator Dr. Bolos rejected request for ${req.faculty_name}: "${remarks}".`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'View Details'
          });
        }
      }
    } else if (reviewerRole === 'dean') {
      const soRef = specialOrderRef || ('CCMS-SO-2026-' + Math.floor(100 + Math.random() * 900));
      req.dean_approval = {
        approved_by: 'Dr. Daniel Maligat',
        decision: decision,
        decision_date: today,
        special_order_ref: decision === 'Approved' ? soRef : null,
        remarks: remarks || (decision === 'Approved' ? 'Approved as official CCMS faculty extension service engagement. Special Order issued.' : '')
      };

      if (decision === 'Approved') {
        req.status = 'Approved / Special Order Issued';
        req.current_stage = 'Post-Event Compliance';
        if (typeof this.addDynamicNotification === 'function') {
          this.addDynamicNotification({
            role: 'proponent',
            type: 'approval',
            title: `Special Order Issued: ${req.request_id}`,
            message: `Dean Dr. Daniel Maligat approved and signed Special Order (${soRef}) for ${req.faculty_name} as ${req.requested_role}. Event authorization granted!`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'View Special Order'
          });
          this.addDynamicNotification({
            role: 'coordinator',
            type: 'approval',
            title: `Dean Approved Faculty Request: ${req.request_id}`,
            message: `Dean Maligat issued Special Order (${soRef}) for ${req.faculty_name}.`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'View Order'
          });
        }
      } else if (decision === 'Returned' || decision === 'Revised') {
        req.status = 'Returned for Revision';
        req.current_stage = 'Proponent Revision Required';
        if (typeof this.addDynamicNotification === 'function') {
          this.addDynamicNotification({
            role: 'proponent',
            type: 'submission',
            title: `Dean Returned Request: ${req.request_id}`,
            message: `Dean Maligat returned request for ${req.faculty_name} with remarks: "${remarks}".`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'Revise Request'
          });
          this.addDynamicNotification({
            role: 'coordinator',
            type: 'submission',
            title: `Dean Returned Request: ${req.request_id}`,
            message: `Dean Maligat returned request for ${req.faculty_name} to Coordinator desk.`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'Review Request'
          });
        }
      } else if (decision === 'Rejected') {
        req.status = 'Rejected';
        req.current_stage = 'Request Rejected';
        if (typeof this.addDynamicNotification === 'function') {
          this.addDynamicNotification({
            role: 'proponent',
            type: 'submission',
            title: `Dean Disapproved Request: ${req.request_id}`,
            message: `Dean Maligat rejected faculty request for ${req.faculty_name}: "${remarks}".`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'View Details'
          });
          this.addDynamicNotification({
            role: 'coordinator',
            type: 'submission',
            title: `Dean Disapproved Request: ${req.request_id}`,
            message: `Dean Maligat rejected faculty request for ${req.faculty_name}.`,
            actionUrl: 'faculty-requests.html',
            actionLabel: 'View Details'
          });
        }
      }
    }

    return this.saveFacultyRequest(req);
  },

  reassignFaculty(reqId, newFacultyId, remarks = '') {
    const req = this.getFacultyRequestById(reqId);
    if (!req) return null;
    const person = this.persons.find(p => p.person_id === newFacultyId);
    if (!person) return null;

    const oldFacultyName = req.faculty_name;
    req.faculty_id = person.person_id;
    req.faculty_name = `${person.first_name} ${person.last_name}`;
    req.faculty_dept = person.affiliation ? (person.affiliation.split('—')[1]?.trim() || person.affiliation) : 'CCMS Faculty';
    req.faculty_expertise = person.designation || 'Extension Specialist';

    if (!req.reassignment_history) req.reassignment_history = [];
    const today = new Date().toISOString().slice(0, 10);
    req.reassignment_history.push({
      from_name: oldFacultyName,
      to_name: req.faculty_name,
      reassigned_by: 'Dr. Mary Grace Bolos (Extension Coordinator)',
      reassigned_at: today,
      remarks: remarks || `Reassigned from ${oldFacultyName} to ${req.faculty_name} to optimize technical fit and availability.`
    });

    if (typeof this.addDynamicNotification === 'function') {
      this.addDynamicNotification({
        role: 'proponent',
        type: 'update',
        title: `Faculty Reassigned: ${req.request_id}`,
        message: `Extension Coordinator Dr. Bolos reassigned request ${req.request_code} from ${oldFacultyName} to ${req.faculty_name}. Remarks: "${remarks || 'Schedule/Expertise alignment'}".`,
        actionUrl: 'faculty-requests.html',
        actionLabel: 'View Request'
      });
    }

    return this.saveFacultyRequest(req);
  },

  submitPostEventCompliance(reqId, narrativeDoc, certificateDoc, notes = '') {
    const req = this.getFacultyRequestById(reqId);
    if (!req) return null;
    const today = new Date().toISOString().slice(0, 10);
    req.post_event = {
      required: true,
      is_submitted: true,
      narrative_report: narrativeDoc,
      certificate_copy: certificateDoc,
      submission_date: today,
      notes: notes,
      clearance_status: 'Cleared & Archived',
      cleared_by: 'Dr. Mary Grace Bolos',
      cleared_at: today
    };
    req.status = 'Completed & Cleared';
    req.current_stage = 'Archived & Cleared';

    if (typeof this.addDynamicNotification === 'function') {
      this.addDynamicNotification({
        role: 'coordinator',
        type: 'documents',
        title: `Post-Event Files Submitted: ${req.request_id}`,
        message: `Proponent submitted Narrative Report & Certificate for ${req.faculty_name} (${req.activity_title}). Cleared & archived.`,
        actionUrl: 'faculty-requests.html',
        actionLabel: 'View Post-Event Files'
      });
      this.addDynamicNotification({
        role: 'dean',
        type: 'completion',
        title: `Faculty Engagement Concluded: ${req.request_id}`,
        message: `${req.faculty_name}'s engagement as ${req.requested_role} completed and documented. Narrative report and certificate on file.`,
        actionUrl: 'faculty-requests.html',
        actionLabel: 'View Record'
      });
      this.addDynamicNotification({
        role: 'proponent',
        type: 'completion',
        title: `Post-Event Cleared: ${req.request_id}`,
        message: `Narrative report and certificate for ${req.faculty_name} officially filed and cleared by Extension Coordinator.`,
        actionUrl: 'faculty-requests.html',
        actionLabel: 'View Clearance'
      });
    }

    return this.saveFacultyRequest(req);
  },

  resetFacultyRequests() {
    localStorage.removeItem('grace_faculty_requests');
    window.dispatchEvent(new CustomEvent('grace-faculty-requests-updated', { detail: { reset: true } }));
  }
};

/* ===== ADDITIONAL PROJECTS / PROPOSALS (expanded sample data) ===== */
(function () {
  const mk = (id, title, desc, service, source, start, end, status, by, budget) => ({
    project_id: id, project_code: 'CCMS-' + id, title: title, description: desc,
    service_type: service, source_type: source, start_date: start, end_date: end,
    project_status: status, ntp_issued: status === 'Ongoing' || status === 'Approved', ntp_date: null, ntp_reference: null,
    moa_signed: false, moa_reference: null, created_by: by, budget: budget
  });
  GRACE.projects.push(
    mk('EXT-2026-051', 'Cybersecurity Awareness Training for Barangay Officials', 'Hands-on training on password hygiene, phishing detection and safe handling of barangay records for officials of Daet barangays.', 'Skills Enhancement Training', 'External Request', '2026-09-10', '2026-11-05', 'Ongoing', 'PER001', '₱ 38,000.00'),
    mk('EXT-2026-052', 'Mobile App Development Workshop for SK Officials', 'A three-day workshop introducing Sangguniang Kabataan officials to mobile app design and basic development.', 'Skills Enhancement Training', 'Faculty-Initiated', '2026-11-10', '2026-12-12', 'Submitted', 'PER001', '₱ 42,500.00'),
    mk('EXT-2026-053', 'Barangay Information System for Brgy. Mangcamagong', 'Design and deployment of a resident records and certificate issuance system for the barangay hall.', 'System Development & Implementation', 'External Request', '2026-11-01', '2027-02-28', 'Under Review', 'PER001', '₱ 95,000.00'),
    mk('EXT-2026-054', 'Community Digital Literacy for Senior Citizens', 'Weekend basic computer and mobile phone literacy sessions for senior citizens of Daet.', 'Community Extension Service', 'Faculty-Initiated', '2026-10-15', '2026-12-20', 'Rejected', 'PER001', '₱ 150,000.00'),
    mk('EXT-2026-055', 'E-Learning Content Development for Daet National High School', 'Consultancy for building video and module content for blended learning for junior high teachers.', 'Consultancy Services', 'External Request', '2026-11-15', '2027-01-30', 'Pending', 'PER004', '₱ 60,000.00'),
    mk('EXT-2026-056', 'IT Equipment Maintenance Training for LGU Staff', 'Preventive maintenance and basic troubleshooting training for municipal IT support staff.', 'Skills Enhancement Training', 'External Request', '2026-08-05', '2026-09-20', 'Approved', 'PER005', '₱ 32,000.00'),
    mk('EXT-2026-057', 'Social Media & Digital Marketing for Local MSMEs', 'Training for micro and small entrepreneurs on online selling, branding and social media advertising.', 'Skills Enhancement Training', 'Faculty-Initiated', '2026-09-01', '2026-10-30', 'Approved', 'PER003', '₱ 28,500.00')
  );

  GRACE.proposals.push(
    { proposal_id: 'PROP-008', project_id: 'EXT-2026-051', version_no: 1, submission_date: '2026-08-12', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'Approved. MOA with Daet barangay council on file.' },
    { proposal_id: 'PROP-009', project_id: 'EXT-2026-052', version_no: 1, submission_date: '2026-10-12', evaluation_status: 'Pending', approval_status: 'Pending', remarks: 'Awaiting College Dean endorsement.' },
    { proposal_id: 'PROP-010', project_id: 'EXT-2026-053', version_no: 1, submission_date: '2026-10-05', evaluation_status: 'Under Evaluation', approval_status: 'Pending', remarks: 'Technical evaluation of system scope in progress.' },
    { proposal_id: 'PROP-011', project_id: 'EXT-2026-054', version_no: 1, submission_date: '2026-09-28', evaluation_status: 'Rejected', approval_status: 'Rejected', remarks: 'Rejected: budget exceeds the extension ceiling and no partner commitment letter was attached.' },
    { proposal_id: 'PROP-012', project_id: 'EXT-2026-055', version_no: 1, submission_date: '2026-09-30', evaluation_status: 'Returned', approval_status: 'Pending', remarks: 'Returned for revision of the training schedule and budget.' },
    { proposal_id: 'PROP-013', project_id: 'EXT-2026-055', version_no: 2, submission_date: '2026-10-10', evaluation_status: 'Under Evaluation', approval_status: 'Pending', remarks: 'Revised schedule and budget resubmitted.' },
    { proposal_id: 'PROP-014', project_id: 'EXT-2026-056', version_no: 1, submission_date: '2026-07-10', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'All requirements met. Approved for implementation.' },
    { proposal_id: 'PROP-015', project_id: 'EXT-2026-057', version_no: 1, submission_date: '2026-07-22', evaluation_status: 'Approved', approval_status: 'Approved', remarks: 'Approved. Partner MSME association confirmed.' }
  );

  const doc = (id, pid, type, name, size, ft, by, date) => ({ document_id: id, project_id: pid, document_type: type, file_name: name, file_path: '/uploads/' + pid + '/' + id + '.' + ft.toLowerCase(), file_size: size, file_type: ft, version_no: 1, uploaded_by: by, uploaded_at: date });
  GRACE.documents.push(
    doc('DOC101', 'EXT-2026-051', 'Proposal', 'Cybersecurity_Training_Proposal.pdf', '1.9 MB', 'PDF', 'PER001', '2026-08-12'),
    doc('DOC102', 'EXT-2026-051', 'Budget', 'Cybersecurity_Budget.xlsx', '140 KB', 'XLSX', 'PER001', '2026-08-12'),
    doc('DOC103', 'EXT-2026-052', 'Proposal', 'SK_Mobile_App_Workshop_Proposal.pdf', '2.1 MB', 'PDF', 'PER001', '2026-10-12'),
    doc('DOC104', 'EXT-2026-052', 'Budget', 'SK_Workshop_Budget.xlsx', '128 KB', 'XLSX', 'PER001', '2026-10-12'),
    doc('DOC105', 'EXT-2026-052', 'Work Plan', 'SK_Workshop_Work_Plan.pdf', '310 KB', 'PDF', 'PER001', '2026-10-13'),
    doc('DOC106', 'EXT-2026-053', 'Proposal', 'Brgy_Info_System_Proposal.docx', '2.6 MB', 'DOCX', 'PER001', '2026-10-05'),
    doc('DOC107', 'EXT-2026-053', 'Budget', 'Brgy_Info_System_Budget.xlsx', '165 KB', 'XLSX', 'PER001', '2026-10-05'),
    doc('DOC108', 'EXT-2026-053', 'Letter of Request', 'Brgy_Request_Letter.pdf', '220 KB', 'PDF', 'PER001', '2026-10-06'),
    doc('DOC109', 'EXT-2026-054', 'Proposal', 'Senior_Digital_Literacy_Proposal.pdf', '1.7 MB', 'PDF', 'PER001', '2026-09-28'),
    doc('DOC110', 'EXT-2026-055', 'Proposal', 'Elearning_Content_Proposal_v2.pdf', '2.2 MB', 'PDF', 'PER004', '2026-10-10'),
    doc('DOC111', 'EXT-2026-056', 'Proposal', 'IT_Maintenance_Training_Proposal.pdf', '1.5 MB', 'PDF', 'PER005', '2026-07-10'),
    doc('DOC112', 'EXT-2026-057', 'Proposal', 'MSME_Digital_Marketing_Proposal.pdf', '1.6 MB', 'PDF', 'PER003', '2026-07-22')
  );

  GRACE.approvals.push(
    { approval_id: 'APR101', project_id: 'EXT-2026-052', approval_stage: 'Completeness Check', decision: 'Approved', decision_date: '2026-10-14', approved_by: 'PER002', signature_reference: 'EXT-2026-052-CC-01', remarks: 'Proposal, budget and work plan verified complete. Routed to the College Dean.' },
    { approval_id: 'APR102', project_id: 'EXT-2026-053', approval_stage: 'Completeness Check', decision: 'Approved', decision_date: '2026-10-07', approved_by: 'PER002', signature_reference: 'EXT-2026-053-CC-01', remarks: 'Proposal, budget and request letter verified complete. Routed to the College Dean.' }
  );
})();

window.GRACE = GRACE;