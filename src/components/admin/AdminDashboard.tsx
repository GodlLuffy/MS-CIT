import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Clock, 
  Calendar, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Trash2, 
  Edit3, 
  Sparkles, 
  ArrowLeft, 
  TrendingUp, 
  Award,
  Layers,
  Bell,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { InquiryRecord, BatchRecord, AnnouncementRecord, InquiryStatus, BatchStatus } from '../../types';
import { 
  getStoredInquiries, 
  saveStoredInquiries, 
  getStoredBatches, 
  saveStoredBatches, 
  getStoredNotices, 
  saveStoredNotices, 
  exportInquiriesToCSV 
} from '../../lib/store';
import { InstituteLogo } from '../common/InstituteLogo';

interface AdminDashboardProps {
  onBackToPortal: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToPortal }) => {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'batches' | 'notices'>('inquiries');
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [batches, setBatches] = useState<BatchRecord[]>([]);
  const [notices, setNotices] = useState<AnnouncementRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  
  // Notice modal state
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeContent, setNewNoticeContent] = useState('');
  const [showAddNotice, setShowAddNotice] = useState(false);

  useEffect(() => {
    setInquiries(getStoredInquiries());
    setBatches(getStoredBatches());
    setNotices(getStoredNotices());
  }, []);

  // Update inquiry status
  const handleStatusChange = (id: string, newStatus: InquiryStatus) => {
    const updated = inquiries.map((inq) => 
      inq.id === id ? { ...inq, status: newStatus } : inq
    );
    setInquiries(updated);
    saveStoredInquiries(updated);
  };

  // Delete inquiry
  const handleDeleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry record?')) {
      const updated = inquiries.filter((inq) => inq.id !== id);
      setInquiries(updated);
      saveStoredInquiries(updated);
    }
  };

  // Add Notice
  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle || !newNoticeContent) return;
    const newNotice: AnnouncementRecord = {
      id: `NOT-${Date.now().toString().slice(-4)}`,
      title: newNoticeTitle,
      content: newNoticeContent,
      type: 'ADMISSION',
      isActive: true,
      createdAt: new Date().toISOString(),
    };
    const updated = [newNotice, ...notices];
    setNotices(updated);
    saveStoredNotices(updated);
    setNewNoticeTitle('');
    setNewNoticeContent('');
    setShowAddNotice(false);
  };

  // Delete Notice
  const handleDeleteNotice = (id: string) => {
    const updated = notices.filter((n) => n.id !== id);
    setNotices(updated);
    saveStoredNotices(updated);
  };

  // Filtered Inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch = 
      inq.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      inq.preferredBatch.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate Metrics
  const totalInquiries = inquiries.length;
  const pendingReview = inquiries.filter((i) => i.status === 'NEW').length;
  const enrolledStudents = inquiries.filter((i) => i.status === 'ENROLLED').length;
  const totalRevenue = enrolledStudents * 4500;

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans">
      
      {/* Top Header Bar */}
      <header className="bg-slate-900/90 border-b border-white/10 sticky top-0 z-40 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToPortal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Public Portal</span>
          </button>

          <div className="h-4 w-px bg-white/10 hidden sm:block"></div>

          <div className="flex items-center gap-2.5">
            <InstituteLogo variant="icon" size={36} showBadge={false} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                  PRERNA ACADEMY
                </span>
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30">
                  Admin Center
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                MKCL ALC Degloor • Center Coordinator Portal
              </p>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs & Lock Action */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                activeTab === 'inquiries'
                  ? 'bg-gold-500 text-dark-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Inquiries ({inquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('batches')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                activeTab === 'batches'
                  ? 'bg-gold-500 text-dark-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Batches ({batches.length})
            </button>
            <button
              onClick={() => setActiveTab('notices')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                activeTab === 'notices'
                  ? 'bg-gold-500 text-dark-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Notices CMS ({notices.length})
            </button>
          </div>

          <button
            onClick={() => {
              sessionStorage.removeItem('pca_admin_authenticated');
              window.location.hash = '';
              onBackToPortal();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-xs font-bold transition-all cursor-pointer"
            title="Lock and Log Out of Admin Session"
          >
            <span>Lock & Exit</span>
          </button>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow space-y-8">
        
        {/* KPI Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Total Inquiries
            </span>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl font-black text-white">{totalInquiries}</span>
              <span className="text-xs text-gold-400 font-bold bg-gold-500/10 px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Captured via website & walk-in</p>
          </div>

          <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Pending Review
            </span>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl font-black text-amber-400">{pendingReview}</span>
              <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full">
                Needs Call
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">New leads requiring follow-up</p>
          </div>

          <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Enrolled Students
            </span>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl font-black text-emerald-400">{enrolledStudents}</span>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Confirmed
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Fee paid & workstation assigned</p>
          </div>

          <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Est. Batch Revenue
            </span>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl font-black text-gold-400">
                ₹{totalRevenue.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400">₹4,500/student</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Maharashtra MKCL authorized fees</p>
          </div>
        </div>

        {/* TAB 1: INQUIRIES MANAGEMENT */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            
            {/* Control Bar: Search, Status Filter & CSV Export */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-grow max-w-lg">
                <div className="relative flex-grow">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by student name, phone number, batch..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3.5 py-2.5 rounded-full bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 focus:outline-none focus:border-gold-500"
                >
                  <option value="ALL">All Status</option>
                  <option value="NEW">New</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="SCHEDULED_DEMO">Scheduled Demo</option>
                  <option value="ENROLLED">Enrolled</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>

              <button
                onClick={() => exportInquiriesToCSV(inquiries)}
                className="btn-secondary text-xs px-4 py-2.5 flex items-center justify-center gap-2 shrink-0"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>Export CSV Spreadsheet</span>
              </button>
            </div>

            {/* Inquiries Data Table */}
            <div className="bg-slate-900/90 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900/90 text-slate-400 border-b border-white/10 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-3.5 px-4">Student Name & Contact</th>
                      <th className="py-3.5 px-4">Qualification</th>
                      <th className="py-3.5 px-4">Preferred Timing</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Notes / Remarks</th>
                      <th className="py-3.5 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredInquiries.length > 0 ? (
                      filteredInquiries.map((inq) => (
                        <tr key={inq.id} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-3 px-4">
                            <strong className="text-sm font-bold text-white block">{inq.fullName}</strong>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                              <a href={`tel:${inq.phone}`} className="text-gold-400 font-semibold hover:underline">
                                +91 {inq.phone}
                              </a>
                              {inq.email && <span>• {inq.email}</span>}
                            </div>
                            <span className="text-[10px] text-slate-500 mt-0.5 block">
                              Received: {new Date(inq.createdAt).toLocaleDateString()}
                            </span>
                          </td>

                          <td className="py-3 px-4 text-slate-300">
                            <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] border border-white/5 inline-block">
                              {inq.qualification || 'General Aspirant'}
                            </span>
                          </td>

                          <td className="py-3 px-4">
                            <span className="text-slate-200 font-semibold block">{inq.preferredBatch}</span>
                            <span className="text-[10px] text-slate-400">{inq.batchType}</span>
                          </td>

                          <td className="py-3 px-4">
                            <select
                              value={inq.status}
                              onChange={(e) => handleStatusChange(inq.id, e.target.value as InquiryStatus)}
                              className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border cursor-pointer ${
                                inq.status === 'ENROLLED'
                                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                                  : inq.status === 'NEW'
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                  : inq.status === 'SCHEDULED_DEMO'
                                  ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                                  : 'bg-slate-800 text-slate-300 border-white/10'
                              }`}
                            >
                              <option value="NEW">New</option>
                              <option value="CONTACTED">Contacted</option>
                              <option value="SCHEDULED_DEMO">Scheduled Demo</option>
                              <option value="ENROLLED">Enrolled</option>
                              <option value="ARCHIVED">Archived</option>
                            </select>
                          </td>

                          <td className="py-3 px-4 text-slate-400 max-w-xs text-[11px]">
                            {inq.notes || '—'}
                          </td>

                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/20 transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">
                          No student inquiry records match your search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: BATCHES & LAB MANAGEMENT */}
        {activeTab === 'batches' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Active Batches & Seat Occupancy
                </h3>
                <p className="text-xs text-slate-400">
                  Live tracking of 1:1 computer workstation capacity at Degloor center.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {batches.map((batch) => {
                const percentage = Math.round((batch.enrolledSeats / batch.totalSeats) * 100);
                return (
                  <div key={batch.id} className="bg-slate-900 border border-white/10 p-6 rounded-2xl space-y-4 shadow-lg">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block">
                          {batch.code}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white">{batch.name}</h4>
                      </div>
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
                        batch.status === 'FILLING_FAST'
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                          : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
                      }`}>
                        {batch.status.replace('_', ' ')}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timing Slot:</span>
                        <strong className="text-white">{batch.timing}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Batch Commencement:</span>
                        <span className="text-white font-medium">{batch.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Instructor:</span>
                        <span className="text-gold-400 font-semibold">{batch.instructorName}</span>
                      </div>
                    </div>

                    {/* Workstation Occupancy Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Seat Occupancy:</span>
                        <span className="text-white">
                          {batch.enrolledSeats} / {batch.totalSeats} Workstations ({percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-white/10">
                        <div
                          className="bg-gold-500 h-full rounded-full transition-all duration-500 shadow-glow-gold"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-slate-400 block pt-0.5">
                        {batch.totalSeats - batch.enrolledSeats} PCs remaining in this slot
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: NOTICES & ANNOUNCEMENTS CMS */}
        {activeTab === 'notices' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Public Homepage Notices CMS
                </h3>
                <p className="text-xs text-slate-400">
                  Broadcast live alerts, Govt. GR updates, and exam dates on the student portal.
                </p>
              </div>

              <button
                onClick={() => setShowAddNotice(true)}
                className="btn-gold text-xs px-4 py-2 flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4 text-slate-950" />
                <span>Publish New Notice</span>
              </button>
            </div>

            {/* Add Notice Modal Form */}
            {showAddNotice && (
              <div className="bg-slate-900 border border-gold-500/40 p-6 rounded-2xl shadow-xl">
                <h4 className="font-bold text-white text-sm mb-3">Create New Announcement</h4>
                <form onSubmit={handleAddNotice} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Headline</label>
                    <input
                      type="text"
                      placeholder="e.g. MS-CIT April 2025 Final Online Exam Schedule"
                      value={newNoticeTitle}
                      onChange={(e) => setNewNoticeTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Details</label>
                    <textarea
                      placeholder="Enter announcement description..."
                      value={newNoticeContent}
                      onChange={(e) => setNewNoticeContent(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs h-20"
                      required
                    ></textarea>
                  </div>

                  <div className="flex gap-2">
                    <button type="submit" className="btn-gold text-xs px-4 py-2">
                      Publish Notice
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddNotice(false)}
                      className="btn-secondary text-xs px-4 py-2"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* List of Active Notices */}
            <div className="space-y-3">
              {notices.map((notice) => (
                <div key={notice.id} className="bg-slate-900 border border-white/10 p-5 rounded-2xl flex items-start justify-between gap-4 shadow-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 uppercase">
                        {notice.type}
                      </span>
                      <span className="text-xs text-slate-400">
                        Published: {new Date(notice.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{notice.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">{notice.content}</p>
                  </div>

                  <button
                    onClick={() => handleDeleteNotice(notice.id)}
                    className="p-2 text-rose-400 hover:bg-rose-500/20 rounded-xl transition-colors shrink-0"
                    title="Remove Notice"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

    </div>
  );
};
