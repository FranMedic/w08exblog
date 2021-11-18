import Header from "@/components/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
