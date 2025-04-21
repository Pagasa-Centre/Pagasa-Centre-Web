import { getMinistryBySlug } from '@/lib/ministries';
import { apiUrl } from '@/lib/api';
import ApplyForm from './form';

export async function generateStaticParams() {
  const res = await fetch(apiUrl('/ministry'), { cache: 'no-store' });
  const data = await res.json();

  return (data.ministries || []).map((ministry: any) => ({
    id: ministry.id,
  }));
}

interface ApplyPageProps {
  params: {
    id: string;
  };
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const ministry = await getMinistryBySlug(params.id);
  if (!ministry) return null;

  return <ApplyForm ministry={ministry} />;
}