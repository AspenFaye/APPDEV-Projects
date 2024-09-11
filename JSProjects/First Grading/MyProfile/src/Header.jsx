export default function Header() {
    return(
        
        <header>
            <center><h1>MY PERSONAL PROFILE</h1></center>
            <nav>
        <div class="nav-center">
            <div class="nav-header">
                
                    <button class="nav-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
            </div>

            <ul class="links">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="projects.html">Projects</a>
                </li>
                <li>
                    <a href="contact.html">Contacts</a>
                </li>
            </ul>

            <ul class="social-icons">
                <li>
                    <a href="https://www.facebook.com">
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.com">
                        <i class="fab fa-behance"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.sketch.com">
                        <i class="fab fa-sketch"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>   
        </header>
    )
}