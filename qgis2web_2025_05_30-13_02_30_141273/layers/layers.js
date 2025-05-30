var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KrugerNationalParkBoundary_1 = new ol.format.GeoJSON();
var features_KrugerNationalParkBoundary_1 = format_KrugerNationalParkBoundary_1.readFeatures(json_KrugerNationalParkBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KrugerNationalParkBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KrugerNationalParkBoundary_1.addFeatures(features_KrugerNationalParkBoundary_1);
var lyr_KrugerNationalParkBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KrugerNationalParkBoundary_1, 
                style: style_KrugerNationalParkBoundary_1,
                popuplayertitle: 'KrugerNationalParkBoundary',
                interactive: true,
                title: '<img src="styles/legend/KrugerNationalParkBoundary_1.png" /> KrugerNationalParkBoundary'
            });
var format_VegetationTypeLocations_2 = new ol.format.GeoJSON();
var features_VegetationTypeLocations_2 = format_VegetationTypeLocations_2.readFeatures(json_VegetationTypeLocations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VegetationTypeLocations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetationTypeLocations_2.addFeatures(features_VegetationTypeLocations_2);
var lyr_VegetationTypeLocations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VegetationTypeLocations_2, 
                style: style_VegetationTypeLocations_2,
                popuplayertitle: 'VegetationTypeLocations',
                interactive: true,
                title: '<img src="styles/legend/VegetationTypeLocations_2.png" /> VegetationTypeLocations'
            });
var format_RiverLocations_3 = new ol.format.GeoJSON();
var features_RiverLocations_3 = format_RiverLocations_3.readFeatures(json_RiverLocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverLocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverLocations_3.addFeatures(features_RiverLocations_3);
var lyr_RiverLocations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverLocations_3, 
                style: style_RiverLocations_3,
                popuplayertitle: 'RiverLocations',
                interactive: true,
                title: '<img src="styles/legend/RiverLocations_3.png" /> RiverLocations'
            });
var format_TouristAttractionLocations_4 = new ol.format.GeoJSON();
var features_TouristAttractionLocations_4 = format_TouristAttractionLocations_4.readFeatures(json_TouristAttractionLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TouristAttractionLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TouristAttractionLocations_4.addFeatures(features_TouristAttractionLocations_4);
var lyr_TouristAttractionLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TouristAttractionLocations_4, 
                style: style_TouristAttractionLocations_4,
                popuplayertitle: 'TouristAttractionLocations',
                interactive: true,
                title: '<img src="styles/legend/TouristAttractionLocations_4.png" /> TouristAttractionLocations'
            });
var format_FishSanctuaryLocations_5 = new ol.format.GeoJSON();
var features_FishSanctuaryLocations_5 = format_FishSanctuaryLocations_5.readFeatures(json_FishSanctuaryLocations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishSanctuaryLocations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishSanctuaryLocations_5.addFeatures(features_FishSanctuaryLocations_5);
var lyr_FishSanctuaryLocations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishSanctuaryLocations_5, 
                style: style_FishSanctuaryLocations_5,
                popuplayertitle: 'FishSanctuaryLocations',
                interactive: true,
                title: '<img src="styles/legend/FishSanctuaryLocations_5.png" /> FishSanctuaryLocations'
            });
var format_MonitoringStationLocations_6 = new ol.format.GeoJSON();
var features_MonitoringStationLocations_6 = format_MonitoringStationLocations_6.readFeatures(json_MonitoringStationLocations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonitoringStationLocations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonitoringStationLocations_6.addFeatures(features_MonitoringStationLocations_6);
var lyr_MonitoringStationLocations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonitoringStationLocations_6, 
                style: style_MonitoringStationLocations_6,
                popuplayertitle: 'MonitoringStationLocations',
                interactive: true,
                title: '<img src="styles/legend/MonitoringStationLocations_6.png" /> MonitoringStationLocations'
            });
var format_WildernessTrails_7 = new ol.format.GeoJSON();
var features_WildernessTrails_7 = format_WildernessTrails_7.readFeatures(json_WildernessTrails_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildernessTrails_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessTrails_7.addFeatures(features_WildernessTrails_7);
var lyr_WildernessTrails_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessTrails_7, 
                style: style_WildernessTrails_7,
                popuplayertitle: 'WildernessTrails',
                interactive: true,
                title: '<img src="styles/legend/WildernessTrails_7.png" /> WildernessTrails'
            });
var format_CampingTrails_8 = new ol.format.GeoJSON();
var features_CampingTrails_8 = format_CampingTrails_8.readFeatures(json_CampingTrails_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampingTrails_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampingTrails_8.addFeatures(features_CampingTrails_8);
var lyr_CampingTrails_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampingTrails_8, 
                style: style_CampingTrails_8,
                popuplayertitle: 'CampingTrails',
                interactive: true,
                title: '<img src="styles/legend/CampingTrails_8.png" /> CampingTrails'
            });
var format_TapLocations_9 = new ol.format.GeoJSON();
var features_TapLocations_9 = format_TapLocations_9.readFeatures(json_TapLocations_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapLocations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapLocations_9.addFeatures(features_TapLocations_9);
var lyr_TapLocations_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TapLocations_9, 
                style: style_TapLocations_9,
                popuplayertitle: 'TapLocations',
                interactive: true,
                title: '<img src="styles/legend/TapLocations_9.png" /> TapLocations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KrugerNationalParkBoundary_1.setVisible(true);lyr_VegetationTypeLocations_2.setVisible(true);lyr_RiverLocations_3.setVisible(true);lyr_TouristAttractionLocations_4.setVisible(true);lyr_FishSanctuaryLocations_5.setVisible(true);lyr_MonitoringStationLocations_6.setVisible(true);lyr_WildernessTrails_7.setVisible(true);lyr_CampingTrails_8.setVisible(true);lyr_TapLocations_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KrugerNationalParkBoundary_1,lyr_VegetationTypeLocations_2,lyr_RiverLocations_3,lyr_TouristAttractionLocations_4,lyr_FishSanctuaryLocations_5,lyr_MonitoringStationLocations_6,lyr_WildernessTrails_7,lyr_CampingTrails_8,lyr_TapLocations_9];
lyr_KrugerNationalParkBoundary_1.set('fieldAliases', {'RESERVENAM': 'RESERVENAM', 'SPEC_TYPE': 'SPEC_TYPE', 'PA_CATEG': 'PA_CATEG', 'MGMT_AGENT': 'MGMT_AGENT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VegetationTypeLocations_2.set('fieldAliases', {'SQ4HASH': 'SQ4HASH', 'SP0072': 'SP0072', 'NOFISSANC': 'NOFISSANC', 'SP0071': 'SP0071', 'SP0074': 'SP0074', 'SP0089': 'SP0089', 'SP0090': 'SP0090', 'SP0100': 'SP0100', 'SP0112': 'SP0112', 'SP0116': 'SP0116', 'SP0128': 'SP0128', 'SP0133': 'SP0133', 'SP0136': 'SP0136', 'SP0149': 'SP0149', 'SP0152': 'SP0152', 'SP0153': 'SP0153', 'SP0179': 'SP0179', 'SP0183': 'SP0183', 'SP0195': 'SP0195', 'SP0199': 'SP0199', 'SP0201': 'SP0201', 'SP0202': 'SP0202', 'SP0213': 'SP0213', 'SP0248': 'SP0248', 'SP0263': 'SP0263', 'SP0264': 'SP0264', 'SP0265': 'SP0265', 'SP0268': 'SP0268', 'SP0302': 'SP0302', 'SP0311': 'SP0311', 'SP0336': 'SP0336', 'SP0360': 'SP0360', 'SP0374': 'SP0374', 'SP0393': 'SP0393', 'SP0408': 'SP0408', 'SP0409': 'SP0409', 'SP0435': 'SP0435', 'SP1000': 'SP1000', 'SP1001': 'SP1001', 'SP1002': 'SP1002', 'SP1003': 'SP1003', 'SP1004': 'SP1004', 'SP1005': 'SP1005', 'SP1006': 'SP1006', 'SP1007': 'SP1007', 'SP1008': 'SP1008', 'SP1009': 'SP1009', 'SP1012': 'SP1012', 'SP1013': 'SP1013', 'SP1014': 'SP1014', 'SP1015': 'SP1015', 'SP1019': 'SP1019', 'SP1020': 'SP1020', 'SP1021': 'SP1021', 'SP1022': 'SP1022', 'SP1023': 'SP1023', 'SP1024': 'SP1024', 'SP1025': 'SP1025', 'SP1026': 'SP1026', 'SP1027': 'SP1027', 'SP1028': 'SP1028', 'SP1029': 'SP1029', 'SP1030': 'SP1030', 'SP1031': 'SP1031', 'SP2003': 'SP2003', 'SP2010': 'SP2010', 'SP2051': 'SP2051', 'STATUS': 'STATUS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RiverLocations_3.set('fieldAliases', {'LENGTH': 'LENGTH', 'RIVNAME': 'RIVNAME', 'RIVCLASS': 'RIVCLASS', 'STREAMORDE': 'STREAMORDE', 'BEC_LEV2_G': 'BEC_LEV2_G', 'LEV1': 'LEV1', 'LEV2': 'LEV2', 'LEVEL': 'LEVEL', 'ECOREGION_': 'ECOREGION_', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', });
lyr_TouristAttractionLocations_4.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'man_made': 'man_made', 'shop': 'shop', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'beds': 'beds', 'rooms': 'rooms', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_FishSanctuaryLocations_5.set('fieldAliases', {'SQ4HASH': 'SQ4HASH', 'SP0072': 'SP0072', 'NOFISSANC': 'NOFISSANC', 'SP0071': 'SP0071', 'SP0074': 'SP0074', 'SP0089': 'SP0089', 'SP0090': 'SP0090', 'SP0100': 'SP0100', 'SP0112': 'SP0112', 'SP0116': 'SP0116', 'SP0128': 'SP0128', 'SP0133': 'SP0133', 'SP0136': 'SP0136', 'SP0149': 'SP0149', 'SP0152': 'SP0152', 'SP0153': 'SP0153', 'SP0179': 'SP0179', 'SP0183': 'SP0183', 'SP0195': 'SP0195', 'SP0199': 'SP0199', 'SP0201': 'SP0201', 'SP0202': 'SP0202', 'SP0213': 'SP0213', 'SP0248': 'SP0248', 'SP0263': 'SP0263', 'SP0264': 'SP0264', 'SP0265': 'SP0265', 'SP0268': 'SP0268', 'SP0302': 'SP0302', 'SP0311': 'SP0311', 'SP0336': 'SP0336', 'SP0360': 'SP0360', 'SP0374': 'SP0374', 'SP0393': 'SP0393', 'SP0408': 'SP0408', 'SP0409': 'SP0409', 'SP0435': 'SP0435', 'SP1000': 'SP1000', 'SP1001': 'SP1001', 'SP1002': 'SP1002', 'SP1003': 'SP1003', 'SP1004': 'SP1004', 'SP1005': 'SP1005', 'SP1006': 'SP1006', 'SP1007': 'SP1007', 'SP1008': 'SP1008', 'SP1009': 'SP1009', 'SP1012': 'SP1012', 'SP1013': 'SP1013', 'SP1014': 'SP1014', 'SP1015': 'SP1015', 'SP1019': 'SP1019', 'SP1020': 'SP1020', 'SP1021': 'SP1021', 'SP1022': 'SP1022', 'SP1023': 'SP1023', 'SP1024': 'SP1024', 'SP1025': 'SP1025', 'SP1026': 'SP1026', 'SP1027': 'SP1027', 'SP1028': 'SP1028', 'SP1029': 'SP1029', 'SP1030': 'SP1030', 'SP1031': 'SP1031', 'SP2003': 'SP2003', 'SP2010': 'SP2010', 'SP2051': 'SP2051', 'STATUS': 'STATUS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MonitoringStationLocations_6.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'man_made': 'man_made', 'shop': 'shop', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'beds': 'beds', 'rooms': 'rooms', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_WildernessTrails_7.set('fieldAliases', {'id': 'id', 'Trail': 'Trail', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CampingTrails_8.set('fieldAliases', {'id': 'id', 'Camp': 'Camp', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TapLocations_9.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'man_made': 'man_made', 'shop': 'shop', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'beds': 'beds', 'rooms': 'rooms', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_KrugerNationalParkBoundary_1.set('fieldImages', {'RESERVENAM': 'TextEdit', 'SPEC_TYPE': 'TextEdit', 'PA_CATEG': 'TextEdit', 'MGMT_AGENT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VegetationTypeLocations_2.set('fieldImages', {'SQ4HASH': 'TextEdit', 'SP0072': 'Range', 'NOFISSANC': 'Range', 'SP0071': 'TextEdit', 'SP0074': 'TextEdit', 'SP0089': 'TextEdit', 'SP0090': 'TextEdit', 'SP0100': 'TextEdit', 'SP0112': 'TextEdit', 'SP0116': 'TextEdit', 'SP0128': 'TextEdit', 'SP0133': 'TextEdit', 'SP0136': 'TextEdit', 'SP0149': 'TextEdit', 'SP0152': 'TextEdit', 'SP0153': 'TextEdit', 'SP0179': 'TextEdit', 'SP0183': 'TextEdit', 'SP0195': 'TextEdit', 'SP0199': 'TextEdit', 'SP0201': 'TextEdit', 'SP0202': 'TextEdit', 'SP0213': 'TextEdit', 'SP0248': 'TextEdit', 'SP0263': 'TextEdit', 'SP0264': 'TextEdit', 'SP0265': 'TextEdit', 'SP0268': 'TextEdit', 'SP0302': 'TextEdit', 'SP0311': 'TextEdit', 'SP0336': 'TextEdit', 'SP0360': 'TextEdit', 'SP0374': 'TextEdit', 'SP0393': 'TextEdit', 'SP0408': 'TextEdit', 'SP0409': 'TextEdit', 'SP0435': 'TextEdit', 'SP1000': 'TextEdit', 'SP1001': 'TextEdit', 'SP1002': 'TextEdit', 'SP1003': 'TextEdit', 'SP1004': 'TextEdit', 'SP1005': 'TextEdit', 'SP1006': 'TextEdit', 'SP1007': 'TextEdit', 'SP1008': 'TextEdit', 'SP1009': 'TextEdit', 'SP1012': 'TextEdit', 'SP1013': 'TextEdit', 'SP1014': 'TextEdit', 'SP1015': 'TextEdit', 'SP1019': 'TextEdit', 'SP1020': 'TextEdit', 'SP1021': 'TextEdit', 'SP1022': 'TextEdit', 'SP1023': 'TextEdit', 'SP1024': 'TextEdit', 'SP1025': 'TextEdit', 'SP1026': 'TextEdit', 'SP1027': 'TextEdit', 'SP1028': 'TextEdit', 'SP1029': 'TextEdit', 'SP1030': 'TextEdit', 'SP1031': 'TextEdit', 'SP2003': 'TextEdit', 'SP2010': 'TextEdit', 'SP2051': 'TextEdit', 'STATUS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RiverLocations_3.set('fieldImages', {'LENGTH': 'TextEdit', 'RIVNAME': 'TextEdit', 'RIVCLASS': 'TextEdit', 'STREAMORDE': 'TextEdit', 'BEC_LEV2_G': 'TextEdit', 'LEV1': 'TextEdit', 'LEV2': 'TextEdit', 'LEVEL': 'TextEdit', 'ECOREGION_': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TouristAttractionLocations_4.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'rooms': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_af': 'TextEdit', 'name_nr': 'TextEdit', 'name_st': 'TextEdit', 'name_nso': 'TextEdit', 'name_ssw': 'TextEdit', 'name_ts': 'TextEdit', 'name_tn': 'TextEdit', 'name_ve': 'TextEdit', 'name_xh': 'TextEdit', 'name_zu': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_FishSanctuaryLocations_5.set('fieldImages', {'SQ4HASH': 'TextEdit', 'SP0072': 'Range', 'NOFISSANC': 'Range', 'SP0071': 'TextEdit', 'SP0074': 'TextEdit', 'SP0089': 'TextEdit', 'SP0090': 'TextEdit', 'SP0100': 'TextEdit', 'SP0112': 'TextEdit', 'SP0116': 'TextEdit', 'SP0128': 'TextEdit', 'SP0133': 'TextEdit', 'SP0136': 'TextEdit', 'SP0149': 'TextEdit', 'SP0152': 'TextEdit', 'SP0153': 'TextEdit', 'SP0179': 'TextEdit', 'SP0183': 'TextEdit', 'SP0195': 'TextEdit', 'SP0199': 'TextEdit', 'SP0201': 'TextEdit', 'SP0202': 'TextEdit', 'SP0213': 'TextEdit', 'SP0248': 'TextEdit', 'SP0263': 'TextEdit', 'SP0264': 'TextEdit', 'SP0265': 'TextEdit', 'SP0268': 'TextEdit', 'SP0302': 'TextEdit', 'SP0311': 'TextEdit', 'SP0336': 'TextEdit', 'SP0360': 'TextEdit', 'SP0374': 'TextEdit', 'SP0393': 'TextEdit', 'SP0408': 'TextEdit', 'SP0409': 'TextEdit', 'SP0435': 'TextEdit', 'SP1000': 'TextEdit', 'SP1001': 'TextEdit', 'SP1002': 'TextEdit', 'SP1003': 'TextEdit', 'SP1004': 'TextEdit', 'SP1005': 'TextEdit', 'SP1006': 'TextEdit', 'SP1007': 'TextEdit', 'SP1008': 'TextEdit', 'SP1009': 'TextEdit', 'SP1012': 'TextEdit', 'SP1013': 'TextEdit', 'SP1014': 'TextEdit', 'SP1015': 'TextEdit', 'SP1019': 'TextEdit', 'SP1020': 'TextEdit', 'SP1021': 'TextEdit', 'SP1022': 'TextEdit', 'SP1023': 'TextEdit', 'SP1024': 'TextEdit', 'SP1025': 'TextEdit', 'SP1026': 'TextEdit', 'SP1027': 'TextEdit', 'SP1028': 'TextEdit', 'SP1029': 'TextEdit', 'SP1030': 'TextEdit', 'SP1031': 'TextEdit', 'SP2003': 'TextEdit', 'SP2010': 'TextEdit', 'SP2051': 'TextEdit', 'STATUS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MonitoringStationLocations_6.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'rooms': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_af': 'TextEdit', 'name_nr': 'TextEdit', 'name_st': 'TextEdit', 'name_nso': 'TextEdit', 'name_ssw': 'TextEdit', 'name_ts': 'TextEdit', 'name_tn': 'TextEdit', 'name_ve': 'TextEdit', 'name_xh': 'TextEdit', 'name_zu': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_WildernessTrails_7.set('fieldImages', {'id': 'TextEdit', 'Trail': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CampingTrails_8.set('fieldImages', {'id': 'TextEdit', 'Camp': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TapLocations_9.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'rooms': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_af': 'TextEdit', 'name_nr': 'TextEdit', 'name_st': 'TextEdit', 'name_nso': 'TextEdit', 'name_ssw': 'TextEdit', 'name_ts': 'TextEdit', 'name_tn': 'TextEdit', 'name_ve': 'TextEdit', 'name_xh': 'TextEdit', 'name_zu': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_KrugerNationalParkBoundary_1.set('fieldLabels', {'RESERVENAM': 'inline label - always visible', 'SPEC_TYPE': 'hidden field', 'PA_CATEG': 'hidden field', 'MGMT_AGENT': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', });
lyr_VegetationTypeLocations_2.set('fieldLabels', {'SQ4HASH': 'hidden field', 'SP0072': 'hidden field', 'NOFISSANC': 'hidden field', 'SP0071': 'hidden field', 'SP0074': 'hidden field', 'SP0089': 'hidden field', 'SP0090': 'hidden field', 'SP0100': 'hidden field', 'SP0112': 'hidden field', 'SP0116': 'hidden field', 'SP0128': 'hidden field', 'SP0133': 'hidden field', 'SP0136': 'hidden field', 'SP0149': 'hidden field', 'SP0152': 'hidden field', 'SP0153': 'hidden field', 'SP0179': 'hidden field', 'SP0183': 'hidden field', 'SP0195': 'hidden field', 'SP0199': 'hidden field', 'SP0201': 'hidden field', 'SP0202': 'hidden field', 'SP0213': 'hidden field', 'SP0248': 'hidden field', 'SP0263': 'hidden field', 'SP0264': 'hidden field', 'SP0265': 'hidden field', 'SP0268': 'hidden field', 'SP0302': 'hidden field', 'SP0311': 'hidden field', 'SP0336': 'hidden field', 'SP0360': 'hidden field', 'SP0374': 'hidden field', 'SP0393': 'hidden field', 'SP0408': 'hidden field', 'SP0409': 'hidden field', 'SP0435': 'hidden field', 'SP1000': 'hidden field', 'SP1001': 'hidden field', 'SP1002': 'hidden field', 'SP1003': 'hidden field', 'SP1004': 'hidden field', 'SP1005': 'hidden field', 'SP1006': 'hidden field', 'SP1007': 'hidden field', 'SP1008': 'hidden field', 'SP1009': 'hidden field', 'SP1012': 'hidden field', 'SP1013': 'hidden field', 'SP1014': 'hidden field', 'SP1015': 'hidden field', 'SP1019': 'hidden field', 'SP1020': 'hidden field', 'SP1021': 'hidden field', 'SP1022': 'hidden field', 'SP1023': 'hidden field', 'SP1024': 'hidden field', 'SP1025': 'hidden field', 'SP1026': 'hidden field', 'SP1027': 'hidden field', 'SP1028': 'hidden field', 'SP1029': 'hidden field', 'SP1030': 'hidden field', 'SP1031': 'hidden field', 'SP2003': 'hidden field', 'SP2010': 'hidden field', 'SP2051': 'hidden field', 'STATUS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RiverLocations_3.set('fieldLabels', {'LENGTH': 'inline label - always visible', 'RIVNAME': 'inline label - always visible', 'RIVCLASS': 'hidden field', 'STREAMORDE': 'hidden field', 'BEC_LEV2_G': 'hidden field', 'LEV1': 'hidden field', 'LEV2': 'hidden field', 'LEVEL': 'hidden field', 'ECOREGION_': 'inline label - always visible', 'ID': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_TouristAttractionLocations_4.set('fieldLabels', {'name': 'inline label - always visible', 'name_en': 'hidden field', 'amenity': 'inline label - always visible', 'man_made': 'hidden field', 'shop': 'hidden field', 'tourism': 'hidden field', 'opening_ho': 'inline label - always visible', 'beds': 'hidden field', 'rooms': 'hidden field', 'addr_full': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'source': 'hidden field', 'name_af': 'hidden field', 'name_nr': 'hidden field', 'name_st': 'hidden field', 'name_nso': 'hidden field', 'name_ssw': 'hidden field', 'name_ts': 'hidden field', 'name_tn': 'hidden field', 'name_ve': 'hidden field', 'name_xh': 'hidden field', 'name_zu': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', });
lyr_FishSanctuaryLocations_5.set('fieldLabels', {'SQ4HASH': 'hidden field', 'SP0072': 'hidden field', 'NOFISSANC': 'hidden field', 'SP0071': 'hidden field', 'SP0074': 'hidden field', 'SP0089': 'hidden field', 'SP0090': 'hidden field', 'SP0100': 'hidden field', 'SP0112': 'hidden field', 'SP0116': 'hidden field', 'SP0128': 'hidden field', 'SP0133': 'hidden field', 'SP0136': 'hidden field', 'SP0149': 'hidden field', 'SP0152': 'hidden field', 'SP0153': 'hidden field', 'SP0179': 'hidden field', 'SP0183': 'hidden field', 'SP0195': 'hidden field', 'SP0199': 'hidden field', 'SP0201': 'hidden field', 'SP0202': 'hidden field', 'SP0213': 'hidden field', 'SP0248': 'hidden field', 'SP0263': 'hidden field', 'SP0264': 'hidden field', 'SP0265': 'hidden field', 'SP0268': 'hidden field', 'SP0302': 'hidden field', 'SP0311': 'hidden field', 'SP0336': 'hidden field', 'SP0360': 'hidden field', 'SP0374': 'hidden field', 'SP0393': 'hidden field', 'SP0408': 'hidden field', 'SP0409': 'hidden field', 'SP0435': 'hidden field', 'SP1000': 'hidden field', 'SP1001': 'hidden field', 'SP1002': 'hidden field', 'SP1003': 'hidden field', 'SP1004': 'hidden field', 'SP1005': 'hidden field', 'SP1006': 'hidden field', 'SP1007': 'hidden field', 'SP1008': 'hidden field', 'SP1009': 'hidden field', 'SP1012': 'hidden field', 'SP1013': 'hidden field', 'SP1014': 'hidden field', 'SP1015': 'hidden field', 'SP1019': 'hidden field', 'SP1020': 'hidden field', 'SP1021': 'hidden field', 'SP1022': 'hidden field', 'SP1023': 'hidden field', 'SP1024': 'hidden field', 'SP1025': 'hidden field', 'SP1026': 'hidden field', 'SP1027': 'hidden field', 'SP1028': 'hidden field', 'SP1029': 'hidden field', 'SP1030': 'hidden field', 'SP1031': 'hidden field', 'SP2003': 'hidden field', 'SP2010': 'hidden field', 'SP2051': 'hidden field', 'STATUS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MonitoringStationLocations_6.set('fieldLabels', {'name': 'hidden field', 'name_en': 'hidden field', 'amenity': 'hidden field', 'man_made': 'inline label - always visible', 'shop': 'hidden field', 'tourism': 'hidden field', 'opening_ho': 'hidden field', 'beds': 'hidden field', 'rooms': 'hidden field', 'addr_full': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'source': 'hidden field', 'name_af': 'hidden field', 'name_nr': 'hidden field', 'name_st': 'hidden field', 'name_nso': 'hidden field', 'name_ssw': 'hidden field', 'name_ts': 'hidden field', 'name_tn': 'hidden field', 'name_ve': 'hidden field', 'name_xh': 'hidden field', 'name_zu': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', });
lyr_WildernessTrails_7.set('fieldLabels', {'id': 'hidden field', 'Trail': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_CampingTrails_8.set('fieldLabels', {'id': 'hidden field', 'Camp': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_TapLocations_9.set('fieldLabels', {'name': 'hidden field', 'name_en': 'hidden field', 'amenity': 'hidden field', 'man_made': 'inline label - always visible', 'shop': 'hidden field', 'tourism': 'hidden field', 'opening_ho': 'hidden field', 'beds': 'hidden field', 'rooms': 'hidden field', 'addr_full': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'source': 'hidden field', 'name_af': 'hidden field', 'name_nr': 'hidden field', 'name_st': 'hidden field', 'name_nso': 'hidden field', 'name_ssw': 'hidden field', 'name_ts': 'hidden field', 'name_tn': 'hidden field', 'name_ve': 'hidden field', 'name_xh': 'hidden field', 'name_zu': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', });
lyr_TapLocations_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});