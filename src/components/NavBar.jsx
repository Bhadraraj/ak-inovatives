import React from 'react'

const NavBar = () => {
    return (
        <>

            <div className="header-main">
                <div className="container">
                    <a href="index.html" className="header-logo">
                        <img
                            src="./assets/images/logo.png"
                            alt="Anon's logo"
                            width={155}
                            height={50}
                        />
                    </a>

                    <div className="header-search-container">
                        <button className="search-btn">
                            <img src="./assets/images/magnifineglass.png" alt="" />
                        </button>
                        <input
                            type="search"
                            name="search"
                            className="search-field"
                            placeholder="Search"
                        />
                    </div>
                    <div className="header-user-actions">
                        <button className="action-btn">
                            <ul className="desktop-menu-category-list mb-0 ps-0">
                                <li className="menu-category">
                                    <a href="#" className="menu-title">
                                        <img src="./assets/images/user.png" alt="" />
                                    </a>
                                    <ul className="dropdown-list headLogin">
                                        <li className="dropdown-item">
                                            <a href="#" className="text-start">
                                                Login
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="#" className="text-start">
                                                Wishlist
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </button>
                        <button className="action-btn">
                            <img src="./assets/images/Line.png" alt="" />
                        </button>
                        <button className="action-btn">
                            <a href="shoppingCart.html">
                                <img src="./assets/images/cart.png" alt="" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list mb-0">
                        <li className="menu-category">
                            <a href="#" className="menu-title">
                                Women’s Day
                            </a>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title">
                                Shop Gifts
                            </a>
                            <div className="dropdown-panel">
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <a href="#">Electronics</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Desktop</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Laptop</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Camera</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Tablet</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Headphone</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img
                                                src="./assets/images/electronics-banner-1.jpg"
                                                alt="headphone collection"
                                                width={250}
                                                height={119}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <a href="#">Men's</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Formal</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Casual</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Sports</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Jacket</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Sunglasses</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img
                                                src="./assets/images/mens-banner.jpg"
                                                alt="men's fashion"
                                                width={250}
                                                height={119}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <a href="#">Women's</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Formal</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Casual</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Perfume</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Cosmetics</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Bags</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img
                                                src="./assets/images/womens-banner.jpg"
                                                alt="women's fashion"
                                                width={250}
                                                height={119}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <a href="#">Electronics</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Smart Watch</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Smart TV</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Keyboard</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Mouse</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">Microphone</a>
                                    </li>
                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img
                                                src="./assets/images/electronics-banner-2.jpg"
                                                alt="mouse collection"
                                                width={250}
                                                height={119}
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title">
                                Men's
                            </a>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="#">Shirt</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Shorts &amp; Jeans</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Safety Shoes</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Wallet</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title">
                                Make Your Own Hamper
                            </a>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="#">Dress &amp; Frock</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Earrings</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Necklace</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Makeup Kit</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title">
                                All Collections
                            </a>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="#">Earrings</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Couple Rings</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Necklace</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Bracelets</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title">
                                Corporate Gifting
                            </a>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="#">Clothes Perfume</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Deodorant</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Flower Fragrance</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">Air Freshener</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )
}

export default NavBar