<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banners extends Model
{
  protected $table = 'banners';
	protected $fillable = [
		'name', 
		'parent_page', 
		'header_text', 
		'sub_text', 
		'img', 
		'visibility', 
  ];
}
