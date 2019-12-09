





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-7mtunHqp/Bw0ND9akjJME8XCh0WPm3HAXOSeX7skL0qGAhpdfzkQvYcujYcwNPTpWKeKMFUGZGtvnEkcczFgwQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-9b5314213e37056ed87b0418056c4f2c.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-o5uovffrZ+JWYjljIoKY2a+80vwSkKf7zy6HkGYV1K+X2Lxj58l/Hd6oytRUi84UhIUyZ0YPcYznKoXOW/Pa3Q==" rel="stylesheet" href="https://github.githubassets.com/assets/github-576363b813d46ddb96ed5901a4933f28.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>zoomsl/zoomsl.min.js at master · mtvphnx/zoomsl</title>
    <meta name="description" content="jQuery плагин зуммирования изображения с эффектом лупы - mtvphnx/zoomsl">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars2.githubusercontent.com/u/18383248?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="mtvphnx/zoomsl" /><meta name="twitter:description" content="jQuery плагин зуммирования изображения с эффектом лупы - mtvphnx/zoomsl" />
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/18383248?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="mtvphnx/zoomsl" /><meta property="og:url" content="https://github.com/mtvphnx/zoomsl" /><meta property="og:description" content="jQuery плагин зуммирования изображения с эффектом лупы - mtvphnx/zoomsl" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDcxNjU3NzMyOjFmM2U2ZGNlZmNlZjdjZGM1ZjM3MzA3MGZiMmZjM2ZmMDRjM2M2Y2E2NzhjZjhjNjlmOWUyYjkwZDQzYzI1N2E=--8126c8d7df7881c18953fd355bddc5aef52504e8">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="request-id" content="DAEE:6840:4B4AE2E:7E28591:5DED8F9B" data-pjax-transient>



  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

    <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="DAEE:6840:4B4AE2E:7E28591:5DED8F9B" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="473009959664852111" /><meta name="octolytics-actor-id" content="54414747" /><meta name="octolytics-actor-login" content="brunomacedodev" /><meta name="octolytics-actor-hash" content="def77ec1abb965f75b7f713c3cfa5d5593ee7a42f7c310ce37cadd50625419da" />

<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="04bab1e11d8eb7ca6dd736e783abdfad">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="brunomacedodev">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="MjY5OTVlZWQ5MjBjMmVjOTQ2OThmZTA5ZWIwN2EzYzBhNGY2OTgwNDcxNzE0YzNmZGI1Y2U3ZGU4NWEzNThmMHx7InJlbW90ZV9hZGRyZXNzIjoiMjAxLjY4LjIwNS4xMDEiLCJyZXF1ZXN0X2lkIjoiREFFRTo2ODQwOjRCNEFFMkU6N0UyODU5MTo1REVEOEY5QiIsInRpbWVzdGFtcCI6MTU3NTg0OTkxNiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="LAUNCH_PROJECT,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

    <meta name="html-safe-nonce" content="35da136d251b993cabcaf7bbe960174ab56328e4">

  <meta http-equiv="x-pjax-version" content="5d91887017c4ca7614d3fe18f2f43c27">
  

      <link href="https://github.com/mtvphnx/zoomsl/commits/master.atom" rel="alternate" title="Recent Commits to zoomsl:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/mtvphnx/zoomsl git https://github.com/mtvphnx/zoomsl.git">

  <meta name="octolytics-dimension-user_id" content="18383248" /><meta name="octolytics-dimension-user_login" content="mtvphnx" /><meta name="octolytics-dimension-repository_id" content="181697094" /><meta name="octolytics-dimension-repository_nwo" content="mtvphnx/zoomsl" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="181697094" /><meta name="octolytics-dimension-repository_network_root_nwo" content="mtvphnx/zoomsl" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="181697094" data-scoped-search-url="/mtvphnx/zoomsl/search" data-unscoped-search-url="/search" action="/mtvphnx/zoomsl/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=hWDY/TAuGZqBFGAdsbxlNWVjuh33DMKvOrBPSryYQwOijope8opk/7XjCBx0Zor1BlKvSmuut7ZG9YGn2qSMRA=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/brunomacedodev">
      <img class="avatar" height="20" width="20" alt="@brunomacedodev" src="https://avatars2.githubusercontent.com/u/54414747?s=60&amp;v=4" />
      brunomacedodev
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="CF7QpuSdCg2Pj8qb9NMlrkUx/39U6xuPlqNnvFMaa+a0MYeltcGnvW0nfSdir8hLSUVq4L2UcscS3YxktoNeuQ==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/mtvphnx">mtvphnx</a>
    /
    <a class="Header-link" href="/mtvphnx/zoomsl">zoomsl</a>

</div>
    </div>


    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:54414747" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="mtvphnx/zoomsl">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/mtvphnx/zoomsl/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/brunomacedodev/feature_preview/indicator_check.json">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@brunomacedodev" class="avatar" src="https://avatars1.githubusercontent.com/u/54414747?s=40&amp;v=4" height="20" width="20">
      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/brunomacedodev" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">brunomacedodev</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:18383248,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:54414747,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;}}" data-hydro-click-hmac="e9e169db7abc1b42732ce5c96f9991b9d63b7c17c55c4d8a76c2cc7fdab4c2ff">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="54cIiQb3ZynrxExkbnU4N/gAonPOBYuU+AgtsPQIyTZ4Df2HrfAFtMFuPtIR3Fkkf8MHMr1Gznjv4bTCJtkV7Q==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-12-08T21:35:16-03:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-12-08T22:05:16-03:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-12-09T01:05:16-03:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-12-08T23:59:59-03:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-12-08T23:59:59-03:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/brunomacedodev" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/brunomacedodev?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/brunomacedodev?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/brunomacedodev?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/brunomacedodev/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}"
    data-feature-preview-close-hmac="e37941587892e378561cc956db15a4ac6c2edf40d38b43db46ef68d52c2af2b0"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}"
    data-hydro-click-hmac="92abd77ea43d2bde4813ba293f454a1833b6d4d602243f278c6e0594d6de28dc"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="A/DdKiBdHdVKhe4TeoVfhS6n4nk3j/7JE1+ZpVD6SNu/n4opcQGwZagtWa/s+bJgItN35t7wl4GXIXJ9tWN9hA==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  










  <div class=" pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Lz2R9vgCUiwj1ebp/tVwOM9oSbROGVFFCRfg4Cj/4X0Xx9lVlGtpupj9R5by6giNYKPb4b+GoWfr8FnAys7ssA==" />      <input type="hidden" name="repository_id" value="181697094">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:181697094,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}" data-hydro-click-hmac="4a4ef1a5a23712d4cac6cd6f4d0d7d5530ac1a205244257ec40b1fed2d9391cd" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/mtvphnx/zoomsl/watchers"
          aria-label="2 users are watching this repository">
          2
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/mtvphnx/zoomsl/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="H0txQKsLX2q7KXBK8xdVNVhRYPT/KRzA10WpKtxjwL2DhMUlBDSFJFsLRhlbp2AhULADPxqJ62xOlNt5iL+FxQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar mtvphnx/zoomsl" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:181697094,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}" data-hydro-click-hmac="e61899d0e590c037e3f23707b21356a87888f75ddf07930e6d37fd99c3f04777" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg aria-label="star" height="16" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/mtvphnx/zoomsl/stargazers"
           aria-label="2 users starred this repository">
           2
        </a>
</form>
    <form class="unstarred js-social-form" action="/mtvphnx/zoomsl/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="+ssqhz6vV5prg5CRzEYxhdXrcGBh8a+uSNbRHxj5oRlgcYd1CS2wV4T/qkWcuUedCbw8aLwRbIdB/GeIQwVgtw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star mtvphnx/zoomsl" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:181697094,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}" data-hydro-click-hmac="f657d6ed895ea014d6ba74ab5d4fc9d79bb086c6d731f79829b99f0234742198" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg aria-label="star" height="16" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Star
</button>        <a class="social-count js-social-count" href="/mtvphnx/zoomsl/stargazers"
           aria-label="2 users starred this repository">
          2
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/mtvphnx/zoomsl/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Gwarny+tfBjTt5x644YGNtXj80yxfNeb89qP01aDemxIpgeyniXsGTrXl8HF4Q/aWi6j2pmdzLBzHeHxNeDLXw==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:181697094,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}" data-hydro-click-hmac="efce53fb238af0d4a2041bf207e2c5826a664fe6655d792d441414008bb6acbd" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of mtvphnx/zoomsl to your account" aria-label="Fork your own copy of mtvphnx/zoomsl to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</button></form>
    <a href="/mtvphnx/zoomsl/network/members" class="social-count"
       aria-label="2 users forked this repository">
      2
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/mtvphnx/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mtvphnx">mtvphnx</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/mtvphnx/zoomsl">zoomsl</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /mtvphnx/zoomsl" href="/mtvphnx/zoomsl">
      <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /mtvphnx/zoomsl/issues" href="/mtvphnx/zoomsl/issues">
        <div class="d-inline"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg></div>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /mtvphnx/zoomsl/pulls" href="/mtvphnx/zoomsl/pulls">
      <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg></div>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /mtvphnx/zoomsl/actions" href="/mtvphnx/zoomsl/actions">
        <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /mtvphnx/zoomsl/projects" href="/mtvphnx/zoomsl/projects">
      <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg></div>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /mtvphnx/zoomsl/wiki" href="/mtvphnx/zoomsl/wiki">
      <div class="d-inline"><svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg></div>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /mtvphnx/zoomsl/security/advisories" href="/mtvphnx/zoomsl/security/advisories">
      <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg></div>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /mtvphnx/zoomsl/pulse" href="/mtvphnx/zoomsl/pulse">
      <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg></div>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /mtvphnx/zoomsl" href="/mtvphnx/zoomsl">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /mtvphnx/zoomsl/issues" href="/mtvphnx/zoomsl/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /mtvphnx/zoomsl/pulls" href="/mtvphnx/zoomsl/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /mtvphnx/zoomsl/projects" href="/mtvphnx/zoomsl/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /mtvphnx/zoomsl/wiki" href="/mtvphnx/zoomsl/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /mtvphnx/zoomsl/security/advisories" href="/mtvphnx/zoomsl/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /mtvphnx/zoomsl/pulse" href="/mtvphnx/zoomsl/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /mtvphnx/zoomsl/community" href="/mtvphnx/zoomsl/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/mtvphnx/zoomsl/blob/d999156cff7272e4f26b5c1252306e1151ebf08c/zoomsl.min.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:f239611c83fdecf7c50686aa355c3e17 -->
      

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/mtvphnx/zoomsl/ref-list/master/zoomsl.min.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/mtvphnx/zoomsl/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="zoomsl.min.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/mtvphnx/zoomsl"><span>zoomsl</span></a></span></span><span class="separator">/</span><strong class="final-path">zoomsl.min.js</strong>
          <span class="separator">/</span>
          
<details class="details-reset details-overlay select-menu d-inline">
  <summary class="btn-link link-gray select-menu-button css-truncate" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:181697094,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}" data-hydro-click-hmac="82dd71328a2c92003c5a21fc7fa535b6416c6e0b18b7c10166ff33eb6c49a500">
    <span data-menu-button>Jump to</span>
  </summary>
  <details-menu class="select-menu-modal position-absolute" style="z-index: 99;">
    <div class="select-menu-header">
      <span class="select-menu-title">Code definitions</span>
    </div>
    <div class="select-menu-filters">
      <div class="select-menu-text-filter">
        <input
          type="text"
          id="code-def-filter-field"
          class="form-control js-filterable-field"
          placeholder="Filter definitions"
          aria-label="Filter definitions"
          autofocus
          autocomplete="off">
      </div>
    </div>
    <div class="select-menu-list lh-default" data-filterable-for="code-def-filter-field" data-filterable-type="substring">
      
    </div>
  </details-menu>
</details>

      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/mtvphnx/zoomsl/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="zoomsl.min.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>

    



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/mtvphnx/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mtvphnx"><img class="avatar" src="https://avatars1.githubusercontent.com/u/18383248?s=40&amp;v=4" width="20" height="20" alt="@mtvphnx" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="author" data-hovercard-type="user" data-hovercard-url="/users/mtvphnx/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mtvphnx">mtvphnx</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="Правки для работы с jquery 3" class="link-gray" href="/mtvphnx/zoomsl/commit/d999156cff7272e4f26b5c1252306e1151ebf08c">Правки для работы с jquery 3</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/mtvphnx/zoomsl/commit/d999156cff7272e4f26b5c1252306e1151ebf08c" data-pjax>d999156</a>
          <relative-time datetime="2019-04-16T14:49:29Z" class="no-wrap">Apr 16, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>1</strong> contributor</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/mtvphnx/zoomsl/contributors-list/master/zoomsl.min.js" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
    </div>
  </div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      26 lines (26 sloc)
      <span class="file-info-divider"></span>
    28.1 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/mtvphnx/zoomsl/raw/master/zoomsl.min.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/mtvphnx/zoomsl/blame/master/zoomsl.min.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/mtvphnx/zoomsl/commits/master/zoomsl.min.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/mtvphnx/zoomsl/edit/master/zoomsl.min.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="5Lvdu+vDmvMoB8tH0HOVUKtaVxKZMlgvBhrdzxJR80GxBVHN4wkdQUcwrLX7RrdgHOjgEWFp3/NDxq7eXa9YHA==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/mtvphnx/zoomsl/delete/master/zoomsl.min.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="P2oaNpUvx5VGJJQdGpRLdVkbubgZ55vJxCcH3qy3gsHOcXi2hthJGdC4X+rnivtYY9nh5wzhPp+fdoBC5Dn3IA==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>



        <div class="f6 v-align-middle text-gray px-3 py-2 border-bottom bg-gray-light d-flex flex-justify-between">
            <div class="d-flex text-mono">
              <svg style="color: #28a745;" class="octicon octicon-primitive-dot mr-2" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>
              <span>You're using code navigation to jump to definitions or references.</span>
            </div>
            <div>
              <a href="https://help.github.com/en/articles/navigating-code-on-github">Learn more</a>
              or
              <a href="mailto:code-nav@github.com">give us feedback</a>
            </div>
        </div>

      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span>www.zoomsl.tw1.ru Sergey Zaragulov skype: deeserge icq: 287295769 sergeland@mail.ru<span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>,r<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-smi">e</span>.<span class="pl-smi">fn</span>.<span class="pl-en">imagezoomsl</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>){d<span class="pl-k">=</span>d<span class="pl-k">||</span>{};<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-en">e</span>(<span class="pl-c1">this</span>).<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>))<span class="pl-k">return</span> k;<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">this</span>;<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-en">e</span>(<span class="pl-k">new</span> <span class="pl-en">Image</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-smi">y</span>.<span class="pl-en">F</span>(<span class="pl-en">e</span>(c),d)}).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-en">e</span>(c).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>))},<span class="pl-c1">30</span>)})};<span class="pl-k">var</span> y<span class="pl-k">=</span>{};<span class="pl-smi">e</span>.<span class="pl-en">extend</span>(y,{dsetting<span class="pl-k">:</span>{loadinggif<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,loadopacity<span class="pl-k">:</span><span class="pl-c1">0.1</span>,loadbackground<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>#878787<span class="pl-pds">&quot;</span></span>,cursorshade<span class="pl-k">:</span>k,magnifycursor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>crosshair<span class="pl-pds">&quot;</span></span>,cursorshadecolor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>#fff<span class="pl-pds">&quot;</span></span>,cursorshadeopacity<span class="pl-k">:</span><span class="pl-c1">0.3</span>,cursorshadeborder<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>1px solid black<span class="pl-pds">&quot;</span></span>,zindex<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,stepzoom<span class="pl-k">:</span><span class="pl-c1">0.5</span>,zoomrange<span class="pl-k">:</span>[<span class="pl-c1">2</span>,<span class="pl-c1">2</span>],zoomstart<span class="pl-k">:</span><span class="pl-c1">2</span>,disablewheel<span class="pl-k">:</span>k,showstatus<span class="pl-k">:</span>k,</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">showstatustime<span class="pl-k">:</span><span class="pl-c1">2E3</span>,statusdivborder<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>1px solid black<span class="pl-pds">&quot;</span></span>,statusdivbackground<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>#C0C0C0<span class="pl-pds">&quot;</span></span>,statusdivpadding<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>4px<span class="pl-pds">&quot;</span></span>,statusdivfont<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>bold 13px Arial<span class="pl-pds">&quot;</span></span>,statusdivopacity<span class="pl-k">:</span><span class="pl-c1">0.8</span>,magnifierpos<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>right<span class="pl-pds">&quot;</span></span>,magnifiersize<span class="pl-k">:</span>[<span class="pl-c1">0</span>,<span class="pl-c1">0</span>],magnifiereffectanimate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>showIn<span class="pl-pds">&quot;</span></span>,innerzoom<span class="pl-k">:</span>r,innerzoommagnifier<span class="pl-k">:</span>r,descarea<span class="pl-k">:</span>r,leftoffset<span class="pl-k">:</span><span class="pl-c1">15</span>,rightoffset<span class="pl-k">:</span><span class="pl-c1">15</span>,switchsides<span class="pl-k">:</span>k,magnifierborder<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>1px solid black<span class="pl-pds">&quot;</span></span>,textdnbackground<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>#fff<span class="pl-pds">&quot;</span></span>,textdnpadding<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>10px<span class="pl-pds">&quot;</span></span>,textdnfont<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>13px/20px cursive<span class="pl-pds">&quot;</span></span>,scrollspeedanimate<span class="pl-k">:</span><span class="pl-c1">5</span>,zoomspeedanimate<span class="pl-k">:</span><span class="pl-c1">7</span>,loopspeedanimate<span class="pl-k">:</span><span class="pl-c1">2.5</span>,magnifierspeedanimate<span class="pl-k">:</span><span class="pl-c1">350</span>,</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">classmagnifier<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>magnifier<span class="pl-pds">&quot;</span></span>,classcursorshade<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>cursorshade<span class="pl-pds">&quot;</span></span>,classstatusdiv<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>statusdiv<span class="pl-pds">&quot;</span></span>,classtextdn<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>textdn<span class="pl-pds">&quot;</span></span>},<span class="pl-c1">U</span><span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span><span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>MSIE<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span>k<span class="pl-k">:</span>r,<span class="pl-en">T</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">0</span>,a;<span class="pl-smi">d</span>.<span class="pl-en">parents</span>().<span class="pl-c1">add</span>(d).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){a<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-c1">this</span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>zIndex<span class="pl-pds">&quot;</span></span>);a<span class="pl-k">=</span><span class="pl-c1">isNaN</span>(a)<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-k">+</span>a;c<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(c,a)});<span class="pl-k">return</span> c},<span class="pl-en">L</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">c</span>,<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>d)<span class="pl-k">return</span> d<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">k</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span>,<span class="pl-c1">0</span><span class="pl-k">&lt;</span>c<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span>c<span class="pl-k">&lt;</span>d<span class="pl-k">?</span>d<span class="pl-k">:</span>c;d<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">k</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span>;<span class="pl-k">return</span> <span class="pl-c1">0</span><span class="pl-k">&lt;</span>c<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span>c<span class="pl-k">&lt;</span>d<span class="pl-k">?</span>d<span class="pl-k">:</span>c},<span class="pl-en">H</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">this</span>,a<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>specs<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(a){<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">r</span>.<span class="pl-en">offsetsl</span>(),s<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">-</span><span class="pl-smi">e</span>.<span class="pl-c1">left</span>,l<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">-</span><span class="pl-smi">e</span>.<span class="pl-c1">top</span>;<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">B</span><span class="pl-k">+=</span>(<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">-</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">B</span>)<span class="pl-k">/</span><span class="pl-c1">2.45342</span>;<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">C</span><span class="pl-k">+=</span>(<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">C</span>)<span class="pl-k">/</span><span class="pl-c1">2.45342</span>;<span class="pl-smi">a</span>.<span class="pl-c1">G</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">B</span><span class="pl-k">-</span><span class="pl-c1">10</span>,top<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">C</span><span class="pl-k">+</span><span class="pl-c1">20</span>});<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">k</span>),b<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">k</span>);<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">z</span><span class="pl-k">+=</span>(s<span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">z</span>)<span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">loopspeedanimate</span>;<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">A</span><span class="pl-k">+=</span>(l<span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">A</span>)<span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">loopspeedanimate</span>;<span class="pl-smi">a</span>.<span class="pl-c1">K</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">&gt;</span>h<span class="pl-k">?</span><span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">-</span>h,<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>,<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">z</span><span class="pl-k">-</span>h<span class="pl-k">/</span><span class="pl-c1">2</span>))<span class="pl-k">+</span><span class="pl-smi">e</span>.<span class="pl-c1">left</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">w</span>.<span class="pl-smi">t</span>.<span class="pl-c1">N</span><span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-c1">left</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">w</span>.<span class="pl-smi">t</span>.<span class="pl-c1">N</span>,top<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span><span class="pl-k">&gt;</span>b<span class="pl-k">?</span><span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span><span class="pl-k">-</span>b,<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>,<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">A</span><span class="pl-k">-</span>b<span class="pl-k">/</span><span class="pl-c1">2</span>))<span class="pl-k">+</span><span class="pl-smi">e</span>.<span class="pl-c1">top</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">w</span>.<span class="pl-smi">t</span>.<span class="pl-c1">R</span><span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-c1">top</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">w</span>.<span class="pl-smi">t</span>.<span class="pl-c1">R</span>});<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">innerzoommagnifier</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">p</span><span class="pl-k">+=</span>(<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">p</span>)<span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">loopspeedanimate</span>,<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">q</span><span class="pl-k">+=</span>(<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">q</span>)<span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">loopspeedanimate</span>,<span class="pl-smi">a</span>.<span class="pl-smi">l</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">p</span><span class="pl-k">-</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span>),top<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">q</span><span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span>)}),<span class="pl-smi">a</span>.<span class="pl-smi">s</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">p</span><span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span>),top<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">q</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span>}));<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">u</span><span class="pl-k">+=</span>(s<span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">u</span>)<span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">scrollspeedanimate</span>;<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">v</span><span class="pl-k">+=</span>(l<span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">v</span>)<span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">scrollspeedanimate</span>;<span class="pl-smi">a</span>.<span class="pl-c1">J</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-en">L</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span>,<span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">u</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">k</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span>,a),top<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-en">L</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span>,<span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">v</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">k</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span>,a)});<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">n</span><span class="pl-k">=</span><span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-smi">c</span>.<span class="pl-en">H</span>(d)},<span class="pl-c1">30</span>)}},<span class="pl-en">I</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">this</span>,a<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>specs<span class="pl-pds">&quot;</span></span>);a<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">a</span>.<span class="pl-smi">h</span><span class="pl-k">+=</span>(<span class="pl-smi">a</span>.<span class="pl-smi">k</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>)<span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">zoomspeedanimate</span>,<span class="pl-smi">a</span>.<span class="pl-smi">h</span><span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-c1">1E3</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>)<span class="pl-k">/</span><span class="pl-c1">1E3</span>,<span class="pl-smi">a</span>.<span class="pl-c1">K</span>.<span class="pl-en">css</span>({width<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">&gt;</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>)<span class="pl-k">?</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>)<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">height<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span><span class="pl-k">&gt;</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>)<span class="pl-k">?</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>)<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span>}),<span class="pl-smi">a</span>.<span class="pl-c1">J</span>.<span class="pl-en">css</span>({width<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">h</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">m</span>.<span class="pl-smi">b</span><span class="pl-k">*</span>(<span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">m</span>.<span class="pl-smi">b</span>)),height<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">h</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">m</span>.<span class="pl-smi">d</span><span class="pl-k">*</span>(<span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-smi">m</span>.<span class="pl-smi">d</span>))}),<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">o</span><span class="pl-k">=</span><span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-smi">c</span>.<span class="pl-en">I</span>(d)},<span class="pl-c1">30</span>))},a<span class="pl-k">:</span>{},<span class="pl-en">P</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>){<span class="pl-k">function</span> <span class="pl-en">c</span>(){}<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>specs<span class="pl-pds">&quot;</span></span>);d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifiersize</span>[<span class="pl-c1">0</span>];<span class="pl-k">var</span> p<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifiersize</span>[<span class="pl-c1">1</span>],s,l<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">r</span>.<span class="pl-en">offsetsl</span>(),h<span class="pl-k">=</span><span class="pl-c1">0</span>,b<span class="pl-k">=</span><span class="pl-c1">0</span>;s<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">left</span><span class="pl-k">+</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierpos</span><span class="pl-k">?</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">leftoffset</span><span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">rightoffset</span>);<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">switchsides</span><span class="pl-k">&amp;&amp;!</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">innerzoom</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierpos</span><span class="pl-k">&amp;&amp;</span>s<span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">leftoffset</span><span class="pl-k">&gt;=</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-en">e</span>(<span class="pl-c1">window</span>).<span class="pl-c1">width</span>()<span class="pl-k">&amp;&amp;</span><span class="pl-smi">l</span>.<span class="pl-c1">left</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">&gt;=</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">leftoffset</span><span class="pl-k">?</span>s<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">left</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">-</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">leftoffset</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierpos</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">&gt;</span>s<span class="pl-k">&amp;&amp;</span>(s<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">rightoffset</span>));h<span class="pl-k">=</span>s;b<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">top</span>;<span class="pl-smi">a</span>.<span class="pl-smi">l</span>.<span class="pl-en">css</span>({visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>,display<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>});<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">descarea</span><span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">descarea</span>).<span class="pl-en">offsetsl</span>().<span class="pl-c1">left</span>,b<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">descarea</span>).<span class="pl-en">offsetsl</span>().<span class="pl-c1">top</span>);<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">innerzoommagnifier</span><span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span>),b<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span>));<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">a</span>.<span class="pl-smi">s</span>.<span class="pl-c1">stop</span>(k,k).<span class="pl-en">fadeIn</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierspeedanimate</span>);<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">innerzoommagnifier</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">s</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span>h,top<span class="pl-k">:</span>b<span class="pl-k">+</span>p})};<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">innerzoom</span><span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">(h<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">left</span>,b<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">top</span>,<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">a</span>.<span class="pl-smi">r</span>.<span class="pl-en">css</span>({visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>});<span class="pl-smi">a</span>.<span class="pl-smi">s</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span>h,top<span class="pl-k">:</span>b<span class="pl-k">+</span>p}).<span class="pl-c1">stop</span>(k,k).<span class="pl-en">fadeIn</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierspeedanimate</span>)});<span class="pl-k">switch</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifiereffectanimate</span>){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slideIn<span class="pl-pds">&quot;</span></span>:<span class="pl-smi">a</span>.<span class="pl-smi">l</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span>h,top<span class="pl-k">:</span>b<span class="pl-k">-</span>p<span class="pl-k">/</span><span class="pl-c1">3</span>,width<span class="pl-k">:</span>d,height<span class="pl-k">:</span>p}).<span class="pl-c1">stop</span>(k,k).<span class="pl-en">show</span>().<span class="pl-c1">animate</span>({top<span class="pl-k">:</span>b},<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierspeedanimate</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>easeOutBounceSL<span class="pl-pds">&quot;</span></span>,c);<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>showIn<span class="pl-pds">&quot;</span></span>:<span class="pl-smi">a</span>.<span class="pl-smi">l</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">l</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span>),top<span class="pl-k">:</span><span class="pl-smi">l</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span>),width<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">5</span>),height<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">a</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">5</span>)}).<span class="pl-c1">stop</span>(k,k).<span class="pl-en">show</span>().<span class="pl-en">css</span>({opacity<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>0.1<span class="pl-pds">&quot;</span></span>}).<span class="pl-c1">animate</span>({left<span class="pl-k">:</span>h,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">top<span class="pl-k">:</span>b,opacity<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>1<span class="pl-pds">&quot;</span></span>,width<span class="pl-k">:</span>d,height<span class="pl-k">:</span>p},<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierspeedanimate</span>,c);<span class="pl-k">break</span>;<span class="pl-k">default</span>:<span class="pl-smi">a</span>.<span class="pl-smi">l</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span>h,top<span class="pl-k">:</span>b,width<span class="pl-k">:</span>d,height<span class="pl-k">:</span>p}).<span class="pl-c1">stop</span>(k,k).<span class="pl-en">fadeIn</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierspeedanimate</span>,c)}<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">showstatus</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">a</span>.<span class="pl-c1">Q</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-c1">M</span>)<span class="pl-k">?</span><span class="pl-smi">a</span>.<span class="pl-c1">G</span>.<span class="pl-en">html</span>(<span class="pl-smi">a</span>.<span class="pl-c1">Q</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div style=&quot;font-size:80%&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-c1">M</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">stop</span>(k,k).<span class="pl-en">fadeIn</span>().<span class="pl-en">delay</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-smi">showstatustime</span>).<span class="pl-en">fadeOut</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>slow<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">G</span>.<span class="pl-en">hide</span>()},<span class="pl-en">S</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>specs<span class="pl-pds">&quot;</span></span>);d<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">r</span>.<span class="pl-en">offsetsl</span>();<span class="pl-k">switch</span>(<span class="pl-smi">c</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifiereffectanimate</span>){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>showIn<span class="pl-pds">&quot;</span></span>:<span class="pl-smi">c</span>.<span class="pl-smi">l</span>.<span class="pl-c1">stop</span>(k,k).<span class="pl-c1">animate</span>({left<span class="pl-k">:</span><span class="pl-smi">d</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">c</span>.<span class="pl-smi">f</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span>),top<span class="pl-k">:</span><span class="pl-smi">d</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">c</span>.<span class="pl-smi">f</span>.<span class="pl-smi">d</span><span class="pl-k">/</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">2</span>),opacity<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>0.1<span class="pl-pds">&quot;</span></span>,width<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">c</span>.<span class="pl-smi">e</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">5</span>),height<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">c</span>.<span class="pl-smi">e</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">5</span>)},<span class="pl-smi">c</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierspeedanimate</span>,<span class="pl-k">function</span>(){<span class="pl-smi">c</span>.<span class="pl-smi">l</span>.<span class="pl-en">hide</span>()});<span class="pl-k">break</span>;<span class="pl-k">default</span>:<span class="pl-smi">c</span>.<span class="pl-smi">l</span>.<span class="pl-c1">stop</span>(k,k).<span class="pl-en">fadeOut</span>(<span class="pl-smi">c</span>.<span class="pl-smi">c</span>.<span class="pl-smi">magnifierspeedanimate</span>)}},<span class="pl-en">F</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">c</span>,<span class="pl-smi">a</span>){<span class="pl-k">function</span> <span class="pl-en">p</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">i</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">g</span><span class="pl-k">=</span><span class="pl-c1">0</span>}function s(a){g.data(&quot;specs&quot;,{c:b,Q:y,M:E,r:d,l:u,J:a,G:n,K:q,s:t,f:m,m:{b:a.width(),d:a.height()},e:{b:u.width(),d:u.height()},w:{b:q.width(),d:q.height(),t:{N:parseInt(q.css(&quot;border-left-width&quot;))||0,R:parseInt(q.css(&quot;border-top-width&quot;))||0}},h:B,k:B})}function l(a){return!a.complete||</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> <span class="pl-smi">a</span>.<span class="pl-smi">naturalWidth</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">===</span><span class="pl-smi">a</span>.<span class="pl-smi">naturalWidth</span><span class="pl-k">?</span>r<span class="pl-k">:</span>k}function h(a){var b=a||window.event,c=[].slice.call(arguments,1),d=0,f=0,g=0,h=0,h=0;a=e.event.fix(b);a.type=&quot;mousewheel&quot;;b.wheelDelta&amp;&amp;(d=b.wheelDelta);b.detail&amp;&amp;(d=-1*b.detail);b.deltaY&amp;&amp;(d=g=-1*b.deltaY);b.deltaX&amp;&amp;(f=b.deltaX,d=-1*f);void 0!==b.wheelDeltaY&amp;&amp;(g=b.wheelDeltaY);void 0!==b.wheelDeltaX&amp;&amp;(f=-1*b.wheelDeltaX);h=Math.abs(d);if(!z||h&lt;z)z=h;h=Math.max(Math.abs(g),Math.abs(f));if(!w||h&lt;w)w=h;b=0&lt;d?&quot;floor&quot;:&quot;ceil&quot;;d=Math[b](d/z);f=</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Math</span>[b](f<span class="pl-k">/</span>w);g<span class="pl-k">=</span><span class="pl-c1">Math</span>[b](g<span class="pl-k">/</span>w);<span class="pl-smi">c</span>.<span class="pl-c1">unshift</span>(a,d,f,g);<span class="pl-k">return</span>(<span class="pl-smi">e</span>.<span class="pl-c1">event</span>.<span class="pl-smi">dispatch</span><span class="pl-k">||</span><span class="pl-smi">e</span>.<span class="pl-c1">event</span>.<span class="pl-smi">handle</span>).<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>,c)}<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-en">extend</span>({},<span class="pl-c1">this</span>.<span class="pl-smi">dsetting</span>,c),x<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">zindex</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-en">T</span>(d),m<span class="pl-k">=</span>{b<span class="pl-k">:</span><span class="pl-smi">d</span>.<span class="pl-c1">width</span>(),d<span class="pl-k">:</span><span class="pl-smi">d</span>.<span class="pl-c1">height</span>()},p<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">p</span>,y<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-title<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-title<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,<span class="pl-c1">E</span><span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-help<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-help<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,<span class="pl-c1">C</span><span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-text-bottom<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-text-bottom<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,f<span class="pl-k">=</span><span class="pl-c1">this</span>,<span class="pl-c1">B</span>,v,u,q,n,g,t;<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">===</span><span class="pl-smi">m</span>.<span class="pl-smi">d</span><span class="pl-k">||</span><span class="pl-c1">0</span><span class="pl-k">===</span><span class="pl-smi">m</span>.<span class="pl-smi">b</span>)<span class="pl-en">e</span>(<span class="pl-k">new</span> <span class="pl-en">Image</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-smi">f</span>.<span class="pl-en">F</span>(d,c)}).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>));<span class="pl-k">else</span>{<span class="pl-smi">d</span>.<span class="pl-en">css</span>({visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>});<span class="pl-smi">b</span>.<span class="pl-smi">j</span><span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-large<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>);<span class="pl-k">for</span>(v <span class="pl-k">in</span> b)<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>b[v]<span class="pl-k">&amp;&amp;</span>(b[v]<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">dsetting</span>[v]);<span class="pl-c1">B</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomrange</span>[<span class="pl-c1">0</span>]<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomstart</span><span class="pl-k">?</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomstart</span><span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomrange</span>[<span class="pl-c1">0</span>];<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>0,0<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span>.<span class="pl-c1">toString</span>()<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span>.<span class="pl-c1">toString</span>())<span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">innerzoommagnifier</span><span class="pl-k">?</span>[<span class="pl-smi">m</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span>,<span class="pl-smi">m</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span>]<span class="pl-k">:</span>[<span class="pl-smi">m</span>.<span class="pl-smi">b</span>,<span class="pl-smi">m</span>.<span class="pl-smi">d</span>];<span class="pl-smi">b</span>.<span class="pl-smi">descarea</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">e</span>(<span class="pl-smi">b</span>.<span class="pl-smi">descarea</span>).<span class="pl-c1">length</span><span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">===</span><span class="pl-en">e</span>(<span class="pl-smi">b</span>.<span class="pl-smi">descarea</span>).<span class="pl-c1">width</span>()<span class="pl-k">||</span><span class="pl-c1">0</span><span class="pl-k">===</span><span class="pl-en">e</span>(<span class="pl-smi">b</span>.<span class="pl-smi">descarea</span>).<span class="pl-c1">height</span>()<span class="pl-k">?</span><span class="pl-smi">b</span>.<span class="pl-smi">descarea</span><span class="pl-k">=</span>r<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span><span class="pl-k">=</span>[<span class="pl-en">e</span>(<span class="pl-smi">b</span>.<span class="pl-smi">descarea</span>).<span class="pl-c1">width</span>(),<span class="pl-en">e</span>(<span class="pl-smi">b</span>.<span class="pl-smi">descarea</span>).<span class="pl-c1">height</span>()]<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">descarea</span><span class="pl-k">=</span>r;<span class="pl-smi">b</span>.<span class="pl-smi">innerzoom</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span><span class="pl-k">=</span>[<span class="pl-smi">m</span>.<span class="pl-smi">b</span>,<span class="pl-smi">m</span>.<span class="pl-smi">d</span>],<span class="pl-smi">c</span>.<span class="pl-smi">cursorshade</span><span class="pl-k">||</span>(<span class="pl-smi">b</span>.<span class="pl-smi">cursorshade</span><span class="pl-k">=</span>r),<span class="pl-smi">c</span>.<span class="pl-smi">scrollspeedanimate</span><span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">(<span class="pl-smi">b</span>.<span class="pl-smi">scrollspeedanimate</span><span class="pl-k">=</span><span class="pl-c1">10</span>));<span class="pl-k">if</span>(<span class="pl-smi">b</span>.<span class="pl-smi">innerzoommagnifier</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">magnifycursor</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">window</span>.<span class="pl-smi">chrome</span><span class="pl-k">||</span><span class="pl-c1">window</span>.<span class="pl-smi">sidebar</span>))<span class="pl-smi">b</span>.<span class="pl-smi">magnifycursor</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;<span class="pl-smi">b</span>.<span class="pl-smi">cursorshade</span><span class="pl-k">=</span>r;<span class="pl-smi">b</span>.<span class="pl-smi">magnifiereffectanimate</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>fadeIn<span class="pl-pds">&quot;</span></span>}v<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>wheel<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>mousewheel<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>DOMMouseScroll<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>MozMousePixelScroll<span class="pl-pds">&quot;</span></span>];<span class="pl-k">var</span> <span class="pl-c1">A</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>onwheel<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> <span class="pl-c1">document</span><span class="pl-k">||</span><span class="pl-c1">9</span><span class="pl-k">&lt;=</span><span class="pl-c1">document</span>.<span class="pl-smi">documentMode</span><span class="pl-k">?</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>wheel<span class="pl-pds">&quot;</span></span>]<span class="pl-k">:</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>mousewheel<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>DomMouseScroll<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>MozMousePixelScroll<span class="pl-pds">&quot;</span></span>],z,w;<span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-c1">event</span>.<span class="pl-smi">fixHooks</span>)<span class="pl-k">for</span>(<span class="pl-k">var</span> <span class="pl-c1">D</span><span class="pl-k">=</span><span class="pl-smi">v</span>.<span class="pl-c1">length</span>;<span class="pl-c1">D</span>;)<span class="pl-smi">e</span>.<span class="pl-c1">event</span>.<span class="pl-smi">fixHooks</span>[v[<span class="pl-k">--</span><span class="pl-c1">D</span>]]<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">event</span>.<span class="pl-smi">mouseHooks</span>;<span class="pl-smi">e</span>.<span class="pl-c1">event</span>.<span class="pl-smi">special</span>.<span class="pl-smi">mousewheel</span><span class="pl-k">=</span>{<span class="pl-en">setup</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">addEventListener</span>)<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">A</span>.<span class="pl-c1">length</span>;a;)<span class="pl-c1">this</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-c1">A</span>[<span class="pl-k">--</span>a],h,r);<span class="pl-k">else</span> <span class="pl-c1">this</span>.<span class="pl-smi">onmousewheel</span><span class="pl-k">=</span>h},<span class="pl-en">teardown</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">removeEventListener</span>)<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">A</span>.<span class="pl-c1">length</span>;a;)<span class="pl-c1">this</span>.<span class="pl-c1">removeEventListener</span>(<span class="pl-c1">A</span>[<span class="pl-k">--</span>a],h,r);<span class="pl-k">else</span> <span class="pl-c1">this</span>.<span class="pl-smi">onmousewheel</span><span class="pl-k">=</span><span class="pl-c1">null</span>}};<span class="pl-smi">e</span>.<span class="pl-smi">fn</span>.<span class="pl-en">offsetsl</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">get</span>(<span class="pl-c1">0</span>);<span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">getBoundingClientRect</span>)a<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">offset</span>();<span class="pl-k">else</span>{<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span><span class="pl-c1">0</span>;a;)b<span class="pl-k">+=</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">a</span>.<span class="pl-smi">offsetTop</span>),c<span class="pl-k">+=</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">a</span>.<span class="pl-smi">offsetLeft</span>),a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">offsetParent</span>;a<span class="pl-k">=</span>{top<span class="pl-k">:</span>b,left<span class="pl-k">:</span>c}}<span class="pl-k">return</span> a};<span class="pl-smi">e</span>.<span class="pl-smi">easing</span>.<span class="pl-en">easeOutBounceSL</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">e</span>){<span class="pl-k">return</span>(b<span class="pl-k">/=</span>e)<span class="pl-k">&lt;</span><span class="pl-c1">1</span><span class="pl-k">/</span><span class="pl-c1">2.75</span><span class="pl-k">?</span>d<span class="pl-k">*</span><span class="pl-c1">7.5625</span><span class="pl-k">*</span>b<span class="pl-k">*</span>b<span class="pl-k">+</span>c<span class="pl-k">:</span>b<span class="pl-k">&lt;</span><span class="pl-c1">2</span><span class="pl-k">/</span><span class="pl-c1">2.75</span><span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">d<span class="pl-k">*</span>(<span class="pl-c1">7.5625</span><span class="pl-k">*</span>(b<span class="pl-k">-=</span><span class="pl-c1">1.5</span><span class="pl-k">/</span><span class="pl-c1">2.75</span>)<span class="pl-k">*</span>b<span class="pl-k">+</span><span class="pl-c1">0.75</span>)<span class="pl-k">+</span>c<span class="pl-k">:</span>b<span class="pl-k">&lt;</span><span class="pl-c1">2.5</span><span class="pl-k">/</span><span class="pl-c1">2.75</span><span class="pl-k">?</span>d<span class="pl-k">*</span>(<span class="pl-c1">7.5625</span><span class="pl-k">*</span>(b<span class="pl-k">-=</span><span class="pl-c1">2.25</span><span class="pl-k">/</span><span class="pl-c1">2.75</span>)<span class="pl-k">*</span>b<span class="pl-k">+</span><span class="pl-c1">0.9375</span>)<span class="pl-k">+</span>c<span class="pl-k">:</span>d<span class="pl-k">*</span>(<span class="pl-c1">7.5625</span><span class="pl-k">*</span>(b<span class="pl-k">-=</span><span class="pl-c1">2.625</span><span class="pl-k">/</span><span class="pl-c1">2.75</span>)<span class="pl-k">*</span>b<span class="pl-k">+</span><span class="pl-c1">0.984375</span>)<span class="pl-k">+</span>c};u<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div /&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">classmagnifier</span>}).<span class="pl-en">css</span>({position<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,zIndex<span class="pl-k">:</span>x,width<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span>[<span class="pl-c1">0</span>],height<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span>[<span class="pl-c1">1</span>],left<span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1E4</span>,top<span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1E4</span>,visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>,overflow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>}).<span class="pl-en">appendTo</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>);<span class="pl-smi">c</span>.<span class="pl-smi">classmagnifier</span><span class="pl-k">||</span><span class="pl-smi">u</span>.<span class="pl-en">css</span>({border<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifierborder</span>});q<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div /&gt;<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">b</span>.<span class="pl-smi">cursorshade</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">q</span>.<span class="pl-en">attr</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">classcursorshade</span>}).<span class="pl-en">css</span>({zIndex<span class="pl-k">:</span>x,display<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>,position<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">width:Math.round(b.magnifiersize[0]/b.zoomstart),height:Math.round(b.magnifiersize[1]/b.zoomstart),top:0,left:0}).appendTo(document.body),c.classcursorshade||q.css({border:b.cursorshadeborder,opacity:b.cursorshadeopacity,backgroundColor:b.cursorshadecolor}));b.loadinggif||(b.loadinggif=&quot;data:image/gif;base64,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&quot;);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">n<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div /&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">classstatusdiv</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> preloadevt<span class="pl-pds">&quot;</span></span>}).<span class="pl-en">css</span>({position<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,display<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>,zIndex<span class="pl-k">:</span>x,top<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-c1">0</span>}).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;img src=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">b</span>.<span class="pl-smi">loadinggif</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot; /&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">appendTo</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>);g<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div /&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>tracker<span class="pl-pds">&quot;</span></span>}).<span class="pl-en">css</span>({zIndex<span class="pl-k">:</span>x,backgroundImage<span class="pl-k">:</span><span class="pl-smi">f</span>.<span class="pl-c1">U</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>url(cannotbe)<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>,position<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,width<span class="pl-k">:</span><span class="pl-smi">m</span>.<span class="pl-smi">b</span>,height<span class="pl-k">:</span><span class="pl-smi">m</span>.<span class="pl-smi">d</span>,left<span class="pl-k">:</span>a<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-en">offsetsl</span>().<span class="pl-c1">left</span><span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1E4</span>,top<span class="pl-k">:</span>a<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-en">offsetsl</span>().<span class="pl-c1">top</span><span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1E4</span>}).<span class="pl-en">appendTo</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>);t<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div /&gt;<span class="pl-pds">&quot;</span></span>);<span class="pl-c1">C</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">t</span>.<span class="pl-en">attr</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">classtextdn</span>}).<span class="pl-en">css</span>({position<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,zIndex<span class="pl-k">:</span>x,left<span class="pl-k">:</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">top<span class="pl-k">:</span><span class="pl-c1">0</span>,display<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>}).<span class="pl-en">html</span>(<span class="pl-c1">C</span>).<span class="pl-en">appendTo</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>),<span class="pl-smi">c</span>.<span class="pl-smi">classtextdn</span><span class="pl-k">||</span><span class="pl-smi">t</span>.<span class="pl-en">css</span>({border<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifierborder</span>,background<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">textdnbackground</span>,padding<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">textdnpadding</span>,font<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">textdnfont</span>}),<span class="pl-smi">t</span>.<span class="pl-en">css</span>({width<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifiersize</span>[<span class="pl-c1">0</span>]<span class="pl-k">-</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">t</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>padding-left<span class="pl-pds">&quot;</span></span>))<span class="pl-k">-</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">t</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>padding-right<span class="pl-pds">&quot;</span></span>))}));<span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>largeimage<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">b</span>.<span class="pl-smi">j</span>);<span class="pl-en">e</span>(<span class="pl-c1">window</span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">offsetsl</span>();<span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadimgevt<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">g</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">left</span>,top<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">top</span>});<span class="pl-smi">n</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.preloadevt<span class="pl-pds">&quot;</span></span>).<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-smi">m</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span><span class="pl-smi">n</span>.<span class="pl-c1">width</span>()<span class="pl-k">/</span><span class="pl-c1">2</span>,top<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-smi">m</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span><span class="pl-smi">n</span>.<span class="pl-c1">height</span>()<span class="pl-k">/</span><span class="pl-c1">2</span>,visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>})});</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-en">e</span>(<span class="pl-c1">document</span>).<span class="pl-en">mousemove</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">D</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageX</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">!==</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">D</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">n</span>),<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">o</span>),<span class="pl-smi">d</span>.<span class="pl-en">css</span>({visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>}))});<span class="pl-smi">d</span>.<span class="pl-en">mouseover</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">offsetsl</span>();<span class="pl-smi">g</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">left</span>,top<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">top</span>}).<span class="pl-en">show</span>()});<span class="pl-smi">g</span>.<span class="pl-en">mouseover</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageX</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageY</span>;<span class="pl-smi">p</span>.<span class="pl-smi">g</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageX</span>;<span class="pl-smi">p</span>.<span class="pl-smi">i</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageY</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">D</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageX</span>;<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">offsetsl</span>();a<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">-</span><span class="pl-smi">h</span>.<span class="pl-c1">left</span>;h<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">-</span><span class="pl-smi">h</span>.<span class="pl-c1">top</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">z</span><span class="pl-k">=</span>a;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">A</span><span class="pl-k">=</span>h;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">u</span><span class="pl-k">=</span>a;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">v</span><span class="pl-k">=</span>h;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">p</span><span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">q</span><span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">B</span><span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">-</span><span class="pl-c1">10</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">C</span><span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">+</span><span class="pl-c1">20</span>;<span class="pl-smi">g</span>.<span class="pl-en">css</span>({cursor<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifycursor</span>});<span class="pl-smi">b</span>.<span class="pl-smi">j</span><span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-large<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">n</span>.<span class="pl-en">show</span>();<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">n</span>);<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">o</span>);<span class="pl-smi">b</span>.<span class="pl-smi">j</span><span class="pl-k">!==</span><span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>largeimage<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span>(<span class="pl-en">e</span>(<span class="pl-k">new</span> <span class="pl-en">Image</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){}).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">b</span>.<span class="pl-smi">j</span>),<span class="pl-en">e</span>(g).<span class="pl-en">unbind</span>(),<span class="pl-en">e</span>(n).<span class="pl-c1">remove</span>(),<span class="pl-en">e</span>(q).<span class="pl-c1">remove</span>(),<span class="pl-en">e</span>(u).<span class="pl-c1">remove</span>(),<span class="pl-en">e</span>(g).<span class="pl-c1">remove</span>(),<span class="pl-en">e</span>(t).<span class="pl-c1">remove</span>(),<span class="pl-smi">f</span>.<span class="pl-en">F</span>(d,c,k));<span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadevt<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">q</span>.<span class="pl-en">fadeIn</span>(),<span class="pl-smi">f</span>.<span class="pl-en">P</span>(g),<span class="pl-smi">f</span>.<span class="pl-en">H</span>(g),<span class="pl-smi">f</span>.<span class="pl-en">I</span>(g))});<span class="pl-smi">g</span>.<span class="pl-en">mousemove</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-smi">b</span>.<span class="pl-smi">j</span><span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-large<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span><span class="pl-smi">d</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">b</span>.<span class="pl-smi">j</span><span class="pl-k">!==</span><span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>largeimage<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span>(<span class="pl-en">e</span>(<span class="pl-k">new</span> <span class="pl-en">Image</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){}).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">b</span>.<span class="pl-smi">j</span>),<span class="pl-en">e</span>(g).<span class="pl-en">unbind</span>(),<span class="pl-en">e</span>(n).<span class="pl-c1">remove</span>(),<span class="pl-en">e</span>(q).<span class="pl-c1">remove</span>(),<span class="pl-en">e</span>(u).<span class="pl-c1">remove</span>(),<span class="pl-en">e</span>(g).<span class="pl-c1">remove</span>(),</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-en">e</span>(t).<span class="pl-c1">remove</span>(),<span class="pl-smi">f</span>.<span class="pl-en">F</span>(d,c,k));<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageX</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageY</span>;<span class="pl-smi">p</span>.<span class="pl-smi">g</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageX</span>;<span class="pl-smi">p</span>.<span class="pl-smi">i</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageY</span>;<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">D</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">pageX</span>});<span class="pl-smi">g</span>.<span class="pl-en">mouseout</span>(<span class="pl-k">function</span>(){<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">n</span>);<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">o</span>);<span class="pl-smi">d</span>.<span class="pl-en">css</span>({visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>});<span class="pl-smi">t</span>.<span class="pl-en">hide</span>();<span class="pl-smi">q</span>.<span class="pl-c1">add</span>(<span class="pl-smi">n</span>.<span class="pl-en">not</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.preloadevt<span class="pl-pds">&quot;</span></span>)).<span class="pl-c1">stop</span>(k,k).<span class="pl-en">hide</span>()});<span class="pl-smi">g</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseover<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-en">offsetsl</span>(),h<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;img src=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">b</span>.<span class="pl-smi">j</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;/&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>({position<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>relative<span class="pl-pds">&quot;</span></span>,maxWidth<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>}).<span class="pl-en">appendTo</span>(u);<span class="pl-smi">f</span>.<span class="pl-c1">O</span>[<span class="pl-smi">b</span>.<span class="pl-smi">j</span>]<span class="pl-k">||</span>(<span class="pl-smi">g</span>.<span class="pl-en">css</span>({opacity<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">loadopacity</span>,background<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">loadbackground</span>}),<span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadimgevt<span class="pl-pds">&quot;</span></span>,k),<span class="pl-smi">n</span>.<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-smi">m</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span><span class="pl-smi">n</span>.<span class="pl-c1">width</span>()<span class="pl-k">/</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">2</span>,top<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-smi">m</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span><span class="pl-smi">n</span>.<span class="pl-c1">height</span>()<span class="pl-k">/</span><span class="pl-c1">2</span>,visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>}));<span class="pl-smi">h</span>.<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadevt<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">e</span>.<span class="pl-c1">type</span>){<span class="pl-smi">g</span>.<span class="pl-en">mouseout</span>(<span class="pl-k">function</span>(){<span class="pl-smi">f</span>.<span class="pl-en">S</span>(g);<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">n</span>);<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">o</span>);<span class="pl-smi">d</span>.<span class="pl-en">css</span>({visibility<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>});<span class="pl-smi">t</span>.<span class="pl-en">hide</span>();<span class="pl-smi">g</span>.<span class="pl-en">hide</span>().<span class="pl-en">css</span>({left<span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1E4</span>,top<span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1E4</span>})});<span class="pl-smi">g</span>.<span class="pl-en">mouseover</span>(<span class="pl-k">function</span>(){<span class="pl-smi">l</span>.<span class="pl-smi">h</span><span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-smi">k</span>});<span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadimgevt<span class="pl-pds">&quot;</span></span>,r);<span class="pl-smi">g</span>.<span class="pl-en">css</span>({opacity<span class="pl-k">:</span><span class="pl-c1">0</span>,cursor<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">magnifycursor</span>});<span class="pl-smi">n</span>.<span class="pl-en">empty</span>();<span class="pl-smi">c</span>.<span class="pl-smi">classstatusdiv</span><span class="pl-k">||</span><span class="pl-smi">n</span>.<span class="pl-en">css</span>({border<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">statusdivborder</span>,background<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">statusdivbackground</span>,padding<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">statusdivpadding</span>,font<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">statusdivfont</span>,opacity<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">statusdivopacity</span>});</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">n</span>.<span class="pl-en">hide</span>().<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>preloadevt<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">f</span>.<span class="pl-c1">O</span>[<span class="pl-smi">b</span>.<span class="pl-smi">j</span>]<span class="pl-k">=</span>k;<span class="pl-en">s</span>(h);<span class="pl-smi">p</span>.<span class="pl-smi">g</span><span class="pl-k">==</span><span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-c1">D</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">q</span>.<span class="pl-en">fadeIn</span>(),<span class="pl-smi">f</span>.<span class="pl-en">P</span>(g),<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">n</span>),<span class="pl-c1">clearTimeout</span>(<span class="pl-smi">f</span>.<span class="pl-smi">a</span>.<span class="pl-smi">o</span>),<span class="pl-smi">f</span>.<span class="pl-en">H</span>(g),<span class="pl-smi">f</span>.<span class="pl-en">I</span>(g));<span class="pl-k">var</span> l<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>specs<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">h</span>.<span class="pl-en">css</span>({width<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomstart</span><span class="pl-k">*</span><span class="pl-smi">l</span>.<span class="pl-smi">m</span>.<span class="pl-smi">b</span><span class="pl-k">*</span>(<span class="pl-smi">m</span>.<span class="pl-smi">b</span><span class="pl-k">/</span><span class="pl-smi">l</span>.<span class="pl-smi">m</span>.<span class="pl-smi">b</span>),height<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomstart</span><span class="pl-k">*</span><span class="pl-smi">l</span>.<span class="pl-smi">m</span>.<span class="pl-smi">d</span><span class="pl-k">*</span>(<span class="pl-smi">m</span>.<span class="pl-smi">d</span><span class="pl-k">/</span><span class="pl-smi">l</span>.<span class="pl-smi">m</span>.<span class="pl-smi">d</span>)});<span class="pl-smi">g</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadevt<span class="pl-pds">&quot;</span></span>,k);<span class="pl-smi">b</span>.<span class="pl-smi">zoomrange</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomrange</span>[<span class="pl-c1">1</span>]<span class="pl-k">&gt;</span><span class="pl-smi">b</span>.<span class="pl-smi">zoomrange</span>[<span class="pl-c1">0</span>]<span class="pl-k">?</span><span class="pl-smi">g</span>.<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mousewheel<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-smi">k</span>,d<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>in<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>(<span class="pl-c1">0</span><span class="pl-k">&gt;</span>c<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>out<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>in<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(d<span class="pl-k">+</span><span class="pl-smi">b</span>.<span class="pl-smi">stepzoom</span>,<span class="pl-smi">b</span>.<span class="pl-smi">zoomrange</span>[<span class="pl-c1">1</span>])<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(d<span class="pl-k">-</span><span class="pl-smi">b</span>.<span class="pl-smi">stepzoom</span>,<span class="pl-smi">b</span>.<span class="pl-smi">zoomrange</span>[<span class="pl-c1">0</span>]);<span class="pl-smi">l</span>.<span class="pl-smi">k</span><span class="pl-k">=</span>d;<span class="pl-smi">l</span>.<span class="pl-c1">V</span><span class="pl-k">=</span>c;<span class="pl-smi">a</span>.<span class="pl-c1">preventDefault</span>()})<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-smi">disablewheel</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">g</span>.<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mousewheel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-smi">a</span>.<span class="pl-c1">preventDefault</span>()})}});<span class="pl-en">l</span>(<span class="pl-smi">h</span>.<span class="pl-c1">get</span>(<span class="pl-c1">0</span>))<span class="pl-k">?</span><span class="pl-smi">h</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadevt<span class="pl-pds">&quot;</span></span>,{type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>load<span class="pl-pds">&quot;</span></span>})<span class="pl-k">:</span><span class="pl-smi">h</span>.<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>load error<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-smi">h</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>loadevt<span class="pl-pds">&quot;</span></span>,a)})})}},<span class="pl-c1">O</span><span class="pl-k">:</span>{}})})(jQuery,<span class="pl-c1">window</span>);</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/mtvphnx/zoomsl/blame/d999156cff7272e4f26b5c1252306e1151ebf08c/zoomsl.min.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/mtvphnx/zoomsl/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/mtvphnx/zoomsl/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="zoomsl.min.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:181697094,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;client_id&quot;:&quot;110131213.1561042063&quot;,&quot;originating_request_id&quot;:&quot;DAEE:6840:4B4AE2E:7E28591:5DED8F9B&quot;,&quot;originating_url&quot;:&quot;https://github.com/mtvphnx/zoomsl/blob/master/zoomsl.min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/mtvphnx/zoomsl&quot;,&quot;user_id&quot;:54414747}}"
     data-hydro-click-hmac="2066a95bbc14b70008c4c7bf68f9ffc509bef7faefa2c1310c873f933b48307f">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-70iNd/Gg+yLXPhfcelP5Zr8W3AA2fp2GsH2O/ZLbKoNOS51UGEKF/twbq+aS7x15R9F80cENGrgErdVG5frxqQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-ef488d77.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-YAuyBRQxgsi9gxAzxNkq3oPwCiYE4NP1MKf0zdDiDWs20K2t/AFTSDipJxoTN776KanapNVMJ4lAOE3pBi1sqA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-600bb205.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

