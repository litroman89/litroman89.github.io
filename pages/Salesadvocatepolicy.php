<?php
// Start of buffering
ob_start();
?>
<!DOCTYPE html>
<php lang="en">

<head>
    <script type="text/javascript" charset="UTF-8"
        src="//cdn.cookie-script.com/s/9fced4c10cbfbd52782b9a352f8dfab5.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sales Advocate Program</title>
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
    <div class="contact">
        <div class="headerBG"></div>
        <div class="container headContainer">
            <header class="desktopHeader">
                <a href="/index.php">
                    <img src="/img/logo.svg" alt="logo">
                </a>

                <nav class="desktopHeader__nav">
                    <ul>
                        <li>
                            <a href="/index.php">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <g clip-path="url(#clip0_1483_694)">
                                        <path
                                            d="M9.39 0.144039C9.28132 0.0510819 9.14301 0 9 0C8.85699 0 8.71868 0.0510819 8.61 0.144039L0 7.52404V16.2C0 16.6774 0.189642 17.1353 0.527208 17.4728C0.864773 17.8104 1.32261 18 1.8 18H6.6C6.75913 18 6.91174 17.9368 7.02426 17.8243C7.13679 17.7118 7.2 17.5592 7.2 17.4V13.8C7.2 13.3226 7.38964 12.8648 7.72721 12.5272C8.06477 12.1897 8.52261 12 9 12C9.47739 12 9.93523 12.1897 10.2728 12.5272C10.6104 12.8648 10.8 13.3226 10.8 13.8V17.4C10.8 17.5592 10.8632 17.7118 10.9757 17.8243C11.0883 17.9368 11.2409 18 11.4 18H16.2C16.6774 18 17.1352 17.8104 17.4728 17.4728C17.8104 17.1353 18 16.6774 18 16.2V7.52404L9.39 0.144039Z"
                                            fill="#040829" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1483_694">
                                            <rect width="18" height="18" fill="#fff" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a data-localization="navigation-about" href="/pages/about.php">About</a>
                        </li>
                        <li>
                            <a data-localization="navigation-services" href="/pages/services.php">Services</a>
                        </li>
                        <li>
                            <a data-localization="navigation-contactUs" href="/pages/contactUs.php">Contact us</a>
                        </li>
                    </ul>
                </nav>

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

                    <a href="https://insite.oursupport.co/sign-in" class="portal" target="_blank">
                        <div data-localization="navigation-onlinePortal" class="portal__left"></div>
                        <div class="portal__right">
                            <img src="/img/ArrowUpRight.svg" alt="arrow">
                        </div>
                    </a>
                </div>
            </header>
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
                        <li>
                            <a data-localization="mobileNavigation-contactUs" href="/pages/contactUs.php"></a>
                        </li>
                        <li>
                            <a href="https://insite.oursupport.co/sign-in" target="_blank" class="portal">
                                <div data-localization="mobileNavigation-onlinePortal" class="portal__left"></div>
                                <div class="portal__right">
                                    <img src="/img/ArrowUpRight.svg" alt="arrow">
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
        <section class="contract-hero">
            <div class="container">
                <h2 data-localization="hero-title">Sales Advocate Program</h2>
            </div>
        </section>
        <section class="contract-text">
            <div class="container">


                <h2 data-localization="text-programTitle">Introducting OurSupport's Sales Advocate Program</h2>

                <p data-localization="text-programDescription">

                    We're excited to introduce the OurSupport Sales Advocate Program – a great initiative to transform
                    our user community into a formidable force of advocates.
                    This program extends an invitation to both our dedicated internal sales professionals and external
                    users with permission, empowering them to get to know and
                    promote the ourSupport services.

                    <br /><br />

                    The Sales Advocate Program aims to build authentic connections, strengthen customer relationships,
                    and foster a dynamic environment where
                    advocates play a central role in shaping the success of OurSupport. This advocate-driven approach
                    not only enhances our outreach
                    but also creates a rewarding experience for all involved.

                </p>

                <h3 data-localization="text-nonEmploymentTitle">Non-Employment Relationship</h3>

                <p data-localization="text-nonEmploymentDescription">
                    This agreement does not establish an employer-employee relationship between the Sales Advocate and
                    Oursupport.
                    The Sales Advocate is not an employee or contractor of Oursupport, its shareholders, or direct
                    employees.
                </p>


                <h3 data-localization="text-limitationTitle">Limitation of Liability</h3>

                <p data-localization="text-limitationDescription">
                    Oursupport disclaims any liability for errors, omissions, or any issues arising to or from the Sales
                    Advocate. Oursupport is not liable for any consequences or expectations that may be or have been
                    transmitted to new customers upon signing via the Sales Advocate Program.
                </p>


                <h3 data-localization="text-responsibilityTitle">Self-Responsibility</h3>

                <p data-localization="text-responsibilityDescription">
                    The Sales Advocate is responsible for staying informed about relevant knowledge and training
                    materials. Oursupport is not obligated, however will time to time provide ongoing training or
                    support beyond what is initially specified.
                </p>

                <h3 data-localization="text-commissionTitle">Commission Structure</h3>
                <p data-localization="text-commissionDescription">
                    A. The Sales Advocate is entitled to a 5% commission on the total spend (total excluding value-added
                    taxes) by their customers during the first 12 months from the day the customer signs up for
                    Oursupport.

                    <br /><br />

                    B. After the initial 12-month period, the Sales Advocate will earn a 3% commission on the customer's
                    revenue (total excluding value-added taxes) provided the customer uses and pays for a minimum of 2
                    hours of work within a 3-month period. If there is inactivity for over 3 months in the second year,
                    the Sales Advocate's connection to this customer is terminated.
                </p>

                <h3 data-localization="text-evaluationTitle">Commission Structure Evaluation</h3>
                <p data-localization="text-evaluationDescription">
                    Oursupport reserves the right to evaluate and change the commission structure with a 30-day notice
                    period.
                    However, any changes will not affect the initial time frames set out in the commission structure
                    specified in this policy to existing customers within their first year.
                </p>


                <h3 data-localization="text-terminationTitle">Termination</h3>
                <p data-localization="text-terminationDescription">
                    Either party may terminate this agreement with notice. Termination does not affect commissions
                    earned prior to termination.
                </p>


                <h3 data-localization="text-governingLawTitle">Governing Law</h3>
                <p data-localization="text-governingLawDescription">
                    This agreement is governed by the laws of the European Union.
                    Any disputes shall be resolved through arbitration in accordance with the rules of [Arbitration
                    Organization]
                </p>

                <h3 data-localization="text-agreementTitle">Entire Agreement</h3>

                <p data-localization="text-agreementDescription">
                    A. This contract represents the entire agreement of the parties and supersedes and replaces any kind
                    of
                    agreement, written or verbal, between the Parties, and any changes to this contract will be required
                    to be
                    in writing, signed by both parties.
                    <br /><br />
                    B. The invalidity of any clause of this agreement shall not affect the validity of the remaining
                    clauses of
                    this contract.
                </p>

                <h3 data-localization="text-nonDisclosureTitle">Non-Disclosure Agreement</h3>

                <p data-localization="text-nonDisclosureDescription">
                    This Agreement is made between Tsolnetworks Connect Europe, Lda., a company having its registered
                    office at
                    Viela do Mato N.4, Sintra, 2710-695, Lisbon, Portugal ("Tsolnetworks") and the IT technician, here
                    on
                    referred to as the "Service Provider".
                    <br /><br />
                    WHEREAS Tsolnetworks and the Service Provider (the “Parties”) have an interest in participating in
                    discussions wherein either Party might share information with the other that the disclosing Party
                    considers
                    being proprietary and confidential to itself (“Confidential Information”); and
                    <br /><br />
                    WHEREAS the Parties agree that Confidential Information of a Party might include, but not be limited
                    to that
                    Party’s: (1) business plans, methods, and practices; (2) personnel, customers, and suppliers; (3)
                    inventions, processes, methods, products, patent applications, and other proprietary rights; or (4)
                    specifications, drawings, sketches, models, samples, tools, computer programs, technical
                    information, or
                    other related information.
                    <br /><br />
                    NOW, THEREFORE, the Parties agree as follows:
                    <br /><br />
                </p>

                <ol>
                    <li data-localization="text-list1">
                        Either Party may disclose Confidential Information to the other Party in confidence provided
                        that the
                        disclosing Party identifies such information as proprietary and confidential either by marking
                        it, in
                        the
                        case of written materials, or, in the case of information that is disclosed orally or written
                        materials
                        that
                        are not marked, by notifying the other Party of the proprietary and confidential nature of the
                        information,
                        such notification to be done orally, by e-mail or written correspondence, or via other means of
                        communication as might be appropriate.
                    </li>

                    <li data-localization="text-list2">
                        During the term of this Agreement and for 3 years after any termination of this Agreement, both
                        parties
                        will
                        not, without the prior written consent of the other party, either directly or indirectly,
                        solicit or
                        attempt
                        to solicit, divert or hire away any person or subcontractor employed by the other party or any
                        customer
                        of
                        the other party.

                    </li>

                    <li data-localization="text-list3">
                        When informed of the proprietary and confidential nature of Confidential Information that has
                        been
                        disclosed
                        by the other Party, the receiving Party (“Recipient”) shall, for a period of three (3) years
                        from the
                        date
                        of disclosure, refrain from disclosing such Confidential Information to any contractor or other
                        third
                        party
                        without prior, written approval from the disclosing Party and shall protect such Confidential
                        Information
                        from inadvertent disclosure to a third party using the same care and diligence that the
                        Recipient uses
                        to
                        protect its own proprietary and confidential information, but in no case less than reasonable
                        care. The
                        Recipient shall ensure that each of its employees, officers, directors, or agents who have
                        access to
                        Confidential Information disclosed under this Agreement is informed of its proprietary and
                        confidential
                        nature and is required to abide by the terms of this Agreement. The Recipient of Confidential
                        Information
                        disclosed under this Agreement shall promptly notify the disclosing Party of any disclosure of
                        such
                        Confidential Information in violation of this Agreement or of any subpoena or other legal
                        process
                        requiring
                        production or disclosure of said Confidential Information.
                    </li>

                    <li data-localization="text-list4">
                        All Confidential Information disclosed under this Agreement shall be and remain the property of
                        the
                        disclosing Party and nothing contained in this Agreement shall be construed as granting or
                        conferring
                        any
                        rights to such Confidential Information on the other Party. The Recipient shall honour any
                        request from
                        the
                        disclosing Party to promptly return or destroy all copies of Confidential Information disclosed
                        under
                        this
                        Agreement and all notes related to such Confidential Information. The Parties agree that the
                        disclosing
                        Party will suffer irreparable injury if its Confidential Information is made public, released to
                        a third
                        party, or otherwise disclosed in breach of this Agreement and that the disclosing Party shall be
                        entitled to
                        obtain injunctive relief against a threatened breach or continuation of any such breach and, in
                        the
                        event of
                        such breach, an award of actual and exemplary damages from any court of competent jurisdiction.
                    </li>

                    <li data-localization="text-list5">
                        The terms of this Agreement shall not be construed to limit either Party’s right to develop
                        independently
                        or
                        acquire products without the use of the other Party’s Confidential Information. The disclosing
                        party
                        acknowledges that the Recipient may currently or in the future be developing information
                        internally, or
                        receiving information from other parties, that is like the Confidential Information. Nothing in
                        this
                        Agreement will prohibit the Recipient from developing or having developed for it products,
                        concepts,
                        systems
                        or techniques that are similar to or compete with the products, concepts, systems or techniques
                        contemplated
                        by or embodied in the Confidential Information provided that the Recipient does not violate any
                        of its
                        obligations under this Agreement in connection with such development.
                    </li>

                    <li data-localization="text-list6">
                        Notwithstanding the above, the Parties agree that information shall not be deemed Confidential
                        Information and the Recipient shall have no obligation to hold in confidence such information,
                        where
                        such information:
                        <ul>
                            <li data-localization="text-list6_1">
                                Is already known to the Recipient, having been disclosed to the Recipient by a third
                                party
                                without such
                                third party having an obligation of confidentiality to the disclosing Party; or
                            </li>

                            <li data-localization="text-list6_2">
                                Is or becomes publicly known through no wrongful act of the Recipient, its employees,
                                officers, directors,
                                or agents; or
                            </li>

                            <li data-localization="text-list6_3">
                                Is independently developed by the Recipient without reference to any Confidential
                                Information
                                disclosed
                                hereunder; or
                            </li>

                            <li data-localization="text-list6_4">
                                Is approved for release (and only to the extent so approved) by the disclosing Party; or
                            </li>

                            <li data-localization="text-list6_5">
                                Is disclosed pursuant to the lawful requirement of a court or governmental agency or
                                where
                                required by
                                operation of law.
                            </li>
                        </ul>
                    </li>

                    <li data-localization="text-list7">
                        Nothing in this Agreement shall be construed to constitute an agency, partnership, joint
                        venture, or
                        other
                        similar relationship between the Parties.
                    </li>

                    <li data-localization="text-list8">
                        Neither Party will, without prior approval of the other Party, make any public announcement of
                        or
                        otherwise
                        disclose the existence or the terms of this Agreement.
                    </li>

                    <li data-localization="text-list9">
                        This Agreement contains the entire agreement between the Parties and in no way creates an
                        obligation for
                        either Party to disclose information to the other Party or to enter into any other agreement.
                    </li>

                    <li data-localization="text-list10">
                        This Agreement shall remain in effect indefinitely from the Effective Date unless otherwise
                        terminated
                        by either Party giving notice to the other of its desire to terminate this Agreement. The
                        requirement to
                        protect Confidential Information disclosed under this Agreement shall survive termination of
                        this
                        Agreement.
                    </li>
                </ol>


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
                            <a href="https://play.google.com/store/apps/details?id=com.tsolnetworks.oursupport"
                                target="_blank">
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
                            class="investors__logo" target="_blank"><img src="/img/footer/venturesLogo.png"
                                alt="investors"></a>
                    </div>
                    <div class="footer__bottom__wrapper">
                        <div data-localization="footer-copyright" class="footer__bottom__wrapper__rights"></div>

                        <div class="footer__bottom__wrapper__links">
                            <a data-localization="footer-toTerms" href="/pages/terms.php"></a>
                            <a data-localization="footer-toPolicy" href="/pages/policy.php"></a>
                            <a data-localization="footer-deleteAccount"
                                href="https://insite.oursupport.co/deleteaccount" target="_blank"></a>
                            <a data-localization="footer-toCookies" href="#"></a>
                        </div>

                    </div>
                </div>


            </div>
        </footer>
    </div>
    <script src="/js/main.min.js"></script>
    <script src="/js/vendor.min.js"></script>
    <script src="/js/animationMain.min.js"></script>
</body>

</html>
<?php
   require_once __DIR__ . "/../utils/language_processor.php";
?>