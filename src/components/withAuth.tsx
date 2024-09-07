import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ComponentType } from 'react';

export interface WithAuthProps {
  [key: string]: any;
}

const withAuth = (WrappedComponent: ComponentType<WithAuthProps>, allowedRoles: string[]) => {
  return function WithAuth(props: WithAuthProps) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    if (!session || !session.user || !allowedRoles.includes(session.user.role as string)) {
      router.push('/');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
