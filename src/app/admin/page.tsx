import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import withAuth from '@/components/withAuth';

// Dynamically import the AdminCostEstimator with no SSR
const AdminCostEstimator = dynamic(() => import('@/components/AdminCostEstimator'), { ssr: false });

const AdminPageContent = () => {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <AdminCostEstimator />
      </main>
    </div>
  );
};

const AdminPage = withAuth(AdminPageContent, ['ADMIN']);

export default async function AdminPageWrapper() {
  const session = await getServerSession();

  if (!session || !session.user || session.user.role !== 'ADMIN') {
    redirect('/');
  }

  return <AdminPage />;
}
