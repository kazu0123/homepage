<style>
    :global(body) {
        margin: 0;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f8f9fa;
        border-bottom: 1px solid #ddd;
    }

    nav ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    nav ul li {
        margin-right: 1rem;
    }

    nav ul li:last-child {
        margin-right: 0;
    }

    nav a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s;
    }

    nav a:hover {
        color: #007bff;
    }

    div.name {
        font-weight: bold;
    }
</style>

<header>
    <div class="name">小久保和喜</div>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about-me">About Me</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>
