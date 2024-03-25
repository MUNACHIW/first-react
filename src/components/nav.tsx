function Nav() {
    return (
        <nav>
            <form className="logoinput">
                <i className="bi bi-linkedin"></i>
                <input placeholder="Search"></input>
                <i className="bi bi-search " id="view"></i>
            </form>
            <ul>
                <li className="activeholder"><i className="bi bi-house-fill active "></i><a className="active" href="/">Home</a></li>
                <li><i className="bi bi-person-fill-add"></i><a href="/">My Network</a></li>
                <li><i className="bi bi-briefcase-fill"></i><a href="/">Jobs</a></li>
                <li><i className="bi bi-chat-dots-fill"></i><a href="/">messages</a></li>
                <li><i className="bi bi-bell-fill"></i><a href="/">Notifications</a></li>
                <li><img src="/image/bwall.jpg" alt="text" /><a href="/">Me<i className="bi-caret-down-fill"></i></a></li>
            </ul>
          <div className="container1nav">
            <li className="business">
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <a href="/">For Business<i className="bi-caret-down-fill"></i></a>
            </li>
            <div className="business">
                <a className="link-center" href="/">Unlock 1 month of<br></br> premium </a>
            </div>
          </div>
        </nav>
    );
}

export default Nav;


