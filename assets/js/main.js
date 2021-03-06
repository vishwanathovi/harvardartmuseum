const buckets = [{"key":"Photographs","doc_count":81632,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":63160},{"key":"19th-20th century","doc_count":8385},{"key":"19th century","doc_count":4497},{"key":"21st century","doc_count":481},{"key":"20th-21st century","doc_count":89}]}},{"key":"Prints","doc_count":67306,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":1193,"buckets":[{"key":"19th century","doc_count":19391},{"key":"20th century","doc_count":13818},{"key":"18th century","doc_count":9666},{"key":"17th century","doc_count":9499},{"key":"16th century","doc_count":6665},{"key":"18th-19th century","doc_count":2085},{"key":"15th century","doc_count":1229},{"key":"19th-20th century","doc_count":774},{"key":"16th-17th century","doc_count":721},{"key":"15th-16th century","doc_count":616}]}},{"key":"Drawings","doc_count":25264,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":113,"buckets":[{"key":"20th century","doc_count":13957},{"key":"19th century","doc_count":4954},{"key":"19th-20th century","doc_count":2022},{"key":"18th century","doc_count":1457},{"key":"17th century","doc_count":1167},{"key":"16th century","doc_count":530},{"key":"18th-19th century","doc_count":443},{"key":"16th-17th century","doc_count":190},{"key":"17th-18th century","doc_count":174},{"key":"21st century","doc_count":133}]}},{"key":"Coins","doc_count":18049,"by_century":{"doc_count_error_upper_bound":8,"sum_other_doc_count":4819,"buckets":[{"key":"3rd century CE","doc_count":2059},{"key":"4th century BCE","doc_count":1413},{"key":"2nd century CE","doc_count":1226},{"key":"1st century CE","doc_count":1119},{"key":"3rd century BCE","doc_count":962},{"key":"5th century BCE","doc_count":916},{"key":"4th century CE","doc_count":835},{"key":"2nd century BCE","doc_count":832},{"key":"1st century BCE","doc_count":762},{"key":"4th-3rd century BCE","doc_count":484}]}},{"key":"Archival Material","doc_count":7954,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":5851},{"key":"19th-20th century","doc_count":2034},{"key":"19th century","doc_count":19},{"key":"21st century","doc_count":3},{"key":"17th century","doc_count":1},{"key":"18th century","doc_count":1},{"key":"20th-21st century","doc_count":1}]}},{"key":"Paintings","doc_count":5795,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":325,"buckets":[{"key":"20th century","doc_count":1478},{"key":"19th century","doc_count":1234},{"key":"19th-20th century","doc_count":588},{"key":"18th century","doc_count":544},{"key":"17th century","doc_count":537},{"key":"16th century","doc_count":253},{"key":"15th century","doc_count":163},{"key":"18th-19th century","doc_count":145},{"key":"21st century","doc_count":98},{"key":"14th century","doc_count":90}]}},{"key":"Vessels","doc_count":5039,"by_century":{"doc_count_error_upper_bound":17,"sum_other_doc_count":2046,"buckets":[{"key":"18th century","doc_count":509},{"key":"19th century","doc_count":327},{"key":"20th century","doc_count":311},{"key":"17th century","doc_count":206},{"key":"5th century BCE","doc_count":187},{"key":"12th-13th century","doc_count":165},{"key":"6th century BCE","doc_count":163},{"key":"15th century","doc_count":110},{"key":"3rd millennium BCE","doc_count":109},{"key":"18th-19th century","doc_count":108}]}},{"key":"Sculpture","doc_count":4545,"by_century":{"doc_count_error_upper_bound":14,"sum_other_doc_count":1577,"buckets":[{"key":"20th century","doc_count":877},{"key":"19th century","doc_count":589},{"key":"18th century","doc_count":262},{"key":"19th-20th century","doc_count":151},{"key":"6th century","doc_count":97},{"key":"21st century","doc_count":93},{"key":"5th century BCE","doc_count":79},{"key":"16th century","doc_count":77},{"key":"17th century","doc_count":75},{"key":"18th-19th century","doc_count":70}]}},{"key":"Fragments","doc_count":3593,"by_century":{"doc_count_error_upper_bound":3,"sum_other_doc_count":461,"buckets":[{"key":"5th century BCE","doc_count":175},{"key":"3rd millennium BCE","doc_count":143},{"key":"6th century BCE","doc_count":122},{"key":"2nd millennium BCE","doc_count":71},{"key":"12th-13th century","doc_count":59},{"key":"1st century BCE-1st century CE","doc_count":49},{"key":"1st century CE","doc_count":42},{"key":"12th century","doc_count":36},{"key":"13th-14th century","doc_count":30},{"key":"13th century","doc_count":29}]}},{"key":"Textile Arts","doc_count":1832,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":143,"buckets":[{"key":"20th century","doc_count":407},{"key":"19th century","doc_count":257},{"key":"18th century","doc_count":147},{"key":"19th-20th century","doc_count":113},{"key":"17th century","doc_count":85},{"key":"16th century","doc_count":54},{"key":"18th-19th century","doc_count":50},{"key":"17th-18th century","doc_count":34},{"key":"16th-17th century","doc_count":24},{"key":"5th-6th century","doc_count":19}]}},{"key":"Manuscripts","doc_count":1526,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":208,"buckets":[{"key":"16th century","doc_count":391},{"key":"17th century","doc_count":235},{"key":"19th century","doc_count":143},{"key":"13th century","doc_count":93},{"key":"16th-17th century","doc_count":82},{"key":"18th century","doc_count":65},{"key":"15th century","doc_count":62},{"key":"14th century","doc_count":60},{"key":"17th-18th century","doc_count":49},{"key":"18th-19th century","doc_count":42}]}},{"key":"Ritual Implements","doc_count":903,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":308,"buckets":[{"key":"5th-3rd century BCE","doc_count":103},{"key":"11th-8th century BCE","doc_count":87},{"key":"20th century","doc_count":69},{"key":"4th-3rd millennium BCE","doc_count":49},{"key":"16th-11th century BCE","doc_count":43},{"key":"12th-11th century BCE","doc_count":42},{"key":"2nd millennium BCE","doc_count":27},{"key":"3rd millennium BCE","doc_count":26},{"key":"6th-5th century BCE","doc_count":23},{"key":"19th-20th century","doc_count":21}]}},{"key":"Multiples","doc_count":843,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":820},{"key":"21st century","doc_count":23}]}},{"key":"Tools and Equipment","doc_count":816,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":186,"buckets":[{"key":"18th century","doc_count":129},{"key":"19th century","doc_count":78},{"key":"1st-2nd millennium CE","doc_count":77},{"key":"1st-4th century CE","doc_count":53},{"key":"20th century","doc_count":22},{"key":"1st-3rd century CE","doc_count":20},{"key":"3rd millennium BCE","doc_count":18},{"key":"17th century","doc_count":17},{"key":"19th-20th century","doc_count":17},{"key":"1st-5th century CE","doc_count":13}]}},{"key":"Seals","doc_count":721,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":108,"buckets":[{"key":"6th-5th millennium BCE","doc_count":22},{"key":"2nd millennium BCE","doc_count":21},{"key":"9th-7th century BCE","doc_count":15},{"key":"5th-4th millennium BCE","doc_count":13},{"key":"3rd-7th century","doc_count":12},{"key":"11th century","doc_count":11},{"key":"4th-3rd millennium BCE","doc_count":11},{"key":"10th century","doc_count":10},{"key":"4th millennium BCE","doc_count":10},{"key":"3rd millennium BCE","doc_count":8}]}},{"key":"Jewelry","doc_count":680,"by_century":{"doc_count_error_upper_bound":1,"sum_other_doc_count":274,"buckets":[{"key":"8th century BCE","doc_count":59},{"key":"7th-8th century","doc_count":57},{"key":"19th century","doc_count":47},{"key":"2nd century BCE","doc_count":27},{"key":"9th-8th century BCE","doc_count":26},{"key":"18th-19th century","doc_count":20},{"key":"8th-7th century BCE","doc_count":20},{"key":"4th century BCE","doc_count":19},{"key":"2nd-3rd century CE","doc_count":18},{"key":"19th-20th century","doc_count":15}]}},{"key":"Architectural Elements","doc_count":525,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":136,"buckets":[{"key":"12th century","doc_count":110},{"key":"5th century","doc_count":52},{"key":"16th century","doc_count":38},{"key":"19th century","doc_count":26},{"key":"19th-20th century","doc_count":26},{"key":"5th-6th century","doc_count":22},{"key":"13th century","doc_count":18},{"key":"7th-10th century","doc_count":18},{"key":"14th century","doc_count":14},{"key":"15th century","doc_count":10}]}},{"key":"Medals and Medallions","doc_count":510,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":10,"buckets":[{"key":"20th century","doc_count":239},{"key":"19th century","doc_count":115},{"key":"18th century","doc_count":74},{"key":"17th century","doc_count":13},{"key":"16th century","doc_count":11},{"key":"18th-19th century","doc_count":9},{"key":"19th-20th century","doc_count":9},{"key":"2nd century BCE-1st  century CE","doc_count":7},{"key":"15th-16th century","doc_count":3},{"key":"17th-19th century","doc_count":2}]}},{"key":"Calligraphy","doc_count":497,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":54,"buckets":[{"key":"17th-18th century","doc_count":85},{"key":"16th century","doc_count":57},{"key":"17th century","doc_count":54},{"key":"19th century","doc_count":22},{"key":"16th-17th century","doc_count":17},{"key":"20th century","doc_count":17},{"key":"13th century","doc_count":16},{"key":"18th century","doc_count":16},{"key":"14th century","doc_count":12},{"key":"19th-20th century","doc_count":10}]}},{"key":"Books","doc_count":483,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":3,"buckets":[{"key":"20th century","doc_count":253},{"key":"19th century","doc_count":83},{"key":"18th century","doc_count":34},{"key":"21st century","doc_count":15},{"key":"18th-19th century","doc_count":12},{"key":"14th century","doc_count":9},{"key":"16th-17th century","doc_count":8},{"key":"17th century","doc_count":4},{"key":"19th-20th century","doc_count":4},{"key":"16th century","doc_count":2}]}},{"key":"Lighting Devices","doc_count":472,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":75,"buckets":[{"key":"19th century","doc_count":25},{"key":"18th century","doc_count":21},{"key":"1st century CE","doc_count":21},{"key":"20th century","doc_count":12},{"key":"5th century BCE","doc_count":10},{"key":"1st-2nd century CE","doc_count":9},{"key":"4th century BCE","doc_count":9},{"key":"6th century BCE","doc_count":7},{"key":"19th-20th century","doc_count":6},{"key":"1st-3rd century CE","doc_count":6}]}},{"key":"Artists' Tools","doc_count":409,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":22,"buckets":[{"key":"19th-20th century","doc_count":96},{"key":"19th century","doc_count":83},{"key":"17th century","doc_count":54},{"key":"20th century","doc_count":49},{"key":"18th century","doc_count":22},{"key":"18th-19th century","doc_count":11},{"key":"12th-13th century","doc_count":6},{"key":"16th-17th century","doc_count":5},{"key":"17th-19th century","doc_count":4},{"key":"13th-14th century","doc_count":2}]}},{"key":"Albums","doc_count":397,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":2,"buckets":[{"key":"19th century","doc_count":128},{"key":"16th century","doc_count":77},{"key":"18th century","doc_count":61},{"key":"17th century","doc_count":47},{"key":"17th-18th century","doc_count":31},{"key":"18th-19th century","doc_count":18},{"key":"16th-17th century","doc_count":17},{"key":"20th century","doc_count":9},{"key":"15th century","doc_count":5},{"key":"15th-16th century","doc_count":1}]}},{"key":"Plaques","doc_count":372,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":44,"buckets":[{"key":"20th century","doc_count":152},{"key":"16th century","doc_count":9},{"key":"18th century","doc_count":8},{"key":"12th century","doc_count":5},{"key":"17th century","doc_count":5},{"key":"19th century","doc_count":5},{"key":"5th-3rd century BCE","doc_count":5},{"key":"6th-5th century BCE","doc_count":5},{"key":"2nd millennium BCE","doc_count":4},{"key":"3rd century CE","doc_count":4}]}},{"key":"Furniture","doc_count":269,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":22,"buckets":[{"key":"18th century","doc_count":73},{"key":"20th century","doc_count":61},{"key":"17th century","doc_count":28},{"key":"16th century","doc_count":26},{"key":"19th century","doc_count":15},{"key":"1st century BCE-1st century CE","doc_count":7},{"key":"15th century","doc_count":6},{"key":"17th-18th century","doc_count":6},{"key":"19th-20th century","doc_count":6},{"key":"1st century CE","doc_count":5}]}},{"key":"Rubbings","doc_count":242,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"18th century","doc_count":152},{"key":"20th century","doc_count":40},{"key":"12th-13th century","doc_count":24},{"key":"12th century","doc_count":3},{"key":"19th-20th century","doc_count":1},{"key":"6th century","doc_count":1}]}},{"key":"Boxes","doc_count":223,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":39,"buckets":[{"key":"18th century","doc_count":38},{"key":"19th century","doc_count":37},{"key":"17th century","doc_count":17},{"key":"18th-19th century","doc_count":15},{"key":"20th century","doc_count":13},{"key":"19th-20th century","doc_count":12},{"key":"17th-18th century","doc_count":9},{"key":"16th-17th century","doc_count":8},{"key":"9th century","doc_count":6},{"key":"12th century","doc_count":5}]}},{"key":"Gems","doc_count":220,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":34,"buckets":[{"key":"1st-2nd century CE","doc_count":45},{"key":"1st-3rd century CE","doc_count":30},{"key":"19th century","doc_count":28},{"key":"1st century CE","doc_count":9},{"key":"1st-4th century CE","doc_count":9},{"key":"19th-20th century","doc_count":8},{"key":"2nd-4th century CE","doc_count":7},{"key":"4th-1st century BCE","doc_count":5},{"key":"4th-3rd century BCE","doc_count":5},{"key":"18th-19th century","doc_count":4}]}},{"key":"Weapons and Ammunition","doc_count":187,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":51,"buckets":[{"key":"3rd millennium BCE","doc_count":17},{"key":"2nd millennium BCE","doc_count":14},{"key":"20th century","doc_count":10},{"key":"19th century","doc_count":8},{"key":"19th-20th century","doc_count":8},{"key":"17th century","doc_count":7},{"key":"18th century","doc_count":6},{"key":"14th-11th century BCE","doc_count":4},{"key":"5th-3rd century BCE","doc_count":4},{"key":"16th century","doc_count":3}]}},{"key":"Material Specimens","doc_count":184,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":3},{"key":"1st-3rd century CE","doc_count":1},{"key":"2nd century BCE-1st  century CE","doc_count":1}]}},{"key":"Artists' Materials","doc_count":153,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":153}]}},{"key":"Mirrors","doc_count":142,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":47,"buckets":[{"key":"5th-3rd century BCE","doc_count":22},{"key":"8th century","doc_count":18},{"key":"4th century BCE","doc_count":14},{"key":"19th century","doc_count":9},{"key":"12th-14th century","doc_count":7},{"key":"1st-3rd century CE","doc_count":6},{"key":"7th-8th century","doc_count":6},{"key":"18th-19th century","doc_count":4},{"key":"3rd century BCE","doc_count":4},{"key":"1st-2nd century CE","doc_count":3}]}},{"key":"Amulets","doc_count":139,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":8,"buckets":[{"key":"1st-3rd century CE","doc_count":21},{"key":"4th millennium BCE","doc_count":4},{"key":"1st millennium BCE-1st millenium CE","doc_count":3},{"key":"3rd-4th century CE","doc_count":2},{"key":"6th-7th century","doc_count":2},{"key":"Unidentified century","doc_count":2},{"key":"10th-12th century","doc_count":1},{"key":"13th-11th century BCE","doc_count":1},{"key":"19th century","doc_count":1},{"key":"1st century BCE-3rd century CE","doc_count":1}]}},{"key":"Timepieces","doc_count":139,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"18th century","doc_count":79},{"key":"19th century","doc_count":27},{"key":"20th century","doc_count":15},{"key":"19th-20th century","doc_count":6},{"key":"17th century","doc_count":5},{"key":"18th-19th century","doc_count":2},{"key":"17th-18th century","doc_count":1}]}},{"key":"Paintings with Calligraphy","doc_count":100,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":3,"buckets":[{"key":"17th century","doc_count":24},{"key":"19th century","doc_count":24},{"key":"18th-19th century","doc_count":7},{"key":"16th century","doc_count":6},{"key":"12th century","doc_count":5},{"key":"17th-19th century","doc_count":4},{"key":"18th century","doc_count":4},{"key":"15th century","doc_count":3},{"key":"20th century","doc_count":3},{"key":"14th century","doc_count":2}]}},{"key":"Audiovisual Works","doc_count":89,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":74},{"key":"21st century","doc_count":15}]}},{"key":"Tokens","doc_count":79,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"13th-14th century","doc_count":2},{"key":"1st-2nd century CE","doc_count":2},{"key":"12th century","doc_count":1},{"key":"19th century","doc_count":1},{"key":"2nd-3rd century CE","doc_count":1}]}},{"key":"Mosaics","doc_count":77,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":3,"buckets":[{"key":"1st-5th century CE","doc_count":22},{"key":"2nd-3rd century CE","doc_count":4},{"key":"3rd century CE","doc_count":4},{"key":"16th-17th century","doc_count":2},{"key":"20th century","doc_count":2},{"key":"2nd century CE","doc_count":2},{"key":"4th century CE","doc_count":2},{"key":"17th century","doc_count":1},{"key":"1st-2nd century CE","doc_count":1},{"key":"1st-4th century CE","doc_count":1}]}},{"key":"Recreational Artifacts","doc_count":72,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":1,"buckets":[{"key":"20th century","doc_count":44},{"key":"19th century","doc_count":8},{"key":"5th-1st century BCE","doc_count":5},{"key":"1st-4th century CE","doc_count":2},{"key":"Unidentified century","doc_count":2},{"key":"18th-19th century","doc_count":1},{"key":"1st century BCE-2nd century CE","doc_count":1},{"key":"2nd century CE","doc_count":1},{"key":"3rd-2nd millennium BCE","doc_count":1},{"key":"5th century BCE","doc_count":1}]}},{"key":"Measuring Devices","doc_count":71,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":1,"buckets":[{"key":"20th century","doc_count":58},{"key":"18th century","doc_count":2},{"key":"18th-19th century","doc_count":2},{"key":"1st century CE","doc_count":2},{"key":"2nd-3rd century CE","doc_count":1},{"key":"2nd-4th century CE","doc_count":1},{"key":"3rd century BCE-3rd century CE","doc_count":1},{"key":"4th-7th century","doc_count":1},{"key":"5th century","doc_count":1},{"key":"5th-6th century","doc_count":1}]}},{"key":"Riding Equipment","doc_count":62,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":13,"buckets":[{"key":"5th-3rd century BCE","doc_count":10},{"key":"11th-10th century BCE","doc_count":5},{"key":"16th-11th century BCE","doc_count":5},{"key":"10th-8th century BCE","doc_count":4},{"key":"6th-3rd century BCE","doc_count":4},{"key":"9th-8th century BCE","doc_count":4},{"key":"11th-8th century BCE","doc_count":3},{"key":"3rd-2nd century BCE","doc_count":3},{"key":"10th-9th century BCE","doc_count":2},{"key":"19th century","doc_count":2}]}},{"key":"Brick Stamps","doc_count":58,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"2nd century CE","doc_count":33},{"key":"1st century CE","doc_count":8},{"key":"19th century","doc_count":3},{"key":"1st-2nd century CE","doc_count":3},{"key":"3rd century CE","doc_count":3},{"key":"3rd-4th century CE","doc_count":3},{"key":"4th century CE","doc_count":2},{"key":"1st century BCE-1st century CE","doc_count":1},{"key":"5th-6th century","doc_count":1}]}},{"key":"Stained Glass","doc_count":52,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":1,"buckets":[{"key":"16th century","doc_count":18},{"key":"17th century","doc_count":14},{"key":"18th century","doc_count":4},{"key":"14th century","doc_count":3},{"key":"14th-16th century","doc_count":3},{"key":"15th century","doc_count":3},{"key":"19th century","doc_count":2},{"key":"12th century","doc_count":1},{"key":"12th-13th century","doc_count":1},{"key":"13th century","doc_count":1}]}},{"key":"Furnishings","doc_count":51,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":3,"buckets":[{"key":"19th century","doc_count":9},{"key":"12th-13th century","doc_count":7},{"key":"12th century","doc_count":4},{"key":"11th-12th century","doc_count":3},{"key":"18th century","doc_count":3},{"key":"14th century","doc_count":2},{"key":"18th-19th century","doc_count":2},{"key":"9th century","doc_count":2},{"key":"10th-12th century","doc_count":1},{"key":"13th-14th century","doc_count":1}]}},{"key":"Inscriptions","doc_count":51,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":2,"buckets":[{"key":"1st century CE","doc_count":9},{"key":"2nd century CE","doc_count":8},{"key":"1st-2nd century CE","doc_count":7},{"key":"2nd-3rd century CE","doc_count":3},{"key":"1st century BCE-1st century CE","doc_count":2},{"key":"2nd century BCE","doc_count":2},{"key":"2nd millennium BCE","doc_count":2},{"key":"1st-3rd century CE","doc_count":1},{"key":"3rd millennium BCE","doc_count":1},{"key":"4th century CE","doc_count":1}]}},{"key":"Tablets","doc_count":46,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"2nd millennium BCE","doc_count":17},{"key":"20th century","doc_count":8},{"key":"3rd millennium BCE","doc_count":4},{"key":"13th century BCE","doc_count":1},{"key":"6th century BCE","doc_count":1}]}},{"key":"Cameos","doc_count":44,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"19th century","doc_count":28},{"key":"19th-20th century","doc_count":8},{"key":"18th century","doc_count":4},{"key":"18th-19th century","doc_count":3}]}},{"key":"Armor","doc_count":43,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"7th century BCE","doc_count":11},{"key":"18th century","doc_count":7},{"key":"6th century BCE","doc_count":3},{"key":"17th century","doc_count":2},{"key":"19th century","doc_count":2},{"key":"4th century BCE","doc_count":2},{"key":"15th century","doc_count":1},{"key":"18th-19th century","doc_count":1},{"key":"6th-5th century BCE","doc_count":1},{"key":"9th-8th century BCE","doc_count":1}]}},{"key":"Musical Instruments","doc_count":24,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":6,"buckets":[{"key":"1st century BCE-3rd century CE","doc_count":3},{"key":"1st-3rd century CE","doc_count":2},{"key":"4th-6th century","doc_count":2},{"key":"8th-4th century BCE","doc_count":2},{"key":"16th-17th century","doc_count":1},{"key":"17th century","doc_count":1},{"key":"19th century","doc_count":1},{"key":"19th-20th century","doc_count":1},{"key":"1st century CE","doc_count":1},{"key":"1st millennium BCE-1st millenium CE","doc_count":1}]}},{"key":"Accessories (non-art)","doc_count":23,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":1}]}},{"key":"Portfolios","doc_count":22,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"21st century","doc_count":14},{"key":"20th century","doc_count":8}]}},{"key":"Graphic Design","doc_count":16,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"21st century","doc_count":16}]}},{"key":"(not assigned)","doc_count":9,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"18th century","doc_count":3},{"key":"20th century","doc_count":2},{"key":"16th century","doc_count":1},{"key":"19th century","doc_count":1},{"key":"1st millennium BCE-1st millenium CE","doc_count":1}]}},{"key":"Unidentified","doc_count":7,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Unidentified century","doc_count":2},{"key":"10th-8th century BCE","doc_count":1},{"key":"20th century","doc_count":1},{"key":"4th-3rd millennium BCE","doc_count":1},{"key":"8th century BCE","doc_count":1},{"key":"8th-10th century","doc_count":1}]}},{"key":"Performance Artifacts","doc_count":6,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"20th century","doc_count":6}]}},{"key":"Text","doc_count":1,"by_century":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"18th century","doc_count":1}]}}];
let selectedCategory = 'default';
let selectedCentury = 'default';
let objectList = {};
let selectRecordIndex = 0;
let records = [];
let images;
let preloadArray = [];
var mobileDropDownStatus = 0;

window.addEventListener("load",()=>{
	// Initialization of the site
	updateCategoryUl();
	updateCenturyUl(selectedCategory);
	clearDom();
	fetchData(30).then(() => {
	  if (records.length) {
	    preloadImage();
	    checkValidityAndDisplay();
	    updateDom();
	  } else {
	    dq('.no-item-display').style.display = 'block';
	  }
	});

	// Service worker
	if ('serviceWorker' in window.navigator){
		try {
			navigator.serviceWorker.register('sw.js'); 
		} catch(e) {
			console.log(e);
		}
	}

})



dq('.search-btn').addEventListener('click', (e) => {
  e.preventDefault();
  selectedCategory = dq('.category-select').value;
  selectedCentury = dq('.century-select').value;
  clearDom();
  fetchData().then(() => {
    if (records.length) {
      preloadImage();
      checkValidityAndDisplay();
      updateDom();
    } else {
      dq('.no-item-display').style.display = 'block';
      dq('.wait-spinner').style.display = 'none';
    }
  });
});

dq('.category-select').onchange = () => {
  selectedCategory = dq('.category-select').value;
  updateCenturyUl(selectedCategory);
};

dq('.left-move').addEventListener('click', () => {
  if (selectRecordIndex) {
    clearDom();
    selectRecordIndex -= 1;
    updateDom();
  }
  checkValidityAndDisplay();
});

dq('.right-move').addEventListener('click', () => {
  if (selectRecordIndex < records.length - 1) {
    clearDom();
    selectRecordIndex += 1;
    updateDom();
  }
  checkValidityAndDisplay();
});

window.addEventListener('keyup', (e)=>{
	if (e.key=='ArrowRight'){
	  if (selectRecordIndex < records.length - 1) {
	    clearDom();
	    selectRecordIndex += 1;
	    updateDom();
	  }
	  checkValidityAndDisplay();
	} else if (e.key=='ArrowLeft'){
	  if (selectRecordIndex) {
	    clearDom();
	    selectRecordIndex -= 1;
	    updateDom();
	  }
	  checkValidityAndDisplay();
	}
})


setInterval(() => {
  if (!navigator.onLine) {
    dq('.internet-message').style.top = '0px';
  } else {
    dq('.internet-message').style.top = '-28px';
  }
}, 3000);


dq('.mobile-view-dropdown').addEventListener('click', () => {
	console.log(mobileDropDownStatus)
  mobileDropDownStatus = !mobileDropDownStatus;
  if (mobileDropDownStatus == 0) {
    dq('.header-form').style.display = 'none';
    dq('.mobile-view-dropdown').style.transform = 'rotateX(0deg)';
  } else {
    dq('.header-form').style.display = 'grid';
    dq('.mobile-view-dropdown').style.transform = 'rotateX(180deg)';
  }
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 820) {
    dq('.header-form').style.display = 'grid';
    // dq('.mobile-view-dropdown').style.transform = 'rotateX(180deg)';
  } else if (mobileDropDownStatus == 0) {
    dq('.header-form').style.display = 'none';
  }
});


function loadFile(path) {
  const fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', path);
  fileref.setAttribute('id', 'dark-mode-css');
  document.getElementsByTagName('head')[0].appendChild(fileref);
}


function darkModeToggle() {
  if (document.getElementById('dark-mode-css')) {
    const sheet = document.getElementById('dark-mode-css');
    sheet.parentNode.removeChild(sheet);
    dq('.logo-img').setAttribute('src', './assets/media/light-mode.png');
    dq('.toggle-theme').textContent = 'Dark';
  } else {
    loadFile('./assets/stylesheet/dark-mode.css');
    dq('.logo-img').setAttribute('src', './assets/media/darkmode.png');
    dq('.toggle-theme').textContent = 'Light';
  }
}

dq('.toggle-theme').addEventListener('click', darkModeToggle )


window.addEventListener('beforeinstallprompt', (e) => {
	console.log('Add to homescreen need to be added here');
});
