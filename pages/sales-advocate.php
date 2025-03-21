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
    <title>Sales-Advocate Oursupport</title>
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
    <link rel="stylesheet" href="/styles/sales_advocate.min.css">
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
        <section class="sales-advocate-hero">
    <div class="container">
        <div class="sales-advocate-hero__wrapper">
            <div class="sales-advocate-hero__wrapper__content">
                <h2><span data-animate="first-title" data-localization="hero-title"></span></h2>
                <h6 data-localization="hero-subtitle"></h6>
                <p data-localization="hero-description">
                </p>
            </div>
            <picture>
                <source srcset="/img/sales-advocate-page/working-man.jpg" type="image/jpg" media="(min-width: 901px)">
                <source srcset="/img/sales-advocate-page/working-man-mobile.jpg" type="image/jpg"
                    media="(max-width: 900px)">
                <img src="/img/sales-advocate-page/working-man.jpg" alt="working man">
            </picture>
        </div>
    </div>
</section>
        <section class="why-join">
    <div class="container">
        <h2><span data-animate="title" data-localization="whyJoin-title"></span></h2>
        <div class="why-join__cardWrapper">
            <div data-animate="card-up" class="why-join__cardWrapper__card card1">
                <h3 data-localization="whyJoin-card1Title"></h3>
                <p data-localization="whyJoin-card1Description"></p>
                <img src="/img/sales-advocate-page/card1.svg" alt="first card" loading="lazy">
            </div>
            <div data-animate="card-up" class="why-join__cardWrapper__card card2">
                <h3 data-localization="whyJoin-card2Title"></h3>
                <p data-localization="whyJoin-card2Description"></p>
                <img src="/img/sales-advocate-page/card2.svg" alt="second card" loading="lazy">
            </div>
            <div data-animate="card-up" class="why-join__cardWrapper__card card3">
                <h3 data-localization="whyJoin-card3Title"></h3>
                <p data-localization="whyJoin-card3Description"></p>
                <img src="/img/sales-advocate-page/card3.svg" alt="third card" loading="lazy">
            </div>
        </div>
    </div>
</section>
        <div class="sales-advocate-sectionWrapper">
    <section class="sales-advocate-guide">
        <div class="container">
            <h2><span data-animate="title" data-localization="guide-title"></span></h2>
            <div class="sales-advocate-guide__wrapper">
                <div class="line"></div>
                <div class="sales-advocate-guide__wrapper__steps step1">
                    <picture>
                        <source srcset="/img/sales-advocate-page/step1.jpg" type="image/jpg">
                        <img src="/img/sales-advocate-page/step1.jpg" alt="step 1" loading="lazy">
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

                <div class="sales-advocate-guide__wrapper__steps step2">
                    <picture>
                        <source srcset="/img/sales-advocate-page/step2.jpg" type="image/jpg">
                        <img src="/img/sales-advocate-page/step2.jpg" alt="step 2" loading="lazy">
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

                <div class="sales-advocate-guide__wrapper__steps step3">
                    <picture>
                        <source srcset="/img/sales-advocate-page/step3.jpg" type="image/jpg">
                        <img src="/img/sales-advocate-page/step3.jpg" alt="step 3" loading="lazy">
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

                <div class="sales-advocate-guide__wrapper__steps step4">
                    <picture>
                        <source srcset="/img/sales-advocate-page/step4.jpg" type="image/jpg">
                        <img src="/img/sales-advocate-page/step4.jpg" alt="step 4" loading="lazy">
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
            <div class="sales-advocate-guide__wrapper-mobile">
    <div class="line"></div>
    <div class="sales-advocate-guide__wrapper-mobile__steps step1">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step1"></h6>
            <picture>
                <source srcset="/img/sales-advocate-page/step1-mobile.jpg" type="image/jpg">
                <img src="/img/sales-advocate-page/step1-mobile.jpg" alt="step 1" loading="lazy">
            </picture>

            <div class="content">
                <h4 data-localization="guideMobile-step1Title"></h4>
                <p data-localization="guideMobile-step1Descr"></p>
            </div>
        </div>
    </div>

    <div class="sales-advocate-guide__wrapper-mobile__steps step2">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step2"></h6>
            <picture>
                <source srcset="/img/sales-advocate-page/step2-mobile.jpg" type="image/jpg">
                <img src="/img/sales-advocate-page/step2-mobile.jpg" alt="step 2" loading="lazy">
            </picture>

            <div class="content">
                <h4 data-localization="guideMobile-step2Title"></h4>
                <p data-localization="guideMobile-step2Descr"></p>
            </div>
        </div>
    </div>

    <div class="sales-advocate-guide__wrapper-mobile__steps step3">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step3"></h6>
            <picture>
                <source srcset="/img/sales-advocate-page/step3-mobile.jpg" type="image/jpg">
                <img src="/img/sales-advocate-page/step3-mobile.jpg" alt="step 3" loading="lazy">
            </picture>

            <div class="content">
                <h4 data-localization="guideMobile-step3Title"></h4>
                <p data-localization="guideMobile-step3Descr"></p>
            </div>
        </div>
    </div>

    <div class="sales-advocate-guide__wrapper-mobile__steps step4">
        <div class="divider-bigCircle">
            <div class="divider-smallCircle"></div>
        </div>
        <div class="contentWrapper">
            <h6 data-localization="guideMobile-step4"></h6>
            <picture>
                <source srcset="/img/sales-advocate-page/step4-mobile.jpg" type="image/jpg">
                <img src="/img/sales-advocate-page/step4-mobile.jpg" alt="step 4" loading="lazy">
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
        <section class="sales-advocate-comission">
    <div class="container">
        <div class="sales-advocate-comission__structure">
            <div class="content">
                <h2 data-localization="comission-title"></h2>
                <div class="structure-wrapper">
                    <div class="structure-wrapper__item">
                        <div class="dateWrapper">
                            <div class="outer-circle">
                                <div class="inner-circle"></div>
                            </div>
                            <div class="date">
                                <img src="/img/sales-advocate-page/calendar.svg" alt="calendar" loading="lazy">
                                <p data-localization="comission-date1"></p>
                            </div>
                        </div>
                        <div class="item-descr" data-localization="comission-date1Descr"></div>
                    </div>
                    <div class="structure-wrapper__item">
                        <div class="dateWrapper">
                            <div class="outer-circle">
                                <div class="inner-circle"></div>
                            </div>
                            <div class="date">
                                <img src="/img/sales-advocate-page/calendar.svg" alt="calendar" loading="lazy">
                                <p data-localization="comission-date2"></p>
                            </div>
                        </div>
                        <div class="item-descr" data-localization="comission-date2Descr"></div>
                    </div>
                </div>
            </div>
            <div class="imageWrapepr">
                <img src="/img/sales-advocate-page/comission.jpg" alt="comission" loading="lazy">

            </div>
        </div>

        <div class="sales-advocate-comission__benefits">
            <h3 data-localization="comission-benefitsTitle"></h3>
            <div class="sales-advocate-comission__benefits__wrapper">
                <div class="benefits-item">
                    <div>
                        <h6 data-localization="comission-trainingTitle"></h6>
                        <p data-localization="comission-trainingDescr"></p>
                    </div>
                    <img src="/img/sales-advocate-page/learning-support.svg" alt="learning support" loading="lazy">
                </div>
                <div class="benefits-item">
                    <div>
                        <h6 data-localization="comission-bonus"></h6>
                        <p data-localization="comission-bonusDescr"></p>
                    </div>
                    <img src="/img/sales-advocate-page/invoice.svg" alt="bonus opportunities" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</section>
        <section class="maximize-success">
    <div class="container">
        <h2><span data-animate="title" data-localization="maximizeSuccess-title"></span></h2>

        <div class="maximize-success__wrapper-desktop">
            <div class="maximize-success__wrapper-desktop__block ">
                <div class="block-top blockTop-1">
                    <h6 data-localization="maximizeSuccess-block1Title"></h6>
                    <p data-localization="maximizeSuccess-block1Descr"></p>
                </div>

                <div class="block-bottom">
                    <p>25%</p>
                </div>
            </div>

            <div class="maximize-success__wrapper-desktop__block ">
                <div class="block-top blockTop-2">
                    <h6 data-localization="maximizeSuccess-block2Title"></h6>
                    <p data-localization="maximizeSuccess-block2Descr"></p>
                </div>

                <div class="block-bottom">
                    <p>50%</p>
                </div>
            </div>

            <div class="maximize-success__wrapper-desktop__block ">
                <div class="block-top blockTop-3">
                    <h6 data-localization="maximizeSuccess-block3Title"></h6>
                    <p data-localization="maximizeSuccess-block3Descr"></p>
                </div>

                <div class="block-bottom">
                    <p>75%</p>
                </div>
            </div>

            <div class="maximize-success__wrapper-desktop__block ">
                <div class="block-top blockTop-4">
                    <h6 data-localization="maximizeSuccess-block4Title"></h6>
                    <p data-localization="maximizeSuccess-block4Descr"></p>
                </div>

                <div class="block-bottom">
                    <p>100%</p>
                </div>
            </div>
        </div>

        <div class="maximize-success__wrapper-mobile">
            <div class="maximize-success__wrapper-mobile__block">
                <div class="block-top">
                    <h6 data-localization="maximizeSuccessMobile-block1Title"></h6>
                    <p data-localization="maximizeSuccessMobile-block1Descr"></p>
                </div>
                <div class="block-bottom">
                    <div class="progress progress-1"></div>
                    <p>25%</p>
                </div>
            </div>
            <div class="maximize-success__wrapper-mobile__block">
                <div class="block-top">
                    <h6 data-localization="maximizeSuccessMobile-block2Title"></h6>
                    <p data-localization="maximizeSuccessMobile-block2Descr"></p>
                </div>
                <div class="block-bottom">
                    <div class="progress progress-2"></div>
                    <p>50%</p>
                </div>
            </div>
            <div class="maximize-success__wrapper-mobile__block">
                <div class="block-top">
                    <h6 data-localization="maximizeSuccessMobile-block3Title"></h6>
                    <p data-localization="maximizeSuccessMobile-block3Descr"></p>
                </div>
                <div class="block-bottom">
                    <div class="progress progress-3"></div>
                    <p>75%</p>
                </div>
            </div>
            <div class="maximize-success__wrapper-mobile__block">
                <div class="block-top">
                    <h6 data-localization="maximizeSuccessMobile-block4Title"></h6>
                    <p data-localization="maximizeSuccessMobile-block4Descr"></p>
                </div>
                <div class="block-bottom">
                    <div class="progress progress-4"></div>
                    <p>100%</p>
                </div>
            </div>
        </div>
    </div>
</section>
        <section class="sales-advocate-faq">
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
                                <img src="/img/sales-advocate-page/accordion-arrow.svg" alt="arrow" loading="lazy">
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
                                <img src="/img/sales-advocate-page/accordion-arrow.svg" alt="arrow" loading="lazy">
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
                                <img src="/img/sales-advocate-page/accordion-arrow.svg" alt="arrow" loading="lazy">
                            </div>
                            <h4 data-localization="faq-item3Title"></h4>
                        </div>
                        <div class="faq-wrapper__accordion__item__content">
                            <p data-localization="faq-item3Content"></p>
                        </div>
                    </div>
                    <div class="faq-wrapper__accordion__item">
                        <div class="faq-wrapper__accordion__item__header" tabindex="0" role="button"
                            aria-label="accordion toggle button">
                            <div class="arrowWrapper">
                                <img src="/img/sales-advocate-page/accordion-arrow.svg" alt="arrow" loading="lazy">
                            </div>
                            <h4 data-localization="faq-item4Title"></h4>
                        </div>
                        <div class="faq-wrapper__accordion__item__content">
                            <p data-localization="faq-item4Content"></p>
                        </div>
                    </div>
                    <div class="faq-wrapper__accordion__item">
                        <div class="faq-wrapper__accordion__item__header" tabindex="0" role="button"
                            aria-label="accordion toggle button">
                            <div class="arrowWrapper">
                                <img src="/img/sales-advocate-page/accordion-arrow.svg" alt="arrow" loading="lazy">
                            </div>
                            <h4 data-localization="faq-item5Title"></h4>
                        </div>
                        <div class="faq-wrapper__accordion__item__content">
                            <p data-localization="faq-item5Content"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
        <section class="sales-advocate-download-app">
    <picture>
        <source srcset="/img/sales-advocate-page/phones-desktop.png" type="image/png" media="(min-width: 920px)">
        <source srcset="/img/sales-advocate-page/phones-mobile.png" type="image/png" media="(max-width: 920px)">
        <img src="/img/sales-advocate-page/phones-desktop.png" alt="oursupport app installed on the phone"
            loading="lazy">
    </picture>
    <div class="container">
        <div class="sales-advocate-download-app__wrapper">
            <div class="sales-advocate-download-app__wrapper__content">
                <h2 data-localization="downloadApp-title"></h2>
                <p data-localization="downloadApp-description"></p>
                <div class="links">
                    <a href="https://apps.apple.com/be/app/oursupport/id1506321441" target="_blank">
                        <img src="/img/sales-advocate-page/download-app-store.svg" alt="link to app store"
                            loading="lazy">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tsolnetworks.oursupport" target="_blank">
                        <img src="/img/sales-advocate-page/download-google.svg" alt="link to google play"
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