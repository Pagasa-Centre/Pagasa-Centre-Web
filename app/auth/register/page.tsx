'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {apiUrl} from "@/lib/api";
import {OutreachResponse} from "@/types/outreaches";
import {GetAllMinistriesResponse} from "@/types/ministries";
import {RegisterResponse} from "@/types/user";
import {useAuth} from "@/lib/auth-context";

interface Outreach {
  id: string;
  name: string;
}

interface Ministry {
  id: string;
  name: string;
}

const dummyCellLeaders = [
  { id: '1', name: 'John Smith' },
  { id: '2', name: 'Sarah Johnson' },
  { id: '3', name: 'Michael Brown' },
  { id: '4', name: 'Emily Davis' },
  { id: '5', name: 'David Wilson' },
];

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [outreaches, setOutreaches] = useState<Outreach[]>([]);
  const [ministries, setMinistries] = useState<Ministry[]>([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
    outreach_id: '',
    phone_number: '',
    cell_leader_id: '',
    ministry_id: '',
    is_leader: false,
    is_primary: false,
    is_pastor: false,
    is_ministry_leader: false,
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchOutreaches();
    fetchMinistries();
  }, []);

  const fetchOutreaches = async () => {
    try {
      const response = await fetch(apiUrl('/outreach'));
      const data:OutreachResponse = await response.json();

      if (!response.ok){
        throw new Error(data.message)
      }

      setOutreaches(data.outreaches);
    } catch (err) {
      console.error('Failed to fetch outreaches:', err);
    }
  };

  const fetchMinistries = async () => {
    try {
      const response = await fetch(apiUrl('/ministry'));
      const data:GetAllMinistriesResponse = await response.json();
      if (!response.ok){
        throw new Error(data.message)
      }

      if (data.ministries){
        setMinistries(data.ministries);
      }else{
        throw new Error("No ministries found")
      }

    } catch (err) {
      console.error('Failed to fetch ministries:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl('/user/register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          cell_leader_id: formData.cell_leader_id === 'none' ? null : formData.cell_leader_id || null,
          ministry_id: formData.is_ministry_leader ? formData.ministry_id : null,
        }),
      });

      const data:RegisterResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      register(data.token!, data.user!);
      router.push('/');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <main className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 my-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-black hover:text-gray-800">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                    {error}
                  </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first_name">First name</Label>
                  <Input
                      id="first_name"
                      name="first_name"
                      type="text"
                      required
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="last_name">Last name</Label>
                  <Input
                      id="last_name"
                      name="last_name"
                      type="text"
                      required
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="birthday">Birthday</Label>
                <Input
                    id="birthday"
                    name="birthday"
                    type="date"
                    required
                    value={formData.birthday}
                    onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="phone_number">Phone number</Label>
                <PhoneInput
                    international
                    defaultCountry="GB"
                    value={formData.phone_number}
                    onChange={(value) => setFormData({ ...formData, phone_number: value || '' })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="outreach">Select Outreach</Label>
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
              </div>

              <div>
                <Label htmlFor="cell_leader">Cell Leader</Label>
                <Select
                    value={formData.cell_leader_id}
                    onValueChange={(value) => setFormData({ ...formData, cell_leader_id: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your cell leader" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    {dummyCellLeaders.map((leader) => (
                        <SelectItem key={leader.id} value={leader.id}>
                          {leader.name}
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Are you a leader?</Label>
                  <Select
                      value={formData.is_leader.toString()}
                      onValueChange={(value) => {
                        const isLeader = value === 'true';
                        setFormData({
                          ...formData,
                          is_leader: isLeader,
                          is_primary: isLeader ? formData.is_primary : false,
                          is_ministry_leader: isLeader ? formData.is_ministry_leader : false,
                          is_pastor: isLeader ? formData.is_pastor : false,
                        });
                      }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select yes or no" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Yes</SelectItem>
                      <SelectItem value="false">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.is_leader && (
                    <div>
                      <Label>Are you a primary leader?</Label>
                      <Select
                          value={formData.is_primary.toString()}
                          onValueChange={(value) => {
                            const isPrimary = value === 'true';
                            setFormData({
                              ...formData,
                              is_primary: isPrimary,
                              is_ministry_leader: isPrimary ? formData.is_ministry_leader : false,
                              is_pastor: isPrimary ? formData.is_pastor : false,
                            });
                          }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select yes or no" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Yes</SelectItem>
                          <SelectItem value="false">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                )}

                {formData.is_primary && (
                    <div>
                      <Label>Are you a ministry leader?</Label>
                      <Select
                          value={formData.is_ministry_leader.toString()}
                          onValueChange={(value) => {
                            const isMinistryLeader = value === 'true';
                            setFormData({
                              ...formData,
                              is_ministry_leader: isMinistryLeader,
                              is_pastor: isMinistryLeader ? formData.is_pastor : false,
                            });
                          }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select yes or no" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Yes</SelectItem>
                          <SelectItem value="false">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                )}

                {formData.is_ministry_leader && (
                    <div>
                      <Label>Select Ministry</Label>
                      <Select
                          value={formData.ministry_id}
                          onValueChange={(value) => setFormData({ ...formData, ministry_id: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a ministry" />
                        </SelectTrigger>
                        <SelectContent>
                          {ministries.map((ministry) => (
                              <SelectItem key={ministry.id} value={ministry.id}>
                                {ministry.name}
                              </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                )}

                {formData.is_ministry_leader && (
                    <div>
                      <Label>Are you a pastor?</Label>
                      <Select
                          value={formData.is_pastor.toString()}
                          onValueChange={(value) => setFormData({ ...formData, is_pastor: value === 'true' })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select yes or no" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Yes</SelectItem>
                          <SelectItem value="false">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                )}
              </div>

              <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </Button>
            </form>
          </div>
        </div>
      </main>
  );
}