<!DOCTYPE html>
<html lang="en" ng-app="app">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title><?php echo $page->description; ?></title>
    <!-- <link rel="shortcut icon" href="{{ asset('img/video-player-sign.png') }}" type="image/ico"> -->

    <link rel="stylesheet" type="text/css" href="../css/fonts.css">
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert.css">
    <link rel="stylesheet" type="text/css" href="../assets/main/css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/lazypro-custom.css">
    <!-- <link rel="stylesheet" type="text/css" href="../css/custom.css"> -->
    <!-- <link rel="stylesheet" type="text/css" href="../css/loader.css"> -->
  </head>
  <body ng-controller="mainController">

    <div class="main-body-container">
      <div ui-view="header"></div>

      <div ui-view="main"></div>

      <div ui-view="footer"></div>
    </div>

    <!-- <div class="body-loader">
      <div class="loader-container">
        <div class="loader">
          <img src="../img/triangle_loader.gif" style="width: 8%;">
        </div>
      </div>  
    </div> -->
  </body>

  <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script> -->

  <script type="text/javascript" src="<?php echo $server; ?>/js/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/js/angular.min.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/js/angular-ui-router.min.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/js/angular-local-storage.min.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/js/ng-file-upload-shim.min.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/js/ng-file-upload.min.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/js/sweetalert.min.js"></script>

  <script type="text/javascript" src="<?php echo $server; ?>/assets/main/process/app.js"></script>


  <script type="text/javascript" src="<?php echo $server; ?>/assets/main/process/controllers/mainController.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/assets/main/process/controllers/headerController.js"></script>


  <script type="text/javascript" src="<?php echo $server; ?>/assets/main/process/directives/authDirective.js"></script>
  <script type="text/javascript" src="<?php echo $server; ?>/assets/main/process/directives/previewDirective.js"></script>


  <script type="text/javascript" src="<?php echo $server; ?>/assets/main/process/services/services.js"></script>

  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOzaOYgvdwnATwVIvSpYixj32rTLbVF3k"></script> -->
</html>