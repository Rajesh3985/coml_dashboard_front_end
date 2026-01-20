<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Goods;

class GoodsController extends Controller
{
    /**
     * Store goods data
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'from_station' => 'required|string',
            'to_station'   => 'required|string',
            'commodity'    => 'required|string',
            'wagons'       => 'required|integer',
            'wagon_type'   => 'required|string',
            'tonnage'      => 'required|numeric',
            'freight'      => 'required|numeric',
            'rr_number'    => 'required|string',

            // OPTIONAL FIELDS
            'placement_date' => 'nullable|date',
            'placement_time' => 'nullable',
            'free_time_from' => 'nullable',
            'free_time_to'   => 'nullable',
            'release_date'   => 'nullable|date',
            'release_time'   => 'nullable',
            'kms'            => 'nullable|integer',
        ]);

        $goods = Goods::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Goods record created successfully',
            'data'    => $goods
        ], 201);
    }

    /**
     * Get all goods records
     */
    public function index()
    {
        $goods = Goods::orderBy('id', 'desc')->get();

        return response()->json([
            'success' => true,
            'data'    => $goods
        ]);
    }

    /**
     * View single goods record
     */
    public function show(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);

        $goods = Goods::find($request->id);

        if (!$goods) {
            return response()->json([
                'success' => false,
                'message' => 'Goods record not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data'    => $goods
        ]);
    }

    /**
     * Update goods record
     */
    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);

        $goods = Goods::find($request->id);

        if (!$goods) {
            return response()->json([
                'success' => false,
                'message' => 'Goods record not found'
            ], 404);
        }

        $goods->update($request->except('id'));

        return response()->json([
            'success' => true,
            'message' => 'Goods record updated successfully',
            'data'    => $goods
        ]);
    }

    /**
     * Delete goods record
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);

        $goods = Goods::find($request->id);

        if (!$goods) {
            return response()->json([
                'success' => false,
                'message' => 'Goods record not found'
            ], 404);
        }

        $goods->delete();

        return response()->json([
            'success' => true,
            'message' => 'Goods record deleted successfully'
        ]);
    }
}
