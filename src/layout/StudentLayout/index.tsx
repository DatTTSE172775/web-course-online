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
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default StudentLayout;
