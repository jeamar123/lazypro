<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DateTime;

use App\Brand_info;
use App\Pages;
use App\Images;

class PreviewController extends Controller
{
  /**
   * Show the profile for the given user.
   *
   * @param  int  $id
   * @return Response
   */
  public function getHeaderContent( )
  {
    $data = array();

    $hostName = $_SERVER['HTTP_HOST'];
    $protocol = $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
    $data['server'] = $protocol.$hostName;
    $now = new \DateTime();
    $data['date'] = $now;

    $data['brand'] = Brand_info::orderBy('created_at', 'asc')->get();
    $data['pages'] = Pages::orderBy('created_at', 'asc')->get();

    return $data;
  }

  public function getBodyContent( )
  {
    $data = array();

    $data['brand'] = Brand_info::orderBy('created_at', 'asc')->get();
    $data['pages'] = Pages::orderBy('created_at', 'asc')->get();
    $data['contents'] = Pages::Contents('created_at', 'asc')->get();
    $data['images'] = Images::Contents('created_at', 'asc')->get();

    return $data;
  }
}
