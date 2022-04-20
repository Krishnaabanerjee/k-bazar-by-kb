const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <img src="./images/klogo.png" class="brand-logo" alt="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search Products"/>
                    <button class="search-btn">Search</button>
                </div>
                <a href="./profile.html" ><img src="./images/user id.png" alt=""></a>
                <a href="#" ><img src="./images/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container" >
            <li class="link-item"><a href="#home" class="link" id="home">Home</a></li>
            <li class="link-item"><a href="./product.html" class="link" id="product">Products</a></li>
            <li class="link-item"><a href="#women" class="link" id="women">Women</a></li>
            <li class="link-item"><a href="#men" class="link" id="men">Men</a></li>
            <li class="link-item"><a href="#acc" class="link" id="acc">Accessories</a></li>
            <li class="link-item"><a href="#expl" class="link" id="expl">Explore More</a></li>
        </ul>
    
    `;
}
createNav();