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
    <title>Services Oursupport</title>
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
    <link rel="stylesheet" href="/styles/main.min.css">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
</head>

<body>
    <section class="services">
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
        <section class="services-enterprise">
    <div class="container">
        <div class="services-enterprise__wrapper">
            <div class="services-enterprise__wrapper__title">
                <h2><span data-animate='first-title' data-localization="title"></span></h2>
                <h6 data-localization="subTitle"></h6>
            </div>
            <p>
                <span data-localization="description" data-animate="subtitle"></span>
            </p>
        </div>

        <img src="../img/services-enterprise/office.jpg" alt="image">
    </div>
</section>
        <section class="services-why">
    <picture>
        <source srcset="../img/access/bg.webp" type="image/webp" media="(min-width: 600px)">
        <source srcset="../img/access/bg.jpg" type="image/jpg" media="(min-width: 600px)">
        <source srcset="../img/about-values/bg-mobile.webp" type="image/webp" media="(max-width: 600px)">
        <source srcset="../img/about-values/bg-mobile.jpg" type="image/jpg" media="(max-width: 600px)">
        <img src="../img/access/bg.jpg" alt="background image" loading="lazy">
    </picture>

    <div class="container">
        <div class="services-why__title">
            <h2><span data-animate="title" data-localization="whyTitle"></span></h2>
            <p data-localization="whyDescription">
            </p>
        </div>

        <div class="services-why__wrapper">
            <hr>

            <div data-animate='slide-right-left' class="services-why__wrapper__block">
                <div class="services-why__wrapper__block__name">
                    <h4>01</h4>
                    <h3 data-localization="why1Title"></h3>
                </div>

                <div data-localization="why1Description" class="services-why__wrapper__block__descr">
                </div>
            </div>

            <hr>

            <div data-animate='slide-right-left' class="services-why__wrapper__block">
                <div class="services-why__wrapper__block__name">
                    <h4>02</h4>
                    <h3 data-localization="why2Title"></h3>
                </div>

                <div data-localization="why2Description" class="services-why__wrapper__block__descr">
                </div>
            </div>

            <hr>

            <div data-animate='slide-right-left' class="services-why__wrapper__block">
                <div class="services-why__wrapper__block__name">
                    <h4>03</h4>
                    <h3 data-localization="why3Title"></h3>
                </div>

                <div data-localization="why3Description" class="services-why__wrapper__block__descr">
                </div>
            </div>

            <hr>

        </div>
    </div>
</section>
        <section id="sales-advocate" class="advocate steps">
    <div class="container">
        <div class="advocate__wrapper">
            <h2>
                <span data-localization="advocate-title" data-animate="title"></span>
            </h2>

            <div class="advocate__wrapper__description">
                <div data-animate="subtitle">
                    <h5 data-localization="advocate-subtitleh5">
                    </h5>
                    <h6 data-localization="advocate-subtitleh6">
                    </h6>
                </div>
            </div>

        </div>

        <div class="steps__mobileWrapper">
            <div class="steps__mobileWrapper__block block1">
                <div class="steps__mobileWrapper__block__left">
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="steps__mobileWrapper__block__right">
                    <h4 data-localization="stepsMobile-step1">Step 1</h4>
                    <img src="/img/services/step1.jpg" alt="step 1">
                    <h3 data-localization="stepsMobile-step1Title">Install and Register</h3>
                    <p data-localization="stepsMobile-step1Description">Download and register as a customer or IT tech
                        support in the OurSupport application.</p>
                </div>
            </div>

            <div class="steps__mobileWrapper__block block2">
                <div class="steps__mobileWrapper__block__left">
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="steps__mobileWrapper__block__right">
                    <h4 data-localization="stepsMobile-step2">Step 2</h4>
                    <img src="/img/services/step2.jpg" alt="step 2">
                    <h3 data-localization="stepsMobile-step2Title">Request and Get Approval</h3>
                    <p data-localization="stepsMobile-step2Description">
                        Go to the settings section of the OurSupport mobile app and request approval to become a Sales
                        Advocate. Once approved, you can act as a Sales Advocate for OurSupport.
                    </p>
                </div>
            </div>

            <div class="steps__mobileWrapper__block block3">
                <div class="steps__mobileWrapper__block__left">
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="steps__mobileWrapper__block__right">
                    <h4 data-localization="stepsMobile-step3">Step 3</h4>
                    <img src="/img/services/step3.jpg" alt="step 3">
                    <h3 data-localization="stepsMobile-step3Title">Share Your Unique Link</h3>
                    <p data-localization="stepsMobile-step3Description">
                        Create and share your unique link with your contacts from within the Sales Advocate section
                        inside the OurSupport mobile application.
                    </p>
                </div>
            </div>

            <div class="steps__mobileWrapper__block block4">
                <div class="steps__mobileWrapper__block__left">
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="steps__mobileWrapper__block__right">
                    <h4 data-localization="stepsMobile-step4">Step 4</h4>
                    <img src="/img/services/step4.jpg" alt="step 4">
                    <h3 data-localization="stepsMobile-step4Title">Earn Commissions</h3>
                    <p data-localization="stepsMobile-step4Description">
                        When your contacts register and accept you as their representative, you'll earn a commission
                        based on all their spending revenue for one year.
                    </p>
                </div>
            </div>
        </div>

        <div class="steps__desktopWrapper">
            <div class="steps__desktopWrapper__row row1">
                <img src="/img/services/step1.jpg" alt="step 1">
                <div data-animate='slide-bottom-up' class="steps__desktopWrapper__row__descr">
                    <h4 data-localization="steps-step1"></h4>
                    <h3 data-localization="steps-step1Title"></h3>
                    <p data-localization="steps-step1Description">
                    </p>
                </div>
            </div>

            <div class="steps__desktopWrapper__row row2">
                <div data-animate='slide-bottom-up' class="steps__desktopWrapper__row__descr">
                    <h4 data-localization="steps-step2"></h4>
                    <h3 data-localization="steps-step2Title"></h3>
                    <p data-localization="steps-step2Description">
                    </p>
                </div>
                <img src="/img/services/step2.jpg" alt="step 2">
            </div>

            <div class="steps__desktopWrapper__row row3">
                <img src="/img/services/step3.jpg" alt="step 3">
                <div data-animate='slide-bottom-up' class="steps__desktopWrapper__row__descr">
                    <h4 data-localization="steps-step3"></h4>
                    <h3 data-localization="steps-step3Title"></h3>
                    <p data-localization="steps-step3Description">
                    </p>
                </div>
            </div>

            <div class="steps__desktopWrapper__row row4">
                <div data-animate='slide-bottom-up' class="steps__desktopWrapper__row__descr">
                    <h4 data-localization="steps-step4"></h4>
                    <h3 data-localization="steps-step4Title"></h3>
                    <p data-localization="steps-step4Description">
                    </p>
                </div>
                <img src="/img/services/step4.jpg" alt="step 4">
            </div>

            <img src="/img/services/line.svg" alt="line" class="line" loading="lazy">
        </div>

        <div class="advocate__linksWrapper">
            <p class="advocate__linksWrapper__title" data-localization="advocateLinks-title"></p>
            <p class="advocate__linksWrapper__descr" data-localization="advocateLinks-description"></p>
            <div class="advocate__linksWrapper__links">
                <a href="https://apps.apple.com/be/app/oursupport/id1506321441" target="_blank"
                    class="advocate__linksWrapper__links__link app">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 46" fill="none">
                        <rect width="160" height="46" rx="23" fill="#040829" />
                        <path
                            d="M46.0101 22.2161C45.9833 19.314 48.4473 17.9021 48.5599 17.8364C47.1645 15.8528 45.0016 15.5817 44.2416 15.5601C42.425 15.3737 40.663 16.6199 39.7376 16.6199C38.7938 16.6199 37.3688 15.5781 35.833 15.6088C33.8567 15.6385 32.0078 16.7541 30.9938 18.4865C28.9011 22.0189 30.4618 27.2098 32.4668 30.0651C33.4697 31.4634 34.6417 33.0248 36.1756 32.9699C37.6763 32.9095 38.2369 32.037 40.0479 32.037C41.8423 32.037 42.3687 32.9699 43.9331 32.9347C45.5437 32.9095 46.5578 31.5301 47.5256 30.1191C48.6846 28.5164 49.1501 26.9379 49.1685 26.8569C49.1307 26.8443 46.0406 25.6944 46.0101 22.2161Z"
                            fill="white" />
                        <path
                            d="M43.0549 13.6818C43.862 12.6977 44.4143 11.3587 44.261 10C43.0927 10.0504 41.6317 10.7879 40.7904 11.7504C40.0461 12.5986 39.3811 13.9889 39.5529 15.2963C40.8652 15.3917 42.2126 14.6507 43.0549 13.6818Z"
                            fill="white" />
                        <path
                            d="M67.7292 32.7688H65.6319L64.483 29.249H60.4898L59.3954 32.7688H57.3535L61.3098 20.7859H63.7535L67.7292 32.7688ZM64.1367 27.7723L63.0978 24.6433C62.9879 24.3237 62.7819 23.5709 62.4781 22.3859H62.4411C62.3202 22.8956 62.1253 23.6483 61.8575 24.6433L60.837 27.7723H64.1367V27.7723Z"
                            fill="white" />
                        <path
                            d="M77.9033 28.3423C77.9033 29.8118 77.4961 30.9733 76.6815 31.8261C75.9519 32.5851 75.046 32.9642 73.9645 32.9642C72.7972 32.9642 71.9587 32.5554 71.448 31.7378H71.411V36.2895H69.4421V26.9728C69.4421 26.0489 69.4172 25.1008 69.3691 24.1283H71.1007L71.2106 25.4979H71.2476C71.9042 24.466 72.9007 23.9509 74.2379 23.9509C75.2833 23.9509 76.156 24.3534 76.8542 25.1593C77.5542 25.9661 77.9033 27.0268 77.9033 28.3423ZM75.8975 28.4125C75.8975 27.5715 75.7035 26.8782 75.3138 26.3326C74.8881 25.7635 74.3164 25.479 73.5998 25.479C73.114 25.479 72.6725 25.6374 72.2782 25.9499C71.8829 26.265 71.6244 26.6765 71.5034 27.1862C71.4424 27.4239 71.412 27.6184 71.412 27.7714V29.2121C71.412 29.8406 71.6096 30.371 72.0048 30.8041C72.4001 31.2372 72.9136 31.4533 73.5453 31.4533C74.2868 31.4533 74.864 31.1741 75.2769 30.6177C75.6906 30.0603 75.8975 29.3256 75.8975 28.4125Z"
                            fill="white" />
                        <path
                            d="M88.0958 28.3423C88.0958 29.8118 87.6885 30.9733 86.873 31.8261C86.1444 32.5851 85.2384 32.9642 84.157 32.9642C82.9897 32.9642 82.1511 32.5554 81.6413 31.7378H81.6044V36.2895H79.6355V26.9728C79.6355 26.0489 79.6105 25.1008 79.5625 24.1283H81.2941L81.404 25.4979H81.4409C82.0966 24.466 83.0931 23.9509 84.4313 23.9509C85.4758 23.9509 86.3485 24.3534 87.0485 25.1593C87.7458 25.9661 88.0958 27.0268 88.0958 28.3423ZM86.0899 28.4125C86.0899 27.5715 85.895 26.8782 85.5053 26.3326C85.0796 25.7635 84.5098 25.479 83.7922 25.479C83.3055 25.479 82.865 25.6374 82.4697 25.9499C82.0745 26.265 81.8168 26.6765 81.6958 27.1862C81.6358 27.4239 81.6044 27.6184 81.6044 27.7714V29.2121C81.6044 29.8406 81.802 30.371 82.1954 30.8041C82.5907 31.2363 83.1042 31.4533 83.7377 31.4533C84.4793 31.4533 85.0565 31.1741 85.4693 30.6177C85.883 30.0603 86.0899 29.3256 86.0899 28.4125Z"
                            fill="white" />
                        <path
                            d="M99.4927 29.4084C99.4927 30.4277 99.1298 31.257 98.4011 31.8972C97.6004 32.5968 96.4857 32.9462 95.0534 32.9462C93.7309 32.9462 92.6707 32.6977 91.8682 32.1997L92.3244 30.5997C93.1888 31.1093 94.1372 31.365 95.1707 31.365C95.9122 31.365 96.4894 31.2012 96.9041 30.8752C97.3169 30.5493 97.5228 30.1116 97.5228 29.566C97.5228 29.0798 97.3529 28.6701 97.0121 28.3378C96.6732 28.0056 96.1071 27.6967 95.3166 27.4113C93.1648 26.6288 92.0898 25.4826 92.0898 23.9752C92.0898 22.9902 92.4666 22.1825 93.2211 21.554C93.9729 20.9246 94.9758 20.6104 96.2299 20.6104C97.3483 20.6104 98.2774 20.8003 99.0189 21.1794L98.5267 22.7444C97.8341 22.377 97.0509 22.1933 96.1745 22.1933C95.4819 22.1933 94.9407 22.3599 94.5528 22.6912C94.225 22.9875 94.0606 23.3485 94.0606 23.7762C94.0606 24.2499 94.2481 24.6416 94.6249 24.9495C94.9527 25.234 95.5484 25.542 96.4128 25.8742C97.4702 26.2893 98.2469 26.7747 98.7465 27.3311C99.2443 27.8858 99.4927 28.58 99.4927 29.4084Z"
                            fill="white" />
                        <path
                            d="M106.002 25.5689H103.832V29.764C103.832 30.831 104.215 31.3641 104.981 31.3641C105.333 31.3641 105.625 31.3344 105.856 31.2749L105.91 32.7327C105.522 32.8741 105.012 32.9452 104.379 32.9452C103.601 32.9452 102.994 32.7138 102.555 32.2519C102.118 31.7891 101.898 31.0129 101.898 29.9225V25.5671H100.605V24.1265H101.898V22.5444L103.832 21.9753V24.1265H106.002V25.5689Z"
                            fill="white" />
                        <path
                            d="M115.793 28.3775C115.793 29.7056 115.404 30.796 114.626 31.6487C113.811 32.5267 112.728 32.9643 111.379 32.9643C110.079 32.9643 109.043 32.5438 108.271 31.7028C107.499 30.8618 107.113 29.8002 107.113 28.5207C107.113 27.1817 107.51 26.085 108.307 25.2323C109.103 24.3787 110.176 23.9519 111.525 23.9519C112.825 23.9519 113.872 24.3724 114.661 25.2143C115.417 26.031 115.793 27.0854 115.793 28.3775ZM113.751 28.4396C113.751 27.6427 113.576 26.9593 113.222 26.3894C112.81 25.6996 112.219 25.3557 111.455 25.3557C110.663 25.3557 110.062 25.7005 109.649 26.3894C109.296 26.9602 109.121 27.6545 109.121 28.4756C109.121 29.2725 109.296 29.9559 109.649 30.525C110.075 31.2147 110.67 31.5587 111.437 31.5587C112.189 31.5587 112.779 31.2075 113.205 30.507C113.568 29.9262 113.751 29.2356 113.751 28.4396Z"
                            fill="white" />
                        <path
                            d="M122.194 25.8166C122 25.7815 121.792 25.7635 121.574 25.7635C120.881 25.7635 120.346 26.0183 119.969 26.5288C119.641 26.9791 119.477 27.5481 119.477 28.2352V32.7688H117.509L117.527 26.8494C117.527 25.8535 117.502 24.9468 117.453 24.1292H119.168L119.24 25.7824H119.295C119.502 25.2142 119.83 24.7568 120.279 24.4137C120.718 24.1049 121.192 23.9509 121.702 23.9509C121.884 23.9509 122.049 23.9635 122.194 23.986V25.8166Z"
                            fill="white" />
                        <path
                            d="M131 28.0396C131 28.3836 130.977 28.6735 130.928 28.9103H125.021C125.044 29.7639 125.329 30.4167 125.878 30.8669C126.376 31.2694 127.019 31.4711 127.81 31.4711C128.684 31.4711 129.482 31.3352 130.2 31.0623L130.508 32.395C129.67 32.7515 128.68 32.9289 127.537 32.9289C126.163 32.9289 125.085 32.5345 124.3 31.7467C123.517 30.9588 123.124 29.9008 123.124 28.5736C123.124 27.2706 123.489 26.1856 124.219 25.3203C124.984 24.3965 126.017 23.9346 127.318 23.9346C128.595 23.9346 129.562 24.3965 130.218 25.3203C130.738 26.0542 131 26.9618 131 28.0396ZM129.122 27.5417C129.135 26.9726 129.007 26.481 128.74 26.0659C128.399 25.5319 127.875 25.2654 127.171 25.2654C126.527 25.2654 126.004 25.5256 125.604 26.0479C125.276 26.463 125.081 26.9609 125.021 27.5408H129.122V27.5417Z"
                            fill="white" />
                        <path
                            d="M63.4835 13.414C63.4835 14.4738 63.1575 15.2715 62.5064 15.8073C61.9033 16.3016 61.0463 16.5492 59.9363 16.5492C59.3858 16.5492 58.9148 16.5258 58.5205 16.479V10.6884C59.0349 10.6073 59.589 10.5659 60.1875 10.5659C61.2449 10.5659 62.0419 10.7901 62.5794 11.2385C63.1815 11.7455 63.4835 12.4703 63.4835 13.414ZM62.463 13.4401C62.463 12.7531 62.2764 12.2263 61.9033 11.8589C61.5302 11.4925 60.9854 11.3088 60.2678 11.3088C59.963 11.3088 59.7035 11.3286 59.4884 11.37V15.7722C59.6075 15.7902 59.8254 15.7983 60.1422 15.7983C60.8829 15.7983 61.4545 15.5975 61.8572 15.1959C62.2598 14.7943 62.463 14.209 62.463 13.4401Z"
                            fill="white" />
                        <path
                            d="M68.8937 14.3394C68.8937 14.9922 68.7026 15.5271 68.3202 15.9467C67.9194 16.378 67.3884 16.5932 66.7253 16.5932C66.0863 16.5932 65.5774 16.387 65.1978 15.9728C64.8192 15.5595 64.6299 15.0381 64.6299 14.4096C64.6299 13.7523 64.8247 13.213 65.2163 12.7943C65.6079 12.3756 66.1343 12.1658 66.7974 12.1658C67.4364 12.1658 67.9499 12.372 68.3387 12.7853C68.7081 13.1869 68.8937 13.7055 68.8937 14.3394ZM67.8899 14.37C67.8899 13.9783 67.8031 13.6425 67.6304 13.3624C67.4272 13.0239 67.1381 12.8546 66.7623 12.8546C66.3735 12.8546 66.078 13.0239 65.8748 13.3624C65.7012 13.6425 65.6153 13.9837 65.6153 14.3871C65.6153 14.7788 65.7021 15.1147 65.8748 15.3947C66.0844 15.7333 66.3762 15.9025 66.753 15.9025C67.1224 15.9025 67.4124 15.7306 67.6211 15.3857C67.8003 15.1003 67.8899 14.7617 67.8899 14.37Z"
                            fill="white" />
                        <path
                            d="M76.1494 12.2527L74.7872 16.4973H73.9006L73.3364 14.6541C73.1932 14.194 73.0769 13.7366 72.9864 13.2828H72.9688C72.8848 13.7492 72.7684 14.2057 72.6188 14.6541L72.0194 16.4973H71.1227L69.8418 12.2527H70.8364L71.3286 14.2705C71.4478 14.7478 71.5457 15.2025 71.6242 15.6329H71.6417C71.7138 15.2781 71.8329 14.8261 72.001 14.2795L72.6188 12.2536H73.4075L73.9995 14.2363C74.1426 14.7199 74.259 15.1854 74.3485 15.6338H74.3753C74.4409 15.1971 74.5397 14.7316 74.6708 14.2363L75.1991 12.2536H76.1494V12.2527Z"
                            fill="white" />
                        <path
                            d="M81.1675 16.4971H80.1997V14.0659C80.1997 13.3168 79.9078 12.9422 79.3223 12.9422C79.0351 12.9422 78.8033 13.0448 78.6232 13.251C78.445 13.4572 78.3545 13.7004 78.3545 13.9786V16.4962H77.3867V13.4653C77.3867 13.0926 77.3747 12.6883 77.3516 12.2507H78.2021L78.2474 12.9143H78.2742C78.3868 12.7081 78.5549 12.5379 78.7756 12.4019C79.0379 12.2435 79.3316 12.1633 79.653 12.1633C80.0593 12.1633 80.3973 12.2912 80.666 12.5478C81.0004 12.8621 81.1675 13.3312 81.1675 13.9543V16.4971V16.4971Z"
                            fill="white" />
                        <path d="M83.8361 16.4972H82.8691V10.3049H83.8361V16.4972Z" fill="white" />
                        <path
                            d="M89.5344 14.3394C89.5344 14.9922 89.3432 15.5271 88.9609 15.9467C88.5601 16.378 88.0281 16.5932 87.366 16.5932C86.726 16.5932 86.2171 16.387 85.8385 15.9728C85.4598 15.5595 85.2705 15.0381 85.2705 14.4096C85.2705 13.7523 85.4654 13.213 85.8569 12.7943C86.2485 12.3756 86.7749 12.1658 87.4371 12.1658C88.0771 12.1658 88.5896 12.372 88.9793 12.7853C89.3487 13.1869 89.5344 13.7055 89.5344 14.3394ZM88.5296 14.37C88.5296 13.9783 88.4428 13.6425 88.2701 13.3624C88.0678 13.0239 87.7778 12.8546 87.4029 12.8546C87.0132 12.8546 86.7177 13.0239 86.5154 13.3624C86.3418 13.6425 86.2559 13.9837 86.2559 14.3871C86.2559 14.7788 86.3427 15.1147 86.5154 15.3947C86.725 15.7333 87.0169 15.9025 87.3937 15.9025C87.7631 15.9025 88.0521 15.7306 88.2608 15.3857C88.4409 15.1003 88.5296 14.7617 88.5296 14.37Z"
                            fill="white" />
                        <path
                            d="M94.2175 16.4968H93.3485L93.2765 16.0079H93.2497C92.9523 16.3978 92.5284 16.5932 91.978 16.5932C91.5671 16.5932 91.2346 16.4644 90.9843 16.2087C90.7571 15.9764 90.6436 15.6873 90.6436 15.3443C90.6436 14.8256 90.8652 14.4303 91.3113 14.1566C91.7564 13.8829 92.3825 13.7487 93.1888 13.755V13.6758C93.1888 13.1166 92.8877 12.8375 92.2846 12.8375C91.8552 12.8375 91.4766 12.9428 91.1496 13.1517L90.9529 12.5322C91.3574 12.2882 91.8571 12.1658 92.4463 12.1658C93.584 12.1658 94.1548 12.751 94.1548 13.9216V15.4847C94.1548 15.9088 94.176 16.2465 94.2175 16.4968ZM93.2128 15.0381V14.3835C92.1452 14.3655 91.6114 14.6509 91.6114 15.2389C91.6114 15.4604 91.6723 15.6261 91.797 15.7369C91.9217 15.8476 92.0805 15.9025 92.2699 15.9025C92.4823 15.9025 92.6808 15.8368 92.8618 15.7062C93.0438 15.5748 93.1555 15.4082 93.1971 15.2038C93.2072 15.1579 93.2128 15.1021 93.2128 15.0381Z"
                            fill="white" />
                        <path
                            d="M99.7164 16.4972H98.8575L98.8122 15.8155H98.7854C98.5112 16.3342 98.0439 16.5935 97.3873 16.5935C96.8627 16.5935 96.4259 16.3927 96.0796 15.9911C95.7332 15.5895 95.5605 15.0682 95.5605 14.428C95.5605 13.741 95.748 13.1845 96.1248 12.7595C96.4896 12.3633 96.9366 12.1652 97.4685 12.1652C98.0531 12.1652 98.4622 12.357 98.6949 12.7415H98.7134V10.3049H99.6822V15.3536C99.6822 15.7669 99.6933 16.1478 99.7164 16.4972ZM98.7134 14.7071V13.9994C98.7134 13.8769 98.7042 13.7779 98.6866 13.7022C98.6321 13.4753 98.5149 13.2844 98.3366 13.1305C98.1565 12.9765 97.9395 12.8991 97.6892 12.8991C97.3281 12.8991 97.0456 13.0386 96.8378 13.3187C96.6318 13.5987 96.5275 13.9562 96.5275 14.3929C96.5275 14.8125 96.6263 15.1528 96.8248 15.4148C97.0345 15.694 97.3171 15.8335 97.6708 15.8335C97.9885 15.8335 98.2424 15.7174 98.4354 15.4842C98.622 15.269 98.7134 15.0097 98.7134 14.7071Z"
                            fill="white" />
                        <path
                            d="M107.995 14.3394C107.995 14.9922 107.804 15.5271 107.422 15.9467C107.021 16.378 106.491 16.5932 105.827 16.5932C105.189 16.5932 104.68 16.387 104.299 15.9728C103.921 15.5595 103.731 15.0381 103.731 14.4096C103.731 13.7523 103.926 13.213 104.318 12.7943C104.709 12.3756 105.236 12.1658 105.9 12.1658C106.538 12.1658 107.052 12.372 107.44 12.7853C107.81 13.1869 107.995 13.7055 107.995 14.3394ZM106.992 14.37C106.992 13.9783 106.906 13.6425 106.733 13.3624C106.529 13.0239 106.241 12.8546 105.864 12.8546C105.476 12.8546 105.18 13.0239 104.976 13.3624C104.803 13.6425 104.717 13.9837 104.717 14.3871C104.717 14.7788 104.804 15.1147 104.976 15.3947C105.186 15.7333 105.478 15.9025 105.855 15.9025C106.224 15.9025 106.515 15.7306 106.724 15.3857C106.902 15.1003 106.992 14.7617 106.992 14.37Z"
                            fill="white" />
                        <path
                            d="M113.199 16.4971H112.232V14.0659C112.232 13.3168 111.94 12.9422 111.354 12.9422C111.066 12.9422 110.835 13.0448 110.655 13.251C110.476 13.4572 110.387 13.7004 110.387 13.9786V16.4962H109.418V13.4653C109.418 13.0926 109.407 12.6883 109.384 12.2507H110.233L110.279 12.9143H110.305C110.419 12.7081 110.587 12.5379 110.807 12.4019C111.07 12.2435 111.363 12.1633 111.685 12.1633C112.091 12.1633 112.429 12.2912 112.697 12.5478C113.033 12.8621 113.199 13.3312 113.199 13.9543V16.4971V16.4971Z"
                            fill="white" />
                        <path
                            d="M119.713 12.9595H118.647V15.0215C118.647 15.5455 118.837 15.8075 119.211 15.8075C119.385 15.8075 119.529 15.7931 119.643 15.7634L119.668 16.4793C119.477 16.5495 119.225 16.5846 118.916 16.5846C118.534 16.5846 118.236 16.4712 118.021 16.2442C117.805 16.0173 117.698 15.6356 117.698 15.0998V12.9595H117.062V12.2527H117.698V11.4747L118.646 11.1956V12.2518H119.712V12.9595H119.713Z"
                            fill="white" />
                        <path
                            d="M124.837 16.4972H123.868V14.084C123.868 13.3232 123.576 12.9423 122.991 12.9423C122.543 12.9423 122.236 13.1629 122.068 13.6041C122.039 13.6968 122.023 13.8103 122.023 13.9436V16.4963H121.056V10.3049H122.023V12.863H122.041C122.346 12.3975 122.783 12.1652 123.349 12.1652C123.75 12.1652 124.081 12.2931 124.344 12.5497C124.672 12.8693 124.837 13.3448 124.837 13.9733V16.4972V16.4972Z"
                            fill="white" />
                        <path
                            d="M130.121 14.174C130.121 14.3433 130.108 14.4856 130.085 14.6017H127.183C127.196 15.0213 127.334 15.341 127.603 15.5625C127.849 15.7606 128.165 15.8596 128.553 15.8596C128.983 15.8596 129.374 15.793 129.727 15.6588L129.879 16.3143C129.466 16.489 128.98 16.5763 128.418 16.5763C127.743 16.5763 127.212 16.3828 126.828 15.9956C126.442 15.6084 126.251 15.0888 126.251 14.4369C126.251 13.7967 126.429 13.2637 126.788 12.8387C127.163 12.3849 127.67 12.158 128.31 12.158C128.937 12.158 129.412 12.3849 129.734 12.8387C129.993 13.1989 130.121 13.6446 130.121 14.174ZM129.198 13.93C129.205 13.65 129.142 13.4087 129.01 13.2052C128.842 12.9431 128.587 12.8117 128.24 12.8117C127.924 12.8117 127.667 12.9395 127.47 13.1961C127.309 13.4005 127.214 13.6446 127.183 13.93H129.198Z"
                            fill="white" />
                    </svg>
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.tsolnetworks.oursupport" target="_blank"
                    class="advocate__linksWrapper__links__link google">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 46" fill="none">
                        <rect width="160" height="46" rx="23" fill="#040829" />
                        <path
                            d="M61.5511 14.1043C61.5511 14.8347 61.3272 15.4197 60.8859 15.856C60.3786 16.3732 59.7178 16.6334 58.9081 16.6334C58.1342 16.6334 57.4734 16.3688 56.9314 15.8472C56.3882 15.318 56.1172 14.6685 56.1172 13.891C56.1172 13.1136 56.3882 12.4641 56.9314 11.9392C57.4734 11.4133 58.1342 11.1487 58.9081 11.1487C59.2933 11.1487 59.6607 11.2263 60.0112 11.3707C60.3606 11.5161 60.6451 11.7129 60.8512 11.9556L60.383 12.4171C60.0235 12.0027 59.5341 11.7982 58.9081 11.7982C58.3436 11.7982 57.8542 11.9906 57.4387 12.3788C57.0277 12.7681 56.8216 13.2722 56.8216 13.891C56.8216 14.5099 57.0277 15.0184 57.4387 15.4077C57.8542 15.7915 58.3436 15.9883 58.9081 15.9883C59.5073 15.9883 60.0112 15.7915 60.4088 15.4033C60.6709 15.1463 60.8198 14.792 60.859 14.3394H58.9081V13.7073H61.5108C61.5422 13.844 61.5511 13.9763 61.5511 14.1043V14.1043Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M65.6809 11.9128H63.2361V13.5749H65.4401V14.2069H63.2361V15.8689H65.6809V16.513H62.5439V11.2688H65.6809V11.9128Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path d="M68.595 16.513H67.9029V11.9128H66.4033V11.2688H70.0958V11.9128H68.595V16.513V16.513Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path d="M72.7666 16.513V11.2688H73.4576V16.513H72.7666Z" fill="white" stroke="white"
                            stroke-width="0.16" stroke-miterlimit="10" />
                        <path d="M76.5218 16.513H75.8353V11.9128H74.3301V11.2688H78.027V11.9128H76.5218V16.513Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M85.0162 15.8385C84.4865 16.3688 83.8302 16.6334 83.0474 16.6334C82.26 16.6334 81.6038 16.3688 81.074 15.8385C80.5454 15.3092 80.2822 14.6597 80.2822 13.891C80.2822 13.1224 80.5454 12.4728 81.074 11.9436C81.6038 11.4133 82.26 11.1487 83.0474 11.1487C83.8257 11.1487 84.482 11.4133 85.0117 11.948C85.5448 12.4816 85.808 13.1267 85.808 13.891C85.808 14.6597 85.5448 15.3092 85.0162 15.8385ZM81.5858 15.3989C81.9845 15.7915 82.4695 15.9883 83.0474 15.9883C83.6208 15.9883 84.1102 15.7915 84.5044 15.3989C84.902 15.0064 85.1036 14.5023 85.1036 13.891C85.1036 13.2798 84.902 12.7757 84.5044 12.3832C84.1102 11.9906 83.6208 11.7938 83.0474 11.7938C82.4695 11.7938 81.9845 11.9906 81.5858 12.3832C81.1883 12.7757 80.9867 13.2798 80.9867 13.891C80.9867 14.5023 81.1883 15.0064 81.5858 15.3989V15.3989Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M86.7803 16.513V11.2688H87.6202L90.2319 15.3474H90.2622L90.2319 14.3392V11.2688H90.9229V16.513H90.2017L87.4668 12.2332H87.4366L87.4668 13.2457V16.513H86.7803V16.513Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M80.2723 24.3144C78.1588 24.3144 76.4322 25.8642 76.4322 28.0024C76.4322 30.1232 78.1588 31.6892 80.2723 31.6892C82.3904 31.6892 84.117 30.1232 84.117 28.0024C84.117 25.8642 82.3904 24.3144 80.2723 24.3144ZM80.2723 30.237C79.1126 30.237 78.1149 29.3148 78.1149 28.0024C78.1149 26.6726 79.1126 25.7666 80.2723 25.7666C81.432 25.7666 82.4342 26.6726 82.4342 28.0024C82.4342 29.3148 81.432 30.237 80.2723 30.237V30.237ZM71.8935 24.3144C69.7755 24.3144 68.0534 25.8642 68.0534 28.0024C68.0534 30.1232 69.7755 31.6892 71.8935 31.6892C74.0104 31.6892 75.7337 30.1232 75.7337 28.0024C75.7337 25.8642 74.0104 24.3144 71.8935 24.3144ZM71.8935 30.237C70.7327 30.237 69.7316 29.3148 69.7316 28.0024C69.7316 26.6726 70.7327 25.7666 71.8935 25.7666C73.0532 25.7666 74.0509 26.6726 74.0509 28.0024C74.0509 29.3148 73.0532 30.237 71.8935 30.237ZM61.9231 25.4447V27.0118H65.8071C65.6935 27.8875 65.3898 28.5312 64.9241 28.9799C64.3572 29.5217 63.4742 30.1232 61.9231 30.1232C59.5328 30.1232 57.6611 28.2646 57.6611 25.9617C57.6611 23.6588 59.5328 21.8002 61.9231 21.8002C63.2155 21.8002 64.1558 22.2868 64.8499 22.9175L65.9961 21.8132C65.0253 20.9202 63.734 20.2342 61.9231 20.2342C58.6453 20.2342 55.8906 22.8037 55.8906 25.9617C55.8906 29.1197 58.6453 31.6892 61.9231 31.6892C63.6947 31.6892 65.0253 31.13 66.0714 30.0809C67.1434 29.0482 67.4774 27.596 67.4774 26.4234C67.4774 26.0592 67.4459 25.7244 67.3897 25.4447H61.9231ZM102.693 26.6596C102.377 25.8349 101.402 24.3144 99.4157 24.3144C97.4473 24.3144 95.8084 25.8089 95.8084 28.0024C95.8084 30.0679 97.4304 31.6892 99.6047 31.6892C101.363 31.6892 102.377 30.6564 102.795 30.0549L101.49 29.2172C101.055 29.8306 100.462 30.237 99.6047 30.237C98.7532 30.237 98.1424 29.861 97.751 29.1197L102.87 27.079L102.693 26.6596V26.6596ZM97.4743 27.8875C97.4304 26.4656 98.6205 25.7374 99.4731 25.7374C100.141 25.7374 100.708 26.0592 100.897 26.5198L97.4743 27.8875V27.8875ZM93.3135 31.4649H94.9963V20.6276H93.3135V31.4649ZM90.5577 25.1359H90.5015C90.1235 24.7046 89.4025 24.3144 88.4892 24.3144C86.5725 24.3144 84.82 25.9357 84.82 28.0143C84.82 30.0809 86.5725 31.6892 88.4892 31.6892C89.4025 31.6892 90.1235 31.2958 90.5015 30.8515H90.5577V31.3803C90.5577 32.7903 89.776 33.5478 88.515 33.5478C87.487 33.5478 86.8492 32.8325 86.586 32.2311L85.1226 32.8195C85.5444 33.7971 86.6613 35 88.515 35C90.488 35 92.1527 33.8816 92.1527 31.1603V24.5387H90.5577V25.1359V25.1359ZM88.6332 30.237C87.4735 30.237 86.5027 29.3017 86.5027 28.0143C86.5027 26.7149 87.4735 25.7666 88.6332 25.7666C89.776 25.7666 90.677 26.7149 90.677 28.0143C90.677 29.3017 89.776 30.237 88.6332 30.237V30.237ZM110.572 20.6276H106.547V31.4649H108.225V27.3586H110.572C112.436 27.3586 114.263 26.0592 114.263 23.9925C114.263 21.927 112.431 20.6276 110.572 20.6276V20.6276ZM110.616 25.8511H108.225V22.135H110.616C111.869 22.135 112.584 23.1375 112.584 23.9925C112.584 24.8314 111.869 25.8511 110.616 25.8511ZM120.99 24.2938C119.777 24.2938 118.516 24.8097 117.998 25.953L119.487 26.5545C119.808 25.953 120.397 25.7579 121.02 25.7579C121.891 25.7579 122.774 26.2619 122.787 27.1516V27.2654C122.484 27.0964 121.833 26.846 121.034 26.846C119.43 26.846 117.795 27.6967 117.795 29.2844C117.795 30.7366 119.109 31.6719 120.586 31.6719C121.715 31.6719 122.339 31.1809 122.73 30.6098H122.787V31.4475H124.408V27.2903C124.408 25.3689 122.919 24.2938 120.99 24.2938ZM120.787 30.2327C120.238 30.2327 119.474 29.9704 119.474 29.3148C119.474 28.4759 120.427 28.1541 121.253 28.1541C121.992 28.1541 122.339 28.3112 122.787 28.5182C122.656 29.5217 121.759 30.2327 120.787 30.2327V30.2327ZM130.314 24.5312L128.384 29.2291H128.327L126.333 24.5312H124.523L127.519 31.0964L125.81 34.7497H127.563L132.181 24.5312H130.314V24.5312ZM115.186 31.4649H116.868V20.6276H115.186V31.4649Z"
                            fill="white" />
                        <path
                            d="M28.4155 11.738C28.1523 12.007 28 12.4258 28 12.9681V32.3134C28 32.8557 28.1523 33.2745 28.4155 33.5435L28.4805 33.6025L39.5836 22.7665V22.5106L28.4805 11.6746L28.4155 11.738Z"
                            fill="url(#paint0_linear_1517_13805)" />
                        <path
                            d="M43.2809 26.3804L39.584 22.7665V22.5107L43.2854 18.8968L43.3683 18.9438L47.7517 21.3789C49.0027 22.07 49.0027 23.2072 47.7517 23.9026L43.3683 26.3334L43.2809 26.3804V26.3804Z"
                            fill="url(#paint1_linear_1517_13805)" />
                        <path
                            d="M43.3684 26.3333L39.5841 22.6385L28.416 33.5434C28.8315 33.9699 29.5091 34.0213 30.2796 33.5948L43.3684 26.3333"
                            fill="url(#paint2_linear_1517_13805)" />
                        <path
                            d="M43.3684 18.9437L30.2796 11.6821C29.5091 11.26 28.8315 11.3114 28.416 11.7379L39.5841 22.6384L43.3684 18.9437Z"
                            fill="url(#paint3_linear_1517_13805)" />
                        <defs>
                            <linearGradient id="paint0_linear_1517_13805" x1="38.5977" y1="32.5148" x2="23.9214"
                                y2="17.4829" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#00A0FF" />
                                <stop offset="0.0066" stop-color="#00A1FF" />
                                <stop offset="0.2601" stop-color="#00BEFF" />
                                <stop offset="0.5122" stop-color="#00D2FF" />
                                <stop offset="0.7604" stop-color="#00DFFF" />
                                <stop offset="1" stop-color="#00E3FF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1517_13805" x1="49.3807" y1="22.6374" x2="27.7014"
                                y2="22.6374" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#FFE000" />
                                <stop offset="0.4087" stop-color="#FFBD00" />
                                <stop offset="0.7754" stop-color="#FFA500" />
                                <stop offset="1" stop-color="#FF9C00" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1517_13805" x1="41.3106" y1="20.63" x2="21.4083"
                                y2="0.245454" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#FF3A44" />
                                <stop offset="1" stop-color="#C31162" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1517_13805" x1="25.6048" y1="39.9794" x2="34.492"
                                y2="30.8769" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#32A071" />
                                <stop offset="0.0685" stop-color="#2DA771" />
                                <stop offset="0.4762" stop-color="#15CF74" />
                                <stop offset="0.8009" stop-color="#06E775" />
                                <stop offset="1" stop-color="#00F076" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
        <section id="services-pros" class="services-pros">
    <div class="container">
        <div class="services-pros__wrapper">
            <h2><span data-localization="pros-title" data-animate="title"></span></h2>

            <div data-animate="subtitle" class="services-pros__wrapper__description">
                <h5 data-localization="pros-subtitleh5">
                </h5>
                <h6 data-localization="pros-subtitleh6">
                </h6>
            </div>
        </div>

        <div class="services-pros__list">
            <div class="services-pros__list__block">
                <div class="services-pros__list__block__left">
                    <div class="services-pros__list__block__left__number">01</div>
                    <div class="services-pros__list__block__left__title" data-localization="pros-list1Title"></div>
                </div>
                <div class="services-pros__list__block__descr" data-localization="pros-list1Descr">
                </div>
            </div>

            <div class="services-pros__list__block">
                <div class="services-pros__list__block__left">
                    <div class="services-pros__list__block__left__number">02</div>
                    <div class="services-pros__list__block__left__title" data-localization="pros-list2Title"></div>
                </div>
                <div class="services-pros__list__block__descr" data-localization="pros-list2Descr">
                </div>
            </div>

            <div class="services-pros__list__block">
                <div class="services-pros__list__block__left">
                    <div class="services-pros__list__block__left__number">03</div>
                    <div class="services-pros__list__block__left__title" data-localization="pros-list3Title"></div>
                </div>

            </div>
        </div>

        <div class="services-pros__pricing">
            <div class="services-pros__pricing__desktop">
                <div data-animate='card-up' class="pricing-card">
                    <img src="/img/services/icon1.svg" alt="simple icon" class="pricing-card__icon">
                    <div class="pricing-card__title" data-localization="pros-price1Title"></div>
                    <div class="pricing-card__descr" data-localization="pros-price1Descr">
                    </div>
                </div>

                <div data-animate='card-up' class="pricing-card">
                    <img src="/img/services/icon2.svg" alt="simple icon" class="pricing-card__icon">
                    <div class="pricing-card__title" data-localization="pros-price2Title"></div>
                    <div class="pricing-card__descr" data-localization="pros-price2Descr">
                    </div>
                </div>

                <div data-animate='card-up' class="pricing-card">
                    <img src="/img/services/icon3.svg" alt="simple icon" class="pricing-card__icon">
                    <div class="pricing-card__title" data-localization="pros-price3Title"></div>
                    <div class="pricing-card__descr" data-localization="pros-price3Descr">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        <section id="become-freelancer" class="services-freelancer">
    <div class="container">
        <div class="services-freelancer__wrapper">
            <h2><span data-localization="freelancer-title" data-animate="title"></span></h2>

            <div data-animate="subtitle" class="services-freelancer__wrapper__description">
                <h5 data-localization="freelancer-subtitleh5">

                </h5>
                <h6 data-localization="freelancer-subtitleh6">
                </h6>
            </div>
        </div>

        <div class="services-freelancer__pros">
            <div data-animate='second-batch-card-up' class="services-freelancer__pros__card">
                <p class="services-freelancer__pros__card__title" data-localization="freelancer-card1Title"></p>
                <p class="services-freelancer__pros__card__descr" data-localization="freelancer-card1Descr">
                </p>

                <img src="/img/services/freelancer1.svg" alt="freelancer icon"
                    class="services-freelancer__pros__card__icon">
            </div>

            <div data-animate='second-batch-card-up' class="services-freelancer__pros__card">
                <p class="services-freelancer__pros__card__title" data-localization="freelancer-card2Title"></p>
                <p class="services-freelancer__pros__card__descr" data-localization="freelancer-card2Descr">
                </p>

                <img src="/img/services/freelancer2.svg" alt="freelancer icon"
                    class="services-freelancer__pros__card__icon">
            </div>

            <div data-animate='second-batch-card-up' class="services-freelancer__pros__card">
                <p class="services-freelancer__pros__card__title" data-localization="freelancer-card3Title"></p>
                <p class="services-freelancer__pros__card__descr" data-localization="freelancer-card3Descr">
                </p>

                <img src="/img/services/freelancer3.svg" alt="freelancer icon"
                    class="services-freelancer__pros__card__icon">
            </div>
        </div>

        <div class="services-freelancer__linksWrapper">
            <p class="services-freelancer__linksWrapper__title" data-localization="freelancer-linkTitle">
            </p>
            <p class="services-freelancer__linksWrapper__descr" data-localization="freelancer-linkDescr">
            </p>
            <div class="services-freelancer__linksWrapper__links">
                <a href="https://apps.apple.com/be/app/oursupport/id1506321441" target="_blank"
                    class="services-freelancer__linksWrapper__links__link app">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 46" fill="none">
                        <rect width="160" height="46" rx="23" fill="#040829" />
                        <path
                            d="M46.0101 22.2161C45.9833 19.314 48.4473 17.9021 48.5599 17.8364C47.1645 15.8528 45.0016 15.5817 44.2416 15.5601C42.425 15.3737 40.663 16.6199 39.7376 16.6199C38.7938 16.6199 37.3688 15.5781 35.833 15.6088C33.8567 15.6385 32.0078 16.7541 30.9938 18.4865C28.9011 22.0189 30.4618 27.2098 32.4668 30.0651C33.4697 31.4634 34.6417 33.0248 36.1756 32.9699C37.6763 32.9095 38.2369 32.037 40.0479 32.037C41.8423 32.037 42.3687 32.9699 43.9331 32.9347C45.5437 32.9095 46.5578 31.5301 47.5256 30.1191C48.6846 28.5164 49.1501 26.9379 49.1685 26.8569C49.1307 26.8443 46.0406 25.6944 46.0101 22.2161Z"
                            fill="white" />
                        <path
                            d="M43.0549 13.6818C43.862 12.6977 44.4143 11.3587 44.261 10C43.0927 10.0504 41.6317 10.7879 40.7904 11.7504C40.0461 12.5986 39.3811 13.9889 39.5529 15.2963C40.8652 15.3917 42.2126 14.6507 43.0549 13.6818Z"
                            fill="white" />
                        <path
                            d="M67.7292 32.7688H65.6319L64.483 29.249H60.4898L59.3954 32.7688H57.3535L61.3098 20.7859H63.7535L67.7292 32.7688ZM64.1367 27.7723L63.0978 24.6433C62.9879 24.3237 62.7819 23.5709 62.4781 22.3859H62.4411C62.3202 22.8956 62.1253 23.6483 61.8575 24.6433L60.837 27.7723H64.1367V27.7723Z"
                            fill="white" />
                        <path
                            d="M77.9033 28.3423C77.9033 29.8118 77.4961 30.9733 76.6815 31.8261C75.9519 32.5851 75.046 32.9642 73.9645 32.9642C72.7972 32.9642 71.9587 32.5554 71.448 31.7378H71.411V36.2895H69.4421V26.9728C69.4421 26.0489 69.4172 25.1008 69.3691 24.1283H71.1007L71.2106 25.4979H71.2476C71.9042 24.466 72.9007 23.9509 74.2379 23.9509C75.2833 23.9509 76.156 24.3534 76.8542 25.1593C77.5542 25.9661 77.9033 27.0268 77.9033 28.3423ZM75.8975 28.4125C75.8975 27.5715 75.7035 26.8782 75.3138 26.3326C74.8881 25.7635 74.3164 25.479 73.5998 25.479C73.114 25.479 72.6725 25.6374 72.2782 25.9499C71.8829 26.265 71.6244 26.6765 71.5034 27.1862C71.4424 27.4239 71.412 27.6184 71.412 27.7714V29.2121C71.412 29.8406 71.6096 30.371 72.0048 30.8041C72.4001 31.2372 72.9136 31.4533 73.5453 31.4533C74.2868 31.4533 74.864 31.1741 75.2769 30.6177C75.6906 30.0603 75.8975 29.3256 75.8975 28.4125Z"
                            fill="white" />
                        <path
                            d="M88.0958 28.3423C88.0958 29.8118 87.6885 30.9733 86.873 31.8261C86.1444 32.5851 85.2384 32.9642 84.157 32.9642C82.9897 32.9642 82.1511 32.5554 81.6413 31.7378H81.6044V36.2895H79.6355V26.9728C79.6355 26.0489 79.6105 25.1008 79.5625 24.1283H81.2941L81.404 25.4979H81.4409C82.0966 24.466 83.0931 23.9509 84.4313 23.9509C85.4758 23.9509 86.3485 24.3534 87.0485 25.1593C87.7458 25.9661 88.0958 27.0268 88.0958 28.3423ZM86.0899 28.4125C86.0899 27.5715 85.895 26.8782 85.5053 26.3326C85.0796 25.7635 84.5098 25.479 83.7922 25.479C83.3055 25.479 82.865 25.6374 82.4697 25.9499C82.0745 26.265 81.8168 26.6765 81.6958 27.1862C81.6358 27.4239 81.6044 27.6184 81.6044 27.7714V29.2121C81.6044 29.8406 81.802 30.371 82.1954 30.8041C82.5907 31.2363 83.1042 31.4533 83.7377 31.4533C84.4793 31.4533 85.0565 31.1741 85.4693 30.6177C85.883 30.0603 86.0899 29.3256 86.0899 28.4125Z"
                            fill="white" />
                        <path
                            d="M99.4927 29.4084C99.4927 30.4277 99.1298 31.257 98.4011 31.8972C97.6004 32.5968 96.4857 32.9462 95.0534 32.9462C93.7309 32.9462 92.6707 32.6977 91.8682 32.1997L92.3244 30.5997C93.1888 31.1093 94.1372 31.365 95.1707 31.365C95.9122 31.365 96.4894 31.2012 96.9041 30.8752C97.3169 30.5493 97.5228 30.1116 97.5228 29.566C97.5228 29.0798 97.3529 28.6701 97.0121 28.3378C96.6732 28.0056 96.1071 27.6967 95.3166 27.4113C93.1648 26.6288 92.0898 25.4826 92.0898 23.9752C92.0898 22.9902 92.4666 22.1825 93.2211 21.554C93.9729 20.9246 94.9758 20.6104 96.2299 20.6104C97.3483 20.6104 98.2774 20.8003 99.0189 21.1794L98.5267 22.7444C97.8341 22.377 97.0509 22.1933 96.1745 22.1933C95.4819 22.1933 94.9407 22.3599 94.5528 22.6912C94.225 22.9875 94.0606 23.3485 94.0606 23.7762C94.0606 24.2499 94.2481 24.6416 94.6249 24.9495C94.9527 25.234 95.5484 25.542 96.4128 25.8742C97.4702 26.2893 98.2469 26.7747 98.7465 27.3311C99.2443 27.8858 99.4927 28.58 99.4927 29.4084Z"
                            fill="white" />
                        <path
                            d="M106.002 25.5689H103.832V29.764C103.832 30.831 104.215 31.3641 104.981 31.3641C105.333 31.3641 105.625 31.3344 105.856 31.2749L105.91 32.7327C105.522 32.8741 105.012 32.9452 104.379 32.9452C103.601 32.9452 102.994 32.7138 102.555 32.2519C102.118 31.7891 101.898 31.0129 101.898 29.9225V25.5671H100.605V24.1265H101.898V22.5444L103.832 21.9753V24.1265H106.002V25.5689Z"
                            fill="white" />
                        <path
                            d="M115.793 28.3775C115.793 29.7056 115.404 30.796 114.626 31.6487C113.811 32.5267 112.728 32.9643 111.379 32.9643C110.079 32.9643 109.043 32.5438 108.271 31.7028C107.499 30.8618 107.113 29.8002 107.113 28.5207C107.113 27.1817 107.51 26.085 108.307 25.2323C109.103 24.3787 110.176 23.9519 111.525 23.9519C112.825 23.9519 113.872 24.3724 114.661 25.2143C115.417 26.031 115.793 27.0854 115.793 28.3775ZM113.751 28.4396C113.751 27.6427 113.576 26.9593 113.222 26.3894C112.81 25.6996 112.219 25.3557 111.455 25.3557C110.663 25.3557 110.062 25.7005 109.649 26.3894C109.296 26.9602 109.121 27.6545 109.121 28.4756C109.121 29.2725 109.296 29.9559 109.649 30.525C110.075 31.2147 110.67 31.5587 111.437 31.5587C112.189 31.5587 112.779 31.2075 113.205 30.507C113.568 29.9262 113.751 29.2356 113.751 28.4396Z"
                            fill="white" />
                        <path
                            d="M122.194 25.8166C122 25.7815 121.792 25.7635 121.574 25.7635C120.881 25.7635 120.346 26.0183 119.969 26.5288C119.641 26.9791 119.477 27.5481 119.477 28.2352V32.7688H117.509L117.527 26.8494C117.527 25.8535 117.502 24.9468 117.453 24.1292H119.168L119.24 25.7824H119.295C119.502 25.2142 119.83 24.7568 120.279 24.4137C120.718 24.1049 121.192 23.9509 121.702 23.9509C121.884 23.9509 122.049 23.9635 122.194 23.986V25.8166Z"
                            fill="white" />
                        <path
                            d="M131 28.0396C131 28.3836 130.977 28.6735 130.928 28.9103H125.021C125.044 29.7639 125.329 30.4167 125.878 30.8669C126.376 31.2694 127.019 31.4711 127.81 31.4711C128.684 31.4711 129.482 31.3352 130.2 31.0623L130.508 32.395C129.67 32.7515 128.68 32.9289 127.537 32.9289C126.163 32.9289 125.085 32.5345 124.3 31.7467C123.517 30.9588 123.124 29.9008 123.124 28.5736C123.124 27.2706 123.489 26.1856 124.219 25.3203C124.984 24.3965 126.017 23.9346 127.318 23.9346C128.595 23.9346 129.562 24.3965 130.218 25.3203C130.738 26.0542 131 26.9618 131 28.0396ZM129.122 27.5417C129.135 26.9726 129.007 26.481 128.74 26.0659C128.399 25.5319 127.875 25.2654 127.171 25.2654C126.527 25.2654 126.004 25.5256 125.604 26.0479C125.276 26.463 125.081 26.9609 125.021 27.5408H129.122V27.5417Z"
                            fill="white" />
                        <path
                            d="M63.4835 13.414C63.4835 14.4738 63.1575 15.2715 62.5064 15.8073C61.9033 16.3016 61.0463 16.5492 59.9363 16.5492C59.3858 16.5492 58.9148 16.5258 58.5205 16.479V10.6884C59.0349 10.6073 59.589 10.5659 60.1875 10.5659C61.2449 10.5659 62.0419 10.7901 62.5794 11.2385C63.1815 11.7455 63.4835 12.4703 63.4835 13.414ZM62.463 13.4401C62.463 12.7531 62.2764 12.2263 61.9033 11.8589C61.5302 11.4925 60.9854 11.3088 60.2678 11.3088C59.963 11.3088 59.7035 11.3286 59.4884 11.37V15.7722C59.6075 15.7902 59.8254 15.7983 60.1422 15.7983C60.8829 15.7983 61.4545 15.5975 61.8572 15.1959C62.2598 14.7943 62.463 14.209 62.463 13.4401Z"
                            fill="white" />
                        <path
                            d="M68.8937 14.3394C68.8937 14.9922 68.7026 15.5271 68.3202 15.9467C67.9194 16.378 67.3884 16.5932 66.7253 16.5932C66.0863 16.5932 65.5774 16.387 65.1978 15.9728C64.8192 15.5595 64.6299 15.0381 64.6299 14.4096C64.6299 13.7523 64.8247 13.213 65.2163 12.7943C65.6079 12.3756 66.1343 12.1658 66.7974 12.1658C67.4364 12.1658 67.9499 12.372 68.3387 12.7853C68.7081 13.1869 68.8937 13.7055 68.8937 14.3394ZM67.8899 14.37C67.8899 13.9783 67.8031 13.6425 67.6304 13.3624C67.4272 13.0239 67.1381 12.8546 66.7623 12.8546C66.3735 12.8546 66.078 13.0239 65.8748 13.3624C65.7012 13.6425 65.6153 13.9837 65.6153 14.3871C65.6153 14.7788 65.7021 15.1147 65.8748 15.3947C66.0844 15.7333 66.3762 15.9025 66.753 15.9025C67.1224 15.9025 67.4124 15.7306 67.6211 15.3857C67.8003 15.1003 67.8899 14.7617 67.8899 14.37Z"
                            fill="white" />
                        <path
                            d="M76.1494 12.2527L74.7872 16.4973H73.9006L73.3364 14.6541C73.1932 14.194 73.0769 13.7366 72.9864 13.2828H72.9688C72.8848 13.7492 72.7684 14.2057 72.6188 14.6541L72.0194 16.4973H71.1227L69.8418 12.2527H70.8364L71.3286 14.2705C71.4478 14.7478 71.5457 15.2025 71.6242 15.6329H71.6417C71.7138 15.2781 71.8329 14.8261 72.001 14.2795L72.6188 12.2536H73.4075L73.9995 14.2363C74.1426 14.7199 74.259 15.1854 74.3485 15.6338H74.3753C74.4409 15.1971 74.5397 14.7316 74.6708 14.2363L75.1991 12.2536H76.1494V12.2527Z"
                            fill="white" />
                        <path
                            d="M81.1675 16.4971H80.1997V14.0659C80.1997 13.3168 79.9078 12.9422 79.3223 12.9422C79.0351 12.9422 78.8033 13.0448 78.6232 13.251C78.445 13.4572 78.3545 13.7004 78.3545 13.9786V16.4962H77.3867V13.4653C77.3867 13.0926 77.3747 12.6883 77.3516 12.2507H78.2021L78.2474 12.9143H78.2742C78.3868 12.7081 78.5549 12.5379 78.7756 12.4019C79.0379 12.2435 79.3316 12.1633 79.653 12.1633C80.0593 12.1633 80.3973 12.2912 80.666 12.5478C81.0004 12.8621 81.1675 13.3312 81.1675 13.9543V16.4971V16.4971Z"
                            fill="white" />
                        <path d="M83.8361 16.4972H82.8691V10.3049H83.8361V16.4972Z" fill="white" />
                        <path
                            d="M89.5344 14.3394C89.5344 14.9922 89.3432 15.5271 88.9609 15.9467C88.5601 16.378 88.0281 16.5932 87.366 16.5932C86.726 16.5932 86.2171 16.387 85.8385 15.9728C85.4598 15.5595 85.2705 15.0381 85.2705 14.4096C85.2705 13.7523 85.4654 13.213 85.8569 12.7943C86.2485 12.3756 86.7749 12.1658 87.4371 12.1658C88.0771 12.1658 88.5896 12.372 88.9793 12.7853C89.3487 13.1869 89.5344 13.7055 89.5344 14.3394ZM88.5296 14.37C88.5296 13.9783 88.4428 13.6425 88.2701 13.3624C88.0678 13.0239 87.7778 12.8546 87.4029 12.8546C87.0132 12.8546 86.7177 13.0239 86.5154 13.3624C86.3418 13.6425 86.2559 13.9837 86.2559 14.3871C86.2559 14.7788 86.3427 15.1147 86.5154 15.3947C86.725 15.7333 87.0169 15.9025 87.3937 15.9025C87.7631 15.9025 88.0521 15.7306 88.2608 15.3857C88.4409 15.1003 88.5296 14.7617 88.5296 14.37Z"
                            fill="white" />
                        <path
                            d="M94.2175 16.4968H93.3485L93.2765 16.0079H93.2497C92.9523 16.3978 92.5284 16.5932 91.978 16.5932C91.5671 16.5932 91.2346 16.4644 90.9843 16.2087C90.7571 15.9764 90.6436 15.6873 90.6436 15.3443C90.6436 14.8256 90.8652 14.4303 91.3113 14.1566C91.7564 13.8829 92.3825 13.7487 93.1888 13.755V13.6758C93.1888 13.1166 92.8877 12.8375 92.2846 12.8375C91.8552 12.8375 91.4766 12.9428 91.1496 13.1517L90.9529 12.5322C91.3574 12.2882 91.8571 12.1658 92.4463 12.1658C93.584 12.1658 94.1548 12.751 94.1548 13.9216V15.4847C94.1548 15.9088 94.176 16.2465 94.2175 16.4968ZM93.2128 15.0381V14.3835C92.1452 14.3655 91.6114 14.6509 91.6114 15.2389C91.6114 15.4604 91.6723 15.6261 91.797 15.7369C91.9217 15.8476 92.0805 15.9025 92.2699 15.9025C92.4823 15.9025 92.6808 15.8368 92.8618 15.7062C93.0438 15.5748 93.1555 15.4082 93.1971 15.2038C93.2072 15.1579 93.2128 15.1021 93.2128 15.0381Z"
                            fill="white" />
                        <path
                            d="M99.7164 16.4972H98.8575L98.8122 15.8155H98.7854C98.5112 16.3342 98.0439 16.5935 97.3873 16.5935C96.8627 16.5935 96.4259 16.3927 96.0796 15.9911C95.7332 15.5895 95.5605 15.0682 95.5605 14.428C95.5605 13.741 95.748 13.1845 96.1248 12.7595C96.4896 12.3633 96.9366 12.1652 97.4685 12.1652C98.0531 12.1652 98.4622 12.357 98.6949 12.7415H98.7134V10.3049H99.6822V15.3536C99.6822 15.7669 99.6933 16.1478 99.7164 16.4972ZM98.7134 14.7071V13.9994C98.7134 13.8769 98.7042 13.7779 98.6866 13.7022C98.6321 13.4753 98.5149 13.2844 98.3366 13.1305C98.1565 12.9765 97.9395 12.8991 97.6892 12.8991C97.3281 12.8991 97.0456 13.0386 96.8378 13.3187C96.6318 13.5987 96.5275 13.9562 96.5275 14.3929C96.5275 14.8125 96.6263 15.1528 96.8248 15.4148C97.0345 15.694 97.3171 15.8335 97.6708 15.8335C97.9885 15.8335 98.2424 15.7174 98.4354 15.4842C98.622 15.269 98.7134 15.0097 98.7134 14.7071Z"
                            fill="white" />
                        <path
                            d="M107.995 14.3394C107.995 14.9922 107.804 15.5271 107.422 15.9467C107.021 16.378 106.491 16.5932 105.827 16.5932C105.189 16.5932 104.68 16.387 104.299 15.9728C103.921 15.5595 103.731 15.0381 103.731 14.4096C103.731 13.7523 103.926 13.213 104.318 12.7943C104.709 12.3756 105.236 12.1658 105.9 12.1658C106.538 12.1658 107.052 12.372 107.44 12.7853C107.81 13.1869 107.995 13.7055 107.995 14.3394ZM106.992 14.37C106.992 13.9783 106.906 13.6425 106.733 13.3624C106.529 13.0239 106.241 12.8546 105.864 12.8546C105.476 12.8546 105.18 13.0239 104.976 13.3624C104.803 13.6425 104.717 13.9837 104.717 14.3871C104.717 14.7788 104.804 15.1147 104.976 15.3947C105.186 15.7333 105.478 15.9025 105.855 15.9025C106.224 15.9025 106.515 15.7306 106.724 15.3857C106.902 15.1003 106.992 14.7617 106.992 14.37Z"
                            fill="white" />
                        <path
                            d="M113.199 16.4971H112.232V14.0659C112.232 13.3168 111.94 12.9422 111.354 12.9422C111.066 12.9422 110.835 13.0448 110.655 13.251C110.476 13.4572 110.387 13.7004 110.387 13.9786V16.4962H109.418V13.4653C109.418 13.0926 109.407 12.6883 109.384 12.2507H110.233L110.279 12.9143H110.305C110.419 12.7081 110.587 12.5379 110.807 12.4019C111.07 12.2435 111.363 12.1633 111.685 12.1633C112.091 12.1633 112.429 12.2912 112.697 12.5478C113.033 12.8621 113.199 13.3312 113.199 13.9543V16.4971V16.4971Z"
                            fill="white" />
                        <path
                            d="M119.713 12.9595H118.647V15.0215C118.647 15.5455 118.837 15.8075 119.211 15.8075C119.385 15.8075 119.529 15.7931 119.643 15.7634L119.668 16.4793C119.477 16.5495 119.225 16.5846 118.916 16.5846C118.534 16.5846 118.236 16.4712 118.021 16.2442C117.805 16.0173 117.698 15.6356 117.698 15.0998V12.9595H117.062V12.2527H117.698V11.4747L118.646 11.1956V12.2518H119.712V12.9595H119.713Z"
                            fill="white" />
                        <path
                            d="M124.837 16.4972H123.868V14.084C123.868 13.3232 123.576 12.9423 122.991 12.9423C122.543 12.9423 122.236 13.1629 122.068 13.6041C122.039 13.6968 122.023 13.8103 122.023 13.9436V16.4963H121.056V10.3049H122.023V12.863H122.041C122.346 12.3975 122.783 12.1652 123.349 12.1652C123.75 12.1652 124.081 12.2931 124.344 12.5497C124.672 12.8693 124.837 13.3448 124.837 13.9733V16.4972V16.4972Z"
                            fill="white" />
                        <path
                            d="M130.121 14.174C130.121 14.3433 130.108 14.4856 130.085 14.6017H127.183C127.196 15.0213 127.334 15.341 127.603 15.5625C127.849 15.7606 128.165 15.8596 128.553 15.8596C128.983 15.8596 129.374 15.793 129.727 15.6588L129.879 16.3143C129.466 16.489 128.98 16.5763 128.418 16.5763C127.743 16.5763 127.212 16.3828 126.828 15.9956C126.442 15.6084 126.251 15.0888 126.251 14.4369C126.251 13.7967 126.429 13.2637 126.788 12.8387C127.163 12.3849 127.67 12.158 128.31 12.158C128.937 12.158 129.412 12.3849 129.734 12.8387C129.993 13.1989 130.121 13.6446 130.121 14.174ZM129.198 13.93C129.205 13.65 129.142 13.4087 129.01 13.2052C128.842 12.9431 128.587 12.8117 128.24 12.8117C127.924 12.8117 127.667 12.9395 127.47 13.1961C127.309 13.4005 127.214 13.6446 127.183 13.93H129.198Z"
                            fill="white" />
                    </svg>
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.tsolnetworks.oursupport" target="_blank"
                    class="services-freelancer__linksWrapper__links__link google">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 46" fill="none">
                        <rect width="160" height="46" rx="23" fill="#040829" />
                        <path
                            d="M61.5511 14.1043C61.5511 14.8347 61.3272 15.4197 60.8859 15.856C60.3786 16.3732 59.7178 16.6334 58.9081 16.6334C58.1342 16.6334 57.4734 16.3688 56.9314 15.8472C56.3882 15.318 56.1172 14.6685 56.1172 13.891C56.1172 13.1136 56.3882 12.4641 56.9314 11.9392C57.4734 11.4133 58.1342 11.1487 58.9081 11.1487C59.2933 11.1487 59.6607 11.2263 60.0112 11.3707C60.3606 11.5161 60.6451 11.7129 60.8512 11.9556L60.383 12.4171C60.0235 12.0027 59.5341 11.7982 58.9081 11.7982C58.3436 11.7982 57.8542 11.9906 57.4387 12.3788C57.0277 12.7681 56.8216 13.2722 56.8216 13.891C56.8216 14.5099 57.0277 15.0184 57.4387 15.4077C57.8542 15.7915 58.3436 15.9883 58.9081 15.9883C59.5073 15.9883 60.0112 15.7915 60.4088 15.4033C60.6709 15.1463 60.8198 14.792 60.859 14.3394H58.9081V13.7073H61.5108C61.5422 13.844 61.5511 13.9763 61.5511 14.1043V14.1043Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M65.6809 11.9128H63.2361V13.5749H65.4401V14.2069H63.2361V15.8689H65.6809V16.513H62.5439V11.2688H65.6809V11.9128Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path d="M68.595 16.513H67.9029V11.9128H66.4033V11.2688H70.0958V11.9128H68.595V16.513V16.513Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path d="M72.7666 16.513V11.2688H73.4576V16.513H72.7666Z" fill="white" stroke="white"
                            stroke-width="0.16" stroke-miterlimit="10" />
                        <path d="M76.5218 16.513H75.8353V11.9128H74.3301V11.2688H78.027V11.9128H76.5218V16.513Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M85.0162 15.8385C84.4865 16.3688 83.8302 16.6334 83.0474 16.6334C82.26 16.6334 81.6038 16.3688 81.074 15.8385C80.5454 15.3092 80.2822 14.6597 80.2822 13.891C80.2822 13.1224 80.5454 12.4728 81.074 11.9436C81.6038 11.4133 82.26 11.1487 83.0474 11.1487C83.8257 11.1487 84.482 11.4133 85.0117 11.948C85.5448 12.4816 85.808 13.1267 85.808 13.891C85.808 14.6597 85.5448 15.3092 85.0162 15.8385ZM81.5858 15.3989C81.9845 15.7915 82.4695 15.9883 83.0474 15.9883C83.6208 15.9883 84.1102 15.7915 84.5044 15.3989C84.902 15.0064 85.1036 14.5023 85.1036 13.891C85.1036 13.2798 84.902 12.7757 84.5044 12.3832C84.1102 11.9906 83.6208 11.7938 83.0474 11.7938C82.4695 11.7938 81.9845 11.9906 81.5858 12.3832C81.1883 12.7757 80.9867 13.2798 80.9867 13.891C80.9867 14.5023 81.1883 15.0064 81.5858 15.3989V15.3989Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M86.7803 16.513V11.2688H87.6202L90.2319 15.3474H90.2622L90.2319 14.3392V11.2688H90.9229V16.513H90.2017L87.4668 12.2332H87.4366L87.4668 13.2457V16.513H86.7803V16.513Z"
                            fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10" />
                        <path
                            d="M80.2723 24.3144C78.1588 24.3144 76.4322 25.8642 76.4322 28.0024C76.4322 30.1232 78.1588 31.6892 80.2723 31.6892C82.3904 31.6892 84.117 30.1232 84.117 28.0024C84.117 25.8642 82.3904 24.3144 80.2723 24.3144ZM80.2723 30.237C79.1126 30.237 78.1149 29.3148 78.1149 28.0024C78.1149 26.6726 79.1126 25.7666 80.2723 25.7666C81.432 25.7666 82.4342 26.6726 82.4342 28.0024C82.4342 29.3148 81.432 30.237 80.2723 30.237V30.237ZM71.8935 24.3144C69.7755 24.3144 68.0534 25.8642 68.0534 28.0024C68.0534 30.1232 69.7755 31.6892 71.8935 31.6892C74.0104 31.6892 75.7337 30.1232 75.7337 28.0024C75.7337 25.8642 74.0104 24.3144 71.8935 24.3144ZM71.8935 30.237C70.7327 30.237 69.7316 29.3148 69.7316 28.0024C69.7316 26.6726 70.7327 25.7666 71.8935 25.7666C73.0532 25.7666 74.0509 26.6726 74.0509 28.0024C74.0509 29.3148 73.0532 30.237 71.8935 30.237ZM61.9231 25.4447V27.0118H65.8071C65.6935 27.8875 65.3898 28.5312 64.9241 28.9799C64.3572 29.5217 63.4742 30.1232 61.9231 30.1232C59.5328 30.1232 57.6611 28.2646 57.6611 25.9617C57.6611 23.6588 59.5328 21.8002 61.9231 21.8002C63.2155 21.8002 64.1558 22.2868 64.8499 22.9175L65.9961 21.8132C65.0253 20.9202 63.734 20.2342 61.9231 20.2342C58.6453 20.2342 55.8906 22.8037 55.8906 25.9617C55.8906 29.1197 58.6453 31.6892 61.9231 31.6892C63.6947 31.6892 65.0253 31.13 66.0714 30.0809C67.1434 29.0482 67.4774 27.596 67.4774 26.4234C67.4774 26.0592 67.4459 25.7244 67.3897 25.4447H61.9231ZM102.693 26.6596C102.377 25.8349 101.402 24.3144 99.4157 24.3144C97.4473 24.3144 95.8084 25.8089 95.8084 28.0024C95.8084 30.0679 97.4304 31.6892 99.6047 31.6892C101.363 31.6892 102.377 30.6564 102.795 30.0549L101.49 29.2172C101.055 29.8306 100.462 30.237 99.6047 30.237C98.7532 30.237 98.1424 29.861 97.751 29.1197L102.87 27.079L102.693 26.6596V26.6596ZM97.4743 27.8875C97.4304 26.4656 98.6205 25.7374 99.4731 25.7374C100.141 25.7374 100.708 26.0592 100.897 26.5198L97.4743 27.8875V27.8875ZM93.3135 31.4649H94.9963V20.6276H93.3135V31.4649ZM90.5577 25.1359H90.5015C90.1235 24.7046 89.4025 24.3144 88.4892 24.3144C86.5725 24.3144 84.82 25.9357 84.82 28.0143C84.82 30.0809 86.5725 31.6892 88.4892 31.6892C89.4025 31.6892 90.1235 31.2958 90.5015 30.8515H90.5577V31.3803C90.5577 32.7903 89.776 33.5478 88.515 33.5478C87.487 33.5478 86.8492 32.8325 86.586 32.2311L85.1226 32.8195C85.5444 33.7971 86.6613 35 88.515 35C90.488 35 92.1527 33.8816 92.1527 31.1603V24.5387H90.5577V25.1359V25.1359ZM88.6332 30.237C87.4735 30.237 86.5027 29.3017 86.5027 28.0143C86.5027 26.7149 87.4735 25.7666 88.6332 25.7666C89.776 25.7666 90.677 26.7149 90.677 28.0143C90.677 29.3017 89.776 30.237 88.6332 30.237V30.237ZM110.572 20.6276H106.547V31.4649H108.225V27.3586H110.572C112.436 27.3586 114.263 26.0592 114.263 23.9925C114.263 21.927 112.431 20.6276 110.572 20.6276V20.6276ZM110.616 25.8511H108.225V22.135H110.616C111.869 22.135 112.584 23.1375 112.584 23.9925C112.584 24.8314 111.869 25.8511 110.616 25.8511ZM120.99 24.2938C119.777 24.2938 118.516 24.8097 117.998 25.953L119.487 26.5545C119.808 25.953 120.397 25.7579 121.02 25.7579C121.891 25.7579 122.774 26.2619 122.787 27.1516V27.2654C122.484 27.0964 121.833 26.846 121.034 26.846C119.43 26.846 117.795 27.6967 117.795 29.2844C117.795 30.7366 119.109 31.6719 120.586 31.6719C121.715 31.6719 122.339 31.1809 122.73 30.6098H122.787V31.4475H124.408V27.2903C124.408 25.3689 122.919 24.2938 120.99 24.2938ZM120.787 30.2327C120.238 30.2327 119.474 29.9704 119.474 29.3148C119.474 28.4759 120.427 28.1541 121.253 28.1541C121.992 28.1541 122.339 28.3112 122.787 28.5182C122.656 29.5217 121.759 30.2327 120.787 30.2327V30.2327ZM130.314 24.5312L128.384 29.2291H128.327L126.333 24.5312H124.523L127.519 31.0964L125.81 34.7497H127.563L132.181 24.5312H130.314V24.5312ZM115.186 31.4649H116.868V20.6276H115.186V31.4649Z"
                            fill="white" />
                        <path
                            d="M28.4155 11.738C28.1523 12.007 28 12.4258 28 12.9681V32.3134C28 32.8557 28.1523 33.2745 28.4155 33.5435L28.4805 33.6025L39.5836 22.7665V22.5106L28.4805 11.6746L28.4155 11.738Z"
                            fill="url(#paint0_linear_1517_13805)" />
                        <path
                            d="M43.2809 26.3804L39.584 22.7665V22.5107L43.2854 18.8968L43.3683 18.9438L47.7517 21.3789C49.0027 22.07 49.0027 23.2072 47.7517 23.9026L43.3683 26.3334L43.2809 26.3804V26.3804Z"
                            fill="url(#paint1_linear_1517_13805)" />
                        <path
                            d="M43.3684 26.3333L39.5841 22.6385L28.416 33.5434C28.8315 33.9699 29.5091 34.0213 30.2796 33.5948L43.3684 26.3333"
                            fill="url(#paint2_linear_1517_13805)" />
                        <path
                            d="M43.3684 18.9437L30.2796 11.6821C29.5091 11.26 28.8315 11.3114 28.416 11.7379L39.5841 22.6384L43.3684 18.9437Z"
                            fill="url(#paint3_linear_1517_13805)" />
                        <defs>
                            <linearGradient id="paint0_linear_1517_13805" x1="38.5977" y1="32.5148" x2="23.9214"
                                y2="17.4829" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#00A0FF" />
                                <stop offset="0.0066" stop-color="#00A1FF" />
                                <stop offset="0.2601" stop-color="#00BEFF" />
                                <stop offset="0.5122" stop-color="#00D2FF" />
                                <stop offset="0.7604" stop-color="#00DFFF" />
                                <stop offset="1" stop-color="#00E3FF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1517_13805" x1="49.3807" y1="22.6374" x2="27.7014"
                                y2="22.6374" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#FFE000" />
                                <stop offset="0.4087" stop-color="#FFBD00" />
                                <stop offset="0.7754" stop-color="#FFA500" />
                                <stop offset="1" stop-color="#FF9C00" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1517_13805" x1="41.3106" y1="20.63" x2="21.4083"
                                y2="0.245454" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#FF3A44" />
                                <stop offset="1" stop-color="#C31162" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1517_13805" x1="25.6048" y1="39.9794" x2="34.492"
                                y2="30.8769" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#32A071" />
                                <stop offset="0.0685" stop-color="#2DA771" />
                                <stop offset="0.4762" stop-color="#15CF74" />
                                <stop offset="0.8009" stop-color="#06E775" />
                                <stop offset="1" stop-color="#00F076" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>
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