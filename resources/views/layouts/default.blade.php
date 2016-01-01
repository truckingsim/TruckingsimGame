<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ isset($title) ? $title . ' - ' : null }}Truckingsim Game</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="Taylor Otwell">
    <meta name="description" content="Truckingsim Game">
    <meta name="keywords" content="truckingsim, trucking">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--[if lte IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="/css/core.css">
    <link rel="apple-touch-icon" href="/favicon.png">
</head>
<body>

<div class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Truckingsim</a>
        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                @include('partials.main-nav')
            </ul>
        </div>


    </div>
</div>

<div class="container">
    @yield('content')
</div>

@yield('before_required_scripts')

@yield('after_required_scripts')

@if(env('APP_ENV') == 'local')
    <script src="http://localhost:3000/js/app.js"></script>
@else
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
@endif

</body>
</html>
