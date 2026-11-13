import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Users,
  Eye,
  FileDown,
  MessageSquare,
  Search,
  Download,
  RefreshCw,
  X,
  Mail,
  Phone,
  Clock,
  Shield,
  CheckCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { visitorService } from '../services/visitorService';

export default function AdminDashboardModal({ isOpen, onClose, isLightMode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [visitors, setVisitors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // Rahul's admin password
  const ADMIN_PASSWORD = '01081999';

  useEffect(() => {
    if (isOpen) {
      loadVisitors();
    }
  }, [isOpen]);

  const loadVisitors = async () => {
    // 1. Immediately show cached/local visitors
    const list = visitorService.getVisitors();
    setVisitors(list);

    // 2. Fetch latest synced records from Convex Cloud in background
    setIsSyncing(true);
    try {
      const cloudList = await visitorService.fetchVisitorsAsync();
      if (cloudList && cloudList.length > 0) {
        setVisitors(cloudList);
      }
    } catch (e) {
      // Graceful
    } finally {
      setIsSyncing(false);
    }
  };

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    const cleanPin = pin.trim().replace(/[-\s]/g, '');
    if (
      cleanPin === ADMIN_PASSWORD ||
      cleanPin === '1999' ||
      cleanPin === '9108080161'
    ) {
      setIsAuthenticated(true);
      setPinError('');
      loadVisitors();
    } else {
      setPinError('ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್! (Incorrect Password)');
    }
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExport = () => {
    visitorService.exportCSV();
  };

  // Filter visitors
  const filteredVisitors = visitors.filter((v) => {
    const query = searchQuery.toLowerCase();
    return (
      (v.name && v.name.toLowerCase().includes(query)) ||
      (v.email && v.email.toLowerCase().includes(query)) ||
      (v.phone && v.phone.includes(query)) ||
      (v.relation && v.relation.toLowerCase().includes(query)) ||
      (v.city && v.city.toLowerCase().includes(query))
    );
  });

  // Calculate Metrics
  const totalViews = visitors.length;
  const pdfDownloads = visitors.filter((v) => v.actions && v.actions.includes('DOWNLOAD_PDF')).length;
  const whatsappClicks = visitors.filter((v) => v.actions && v.actions.includes('CLICK_WHATSAPP')).length;
  const uniqueEmails = new Set(visitors.map((v) => v.email)).size;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md transition-colors ${
        isLightMode ? 'bg-amber-950/35' : 'bg-black/90'
      }`}
    >
      <div
        className={`relative w-full max-w-5xl rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[94vh] flex flex-col border transition-all ${
          isLightMode
            ? 'bg-[#fbf9f4] border-2 border-[#c59b27]/60 text-slate-900 shadow-amber-950/20'
            : 'bg-[#08172c] border border-[#d4af37]/40 text-slate-100 shadow-black/90'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between pb-4 border-b shrink-0 ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-md flex items-center justify-center">
              <div
                className={`w-full h-full rounded-xl flex items-center justify-center ${
                  isLightMode ? 'bg-white text-[#855b0a]' : 'bg-[#071527] text-[#f6e8b1]'
                }`}
              >
                <Shield className="w-5 h-5 text-[#d4af37]" />
              </div>
            </div>
            <div>
              <h3
                className={`text-lg sm:text-2xl font-cinzel font-bold flex items-center gap-2 ${
                  isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
                }`}
              >
                <span>ಅಡ್ಮಿನ್ ಪೋರ್ಟಲ್ • Admin Visitor Analytics</span>
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-700 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Convex Cloud Live
                </span>
                {isSyncing && (
                  <span className="text-[10px] text-amber-600 animate-pulse font-medium">Syncing with Convex...</span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isLightMode
                ? 'hover:bg-black/5 text-slate-600 hover:text-slate-900'
                : 'hover:bg-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* AUTHENTICATION VIEW (When locked) */}
        {!isAuthenticated ? (
          <div className="py-12 sm:py-16 flex flex-col items-center justify-center text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-4 text-[#d4af37]">
              <Lock className="w-8 h-8" />
            </div>

            <h4
              className={`text-xl font-bold font-cinzel mb-2 ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
              }`}
            >
              ಪ್ರವೇಶ ಪರಿಶೀಲನೆ • Enter Admin Password
            </h4>
            <p className={`text-xs mb-6 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Please enter your secret admin password (Date of Birth) to unlock visitor details.
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <input
                type="password"
                maxLength={15}
                value={pin}
                autoFocus
                onChange={(e) => {
                  setPin(e.target.value);
                  setPinError('');
                }}
                placeholder="ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ • Enter Password"
                className={`w-full text-center text-lg tracking-widest font-mono rounded-2xl py-3 border outline-none ${
                  isLightMode
                    ? 'bg-white border-slate-300 text-slate-900 focus:border-[#c59b27]'
                    : 'bg-[#050f1d] border-white/15 text-slate-100 focus:border-[#d4af37]'
                }`}
              />

              {pinError && <p className="text-xs text-red-500 font-semibold">{pinError}</p>}

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-sm shadow-lg hover:brightness-105 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                <span>ಅನ್‌ಲಾಕ್ ಮಾಡಿ • Unlock Dashboard</span>
              </button>

              <p className="text-[11px] text-slate-500">
                Authorized for Rahul Balabatti • Hint: Date of Birth (DDMMYYYY)
              </p>
            </form>
          </div>
        ) : (
          /* DASHBOARD VIEW (Unlocked) */
          <div className="flex-1 overflow-y-auto py-5 space-y-6 pr-1">
            {/* KPI STATS CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div
                className={`p-4 rounded-2xl border ${
                  isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#050f1d] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Total Views</span>
                  <Eye className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-2xl font-bold font-mono text-[#d4af37]">{totalViews}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Recorded page impressions</div>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#050f1d] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Unique Leads</span>
                  <Users className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-bold font-mono text-emerald-600">{uniqueEmails}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Distinct email addresses</div>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#050f1d] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider">PDF Downloads</span>
                  <FileDown className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-2xl font-bold font-mono text-blue-500">{pdfDownloads}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Biodata saved or printed</div>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#050f1d] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp Clicks</span>
                  <MessageSquare className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-2xl font-bold font-mono text-green-500">{whatsappClicks}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Inquiries initiated to 9108080161</div>
              </div>
            </div>

            {/* CONTROLS: SEARCH & EXPORT */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by visitor name, email, phone, city..."
                  className={`w-full rounded-xl pl-10 pr-4 py-2 text-xs border outline-none ${
                    isLightMode
                      ? 'bg-white border-slate-300 text-slate-900 focus:border-[#c59b27]'
                      : 'bg-[#050f1d] border-white/10 text-slate-100 focus:border-[#d4af37]'
                  }`}
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadVisitors}
                  disabled={isSyncing}
                  className="px-3 py-2 rounded-xl border border-[#d4af37]/40 hover:bg-[#d4af37]/10 text-xs font-semibold text-[#855b0a] flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Refresh Cloud Data"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#d4af37]' : ''}`} />
                  <span className="hidden sm:inline">ರಿಫ್ರೆಶ್ • Sync</span>
                </button>

                <button
                  onClick={handleExport}
                  className="px-3.5 py-2 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/60 text-xs font-bold text-[#855b0a] hover:bg-[#d4af37]/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Download CSV Spreadsheet"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* VISITOR TABLE */}
            <div
              className={`rounded-2xl border overflow-x-auto ${
                isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#050f1d] border-white/10'
              }`}
            >
              <table className="w-full text-left text-xs">
                <thead>
                  <tr
                    className={`border-b font-bold uppercase tracking-wider text-[10px] ${
                      isLightMode
                        ? 'bg-slate-50 border-slate-200 text-slate-600'
                        : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    <th className="py-3 px-4">Visitor</th>
                    <th className="py-3 px-4">Email ID</th>
                    <th className="py-3 px-4">Phone / WhatsApp</th>
                    <th className="py-3 px-4">Relation / Purpose</th>
                    <th className="py-3 px-4">Time & Location</th>
                    <th className="py-3 px-4 text-center">Interactions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {filteredVisitors.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400 text-xs">
                        No visitors match your search.
                      </td>
                    </tr>
                  ) : (
                    filteredVisitors.map((v) => (
                      <tr
                        key={v.id}
                        className={`transition-colors ${
                          isLightMode ? 'hover:bg-amber-50/50' : 'hover:bg-white/5'
                        }`}
                      >
                        {/* Name & Device */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span className={isLightMode ? 'text-slate-900' : 'text-slate-100'}>
                              {v.name}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500">{v.device || 'Web Browser'}</span>
                        </td>

                        {/* Email with copy */}
                        <td className="py-3.5 px-4 font-mono text-xs">
                          <div className="flex items-center gap-1.5">
                            <a
                              href={`mailto:${v.email}`}
                              className="text-blue-600 hover:underline flex items-center gap-1"
                              title="Send Email"
                            >
                              <Mail className="w-3 h-3 text-slate-400" />
                              <span>{v.email}</span>
                            </a>
                            <button
                              onClick={() => handleCopy(v.email, v.id + '-email')}
                              className="p-1 rounded hover:bg-black/5 text-slate-400"
                              title="Copy Email"
                            >
                              {copiedId === v.id + '-email' ? (
                                <CheckCircle className="w-3 h-3 text-emerald-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Phone with WhatsApp link */}
                        <td className="py-3.5 px-4 font-mono text-xs">
                          {v.phone && v.phone !== 'Not provided' ? (
                            <a
                              href={`https://wa.me/${v.phone.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                              title="Chat on WhatsApp"
                            >
                              <Phone className="w-3 h-3 text-emerald-600" />
                              <span>{v.phone}</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                            </a>
                          ) : (
                            <span className="text-slate-400 italic">Not provided</span>
                          )}
                        </td>

                        {/* Relation */}
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#d4af37]/15 text-[#855b0a] border border-[#d4af37]/30">
                            {v.relation}
                          </span>
                        </td>

                        {/* Time & City */}
                        <td className="py-3.5 px-4 text-[11px] text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{new Date(v.timestamp).toLocaleString()}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{v.city || 'India'}</div>
                        </td>

                        {/* Action Badges */}
                        <td className="py-3.5 px-4 text-center">
                          <div className="flex items-center justify-center gap-1 flex-wrap">
                            {v.actions && v.actions.includes('VIEW_PROFILE') && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-700 border border-amber-500/20">
                                Viewed
                              </span>
                            )}
                            {v.actions && v.actions.includes('DOWNLOAD_PDF') && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-500/10 text-blue-700 border border-blue-500/20">
                                PDF
                              </span>
                            )}
                            {v.actions && v.actions.includes('CLICK_WHATSAPP') && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                                WhatsApp
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          className={`flex items-center justify-between pt-4 border-t shrink-0 text-xs text-slate-500 ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <span>Confidential Matrimonial Portal • Rahul Suresh Balabatti</span>
          {isAuthenticated && (
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-[#855b0a] hover:underline font-bold cursor-pointer"
            >
              ಲಾಕ್‌ಔಟ್ • Lock Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
