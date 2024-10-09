import { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import StudentSidebar from "../../components/StudentComponents/StudentSidebar";

interface StudentLayoutProps {
  children?: ReactNode; // Make children optional
}

export const StudentLayout = ({
  children,
}: StudentLayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <StudentSidebar />
        <div className="flex-1 bg-gray-100">
          <Header />
          <div className="p-5">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
