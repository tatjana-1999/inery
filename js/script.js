// Header
const createNav = () => {
    let nav = document.querySelector("#header");

    nav.innerHTML = `
    <div class="navbar">
        <a href="home.html"><img src="img/logo.png" alt=""></a>
    </div>

    <div class="content">
        <div class="content-item">
            <h1>Heading 1</h1>
            <p>Lorem ipsum dolor sit amet. Sapiente assumenda hic ea ab rem tempore quisquam nisi quis adipisci, sequi deserunt alias impedit veritatis ullam enim repellendus quaerat.</p>
            <div class="content-btn">
                <a href="#" class="btn-primary">Button 1</a>
                <a href="#" class="btn-secondary">Button 2</a>
            </div>
        </div>
    </div>
    `;
};

createNav();

// Footer
const createFooter = () => {
    let footer = document.querySelector("#footer");

    footer.innerHTML = `
    <div class="footer">
            <div class="col">
                <a href="#" class="logo"><img src="img/logo-footer.png" alt=""></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, natus numquam asperiores provident omnis dignissimos laborum optio minima ab aut.</p>
            </div>
            <div class="col">
                <h4>Section 1</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="col">
                <h4>Section 2</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="col">
                <h4>Section 3</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    `;
};

createFooter();

const createFooterTwo = () => {
    let footerTwo = document.querySelector("#footer-two");

    footerTwo.innerHTML = `
    <div class="footer-two">
            <div>
                <p>Copyright © 2022. All Rights Reserved</p>
            </div>
            <div>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    `;
};

createFooterTwo();