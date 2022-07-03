<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
@vite('resources/js/app.js')
</head>
<body class="font-sans antialiased" id="app">
    <router-view></router-view>
</body>
</html>
