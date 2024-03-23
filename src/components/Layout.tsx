import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" w-full h-screen bg-hero bg-cover bg-no-repeat">
      {children}
    </div>
  );
};
