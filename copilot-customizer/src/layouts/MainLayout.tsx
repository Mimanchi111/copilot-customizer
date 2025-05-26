import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">智能体 Copilot 定制平台</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-200 transition-colors">首页</Link>
              <Link to="/attributes" className="hover:text-blue-200 transition-colors">属性配置</Link>
              <Link to="/appearance" className="hover:text-blue-200 transition-colors">外貌定制</Link>
              <Link to="/preview" className="hover:text-blue-200 transition-colors">在线预览</Link>
            </nav>
            <div className="md:hidden">
              {/* 移动端菜单按钮 */}
              <button className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 智能体 Copilot 定制平台</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">关于我们</a>
              <a href="#" className="hover:text-blue-300 transition-colors">使用条款</a>
              <a href="#" className="hover:text-blue-300 transition-colors">隐私政策</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
