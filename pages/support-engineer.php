<?php
// Start of buffering
ob_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <script type="text/javascript" charset="UTF-8"
        src="//cdn.cookie-script.com/s/9fced4c10cbfbd52782b9a352f8dfab5.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>IT Support Engineer Oursupport</title>
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
    <link rel="stylesheet" href="/styles/support_engineer.min.css">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
</head>

<body>
    <section class="sales-advocate-page">
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
        <section class="support-engineer-hero">
    <div class="container">
        <div class="support-engineer-hero__wrapper">
            <div class="support-engineer-hero__wrapper__content">
                <h2><span data-animate="first-title" data-localization="hero-title"></span></h2>
                <h6 data-localization="hero-subtitle"></h6>
                <p data-localization="hero-description">
                </p>
            </div>
            <picture>
                <source srcset="/img/support-engineer-page/job-request.jpg" type="image/jpg" media="(min-width: 901px)">
                <source srcset="/img/support-engineer-page/job-request-mobile.jpg" type="image/jpg"
                    media="(max-width: 900px)">
                <img src="/img/support-engineer-page/job-request.jpg" alt="working man">
            </picture>
        </div>
    </div>
</section>
        <section class="benefits">
    <div class="container">
        <h2><span data-animate="title" data-localization="benefits-title"></span></h2>
        <div class="benefits__cardWrapper">
            <div data-animate="card-up" class="benefits__cardWrapper__card card1">
                <h3 data-localization="benefits-card1Title"></h3>
                <p data-localization="benefits-card1Description"></p>
                <img src="/img/support-engineer-page/card1.svg" alt="first card" loading="lazy">
            </div>
            <div data-animate="card-up" class="benefits__cardWrapper__card card2">
                <h3 data-localization="benefits-card2Title"></h3>
                <p data-localization="benefits-card2Description"></p>
                <img src="/img/support-engineer-page/card2.svg" alt="second card" loading="lazy">
            </div>
            <div data-animate="card-up" class="benefits__cardWrapper__card card3">
                <h3 data-localization="benefits-card3Title"></h3>
                <p data-localization="benefits-card3Description"></p>
                <img src="/img/support-engineer-page/card3.svg" alt="third card" loading="lazy">
            </div>
        </div>
    </div>
</section>
        <div class="support-engineer-sectionWrapper">
    <section class="support-engineer-guide">
        <div class="container">
            <h2><span data-animate="title" data-localization="guide-title"></span></h2>
            <div class="support-engineer-guide__wrapper">
                <div class="line"></div>
                <div class="support-engineer-guide__wrapper__steps step1">
                    <picture>
                        <source srcset="/img/support-engineer-page/step1.jpg" type="image/jpg">
                        <img src="/img/support-engineer-page/step1.jpg" alt="step 1" loading="lazy">
                    </picture>
                    <div class="divider-bigCircle">
                        <div class="divider-smallCircle"></div>
                    </div>
                    <div class="content">
                        <h6 data-localization="guide-step1"></h6>
                        <h4 data-localization="guide-step1Title"></h4>
                        <p data-localization="guide-step1Descr"></p>
                    </div>
                </div>

                <div class="support-engineer-guide__wrapper__steps step2">
                    <picture>
                        <source srcset="/img/support-engineer-page/step2.jpg" type="image/jpg">
                        <img src="/img/support-engineer-page/step2.jpg" alt="step 2" loading="lazy">
                    </picture>
                    <div class="divider-bigCircle">
                        <div class="divider-smallCircle"></div>
                    </div>
                    <div class="content">
                        <h6 data-localization="guide-step2"></h6>
                        <h4 data-localization="guide-step2Title"></h4>
                        <p data-localization="guide-step2Descr"></p>
                    </div>
                </div>

                <div class="support-engineer-guide__wrapper__steps step3">
                    <picture>
                        <source srcset="/img/support-engineer-page/step3.jpg" type="image/jpg">
                        <img src="/img/support-engineer-page/step3.jpg" alt="step 3" loading="lazy">
                    </picture>
                    <div class="divider-bigCircle">
                        <div class="divider-smallCircle"></div>
                    </div>
                    <div class="content">
                        <h6 data-localization="guide-step3"></h6>
                        <h4 data-localization="guide-step3Title"></h4>
                        <p data-localization="guide-step3Descr"></p>
                    </div>
                </div>

                <div class="support-engineer-guide__wrapper__steps step4">
                    <picture>
                        <source srcset="/img/support-engineer-page/step4.jpg" type="image/jpg">
                        <img src="/img/support-engineer-page/step4.jpg" alt="step 4" loading="lazy">
                    </picture>
                    <div class="divider-bigCircle">
                        <div class="divider-smallCircle"></div>
                    </div>
                    <div class="content">
                        <h6 data-localization="guide-step4"></h6>
                        <h4 data-localization="guide-step4Title"></h4>
                        <p data-localization="guide-step4Descr"></p>
                    </div>
                </div>
            </div>
            <div class="support-engineer-guide__wrapper-mobile">
    <div class="line"></div>
    <div class="support-engineer-guide__wrapper-mobile__steps step1">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step1"></h6>
            <picture>
                <source srcset="/img/support-engineer-page/step1-mobile.jpg" type="image/jpg">
                <img src="/img/support-engineer-page/step1-mobile.jpg" alt="step 1" loading="lazy">
            </picture>

            <div class="content">
                <h4 data-localization="guideMobile-step1Title"></h4>
                <p data-localization="guideMobile-step1Descr"></p>
            </div>
        </div>
    </div>

    <div class="support-engineer-guide__wrapper-mobile__steps step2">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step2"></h6>
            <picture>
                <source srcset="/img/support-engineer-page/step2-mobile.jpg" type="image/jpg">
                <img src="/img/support-engineer-page/step2-mobile.jpg" alt="step 2" loading="lazy">
            </picture>

            <div class="content">
                <h4 data-localization="guideMobile-step2Title"></h4>
                <p data-localization="guideMobile-step2Descr"></p>
            </div>
        </div>
    </div>

    <div class="support-engineer-guide__wrapper-mobile__steps step3">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step3"></h6>
            <picture>
                <source srcset="/img/support-engineer-page/step3-mobile.jpg" type="image/jpg">
                <img src="/img/support-engineer-page/step3-mobile.jpg" alt="step 3" loading="lazy">
            </picture>

            <div class="content">
                <h4 data-localization="guideMobile-step3Title"></h4>
                <p data-localization="guideMobile-step3Descr"></p>
            </div>
        </div>
    </div>

    <div class="support-engineer-guide__wrapper-mobile__steps step4">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step4"></h6>
            <picture>
                <source srcset="/img/support-engineer-page/step4-mobile.jpg" type="image/jpg">
                <img src="/img/support-engineer-page/step4-mobile.jpg" alt="step 4" loading="lazy">
            </picture>

            <div class="content">
                <h4 data-localization="guideMobile-step4Title"></h4>
                <p data-localization="guideMobile-step4Descr"></p>
            </div>
        </div>
    </div>
</div>
        </div>
    </section>
</div>
        <section class="support-engineer-why-join">
    <div class="container">
        <div class="support-engineer-why-join__wrapper">
            <h2 data-localization="whyJoin-title">Why Join OurSupport?</h2>
            <div class="support-engineer-why-join__wrapper__desc">
                <div class="desck-block">
                    <img src="/img/support-engineer-page/calendar.svg" alt="calendar">
                    <h4 data-localization="whyJoin-block1Title">Flexible Work</h4>
                    <p data-localization="whyJoin-block1Desc">Choose between remote and on-site work based on your
                        availability.</p>
                </div>
                <div class="desck-block">
                    <img src="/img/support-engineer-page/calculator.svg" alt="calculator">
                    <h4 data-localization="whyJoin-block2Title">Competitive Earnings</h4>
                    <p data-localization="whyJoin-block2Desc">Earn based on time required for each task.</p>
                </div>
                <div class="desck-block">
                    <img src="/img/support-engineer-page/development.svg" alt="development">
                    <h4 data-localization="whyJoin-block3Title">Career Development</h4>
                    <p data-localization="whyJoin-block3Desc">Access ongoing training and certifications to sharpen your
                        skills.</p>
                </div>
                <div class="desck-block">
                    <img src="/img/support-engineer-page/community.svg" alt="community">
                    <h4 data-localization="whyJoin-block4Title">Global Community</h4>
                    <p data-localization="whyJoin-block4Desc">Collaborate with IT experts and share knowledge with an
                        international team.</p>
                </div>
            </div>
        </div>
    </div>
</section>
        <section class="support-engineer-requirements">
    <div class="container">
        <h2 data-localization='requirements-title'>What You’ll Need</h2>
        <div class="support-engineer-requirements__wrapper">
            <div class="item">
                <div class="item__number">1</div>
                <div class="item__wrapper">
                    <h4 data-localization='requirements-item1Title'>Technical Skills</h4>
                    <p data-localization='requirements-item1Desc'>Proficiency in areas like desktop support, networking,
                        software troubleshooting, or hardware
                        repairs.</p>
                </div>
            </div>
            <div class="item">
                <div class="item__number">2</div>
                <div class="item__wrapper">
                    <h4 data-localization='requirements-item2Title'>Certifications</h4>
                    <p data-localization='requirements-item2Desc'>Relevant IT certifications (CompTIA, Microsoft, etc.)
                        are beneficial but not mandatory.</p>
                </div>
            </div>
            <div class="item">
                <div class="item__number">3</div>
                <div class="item__wrapper">
                    <h4 data-localization='requirements-item3Title'>Professionalism</h4>
                    <p data-localization='requirements-item3Desc'>Ability to manage tasks independently and provide
                        excellent customer service.</p>
                </div>
            </div>
        </div>
    </div>
</section>
        <section class="support-engineer-faq">
    <div class="faq-bg">
        <div class="container">
            <div class="faq-wrapper">
                <div>
                    <h2><span data-localization="faq-title"></span></h2>
                    <p data-localization="faq-description"></p>
                </div>

                <div class="faq-wrapper__accordion">
                    <div class="faq-wrapper__accordion__item">
                        <div class="faq-wrapper__accordion__item__header" tabindex="0" role="button"
                            aria-label="accordion toggle button">
                            <div class="arrowWrapper">
                                <img src="/img/support-engineer-page/accordion-arrow.svg" alt="arrow" loading="lazy">
                            </div>
                            <h4 data-localization="faq-item1Title"></h4>
                        </div>
                        <div class="faq-wrapper__accordion__item__content">
                            <p data-localization="faq-item1Content"></p>
                        </div>
                    </div>
                    <div class="faq-wrapper__accordion__item">
                        <div class="faq-wrapper__accordion__item__header" tabindex="0" role="button"
                            aria-label="accordion toggle button">
                            <div class="arrowWrapper">
                                <img src="/img/support-engineer-page/accordion-arrow.svg" alt="arrow" loading="lazy">
                            </div>
                            <h4 data-localization="faq-item2Title"></h4>
                        </div>
                        <div class="faq-wrapper__accordion__item__content">
                            <p data-localization="faq-item2Content"></p>
                        </div>
                    </div>
                    <div class="faq-wrapper__accordion__item">
                        <div class="faq-wrapper__accordion__item__header" tabindex="0" role="button"
                            aria-label="accordion toggle button">
                            <div class="arrowWrapper">
                                <img src="/img/support-engineer-page/accordion-arrow.svg" alt="arrow" loading="lazy">
                            </div>
                            <h4 data-localization="faq-item3Title"></h4>
                        </div>
                        <div class="faq-wrapper__accordion__item__content">
                            <p data-localization="faq-item3Content"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
        <section class="support-engineer-download-app">
    <picture>
        <source srcset="/img/support-engineer-page/phones-desktop.png" type="image/png" media="(min-width: 920px)">
        <source srcset="/img/support-engineer-page/phones-mobile.png" type="image/png" media="(max-width: 920px)">
        <img src="/img/support-engineer-page/phones-desktop.png" alt="oursupport app installed on the phone"
            loading="lazy">
    </picture>
    <div class="container">
        <div class="support-engineer-download-app__wrapper">
            <div class="support-engineer-download-app__wrapper__content">
                <h2 data-localization="downloadApp-title"></h2>
                <p data-localization="downloadApp-description"></p>
                <div class="links">
                    <a href="https://apps.apple.com/be/app/oursupport/id1506321441" target="_blank">
                        <img src="/img/support-engineer-page/download-app-store.svg" alt="link to app store"
                            loading="lazy">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tsolnetworks.oursupport" target="_blank">
                        <img src="/img/support-engineer-page/download-google.svg" alt="link to google play"
                            loading="lazy">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
        <footer class="footer">
    <div class="container">
        <div class="footer__wrapper">
            <div class="footer__wrapper__nav">
                <img src="/img/footer/footerLogo.svg" alt="logo">
                <p data-localization="footer-description"></p>
                <nav>
                    <ul>
                        <li>
                            <a data-localization="footer-toAbout" href="/pages/about.php">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a data-localization="footer-toJobs"
                                href="https://www.linkedin.com/company/oursupport/jobs/">
                                Careers
                            </a>
                        </li>
                        <!-- <li>
                            <a data-localization="footer-toFAQ" href="#">
                                FAQ
                            </a>
                        </li> -->
                        <li>
                            <a data-localization="footer-toContact" href="/pages/contactUs.php">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="footer__wrapper__links">
                <p data-localization="footer-getApp"></p>
                <div class="footer__wrapper__links__wrapper">
                    <a href="https://apps.apple.com/be/app/oursupport/id1506321441" target="_blank">
                        <img src="/img/footer/appBtn.svg" alt="app store link">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tsolnetworks.oursupport" target="_blank">
                        <img src="/img/footer/googleBtn.svg" alt="google play link">
                    </a>
                </div>

                <button class="footer-language-switcher desktop">
                    <div class="footer-current-language">
                        <div class="footer-current-language-icon">
                            <img src="/img/flags/flagUSA.svg" alt="Language flag">
                        </div>
                        <span class="footer-current-language-name">English</span>
                    </div>
                    <ul class="footer-language-list hidden-lang-list">
                        <!-- filled from header.js -->
                    </ul>
                </button>
            </div>
        </div>

        <hr>

        <div class="footer__bottom">
            <div class="investors">
                <span data-localization="footer-investors"></span>
                <a href="https://www.portugalventures.pt/sobre-nos/parceiros-institucionais/portugal-2020/"
                    class="investors__logo" target="_blank"><img src="/img/footer/venturesLogo.png" alt="investors"></a>
            </div>
            <div class="footer__bottom__wrapper">
                <div data-localization="footer-copyright" class="footer__bottom__wrapper__rights"></div>

                <div class="footer__bottom__wrapper__links">
                    <a data-localization="footer-toTerms" href="/pages/terms.php"></a>
                    <a data-localization="footer-toPolicy" href="/pages/policy.php"></a>
                    <a data-localization="footer-deleteAccount" href="https://insite.oursupport.co/deleteaccount"
                        target="_blank"></a>
                    <a data-localization="footer-toCookies" href="#"></a>
                    <a data-localization="footer-toTechBrokerPolicy" href="/pages/tech_broker_policy.php">Tech Broker
                        Policy</a>
                </div>

            </div>
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