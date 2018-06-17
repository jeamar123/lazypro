<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DateTime;
use App\Sections;

class SectionsController extends Controller
{
  /**
   * Show the profile for the given user.
   *
   * @param  int  $id
   * @return Response
   */

  public function __construct( ){
    \Cloudinary::config(array(
        "cloud_name" => "dwl3yrtx8",
        "api_key" => "922394114834959",
        "api_secret" => "86jWexq6wG12b1lxTo9E2pwuL6w"
    ));
  }

  public function getAllSections(){
    return Sections::orderBy('created_at', 'asc')->get();
  }

  public function getSectionByID($id){
    $data = Sections::where('id', $id)->get();
    return $data[0];
  }

  public function addSection( Request $request ){
    $data = array();

    $count = Sections::where('name', '=', $request->get('name'))->count();
    $image = "";

    if( $count > 0 ) {
      $data['status'] = false;
      $data['message'] = 'Section name already exists.';

      return $data;
    }

    if($request->hasFile('file')) {
      $rules = array(
        'file' => 'required | mimes:jpeg,jpg,png',
      );

      $validator = \Validator::make($request->all(), $rules);

      if($validator->fails()) {
        return array('status' => FALSE, 'message' => 'Invalid file.');
      }

      $file = $request->file('file');
      $imgPathName = \Cloudinary\Uploader::upload($file->getPathName());
      $image = $imgPathName['secure_url'];
    }

    $create = Sections::create([
              'name' => $request->get('name'),
              'parent_page' => ( $request->get('parent_page') == null || $request->get('parent_page') == 'null' ) ? "" : $request->get('parent_page'),
              'header_text' => $request->get('header_text'),
              'sub_text' => $request->get('sub_text'),
              'img' => $image,
              'visibility' => $request->get('visibility'),
            ]);

    if( $create ){
      $data['status'] = true;
      $data['message'] = 'Success.';
    } else {
      $data['status'] = false;
      $data['message'] = 'Failed.';
    }
    return $data;

  }

  public function updateSection( Request $request ){
    $data = array();

    $count = Sections::where('name', '=', $request->get('name'))->where('id', '!=', $request->get('id'))->count();
    $image = "";

    if( $count > 0 ) {
      $data['status'] = false;
      $data['message'] = 'Section name already exists.';

      return $data;
    }

    if($request->hasFile('file')) {
      $rules = array(
        'file' => 'required | mimes:jpeg,jpg,png',
      );

      $validator = \Validator::make($request->all(), $rules);

      if($validator->fails()) {
        return array('status' => FALSE, 'message' => 'Invalid file.');
      }

      $file = $request->file('file');
      $imgPathName = \Cloudinary\Uploader::upload($file->getPathName());
      $image = $imgPathName['secure_url'];

    }

    $save_data = array(
      'name' => $request->get('name'),
      'parent_page' => ( $request->get('parent_page') == null || $request->get('parent_page') == 'null' ) ? "" : $request->get('parent_page'),
      'header_text' => $request->get('header_text'),
      'sub_text' => $request->get('sub_text'),
      'img' => $image ? $image : $request->get('img'),
      'visibility' => $request->get('visibility'),
    );

    $update_section  = Sections::where('id', '=', $request->get('id'))->update($save_data);
    $fetch_section   = Sections::where('id', '=', $request->get('id'))->get();

    if( $update_section  ){
      $data['status'] = true;
      $data['message'] = 'Success.';
      $data['updated_section'] = $fetch_section[0];
    } else {
      $data['status'] = false;
      $data['message'] = 'Failed.';
    }

    return $data;
  }

  public function deleteSection( $id ){
    $data = array();

    if( Sections::where('id', '=', $id)->delete() ) {
      $data['status'] = TRUE;
      $data['message'] = 'Success.';
    } else {
      $data['status'] = False;
      $data['message'] = 'Failed.';
    }

    return $data;
  }

    
}