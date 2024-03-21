<?php

namespace App\Modules\Member\Controllers;

use App\Modules\Member\Resources\MemberResource;
use App\Modules\Member\Models\Member;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberController extends Controller
{
	public function index(Request $request)
	{
		$per_page = $request->get('per_page');
		$search = $request->get('search');
		// $sort   = $request->get('sort');
		// $type   = $request->get('type');
		// $status = $request->get('status');

		$data = Member::query()

			->when($search, function ($q) use ($search) {
				$q->whereAny(
					['npk', 'name', 'unit'],
					'LIKE',
					"%$search%"
				);
			})

			->orderBy('name')
			->paginate($per_page ?? 15)
			->appends([
				'per_page' => $per_page,
				'search' => $search,
				// 'sort'   => $sort,
				// 'status' => $status,
				// 'type'   => $type,
			]);
		$members = MemberResource::collection($data);

		return Inertia::render('Modules/Member/Index', compact('members'));
	}
}
