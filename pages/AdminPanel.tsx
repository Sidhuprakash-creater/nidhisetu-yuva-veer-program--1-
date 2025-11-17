import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAmbassadors, isAdmin, signOutAdmin, REQUIRED_ADMIN_EMAIL } from '../firebase';

type Amb = {
  id: string;
  fullName?: string;
  age?: number;
  email?: string;
  phone?: string;
  college?: string;
  city?: string;
  reason?: string;
  submittedAt?: any;
  termsAgreed?: boolean;
};

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Amb[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const authed = localStorage.getItem('adminAuth') === 'true';
    if (!authed || !isAdmin()) {
      navigate('/admin-login');
      return;
    }
    refresh();
  }, []);

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await getAmbassadors();
      setRows(data as Amb[]);
      setError('');
    } catch (e: any) {
      const code = e?.code ?? '';
      if (code.includes('unavailable') || code.includes('permission-denied')) {
        setError('Service is unavailable. Please check Firebase rules or try again later.');
      } else {
        setError(e?.message || 'Failed to load data');
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (v: any) => {
    try {
      if (v && typeof v.toDate === 'function') return v.toDate().toLocaleString();
      if (v instanceof Date) return v.toLocaleString();
      return String(v ?? '');
    } catch { return String(v ?? ''); }
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-dark-teal">Admin Panel</h1>
          <div className="space-x-2">
            <button onClick={refresh} className="px-4 py-2 rounded-md bg-gold text-dark-teal font-semibold hover:bg-yellow-400 transition-colors">Refresh</button>
            <button onClick={async () => { await signOutAdmin(); localStorage.removeItem('adminAuth'); navigate('/admin-login'); }} className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-colors">Logout</button>
          </div>
        </div>
        <div className="mt-6 bg-gray-50 rounded-xl shadow overflow-x-auto">
          {loading ? (
            <p className="p-6 text-gray-600">Loading...</p>
          ) : error ? (
            <p className="p-6 text-red-600">{error}</p>
          ) : rows.length === 0 ? (
            <p className="p-6 text-gray-600">No submissions found.</p>
          ) : (
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">College</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Reason</th>
                  <th className="px-4 py-2">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="px-4 py-2">{r.fullName ?? ''}</td>
                    <td className="px-4 py-2">{r.age ?? ''}</td>
                    <td className="px-4 py-2">{r.email ?? ''}</td>
                    <td className="px-4 py-2">{r.phone ?? ''}</td>
                    <td className="px-4 py-2">{r.college ?? ''}</td>
                    <td className="px-4 py-2">{r.city ?? ''}</td>
                    <td className="px-4 py-2 max-w-xs whitespace-pre-wrap">{r.reason ?? ''}</td>
                    <td className="px-4 py-2">{formatDate(r.submittedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;