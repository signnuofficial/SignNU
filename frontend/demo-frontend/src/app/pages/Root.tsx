import { Outlet, Navigate } from 'react-router';
import { useWorkflow } from '../context/WorkflowContext';
import { Sidebar } from '../components/Sidebar';
import AIAssistant from '../components/ui/AIAssistant';

function ProtectedLayout() {
  const { isAuthenticated } = useWorkflow();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
        <AIAssistant /> {}
      </main>
    </div>
  );
}

export function Root() {
  return <ProtectedLayout />;
}