import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from './components/ui/sonner';
import { WorkflowProvider } from './context/WorkflowContext';

export default function App() {
  return (
    <WorkflowProvider>
      <RouterProvider router={router} />
      <Toaster />
    </WorkflowProvider>
  );
}