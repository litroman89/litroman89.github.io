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
    <title>Contract for services Oursupport</title>
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
    <link rel="stylesheet" href="/styles/contract.min.css">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
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
        <section class="contract-hero">
    <div class="container">
        <h2 data-localization="hero-title"></h2>
    </div>
</section>
        <section class="contract-text">
    <div class="container">

        <h3 data-localization="text-title"></h3>

        <p data-localization="text-description">
        </p>

        <h2 data-localization="text-whereas"></h2>

        <p data-localization="text-whereasDescription">
        </p>

        <h3 data-localization="text-objective"></h3>

        <p data-localization="text-objectiveDescription">
        </p>


        <h3 data-localization="text-functions"></h3>

        <p data-localization="text-functionsDescription">
        </p>


        <h3 data-localization="text-locale"></h3>

        <p data-localization="text-localeDescription">
        </p>

        <h3 data-localization="text-remuneration"></h3>
        <p data-localization="text-remunerationDescription">
        </p>

        <h3 data-localization="text-duration"></h3>
        <p data-localization="text-durationDescription">
        </p>


        <h3 data-localization="text-transfer"></h3>
        <p data-localization="text-transferDescription">
        </p>

        <h3 data-localization="text-notifications"></h3>
        <p data-localization="text-notificationsDescription">
        </p>


        <h3 data-localization="text-confidentiality"></h3>
        <p data-localization="text-confidentialityDescription">
        </p>

        <h3 data-localization="text-loyalty"></h3>

        <p data-localization="text-loyaltyDescription">
        </p>

        <h3 data-localization="text-agreement"></h3>

        <p data-localization="text-agreementDescription">
        </p>

        <h2 data-localization="text-nonDisclosure"></h2>

        <p data-localization="text-nonDisclosureDescription">
        </p>

        <ol>
            <li data-localization="text-list1">
            </li>

            <li data-localization="text-list2">
            </li>

            <li data-localization="text-list3">
            </li>

            <li data-localization="text-list4">
            </li>

            <li data-localization="text-list5">
            </li>

            <li data-localization="text-list6">
                <ul>
                    <li data-localization="text-list6_1">
                    </li>

                    <li data-localization="text-list6_2">
                    </li>

                    <li data-localization="text-list6_3">
                    </li>

                    <li data-localization="text-list6_4">
                    </li>

                    <li data-localization="text-list6_5">
                    </li>
                </ul>
            </li>

            <li data-localization="text-list7">
            </li>

            <li data-localization="text-list8">
            </li>

            <li data-localization="text-list9">
            </li>

            <li data-localization="text-list10">
            </li>
        </ol>


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
    <script src="/js/animationMain.min.js"></script>
</body>

</html>
<?php
   require_once __DIR__ . "/../utils/language_processor.php";
?>