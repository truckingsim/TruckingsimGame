<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ isset($title) ? $title . ' - ' : null }}Laravel - The PHP Framework For Web Artisans</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="Taylor Otwell">
    <meta name="description" content="Laravel - The PHP framework for web artisans.">
    <meta name="keywords" content="laravel, php, framework, web, artisans, taylor otwell">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--[if lte IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="{{ elixir('css/core.css') }}">
    <link rel="apple-touch-icon" href="/favicon.png">
</head>
<body>

<span class="overlay"></span>

<nav class="main">
    <div class="container">
        <a href="/" class="brand">
            Laravel
        </a>

        <div class="responsive-sidebar-nav">
            <a href="#" class="toggle-slide menu-link btn">&#9776;</a>
        </div>

        <ul class="main-nav">
            @include('partials.main-nav')
        </ul>
    </div>
</nav>

@yield('content')

<footer class="main">
    <ul>
        @include('partials.main-nav')
    </ul>
</footer>

</body>
</html>
