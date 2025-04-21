'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { isAuthenticated, getToken } from '@/lib/auth';
import { apiUrl } from '@/lib/api';
import {toast} from "sonner";

export default function ApplyForm({ ministry }: { ministry: any }) {
    const router = useRouter();
    const [reason, setReason] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/auth/login');
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const token = getToken();
            const response = await fetch(apiUrl('/ministry/application'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ministry_id: ministry.id,
                    reason,
                }),
            });

            if (!response.ok){
                throw new Error('Failed to submit application');
            }


            toast.success('Application submitted successfully!', {
                description: 'We will review your application and get back to you soon.',
            });
            // Wait a moment for the toast to be visible before redirecting
            setTimeout(() => {
                router.push(`/ministries/${ministry.id}`);
            }, 4000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-24">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-2xl font-bold">Apply for {ministry.name}</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                                {error}
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor="reason"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Why would you like to join this ministry?
                            </label>
                            <Textarea
                                id="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                placeholder="Share your motivation and what you hope to contribute..."
                                className="h-40"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                className="bg-black text-white hover:bg-gray-800"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Submitting...' : 'Submit Application'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}