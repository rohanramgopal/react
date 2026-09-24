export default function ThemeToggle({ dark, setDark }) {

    return (
        <button
            className="theme-button"
            onClick={() => setDark(!dark)}
        >
            {dark ? "Switch to Light Mode" : " Switch to Dark Mode"}
        </button>
    );
}