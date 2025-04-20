'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getToken, hasRole } from '@/lib/auth';
import {apiUrl} from "@/lib/api";

interface UserDetails {
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;
  phone_number: string;
  cell_leader_id?: string;
  outreach_id: string;
  roles: string[];
}

interface Approval {
  id: string;
  type: string;
  requested_role: string;
  status: string;
  requester_details: UserDetails;
}

export default function PortalPage() {
  const router = useRouter();
  const [approvals, setApprovals] = useState<Approval[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!hasRole('Admin')) {
      router.push('/');
      return;
    }

    fetchApprovals();
  }, [router]);

  const fetchApprovals = async () => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl('/user/approvals/pending'), {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setApprovals(data.approvals || []);
    } catch (err) {
      setError('Failed to fetch approvals');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprovalAction = async (id: string, status: string) => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl(`/user/approvals/${id}`), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update approval status');
      }

      // Refresh approvals list
      fetchApprovals();
    } catch (err) {
      setError('Failed to update approval status');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Admin Portal</h2>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400 text-red-700">
              {error}
            </div>
          )}

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Pending Approvals</h3>
            
            {approvals.length === 0 ? (
              <p className="text-gray-500">No pending approvals</p>
            ) : (
              <div className="space-y-6">
                {approvals.map((approval) => (
                  <div
                    key={approval.id}
                    className="border rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold">
                          {approval.requester_details.first_name} {approval.requester_details.last_name}
                        </h4>
                        <p className="text-sm text-gray-600">{approval.requester_details.email}</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm">
                        {approval.status}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Request Type:</span> {approval.type}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Requested Role:</span> {approval.requested_role}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={() => handleApprovalAction(approval.id, 'APPROVED')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Approve
                      </Button>
                      <Button
                        onClick={() => handleApprovalAction(approval.id, 'REJECTED')}
                        variant="destructive"
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}