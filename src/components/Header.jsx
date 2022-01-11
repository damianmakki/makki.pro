import Profile from "../images/profile.jpg"

export default function Header() {
  return (
    <>
      <nav className="main">
        <img className="profile" src={Profile} alt="Damian Makki standing in front of a pink wall." />
      </nav>
      <h1>Hey! I'm Damian.<br />Nice to meet you.</h1>
    </>
  )
}