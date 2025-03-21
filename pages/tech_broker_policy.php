<?php
// Start of buffering
ob_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/9fced4c10cbfbd52782b9a352f8dfab5.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tech Broler Policy</title>
    <meta name="theme-color" content="#c9e0e04d">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/favicons/favicon.ico" type="image/x-icon">
    <link rel="icon" sizes="16x16" href="/img/favicons/favicon-16x16.png" type="image/png">
    <link rel="icon" sizes="32x32" href="/img/favicons/favicon-32x32.png" type="image/png">
    <link rel="apple-touch-icon-precomposed" href="/img/favicons/apple-touch-icon-precomposed.png">
    <link rel="apple-touch-icon" href="/img/favicons/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/img/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/favicons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/img/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/img/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/img/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/img/favicons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="167x167" href="/img/favicons/apple-touch-icon-167x167.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="1024x1024" href="/img/favicons/apple-touch-icon-1024x1024.png">
    <link rel="stylesheet" href="/styles/tech_broker_policy.min.css">
</head>

<body>
    <section class="contact">
        <div class="headerBG"></div>

<div class="container headContainer">
    <header class="desktopHeader">
        <div class="wrapper-left">
            <a href="/index.php" class="home-link">
                <img src="/img/logo.svg" alt="logo">
            </a>

            <nav class="wrapper-left__nav">
                <ul>
                    <li>
                        <a data-localization="navigation-about" href="/pages/about.php">About</a>
                    </li>
                    <li>
                        <a data-localization="navigation-services" href="/pages/services.php">Services</a>
                    </li>
                    <li class="header-dropdown-li">
                        <button class="header-dropdown-btn">
                            <span>Earn & Engage</span>
                            <img src="/img/arrow-header.svg" alt="arrow">
                        </button>
                    </li>
                    <li>
                        <a data-localization="navigation-contactUs" href="/pages/contactUs.php">Contact us</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="wrapper-right">
            <button class="language-switcher desktop">
                <div class="current-language">
                    <div class="current-language-icon">
                        <img src="/img/flags/flagUSA.svg" alt="Language flag">
                    </div>
                    <span class="current-language-name">EN</span>
                </div>
                <ul class="language-list hidden-lang-list">
                    <!-- filled from header.js -->
                </ul>
            </button>

            <a href="https://insite.oursupport.co/sign-in" class="portal" target="_blank"
                data-localization="navigation-onlinePortal">
            </a>
            <a href="/pages/it-help.php" class="itHelp" target="_blank" data-localization="navigation-itHelp">
            </a>
        </div>
    </header>

</div>

<div class="header-dropdown-menu">
    <div class="header-dropdown-menu__wrapper">
        <a href="/pages/sales-advocate.php">
            <h3>Become Sales Advocate</h3>
            <p>Earn Recurring Commissions for Referrals</p>
        </a>
        <a href="/pages/support-engineer.php">
            <h3>Become an IT Support Engineer</h3>
            <p>Help Businesses Thrive with Top-Notch IT Support</p>
        </a>
    </div>
</div>
        <div class="mobileHeaderBG"></div>
<div class="container">
    <header class="mobileHeader">
        <a href="/index.php">
            <img class="mobileHeader__logo" src="/img/logo_mobile.svg" alt="logo">
        </a>
        <div class="mobileHeader__wrapper">
            <button class="language-switcher">
                <div class="current-language">
                    <div class="current-language-icon">
                        <img src="/img/flags/flagUSA.svg" alt="Language flag">
                    </div>
                    <span class="current-language-name">EN</span>
                </div>
                <ul class="language-list hidden-lang-list">
                    <!-- filled from header.js -->
                </ul>
            </button>
            <div class="iconsWrapper">
                <img class="mobileHeader__menu-icon" src="/img/menu.svg" alt="menu icon">
                <img class="mobileHeader__menu-icon hidden" src="/img/close.svg" alt="close icon">
            </div>
        </div>
    </header>
</div>
        <div class="mobile-menu">
    <div class="container">
        <nav>
            <ul>
                <li>
                    <a data-localization="mobileNavigation-home" href="/index.php"></a>
                </li>
                <li>
                    <a data-localization="mobileNavigation-about" href="/pages/about.php"></a>
                </li>
                <li>
                    <a data-localization="mobileNavigation-services" href="/pages/services.php"></a>
                </li>
                <li class="nav-item dropdown">
                    <div class="mobile-nav dropdown-toggle">
                        Earn & Engage
                        <img src="/img/arrow-header.svg" alt="arrow">
                    </div>
                    <ul class="mobile-nav dropdown-menu">
                        <a href="/pages/sales-advocate.php" class="dropdown-item">
                            Become Sales Advocate
                            <span class="dropdown-item-description">Earn Recurring Commissions for Referrals</span>
                        </a>
                        <a href="/pages/support-engineer.php" class="dropdown-item">
                            Become an IT Support Engineer
                            <span class="dropdown-item-description">Help Businesses Thrive with Top-Notch IT
                                Support
                            </span>
                        </a>
                    </ul>
                </li>
                <li>
                    <a data-localization="mobileNavigation-contactUs" href="/pages/contactUs.php"></a>
                </li>
                <li>
                    <a href="/pages/it-help.php" target="_blank" class="portal">
                        <div data-localization="mobileNavigation-itHelp" class="link-to-it-help"></div>
                    </a>
                </li>
                <li>
                    <a href="https://insite.oursupport.co/sign-in" target="_blank" class="portal">
                        <div data-localization="mobileNavigation-onlinePortal" class="portal__left"></div>
                    </a>
                </li>
            </ul>
        </nav>

    </div>
</div>
        <section class="tech-broker-hero">
    <div class="container">
        <h2 data-localization="hero-title">OurSupport Tech Broker Program Policy & Conditions</h2>
    </div>
</section>
        <section class="tech-broker-text">
    <div class="container">
        <br /><br />

        <h3 data-localization="text-introductionTitle">1. Introduction</h3>

        <p data-localization="text-introductionDescription">
            We are excited to introduce the OurSupport Tech Broker Program, designed to facilitate partnerships between
            engineers and Tech Brokers. This program allows engineers to delegate earnings management to a Tech Broker,
            ensuring structured commission handling and financial convenience. <br><br>The Tech Broker Program functions
            similarly to the Sales Advocate Program but is specifically tailored for engineers who prefer to work under
            a broker for financial and administrative ease.
        </p>

        <h3 data-localization="text-employmentTitle">2. Non-Employment Relationship</h3>

        <p data-localization="text-employmentDescription">
            • Participation in this program does not create an employer-employee relationship between Tech Brokers and
            OurSupport or between Tech Brokers and engineers.
            <br><br>
            • Tech Brokers are independent participants and not employees, contractors, or representatives of
            OurSupport, its shareholders, or direct employees.
        </p>

        <h3 data-localization="text-limitationTitle">3. Limitation of Liability</h3>

        <p data-localization="text-limitationDescription">
            • OurSupport is not liable for any errors, omissions, or disputes between Tech Brokers and engineers.
            <br><br>
            • OurSupport does not assume responsibility for any commitments, expectations, or financial agreements made
            between brokers and engineers outside the platform.
        </p>

        <h3 data-localization="text-respTitle">4. Responsibilities of the Tech Broker</h3>

        <p data-localization="text-respDescription">
            • Tech Brokers manage withdrawals and earnings for engineers assigned to them.
            <br><br>
            • Brokers must process withdrawals for engineers who have self-withdrawal disabled.
            <br><br>
            • OurSupport does not provide training or direct financial oversight beyond the platform’s built-in
            automation.
        </p>

        <h3 data-localization="text-paymentsTitle">5. Commission & Payment Structure</h3>

        <p data-localization="text-paymentsDescription">
            • Tech Brokers earn commission by inviting and managing other IT technicians within the platform.
            <br><br>
            • Fixed Commission Model: Brokers set a fixed hourly/ticket-based commission amount when connecting with an
            engineer.
            <br><br>
            • Once set, the commission rate cannot be modified unless the broker cancels and re-invites the engineer.
            <br><br>
            • Payments are automated, with commissions reflected in the wallets of both brokers and engineers.
        </p>

        <h3 data-localization="text-regionTitle">6. Region Changes & Connection Termination</h3>

        <p data-localization="text-regionDescription">
            • If an engineer changes regions, their connection to the Tech Broker is automatically terminated.
            <br><br>
            • Once terminated, the engineer’s self-withdrawal feature is reactivated, allowing them to manage their own
            earnings.
            <br><br>
            • Both the Tech Broker and Engineer will receive system notifications upon disconnection.
        </p>

        <h3 data-localization="text-cancellationTitle">7. Tech Broker Cancellation</h3>

        <p data-localization="text-cancellationDescription">
            • A Tech Broker can cancel their role at any time but must settle all outstanding balances before doing so.
            <br><br>
            • If engineers have pending earnings, the broker must distribute funds before cancellation.
            <br><br>
            • Once a broker cancels, all assigned engineers regain self-withdrawal access and can manage their own
            earnings independently.
        </p>

        <h3 data-localization="text-updatesTitle">8. Policy Updates & Modifications</h3>

        <p data-localization="text-updatesDescription">
            • OurSupport reserves the right to modify this program with a 30-day notice to participants.
            <br><br>
            • Any modifications will not affect existing earnings or agreements already in place for active engineers.
        </p>

        <h3 data-localization="text-disputeTitle">9. Governing Law & Disputes</h3>

        <p data-localization="text-disputeDescription">
            • This agreement is governed by European Union laws.
            <br><br>
            • Disputes shall be resolved through arbitration in accordance with the rules of [Arbitration Organization].
        </p>

        <h3 data-localization="text-entireTitle">10. Entire Agreement</h3>

        <p data-localization="text-entireDescription">
            • This policy represents the entire agreement between participants and supersedes all previous agreements,
            whether written or verbal.
            <br><br>
            • Any modifications must be in writing and signed by both parties.
            <br><br>
            • The invalidity of any clause in this agreement does not affect the validity of the remaining clauses.
        </p>

        <h3 data-localization="text-confidentTitle">11. Confidentiality & Non-Disclosure</h3>

        <p data-localization="text-confidentDescription">
            • Tech Brokers and Engineers must maintain confidentiality regarding financial agreements and OurSupport’s
            business processes.
            <br><br>
            • Participants must not share proprietary information related to transactions, commissions, or platform
            functionality.
            <br><br>
            • This confidentiality obligation remains in effect for three (3) years after leaving the program.
        </p>

    </div>
</section>
        <footer class="footer">
    <div class="container">
        <div class="footer__wrapper">
            <div class="footer-column">
                <h6 class="footer-column__title" data-localization="footer-getApp">Get the app</h6>
                <div class="footer-column__appLinks">
                    <a href="https://apps.apple.com/be/app/oursupport/id1506321441" target="_blank">
                        <img src="/img/footer/appleBtn.svg" alt="app store link">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tsolnetworks.oursupport" target="_blank">
                        <img src="/img/footer/googleBtn.svg" alt="google play link">
                    </a>
                </div>

                <h6 class="footer-column__investors-title" data-localization="footer-investors">INVESTORS</h6>
                <a href="https://www.portugalventures.pt/sobre-nos/parceiros-institucionais/portugal-2020/"
                    class="investors__logo" target="_blank">
                    <img src="/img/footer/venturesLogo.png" alt="investors">
                </a>
            </div>

            <div class="footer-column">
                <h6 class="footer-column__title" data-localization="footer-sitemap">SITEMAP</h6>

                <nav>
                    <ul>
                        <li>
                            <a data-localization="footer-toHome" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toAbout" href="/pages/about.php">
                                About
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toServices" href="/pages/services.php">
                                Services
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toContact" href="/pages/contactUs.php">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="footer-column">
                <h6 class="footer-column__title" data-localization="footer-earn">Earn & Engage</h6>

                <nav>
                    <ul>
                        <li>
                            <a data-localization="footer-toSalesAdvocate" href="/pages/sales-advocate.php">
                                Become Sales Advocate
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toSupportIngineer" href="/pages/support-engineer.php">
                                Become an IT Support Engineer
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="footer-column">
                <h6 class="footer-column__title" data-localization="footer-company">COMPANY</h6>

                <nav>
                    <ul>
                        <li>
                            <a data-localization="footer-toSalesPolicy" href="/pages/tech_broker_policy.php">
                                Tech and Sales Policy
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toTerms" href="/pages/terms.php">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toPolicy" href="/pages/policy.php">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toDeleteAccount"
                                href="https://insite.oursupport.co/deleteaccount">
                                Delete account
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toCookies" href="/pages/policy.php">
                                Cookies
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div data-localization="footer-copyright" class="footer-copyright">
            © 2023 Tsolnetworks connect europe. All rights reserved
        </div>
    </div>
</footer>
    </section>
    <script src="/js/main.min.js"></script>
    <script src="/js/vendor.min.js"></script>
</body>

</html>
<?php
   require_once __DIR__ . "/../utils/language_processor.php";
?>