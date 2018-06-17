<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// HomeController



Route::post('/login', 'AuthController@login');
Route::post('/signup', 'AuthController@register');
Route::get('/check_session', 'AuthController@checkSessionStatus');
Route::get('/get_session', 'AuthController@get_session');
Route::get('/logout', 'AuthController@logout');

// ----------------- ADMIN ---------------------- //

Route::get('/admin', 'HomeController@getAdminView');

Route::get('/get_pages', 'PagesController@getAllPages');
Route::get('/get_pages/{id}', 'PagesController@getPageByID');
Route::post('/add_page', 'PagesController@addPage');
Route::post('/update_page', 'PagesController@updatePage');
Route::get('/delete_page/{id}', 'PagesController@deletePage');

Route::get('/get_banners', 'BannersController@getAllBanners');
Route::get('/get_banners/{id}', 'BannersController@getBannerByID');
Route::post('/add_banner', 'BannersController@addBanner');
Route::post('/update_banner', 'BannersController@updateBanner');
Route::get('/delete_banner/{id}', 'BannersController@deleteBanner');

Route::get('/get_sections', 'SectionsController@getAllSections');
Route::get('/get_sections/{id}', 'SectionsController@getSectionByID');
Route::post('/add_section', 'SectionsController@addSection');
Route::post('/update_section', 'SectionsController@updateSection');
Route::get('/delete_section/{id}', 'SectionsController@deleteSection');

// ----------------- PREVIEW ---------------------- //

Route::get('/', 'HomeController@getHomeView');
Route::get('/{page}', 'HomeController@getPageView');

Route::get('/get_header_contents', 'PreviewController@getHeaderContent');
Route::get('/get_body_contents', 'PreviewController@getBodyContent');

