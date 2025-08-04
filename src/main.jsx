import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Header() {
  return (
    <header className="header">
      <img src="/vite.svg" alt="Vite Logo" width="60px" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ul>
          <li>It's a popular library, so I'll be able to fit in with a lot of people</li>
          <li>I'm more likely to get a job as a front end developer if I know React</li>
          <li>I get to make good websites</li>
      </ul>
    </>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2025 <span>Radley Le</span> development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(
  <Page />
  // <>
  //   <Header />
  //   <MainContent />
  //   <Footer />
  // </>
)

