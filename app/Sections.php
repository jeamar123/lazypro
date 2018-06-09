<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sections extends Model
{
  protected $table = 'sections';
	protected $fillable = [
		'name', 
		'parent_page', 
		'columns', 
		'contents', 
		'visibility', 
  ];
}
