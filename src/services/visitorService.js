// Visitor Tracking & Analytics Service for Rahul Suresh Balabatti's Marriage Profile

const STORAGE_KEY = 'rahul_profile_visitors_v1';
const SESSION_KEY = 'rahul_visitor_session_v1';

// Initial sample visitors so the admin dashboard demonstrates full functionality immediately
const DEFAULT_VISITORS = [
  {
    id: 'vis-101',
    name: 'Basavaraj Patil',
    email: 'b.patil.hubli@gmail.com',
    phone: '+91 98450 12345',
    relation: 'Bride Family (ಹುಡುಗಿಯ ಕುಟುಂಬ)',
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
    actions: ['VIEW_PROFILE', 'DOWNLOAD_PDF'],
    device: 'Mobile (Android)',
    city: 'Hubballi / Kalaburagi',
  },
  {
    id: 'vis-102',
    name: 'Dr. Sharada Kulkarni',
    email: 'sharada.kulkarni@yahoo.com',
    phone: '+91 94481 67890',
    relation: 'Relative / Mediator (ಸಂಬಂಧಿಕರು)',
    timestamp: new Date(Date.now() - 3600000 * 18).toISOString(),
    actions: ['VIEW_PROFILE', 'CLICK_WHATSAPP'],
    device: 'Desktop (Chrome)',
    city: 'Bengaluru',
  },
  {
    id: 'vis-103',
    name: 'Anand Biradar',
    email: 'anand.biradar@techfirm.in',
    phone: '+91 99001 54321',
    relation: 'Friend / Colleague (ಸ್ನೇಹಿತರು)',
    timestamp: new Date(Date.now() - 3600000 * 42).toISOString(),
    actions: ['VIEW_PROFILE'],
    device: 'iPhone (Safari)',
    city: 'Pune',
  },
];

export const visitorService = {
  // Get all recorded visitors
  getVisitors: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_VISITORS));
        return DEFAULT_VISITORS;
      }
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading visitors:', e);
      return DEFAULT_VISITORS;
    }
  },

  // Save current visitor session
  getCurrentSession: () => {
    try {
      const session = localStorage.getItem(SESSION_KEY);
      return session ? JSON.parse(session) : null;
    } catch (e) {
      return null;
    }
  },

  // Register a new visitor
  registerVisitor: ({ name, email, phone, relation, city }) => {
    try {
      const visitors = visitorService.getVisitors();
      const newVisitor = {
        id: 'vis-' + Date.now(),
        name: name || 'Anonymous Guest',
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : 'Not provided',
        relation: relation || 'Prospective Alliance',
        timestamp: new Date().toISOString(),
        actions: ['VIEW_PROFILE'],
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        city: city || 'Karnataka, India',
      };

      // Check if visitor with same email already exists
      const existingIdx = visitors.findIndex((v) => v.email === newVisitor.email);
      let updated;
      if (existingIdx >= 0) {
        visitors[existingIdx].timestamp = new Date().toISOString();
        if (!visitors[existingIdx].actions.includes('VIEW_PROFILE')) {
          visitors[existingIdx].actions.push('VIEW_PROFILE');
        }
        updated = visitors;
      } else {
        updated = [newVisitor, ...visitors];
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      localStorage.setItem(SESSION_KEY, JSON.stringify(newVisitor));
      return newVisitor;
    } catch (e) {
      console.error('Error registering visitor:', e);
      return null;
    }
  },

  // Log a specific interaction (e.g. PDF download, WhatsApp click)
  logAction: (actionType) => {
    try {
      const session = visitorService.getCurrentSession();
      if (!session) return;

      const visitors = visitorService.getVisitors();
      const idx = visitors.findIndex((v) => v.email === session.email);
      if (idx >= 0) {
        if (!visitors[idx].actions.includes(actionType)) {
          visitors[idx].actions.push(actionType);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(visitors));
        }
      }
    } catch (e) {
      console.error('Error logging visitor action:', e);
    }
  },

  // Clear all visitor logs (Admin utility)
  clearVisitors: () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  },

  // Reset to default sample logs
  resetToDefault: () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_VISITORS));
    return DEFAULT_VISITORS;
  },

  // Export visitors as CSV
  exportCSV: () => {
    const visitors = visitorService.getVisitors();
    if (!visitors.length) return;

    const headers = ['ID', 'Name', 'Email', 'Phone', 'Relation', 'Date & Time', 'Actions', 'Device', 'City'];
    const rows = visitors.map((v) => [
      v.id,
      `"${v.name}"`,
      `"${v.email}"`,
      `"${v.phone}"`,
      `"${v.relation}"`,
      `"${new Date(v.timestamp).toLocaleString()}"`,
      `"${v.actions.join(', ')}"`,
      `"${v.device}"`,
      `"${v.city}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Rahul_Balabatti_Matrimonial_Visitors_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
};
