import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authClient } from '../lib/auth';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const { data } = await authClient.getSession();
                if (data?.session) {
                    setIsAuthorized(true);
                } else {
                    navigate('/admin');
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                navigate('/admin');
            } finally {
                setIsLoading(false);
            }
        };

        checkSession();
    }, [navigate]);

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-black text-white">
                <Loader2 className="animate-spin text-brand-500" size={32} />
            </div>
        );
    }

    return isAuthorized ? <>{children}</> : null;
};

export default ProtectedRoute;
