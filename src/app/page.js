import Layout from './layout-component';

export default function Main() {
  return (
    <Layout>
      <div className={`
        bg-white dark:bg-zinc-800 
        shadow-md rounded-lg p-6
        text-gray-800 dark:text-gray-200
      `}>
        <h1 className="text-2xl font-bold mb-4">Welcome to GenUI React</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This is a starter template with dark mode support, 
          a collapsible sidebar, and responsive design.
        </p>
      </div>
    </Layout>
  );
}