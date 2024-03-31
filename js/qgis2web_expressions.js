// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_MedidaPobrezaMultidimensional_1rule0_eval_expression(context) {
    // "MPM" >= 4.5 AND "MPM" < 28

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['MPM']  >= 4.5) && (feature.properties['MPM']  < 28));
    } else {
        return ((feature['MPM']  >= 4.5) && (feature['MPM']  < 28));
    }
}


function exp_MedidaPobrezaMultidimensional_1rule1_eval_expression(context) {
    // "MPM" >= 28 AND "MPM" < 39

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['MPM']  >= 28) && (feature.properties['MPM']  < 39));
    } else {
        return ((feature['MPM']  >= 28) && (feature['MPM']  < 39));
    }
}


function exp_MedidaPobrezaMultidimensional_1rule2_eval_expression(context) {
    // "MPM" >= 39 AND "MPM" < 51

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['MPM']  >= 39) && (feature.properties['MPM']  < 51));
    } else {
        return ((feature['MPM']  >= 39) && (feature['MPM']  < 51));
    }
}


function exp_MedidaPobrezaMultidimensional_1rule3_eval_expression(context) {
    // "MPM" >= 51 AND "MPM" < 68

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['MPM']  >= 51) && (feature.properties['MPM']  < 68));
    } else {
        return ((feature['MPM']  >= 51) && (feature['MPM']  < 68));
    }
}


function exp_MedidaPobrezaMultidimensional_1rule4_eval_expression(context) {
    // "MPM" >= 68 AND "MPM" <= 98.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['MPM']  >= 68) && (feature.properties['MPM']  <= 98.5));
    } else {
        return ((feature['MPM']  >= 68) && (feature['MPM']  <= 98.5));
    }
}


function exp_Viviendassininformacinestrato_2rule0_eval_expression(context) {
    // "P_ESTR_IN" >= 0 AND "P_ESTR_IN" < 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR_IN']  >= 0) && (feature.properties['P_ESTR_IN']  < 3));
    } else {
        return ((feature['P_ESTR_IN']  >= 0) && (feature['P_ESTR_IN']  < 3));
    }
}


function exp_Viviendassininformacinestrato_2rule1_eval_expression(context) {
    // "P_ESTR_IN" >= 3 AND "P_ESTR_IN" < 12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR_IN']  >= 3) && (feature.properties['P_ESTR_IN']  < 12));
    } else {
        return ((feature['P_ESTR_IN']  >= 3) && (feature['P_ESTR_IN']  < 12));
    }
}


function exp_Viviendassininformacinestrato_2rule2_eval_expression(context) {
    // "P_ESTR_IN" >= 12 AND "P_ESTR_IN" < 41

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR_IN']  >= 12) && (feature.properties['P_ESTR_IN']  < 41));
    } else {
        return ((feature['P_ESTR_IN']  >= 12) && (feature['P_ESTR_IN']  < 41));
    }
}


function exp_Viviendassininformacinestrato_2rule3_eval_expression(context) {
    // "P_ESTR_IN" >= 41 AND "P_ESTR_IN" <= 99

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR_IN']  >= 41) && (feature.properties['P_ESTR_IN']  <= 99));
    } else {
        return ((feature['P_ESTR_IN']  >= 41) && (feature['P_ESTR_IN']  <= 99));
    }
}


function exp_Viviendasestrato45y6_3rule0_eval_expression(context) {
    // "P_ESTR456" >= 0 AND "P_ESTR456" < 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR456']  >= 0) && (feature.properties['P_ESTR456']  < 2));
    } else {
        return ((feature['P_ESTR456']  >= 0) && (feature['P_ESTR456']  < 2));
    }
}


function exp_Viviendasestrato45y6_3rule1_eval_expression(context) {
    // "P_ESTR456" >= 2 AND "P_ESTR456" < 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR456']  >= 2) && (feature.properties['P_ESTR456']  < 4));
    } else {
        return ((feature['P_ESTR456']  >= 2) && (feature['P_ESTR456']  < 4));
    }
}


function exp_Viviendasestrato45y6_3rule2_eval_expression(context) {
    // "P_ESTR456" >= 4 AND "P_ESTR456" < 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR456']  >= 4) && (feature.properties['P_ESTR456']  < 7));
    } else {
        return ((feature['P_ESTR456']  >= 4) && (feature['P_ESTR456']  < 7));
    }
}


function exp_Viviendasestrato45y6_3rule3_eval_expression(context) {
    // "P_ESTR456" >= 7 AND "P_ESTR456" <= 43.8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR456']  >= 7) && (feature.properties['P_ESTR456']  <= 43.8));
    } else {
        return ((feature['P_ESTR456']  >= 7) && (feature['P_ESTR456']  <= 43.8));
    }
}


function exp_Viviendasestrato3_4rule0_eval_expression(context) {
    // "P_ESTR3" >= 0 AND "P_ESTR3" < 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR3']  >= 0) && (feature.properties['P_ESTR3']  < 3));
    } else {
        return ((feature['P_ESTR3']  >= 0) && (feature['P_ESTR3']  < 3));
    }
}


function exp_Viviendasestrato3_4rule1_eval_expression(context) {
    // "P_ESTR3" >= 3 AND "P_ESTR3" < 9

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR3']  >= 3) && (feature.properties['P_ESTR3']  < 9));
    } else {
        return ((feature['P_ESTR3']  >= 3) && (feature['P_ESTR3']  < 9));
    }
}


function exp_Viviendasestrato3_4rule2_eval_expression(context) {
    // "P_ESTR3" >= 9 AND "P_ESTR3" < 19

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR3']  >= 9) && (feature.properties['P_ESTR3']  < 19));
    } else {
        return ((feature['P_ESTR3']  >= 9) && (feature['P_ESTR3']  < 19));
    }
}


function exp_Viviendasestrato3_4rule3_eval_expression(context) {
    // "P_ESTR3" >= 19 AND "P_ESTR3" < 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR3']  >= 19) && (feature.properties['P_ESTR3']  < 25));
    } else {
        return ((feature['P_ESTR3']  >= 19) && (feature['P_ESTR3']  < 25));
    }
}


function exp_Viviendasestrato3_4rule4_eval_expression(context) {
    // "P_ESTR3" >= 25 AND "P_ESTR3" <= 66.4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR3']  >= 25) && (feature.properties['P_ESTR3']  <= 66.4));
    } else {
        return ((feature['P_ESTR3']  >= 25) && (feature['P_ESTR3']  <= 66.4));
    }
}


function exp_Viviendasestrato2_5rule0_eval_expression(context) {
    // "P_ESTR2" >= 0 AND "P_ESTR2" < 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR2']  >= 0) && (feature.properties['P_ESTR2']  < 8));
    } else {
        return ((feature['P_ESTR2']  >= 0) && (feature['P_ESTR2']  < 8));
    }
}


function exp_Viviendasestrato2_5rule1_eval_expression(context) {
    // "P_ESTR2" >= 8 AND "P_ESTR2" < 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR2']  >= 8) && (feature.properties['P_ESTR2']  < 25));
    } else {
        return ((feature['P_ESTR2']  >= 8) && (feature['P_ESTR2']  < 25));
    }
}


function exp_Viviendasestrato2_5rule2_eval_expression(context) {
    // "P_ESTR2" >= 25 AND "P_ESTR2" < 41

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR2']  >= 25) && (feature.properties['P_ESTR2']  < 41));
    } else {
        return ((feature['P_ESTR2']  >= 25) && (feature['P_ESTR2']  < 41));
    }
}


function exp_Viviendasestrato2_5rule3_eval_expression(context) {
    // "P_ESTR2" >= 41 AND "P_ESTR2" < 57

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR2']  >= 41) && (feature.properties['P_ESTR2']  < 57));
    } else {
        return ((feature['P_ESTR2']  >= 41) && (feature['P_ESTR2']  < 57));
    }
}


function exp_Viviendasestrato2_5rule4_eval_expression(context) {
    // "P_ESTR2" >= 57 AND "P_ESTR2" < 93.4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR2']  >= 57) && (feature.properties['P_ESTR2']  < 93.4));
    } else {
        return ((feature['P_ESTR2']  >= 57) && (feature['P_ESTR2']  < 93.4));
    }
}


function exp_Viviendasestrato1_6rule0_eval_expression(context) {
    // "P_ESTR1" >= 0 AND "P_ESTR1" < 29

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR1']  >= 0) && (feature.properties['P_ESTR1']  < 29));
    } else {
        return ((feature['P_ESTR1']  >= 0) && (feature['P_ESTR1']  < 29));
    }
}


function exp_Viviendasestrato1_6rule1_eval_expression(context) {
    // "P_ESTR1" >= 29 AND "P_ESTR1" < 48

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR1']  >= 29) && (feature.properties['P_ESTR1']  < 48));
    } else {
        return ((feature['P_ESTR1']  >= 29) && (feature['P_ESTR1']  < 48));
    }
}


function exp_Viviendasestrato1_6rule2_eval_expression(context) {
    // "P_ESTR1" >= 48 AND "P_ESTR1" < 68

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR1']  >= 48) && (feature.properties['P_ESTR1']  < 68));
    } else {
        return ((feature['P_ESTR1']  >= 48) && (feature['P_ESTR1']  < 68));
    }
}


function exp_Viviendasestrato1_6rule3_eval_expression(context) {
    // "P_ESTR1" >= 68 AND "P_ESTR1" < 87

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR1']  >= 68) && (feature.properties['P_ESTR1']  < 87));
    } else {
        return ((feature['P_ESTR1']  >= 68) && (feature['P_ESTR1']  < 87));
    }
}


function exp_Viviendasestrato1_6rule4_eval_expression(context) {
    // "P_ESTR1" >= 87 AND "P_ESTR1" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_ESTR1']  >= 87) && (feature.properties['P_ESTR1']  <= 100));
    } else {
        return ((feature['P_ESTR1']  >= 87) && (feature['P_ESTR1']  <= 100));
    }
}


function exp_Viviendassingasnaturalconectadaaredpblica_7rule0_eval_expression(context) {
    // "P_NO_GAS" >= 0 AND "P_NO_GAS" < 31

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_GAS']  >= 0) && (feature.properties['P_NO_GAS']  < 31));
    } else {
        return ((feature['P_NO_GAS']  >= 0) && (feature['P_NO_GAS']  < 31));
    }
}


function exp_Viviendassingasnaturalconectadaaredpblica_7rule1_eval_expression(context) {
    // "P_NO_GAS" >= 31 AND "P_NO_GAS" < 59

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_GAS']  >= 31) && (feature.properties['P_NO_GAS']  < 59));
    } else {
        return ((feature['P_NO_GAS']  >= 31) && (feature['P_NO_GAS']  < 59));
    }
}


function exp_Viviendassingasnaturalconectadaaredpblica_7rule2_eval_expression(context) {
    // "P_NO_GAS" >= 59 AND "P_NO_GAS" < 77

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_GAS']  >= 59) && (feature.properties['P_NO_GAS']  < 77));
    } else {
        return ((feature['P_NO_GAS']  >= 59) && (feature['P_NO_GAS']  < 77));
    }
}


function exp_Viviendassingasnaturalconectadaaredpblica_7rule3_eval_expression(context) {
    // "P_NO_GAS" >= 77 AND "P_NO_GAS" < 95

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_GAS']  >= 77) && (feature.properties['P_NO_GAS']  < 95));
    } else {
        return ((feature['P_NO_GAS']  >= 77) && (feature['P_NO_GAS']  < 95));
    }
}


function exp_Viviendassingasnaturalconectadaaredpblica_7rule4_eval_expression(context) {
    // "P_NO_GAS" >= 95 AND "P_NO_GAS" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_GAS']  >= 95) && (feature.properties['P_NO_GAS']  <= 100));
    } else {
        return ((feature['P_NO_GAS']  >= 95) && (feature['P_NO_GAS']  <= 100));
    }
}


function exp_Viviendassinaccesoalaelectricidad_8rule0_eval_expression(context) {
    // "P_NO_ELEC" >= 0 AND "P_NO_ELEC" < 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_ELEC']  >= 0) && (feature.properties['P_NO_ELEC']  < 6));
    } else {
        return ((feature['P_NO_ELEC']  >= 0) && (feature['P_NO_ELEC']  < 6));
    }
}


function exp_Viviendassinaccesoalaelectricidad_8rule1_eval_expression(context) {
    // "P_NO_ELEC" >= 6 AND "P_NO_ELEC" < 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_ELEC']  >= 6) && (feature.properties['P_NO_ELEC']  < 15));
    } else {
        return ((feature['P_NO_ELEC']  >= 6) && (feature['P_NO_ELEC']  < 15));
    }
}


function exp_Viviendassinaccesoalaelectricidad_8rule2_eval_expression(context) {
    // "P_NO_ELEC" >= 15 AND "P_NO_ELEC" < 26

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_ELEC']  >= 15) && (feature.properties['P_NO_ELEC']  < 26));
    } else {
        return ((feature['P_NO_ELEC']  >= 15) && (feature['P_NO_ELEC']  < 26));
    }
}


function exp_Viviendassinaccesoalaelectricidad_8rule3_eval_expression(context) {
    // "P_NO_ELEC" >= 26 AND "P_NO_ELEC" < 41

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_ELEC']  >= 26) && (feature.properties['P_NO_ELEC']  < 41));
    } else {
        return ((feature['P_NO_ELEC']  >= 26) && (feature['P_NO_ELEC']  < 41));
    }
}


function exp_Viviendassinaccesoalaelectricidad_8rule4_eval_expression(context) {
    // "P_NO_ELEC" >= 41 AND "P_NO_ELEC" <= 98.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['P_NO_ELEC']  >= 41) && (feature.properties['P_NO_ELEC']  <= 98.5));
    } else {
        return ((feature['P_NO_ELEC']  >= 41) && (feature['P_NO_ELEC']  <= 98.5));
    }
}