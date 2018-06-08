<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DateTime;

use App\Pages;

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

        $data['pages'] = Pages::orderBy('created_at', 'desc')->get();

        return $data;
    }

    public function getBodyContent( )
    {
        $data = array();

        $data['pages'] = Pages::orderBy('created_at', 'desc')->get();

        return $data;
    }
}
