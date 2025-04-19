'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getUser, getToken } from '@/lib/auth';
import {apiUrl} from "@/lib/api";
import {UpdateUserDetailsResponse, UserDetails} from "@/types/user";
import {useAuth} from "@/lib/auth-context";
import {Outreach, OutreachResponse} from "@/types/outreaches";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function ProfilePage() {
  const router = useRouter();
  const [outreaches, setOutreaches] = useState<Outreach[]>([]);
  const { user: authUser, setUser } = useAuth();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
    phone_number: '',
    outreach_id: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/auth/login');
      return;
    }

    fetchOutreaches(); // fetch outreach list first
  }, [router]);

  useEffect(() => {
    // Only set formData when both authUser and outreaches are ready
    if (authUser && outreaches.length > 0) {
      setFormData({
        first_name: authUser.first_name || '',
        last_name: authUser.last_name || '',
        email: authUser.email || '',
        password: '',
        birthday: authUser.birthday || '',
        phone_number: authUser.phone_number || '',
        outreach_id: authUser.outreach_id || '',
      });
    }
  }, [authUser, outreaches]);

  const fetchOutreaches = async () => {
    try {
      const response = await fetch(apiUrl('/outreach'));
      const data:OutreachResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      setOutreaches(data.outreaches);
    } catch (err) {
      console.error('Failed to fetch outreaches:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const token = getToken();
      const response = await fetch(apiUrl('/user/update-details'), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data:UpdateUserDetailsResponse = await response.json();


      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      const updatedUser = data.user;

      if (updatedUser) {
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));

        // ✅ Update context so Navbar reflects new name instantly
        setUser(updatedUser);
      }

      let user: UserDetails | null = null;
      if (data.user) {
        user = data.user;
      }

      // Store user only if it exists
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      setSuccess('Profile updated successfully');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold">Profile Settings</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                    {error}
                  </div>
              )}

              {success && (
                  <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md">
                    {success}
                  </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="first_name">First name</Label>
                  <Input
                      id="first_name"
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="last_name">Last name</Label>
                  <Input
                      id="last_name"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="phone_number">Phone number</Label>
                  <Input
                      id="phone_number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="birthday">Birthday</Label>
                  <Input
                      id="birthday"
                      type="date"
                      value={formData.birthday}
                      onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="outreach">Outreach</Label>
                  {outreaches.length > 0 && (
                      <Select
                          value={formData.outreach_id}
                          onValueChange={(value) => setFormData({ ...formData, outreach_id: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an outreach" />
                        </SelectTrigger>
                        <SelectContent>
                          {outreaches.map((outreach) => (
                              <SelectItem key={outreach.id} value={outreach.id}>
                                {outreach.name}
                              </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">New Password (leave blank to keep current)</Label>
                  <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                    type="submit"
                    className="bg-black text-white hover:bg-gray-800"
                    disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
  );
}