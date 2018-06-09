<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DateTime;
use App\Pages;

class PagesController extends Controller
{
  /**
   * Show the profile for the given user.
   *
   * @param  int  $id
   * @return Response
   */
  public function getAllPages(){
    return Pages::orderBy('created_at', 'asc')->get();
  }

  public function getPageByID($id){
    $data = Pages::where('id', $id)->get();
    return $data[0];
  }

  public function addPage( Request $request ){
    $data = array();

    $count = Pages::where('name', '=', $request->get('name'))->count();

    if( $count > 0 ) {
      $data['status'] = false;
      $data['message'] = 'Page name already exists.';

      return $data;
    }

    $create = Pages::create([
                'name' => $request->get('name'),
                'link_url' => $request->get('link_url'),
                'description' => $request->get('description'),
                'visibility' => $request->get('visibility'),
            ]);

    if( $create ){
      // $destinationPath=base_path()."/resources/views/main/about.blade.php";
      // $success = \File::copy(base_path()."/resources/views/main/index.blade.php",$destinationPath);
      
      $data['status'] = true;
      $data['message'] = 'Success.';
    } else {
      $data['status'] = false;
      $data['message'] = 'Failed.';
    }
    return $data;
  }

  public function updatePage( Request $request ){
    $save_data = array(
      'name' => $request->get('name'),
      'link_url' => $request->get('link_url'),
      'description' => $request->get('description'),
      'visibility' => $request->get('visibility'),
    );

    $update_page = Pages::where('id', '=', $request->get('id'))->update($save_data);
    $fetch_page = Pages::where('id', '=', $request->get('id'))->get();

    if( $update_page ){
      $data['status'] = true;
      $data['message'] = 'Success.';
      $data['updated_page'] = $fetch_page[0];
    } else {
      $data['status'] = false;
      $data['message'] = 'Failed.';
    }

    return $data;
  }

  public function deletePage( $id ){
    $data = array();

    if( Pages::where('id', '=', $id)->delete() ) {
      $data['status'] = TRUE;
      $data['message'] = 'Success.';
    } else {
      $data['status'] = False;
      $data['message'] = 'Failed.';
    }

    return $data;
  }

  // public function uploadMovieImage( Request $request ){
  //   $data = array();
  //   // validate file
  //   if($request->hasFile('file')) {
  //     $rules = array(
  //       'file' => 'required | mimes:jpeg,jpg,png',
  //     );

  //     $validator = \Validator::make($request->all(), $rules);

  //     if($validator->fails()) {
  //       return array('status' => FALSE, 'message' => 'Invalid file.');
  //     }

  //     $file = $request->file('file');

  //     $image = \Cloudinary\Uploader::upload($file->getPathName());

  //     if( $request->get('current_img') != null ){

  //     }

  //     $result = Movie::where('id', '=', $request->get('movie_id'))->update(['image' => $image['secure_url']]);

  //     if($result) {
  //       $data['status'] = true;
  //       $data['message'] = "Success.";
  //       $data['img'] = $image['secure_url'];
  //     } else {
  //       $data['status'] = false;
  //       $data['message'] = "Failed updating image.";
  //     }
  //   } else {
  //     $data['status'] = false;
  //     $data['message'] = "No file selected.";
  //   }

  //   return $data;
  // }

    
}