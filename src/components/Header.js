

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <div className='toggle'>
                <p>Dark Mode</p>
                <input type="checkbox" />
            </div>
        </header>
    )
}

export default Header
