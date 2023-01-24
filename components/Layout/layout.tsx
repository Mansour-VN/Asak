import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <>
      <>
        <Header />
      </>
      <main>{children}</main>
      <>
        <Footer />
      </>
    </>
  )
}