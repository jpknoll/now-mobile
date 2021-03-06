/*
	Master stylesheet for Now@UC San Diego

	Device Pixel Ratios
		Pixel Ratio 1x: 	iPhone 2G, 3G, 3GS
		Pixel Ratio 2x: 	iPhone 4, 4s, 5, 5s, 6
		Pixel Ratio 3x: 	iPhone 6+, 6s+

	Color Palete
		Blue: #006C92
		Grey: #747678
*/
'use strict';

import React from 'react';
import {
	StyleSheet,
	Dimensions,
	PixelRatio
} from 'react-native';

var pixelRatio = PixelRatio.get();
var windowSize = Dimensions.get('window');
var windowMaxWidth = 414; // iPhone 6+/6s+ width

var windowWidth = windowSize.width;
var windowHeight = windowSize.height;
var maxCardWidth = windowWidth - 2 - 12;
var maxCardWidthWithPadding = windowWidth - 2 - 12 - 16; // border, margin, padding

// Applying pixel ratio modifier helps ensure all views/layouts across devices render in similar fashion
var prm = windowWidth / windowMaxWidth; 	// pixel ratio modifier

var surfCardDetailsWidth = maxCardWidthWithPadding;
var surfCardDetailsPadding = 10 * prm;

var shuttleCardRefreshIconTop = 10;
var shuttleStopRefreshIconTop = 10;

if (pixelRatio === 2) {
	shuttleCardRefreshIconTop = 11;
	shuttleStopRefreshIconTop = 15;
} else if (pixelRatio === 3) {
	shuttleCardRefreshIconTop = 12;
	shuttleStopRefreshIconTop = 15;
}


var css = StyleSheet.create({

	// NavigatorIOS
	navBarIOS: { flex: 1 },

	// Primary Containers
	main_container: { flex: 1, backgroundColor: '#EAEAEA' },
	scroll_main: {  },
	view_default: { flex: 1 },
	scroll_default: { alignItems: 'center' },
	

	// Card Styles
	card_main: { borderWidth: 1, borderRadius: 2, borderColor: '#DDD', backgroundColor: '#F9F9F9', margin: 6, alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' },
	card_plain: { margin: 6, flex: 1, alignItems: 'center', justifyContent: 'center' },
	card_special_events: { width: windowWidth - 12, height: windowWidth * .597 - 12, borderRadius: 3 },
	card_view_overlay: { position: 'absolute', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', bottom: 0, left: 0, width: windowWidth - 12, height: 48, backgroundColor: 'rgba(60,60,60,.8)'	},
	card_header_container: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#EEE', width: maxCardWidthWithPadding },
	card_title_container: { flex: 1, flexDirection: 'row', alignItems: 'center', width: maxCardWidth, padding: 8, borderBottomWidth: 1, borderBottomColor: '#DDD' },
		card_title: { fontSize: 26 * prm, fontWeight: '400', letterSpacing: 1, color: '#747678' },


	// Modal Welcome Message
	modal_container: { flex: 1, backgroundColor: 'rgba(0, 108, 147, .95)', justifyContent: 'center', padding: 35 * prm },
	modal_text_intro: { color: '#FFF', fontSize: 30, },
	modal_text: { color: '#FFF', marginTop: 30, fontSize: 16, lineHeight: 20, marginBottom: 30 },
	modal_button: { flex: 1, borderWidth: 1, borderColor: '#FFF', padding: 16 * prm, backgroundColor: 'rgba(50,50,50,.75)', justifyContent: 'center' },
	modal_button_text: { fontSize: 24, color: '#FFF', textAlign: 'center' },


	// SHUTTLE CARD
	shuttle_card_refresh_container: { position: 'absolute', alignItems: 'center', top: shuttleCardRefreshIconTop, right: 4 * prm, width: 50 * prm },
		shuttle_card_refresh: { width: 24 * prm, height: 24 * prm },
		shuttle_card_refresh_timeago: { fontSize: 9 * prm, color: '#999', marginTop: -1 * prm, textAlign: 'center', fontWeight: '500', backgroundColor: 'rgba(0,0,0,0)' },

		shuttle_card_row: { width: maxCardWidth, overflow: 'hidden' },
		shuttle_card_row_border: { borderTopWidth: 1, borderTopColor: '#DDD' },
		shuttle_card_row_top: { flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', marginVertical: 20 * prm, height: 100 * prm },
			shuttle_card_rt_1: { flex: 1 },
			shuttle_card_rt_2: { borderRadius: 49 * prm, borderWidth: 1, width: 98 * prm + 2, justifyContent: 'center' },
			shuttle_card_rt_2_label: { textAlign: 'center', color: '#222', fontWeight: '600', fontSize: 48 * prm, backgroundColor: 'rgba(0,0,0,0)' },
			shuttle_card_rt_3: { flex: 3, justifyContent: 'center' },
			shuttle_card_rt_3_label: { textAlign: 'center', color: '#8f9092', fontSize: 30 * prm, fontWeight: '300', backgroundColor: 'rgba(0,0,0,0)' },
			shuttle_card_rt_4: { borderRadius: 49 * prm, borderWidth: 1, backgroundColor: '#FFF', borderColor: '#CCC', width: 98 * prm + 2, justifyContent: 'center' },
			shuttle_card_rt_4_label: { padding: 5, textAlign: 'center', color: '#8f9092', fontWeight: '500', fontSize: 16 * prm, backgroundColor: 'rgba(0,0,0,0)' },
			shuttle_card_rt_5: { flex: 1 },
		shuttle_card_row_bot: { flex: 1, alignItems: 'center', paddingBottom: 20 },
		shuttle_card_row_arriving: { fontSize: 26 * prm, color: '#333' },
		shuttlecard_loading: { marginHorizontal: 40, marginVertical: 156 * prm },
		shuttlecard_loading_fail: { marginHorizontal: 16 * prm, marginTop: 40 * prm, marginBottom: 60 * prm },


	// EVENTS / TOP STORIES CARD
	events_list: { width: maxCardWidth, padding: 8 },
	events_list_row: { flex: 1, flexDirection: 'row', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#EEE', overflow: 'hidden' },
		events_list_left_container: { flex: 1 },
			events_list_title: { fontSize: 17 * prm, color: '#000', fontWeight: '400' },
			events_list_desc: { fontSize: 14 * prm, color: '#666', paddingTop: 8 * prm },
			events_list_postdate: { fontSize: 11 * prm, color: '#006C92', paddingTop: 8 * prm },
		events_list_image: { width: 130 * prm, height: 87 * prm, marginLeft: 14, borderWidth: 1, borderColor: '#CCC' },
	events_more: { alignItems: 'center', justifyContent: 'center', width: maxCardWidthWithPadding, paddingHorizontal: 4, paddingTop: 8, paddingBottom: 4 },
	events_more_label: { fontSize: 20, color: '#006C92', fontWeight: '300' },


	// WEATHER CARD
	weathercard_more: { justifyContent: 'center', width: windowWidth - 30, padding: 10 * prm, fontSize: 24 * prm, fontWeight: '500', color: '#006C92' },
	weathercard_border: { borderTopWidth: 1, borderTopColor: '#CCC', width: maxCardWidth },
	weatherccard_loading_height: { height: 300 * prm },

	wc_main: {  },
	wc_toprow: { flex: 1, flexDirection: 'row', height: 80, borderBottomWidth: 1, borderColor: '#EEE', justifyContent: 'center', alignItems: 'center', width: maxCardWidth, padding: 14 },
	wc_toprow_left: { flex: 4 },
		wc_current_temp: { fontSize: 22, fontWeight: '300' },
		wc_current_summary: { fontSize: 15, color: '#444', paddingTop: 10, fontWeight: '300' },
	wc_toprow_right: { flex: 1 },
	wc_toprow_icon: { width: 68 * prm, height: 68 * prm },

	wc_botrow: { flex: 1, flexDirection: 'row', padding: 20 },
		wc_botrow_col: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
			wf_dayofweek: { fontSize: 14, fontWeight: '300', color: '#444', paddingBottom: 10},
			wf_icon: { height: 33 * prm, width: 33 * prm },
			wf_tempMax: { fontSize: 14, fontWeight: '300', color: '#000', paddingTop: 10 },
			wf_tempMin: { fontSize: 14, fontWeight: '300', color: '#666', paddingTop: 10 },
	wc_surfreport_more: { fontSize: 20, fontWeight: '300', color: '#006C92', paddingHorizontal: 14, paddingVertical: 10 },

	// SURF REPORT
	sr_listview: { flex: 1 },
	sr_image: { width: windowWidth, height: windowWidth * .361 },
	sr_day_row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 },
		sr_day_row_border: { borderTopWidth: 1, borderTopColor: '#CCC' },
		sr_day_date_container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
			sr_dayofweek: { fontSize: 19 * prm, color: '#000' },
			sr_dayandmonth: { fontSize: 12 * prm, color: '#777' },
		sr_day_details_container: { flex: 3, paddingLeft: 10, borderLeftWidth: 1, borderLeftColor: '#DDD' },
			sr_day_details_title: { fontSize: 18 * prm, color: '#000' },
			sr_day_details_height: { fontSize: 16 * prm, color: '#333', paddingTop: 4 },
			sr_day_details_desc: { fontSize: 13 * prm, color: '#777', paddingTop: 4 },



	// DESTINATION CARD
	destinationcard_title: { flex: 1, alignSelf: 'stretch', fontSize: 28, color: '#7d7e80', padding: 6 },
	destinationcard_bot_container: { padding: 8 },
	destinationcard_map_container: { width: maxCardWidthWithPadding, height: maxCardWidthWithPadding * .6, borderBottomWidth: 1, borderBottomColor: '#EAEAEA', paddingBottom: 16, marginBottom: 8 },
	destinationcard_map: { flex: 1, borderWidth: 1, borderColor: '#DDD' },
	destinationcard_marker_row: { flex: 1, flexDirection: 'row', justifyContent: 'center', width: windowWidth - 30, padding: 6, marginTop: 0 },
	destinationcard_icon_marker: { width: 18, height: 18 * 1.375, alignItems: 'flex-start', justifyContent: 'center' },
	destinationcard_marker_label: { flex: 1, fontSize: 20, paddingLeft: 8, paddingTop: 0, color: '#006C92', justifyContent: 'center' },


	// DestinationSearch
	dsearch_container: { flex: 1, backgroundColor: 'rgba(31,149,187,1)', width: windowWidth },
		dsearch_inner: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 * prm, margin: 8 * prm, backgroundColor: '#FFF', borderWidth: 1, borderRadius: 2, borderColor: 'rgba(0,0,0,0)' },
			dsearch_searchicon: { width: 24 * prm, height: 24 * prm },
			dsearch_textinput: { flex: 1, height: 50 * prm, marginHorizontal: 8, fontSize: 24 * prm, color: '#999', textAlign: 'center', fontWeight: '500' },
			dsearch_micicon: { width: 24 * .736 * prm, height: 24 * prm },


	// Card Overlay
	card_overlay1_text: { flex: 5, fontSize: 24, color: "#FAFAFA", paddingLeft: 12 },
	card_overlay1_icons: { flex: 1 },
	icon_fb: { width: 32, height: 32 },
	icon_twitter: { width: 32, height: 32 },
	events_img: { width: maxCardWidthWithPadding, height: maxCardWidthWithPadding * .23 },
	topstories_img: { width: maxCardWidthWithPadding, height: maxCardWidthWithPadding * .1 },
	card_text_1: { fontSize: 20, color: "#666", padding: 20, fontWeight: "bold" },


	// EVENT DETAIL
	eventdetail_top_container: { flex: 1, flexDirection: 'row', width: windowWidth, padding: 8 },
		
		eventdetail_image: { width: windowWidth, height: windowWidth * .5 },
		eventdetail_image2: { width: 50, height: 50 },
		eventdetail_image2_sm: { width: 100, height: 100, borderColor: 'blue', borderWidth: 1 },
		eventdetail_image2_lg: { width: 200, height: 200 },
		news_detail_container: { width: windowWidth, paddingHorizontal: 18 * prm, paddingVertical: 14 * prm },
			eventdetail_eventname: { fontWeight: '400', fontSize: 22 * prm, color: '#006C92' },
			eventdetail_eventlocation: { fontSize: 16 * prm, color: '#333' },
			eventdetail_eventdate: { fontSize: 11 * prm, color: '#333', paddingTop: 14 * prm },
			eventdetail_eventdescription: { lineHeight: 18 * prm, color: '#111', fontSize: 14 * prm, paddingTop: 14 * prm },
			eventdetail_eventcontact: { fontSize: 16, fontWeight: '600', color: '#333', paddingTop: 16 },

		eventdetail_readmore_container: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#17AADF', borderRadius: 3, marginTop: 20, padding: 10 },
			eventdetail_readmore_text: { fontSize: 16, color: '#FFF' },
			eventdetail_link: { fontSize: 16, fontWeight: '600', color: '#FFF', backgroundColor: '#17AADF', borderWidth: 0, borderRadius: 3 },



	// SPECIAL EVENTS CARD
	special_events_main: { flex: 1 },
	special_events_webview: { },


	// Events styles
	events_main: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
	events_listing_img: { width: windowWidth - 12, height: windowWidth * 1.267 - 12, margin: 6 },

	// Refresh loader
	load_icon: { width: 48 * prm, height: 48 * prm },



	// SHUTTLE STOP
	shuttlestop_image: { width: windowWidth, height: windowWidth * .533 },
	shuttlestop_name_container: { flex: 1, flexDirection: 'row', alignItems: 'center', width: windowWidth, paddingVertical: 14 * prm, paddingHorizontal: 20 * prm, backgroundColor: '#006C92' },
		shuttlestop_name_text: { width: windowWidth * .9 - 40, color: '#FFF', fontSize: 24, fontWeight: '300' },
		
		shuttlestop_refresh_container: { position: 'absolute', alignItems: 'center', top: shuttleStopRefreshIconTop, right: 8, width: 55 * prm },
			shuttlestop_refresh: { width: 26 * prm, height: 26 * prm },
			shuttlestop_refresh_timeago: { fontSize: 10 * prm, color: '#FFF', marginTop: 1 * prm, textAlign: 'center', fontWeight: '600', backgroundColor: 'rgba(0,0,0,0)' },

	shuttle_stop_arrivals_container: { width: windowWidth, paddingLeft: 20 * prm, paddingVertical: 16 * prm },
		shuttle_stop_next_arrivals_text: { fontSize: 20, fontWeight: '300', color: '#222', paddingTop: 8, paddingBottom: 16 },
		shuttle_stop_arrivals_row: { flex: 1, flexDirection: 'row', paddingBottom: 13, alignItems: 'center', justifyContent: 'flex-start' },
			shuttle_stop_rt_2: { borderRadius: 18 * prm, borderWidth: 1, width: 36 * prm + 2, height: 34 * prm + 2, justifyContent: 'center' },
				shuttle_stop_rt_2_label: { textAlign: 'center', fontWeight: '600', fontSize: 19 * prm, backgroundColor: 'rgba(0,0,0,0)' },
			shuttle_stop_arrivals_row_route_name: { flex: 2, fontSize: 17 * prm, color: '#555', paddingLeft: 10 * prm },
			shuttle_sotp_arrivals_row_eta_text: { flex: 1, fontSize: 26 * prm, color: '#333', paddingLeft: 16 * prm },
		
		shuttlestop_loading: { width: 48, height: 48, marginHorizontal: 40, marginVertical: 50 * prm },

		shuttle_stop_map_text: { fontSize: 20, fontWeight: '300', paddingTop: 16, color: '#222', paddingLeft: 20 * prm, paddingBottom: 8 },
		shuttlestop_map: { width: windowWidth, height: windowWidth * .8 },
		shuttle_map_img: { width: windowWidth, height: windowWidth * 1.474, marginBottom: 12 },
		shuttle_progress_img: { width: windowWidth, height: windowWidth * 1.426, marginBottom: 12 },

	shuttle_stop_no_arrivals: { fontSize: 16, color: '#555' },

	// Weather Styles
	weather_main: { flex: 1, paddingBottom: 12 },
	weather_webview: { backgroundColor: '#EAEAEA', paddingBottom:40 },


	// Destination Styles
	destination_search_img: { width: windowWidth, height: windowWidth * .158 },
	destination_suggestions_img: { width: windowWidth, height: windowWidth * .559 },
	destination_results_img: { width: windowWidth, height: windowWidth * 1.864 },

	// Destination Detail
	destination_detail_sc: { },
	destination_detail_map: { width: windowWidth, height: windowHeight - 60 },

	// WebView
	webview_container: { width: windowWidth, height: windowHeight - 60 },

	// Footer
	footer: { flex: 1, flexDirection: 'row', paddingBottom: 10 },
	footer_link: { flex: 15 },
	
	footer_about: { color: '#006C92', fontSize: 16 * prm, textAlign: 'right', padding: 4 },
	footer_spacer: { flex: 1, color: '#888', padding: 4, fontSize: 16 * prm, textAlign: 'center' },
	footer_copyright: { color: '#006C92', fontSize: 16 * prm, textAlign: 'left', padding: 4 },











	// MISC STYLES
	whitebg: { backgroundColor: '#FFF' },
	offwhitebg: { backgroundColor: '#FAFAFA' },
	greybg: { backgroundColor: "#E2E2E2" },
	dgrey: { color: '#333' },
	grey: { color: '#666' },
	mgrey: { color: '#999' },
	lgrey: { color: '#CCC' },
	flex: { flex: 1 },
	flexcenter: { flex: 1, alignItems: 'center', justifyContent: 'center', width: maxCardWidth },
	flexcenter2: { flex: 1, alignItems: 'center', justifyContent: 'center', width: maxCardWidthWithPadding },
	flexcenter3: { flex: 1, alignItems: 'center', justifyContent: 'center', width: windowWidth },

	card_loading_img: { width: 72, height: 72 },

	bold: { fontWeight: '700' },

	pad10: { padding: 10 },
	pad20: { padding: 20 },
	pad40: { padding: 40 },
	mar10: { margin: 10 },
	mar20: { margin: 20 },
	mar40: { margin: 40 },
	pt10:  { paddingTop: 10 },

	fs10: { fontSize: 10 },
	fs12: { fontSize: 12 },
	fs14: { fontSize: 14 },
	fs16: { fontSize: 16 },
	fs18: { fontSize: 18 },
	fs20: { fontSize: 20 },
	fs22: { fontSize: 22 },
	fs24: { fontSize: 24 },


	// Temporary
	dining_card_placeholder_img: { width: maxCardWidth, height: maxCardWidth * 1.436 },
	dining_card_list_img: { width: windowWidth, height: windowWidth * 2.854, marginTop: 10 },
	dining_card_detail_img: { width: windowWidth, height: windowWidth * 1.9 },


	schedule_card_img: { width: maxCardWidth, height: maxCardWidth * 1.1 },
	schedule_detail_img: { width: windowWidth, height: windowWidth * 1.343 },
	schedule_detail_bgcolor: { backgroundColor: '#e0e0e0' },




});

module.exports = css;




