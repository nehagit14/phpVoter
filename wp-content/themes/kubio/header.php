
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About Us</title>
<!-- SITE CSS -->
<link rel="stylesheet" href="/wordpress1/wp-content/themes/kubio/css/style.css">
<!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
<!-- ICON FONT -->
<link rel="stylesheet" href="/wordpress1/wp-content/themes/kubio/css/swiper-carousel/swiper-bundle.min.css">
<!-- SITE CSS -->
<!-- ============================ -->
<!-- SITE JS -->
<script src="/wordpress1/wp-content/themes/kubio/js/swiper-carousel/swiper-bundle.min.js"></script>
<!-- Gallery Slider -->
<script src="/wordpress1/wp-content/themes/kubio/js/jquery/jquery.min.js"></script>
<!-- SITE JS -->
<style>
	ul {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-content: center;
    font-size: -1rem;
    justify-content: center;
}
.inner-nav ul {
    margin: auto;
    top: 14px;
    line-height: 4.3rem !important;
    font-size: 29px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0;
    line-height: 1.3;
}
</style>
</head>


<nav class="main-nav stick-fixed transparent wch-unset wow-menubar">
        <div class="full-wrapper main-nav-sub">
            <div class="local-scroll nav-logo-wrap"><a href=#top class=logo><img alt="Your Company Logo" src="/wordpress1/wp-content/themes/kubio/img/logo/logo-dark.png" height=auto width=200></a></div>
            <div class=mobile-nav role=button tabindex=0><i class=mobile-nav-icon></i> <span class=visually-hidden>Menu</span></div>
            <div class="desktop-nav inner-nav">
                <!-- <ul class="local-scroll clearlist scroll-nav">
                    <li><a href='/wordpress1/' class=active>Home</a></li>
                    <li>
                        <a href="/wordpress1/about/" class="opacity-1 mn-has-sub">About Us 
                            <i class=mi-chevron-down></i>
                        </a>

                    </li>   
                    <li><a href=#blog>Blog</a> </li>
                    <li><a href="/wordpress1/contact/">Contact</a> </li>
                </ul> -->

				<?php
// Output the primary menu
wp_nav_menu(array(
    'theme_location' => 'primary',
    'menu_id'        => 'menu_main',
    'menu_class'     => 'local-scroll clearlist scroll-nav clearlist scroll-nav',
    // You can add more parameters here as needed
));
?>
                <ul class="local-scroll clearlist items-end">
                    <li><a href=# class="opacity-1 mn-has-sub">En <i class=mi-chevron-down></i></a>
                        <ul class="mn-sub to-left">
                            <li><a href=#>English</a>
                            <li><a href=#>French</a>
                            <li><a href=#>German</a>
                        </ul>
                    <li><a href=#contact class="opacity-1 no-hover"><span class="link-hover-anim underline" data-link-animate=y>Let's work together</span></a>
                </ul>
            </div>
        </div>
    </nav>