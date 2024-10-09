import { ReactNode, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import StudentSidebar from "../../components/StudentComponents/StudentSidebar";

interface StudentLayoutProps {
  children?: ReactNode; // Make children optional
}

export const StudentLayout = ({
  children,
}: StudentLayoutProps): JSX.Element => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${isSidebarCollapsed ? "w-20" : "w-60"} transition-all`}>
        <StudentSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1">
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={toggleSidebar}
        />
        <div className="p-5">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default StudentLayout;
