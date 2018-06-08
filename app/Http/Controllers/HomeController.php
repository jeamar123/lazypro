<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DateTime;

class HomeController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function getHomeView( )
    {
        $hostName = $_SERVER['HTTP_HOST'];
        $protocol = $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        $data['server'] = $protocol.$hostName;
        $now = new \DateTime();
        $data['date'] = $now;

        return view('main.index', $data);
    }

    public function getPageView( $page )
    {
        $hostName = $_SERVER['HTTP_HOST'];
        $protocol = $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        $data['server'] = $protocol.$hostName;
        $now = new \DateTime();
        $data['date'] = $now;

        return view('main.' . $page, $data);
    }

    public function getAdminView( )
    {
        $hostName = $_SERVER['HTTP_HOST'];
        $protocol = $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        $data['server'] = $protocol.$hostName;
        $now = new \DateTime();
        $data['date'] = $now;

        return view('admin.index', $data);
    }
}