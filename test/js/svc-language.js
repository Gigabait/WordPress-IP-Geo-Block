/*jslint white: true */
/**
 * Service: Language
 *
 */
angular.module('language', []);
angular.module('language').factory('LanguageSvc', ['$window', function ($window) {
	'use strict';

	var language = {
		'en': {
			main_title: 'WordPress Post Simulator',
			page_settings: 'Page Settings',
			page_readme: 'After setting the followings, click <span class="highlight">Validate</span> to validate the pages.',
			home_url: 'WordPress Home',
			single_page: 'Single Page',
			ip_address: 'Proxy IP Address',
			note_ip_address: 'You should add <span class="highlight"><code>HTTP_X_FORWARDED_FOR</code></span> into <span class="highlight"><code>$_SERVER</code> keys for extra IPs</span> on <span class="highlight">Settings</span> tab of IP Geo Block in order to simulate the requests from outside your nation.',
			submit_post: 'Submission',
			post_settings: 'Submission Settings',
			required: 'Required',
			cb_post_items: 'Select All',
			post_comment: 'Post Comment',
			author: 'Name',
			email: 'Email',
			site_url: 'Site URL',
			comment: 'Comment',
			trackback: 'Trackback',
			title: 'Title',
			excerpt: 'Excerpt',
			trackback_url: 'Trackback URL',
			blog_name: 'Blog Name',
			login: 'Login Form',
			user_name: 'User Name',
			password: 'Password',
			admin_area: 'Admin Area (POST)',
			admin_cookie: 'Admin Cookie',
			admin_ajax: 'Admin Ajax',
			wp_content: 'Plugins / Themes',
			BuddyPress: 'BuddyPress',
			signup_user: 'Signup user',
			bbPress: 'bbPress',
			create_topic: 'Create Topic',
			nonce: 'Nonce',
			referer: 'Referer',
			path: 'path',
			target: 'path : query',
			param: 'key : value',
			pingback: 'Pingback',
			pingback_readme: '<span class="highlight"><code>%WP_HOME%</code></span> will be replaced with <span class="highlight">WordPress HOME</span>.',
			xmlrpc: 'XML-RPC',
			xmlrpc_readme: '<span class="highlight"><code>%USER_NAME%</code></span> and <span class="highlight"><code>%PASSWORD%</code></span> will be replaced with settings in <span class="highlight">Login Form</span>.',
			xmlrpc_demo: 'XML-RPC Demo',
			xmlrpc_multi: 'XML-RPC Multi',
			xmlrpc_repetition: 'Number of methods',
			end: ''
		},

		'ja': {
			main_title: 'WordPress投稿シミュレータ',
			page_settings: 'ページ設定',
			page_readme: '以下を適切に設定した後、<span class="highlight">Validate</span> を実行し、正当性を確認して下さい。',
			home_url: 'WordPressホーム',
			single_page: 'シングルページ',
			ip_address: 'プロキシアドレス',
			note_ip_address: '海外からの投稿を模擬するために、IP Geo Block の <span class="highlight">設定</span> タブで、<span class="highlight">追加検証する <code>$_SERVER</code> のキー</span> に <span class="highlight"><code>HTTP_X_FORWARDED_FOR</code></span> を設定しておいて下さい。',
			submit_post: '投稿',
			post_settings: '投稿設定',
			required: '必須',
			cb_post_items: '全選択',
			post_comment: 'コメント投稿',
			author: '名前',
			email: 'Eメール',
			site_url: 'サイトURL',
			comment: 'コメント',
			trackback: 'トラックバック',
			title: 'タイトル',
			excerpt: '抜粋',
			trackback_url: 'トラックバックURL',
			blog_name: 'ブログ名',
			login: 'ログインフォーム',
			user_name: 'ユーザー名',
			password: 'パスワード',
			admin_area: '管理領域 (POST)',
			admin_cookie: '管理者クッキー',
			admin_ajax: '管理領域のAjax',
			wp_content: 'プラグイン / テーマ領域',
			BuddyPress: 'BuddyPress',
			signup_user: 'ユーザーの登録',
			bbPress: 'bbPress',
			create_topic: 'トピックの作成',
			nonce: 'ナンス',
			referer: 'リファラ',
			path: 'パス',
			target: 'パス : クエリ',
			param: 'キー : 値',
			pingback: 'ピンバック',
			pingback_readme: '<span class="highlight"><code>%WP_HOME%</code></span> は <span class="highlight">WordPressホーム</span> の設定値に置き換えられます。',
			xmlrpc: 'XML-RPC',
			xmlrpc_readme: '<span class="highlight"><code>%USER_NAME%</code></span>、<span class="highlight"><code>%PASSWORD%</code></span> は <span class="highlight">ログインフォーム</span> の設定値に置き換えられます。',
			xmlrpc_demo: 'XML-RPC デモ',
			xmlrpc_multi: 'XML-RPC マルチ',
			xmlrpc_repetition: 'メソッド数',
			end: ''
		}
	};
	return function () {
		var lang = $window.navigator.userLanguage || $window.navigator.language;
		return language[lang.indexOf('ja') !== -1 ? 'ja' : 'en'];
	};
}]);