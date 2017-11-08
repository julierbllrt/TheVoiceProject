/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
'License'); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Note, these will be updated automatically at build time
var CACHE_VERSION = '1510144684448';
var CACHE_LIST = [
    "/category/Action.html",
    "/category/Activité.html",
    "/category/Interaction.html",
    "/category/Objet.html",
    "/category/Quotidien.html",
    "/category/Santé.html",
    "/clavier.html",
    "/config.xml",
    "/cordova-sw.js",
    "/cordova.js",
    "/cordova_plugins.js",
    "/css/index.css",
    "/favicon.ico",
    "/icon/home.png",
    "/icon/logo.png",
    "/icon/menu.png",
    "/icon/settings.png",
    "/img/0.png",
    "/img/1-2-3.png",
    "/img/1-2.png",
    "/img/1-4.png",
    "/img/1.png",
    "/img/10.png",
    "/img/1_1.png",
    "/img/2 centimes.png",
    "/img/2 dé.png",
    "/img/2 euros.png",
    "/img/2.png",
    "/img/2_1.png",
    "/img/3 dé.png",
    "/img/3-4.png",
    "/img/3.png",
    "/img/3_1.png",
    "/img/4 dé.png",
    "/img/4.png",
    "/img/4_1.png",
    "/img/5 centimes.png",
    "/img/5 dé.png",
    "/img/5 euros.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
    "/img/8.png",
    "/img/9.png",
    "/img/adresse_1.png",
    "/img/adulte.png",
    "/img/adultes.png",
    "/img/adultes_1.png",
    "/img/adultes_2.png",
    "/img/adultes_3.png",
    "/img/adultes_4.png",
    "/img/adultes_5.png",
    "/img/affamé.png",
    "/img/affamé_1.png",
    "/img/affiche.png",
    "/img/affiches.png",
    "/img/affiches_1.png",
    "/img/affiches_2.png",
    "/img/affiches_3.png",
    "/img/affiche_1.png",
    "/img/affiche_2.png",
    "/img/affiche_3.png",
    "/img/affirmer.png",
    "/img/affligé.png",
    "/img/affligé_1.png",
    "/img/aérer.png",
    "/img/aérer_1.png",
    "/img/aérogénérateur.png",
    "/img/aérogénérateurs.png",
    "/img/aéronef.png",
    "/img/aéronefs.png",
    "/img/aéronefs_1.png",
    "/img/aéronefs_2.png",
    "/img/aéronef_1.png",
    "/img/aéronef_2.png",
    "/img/aéronef_3.png",
    "/img/aéroplane.png",
    "/img/aéroplanes.png",
    "/img/aéroplanes_1.png",
    "/img/aéroplane_1.png",
    "/img/aéroport.png",
    "/img/aéroports.png",
    "/img/aéroports_1.png",
    "/img/aéroport_1.png",
    "/index.html",
    "/js/index.js",
    "/js/main.js",
    "/manifest.json",
    "/menu.html",
    "/picto.html",
    "/plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
    "/settings.html",
    "/subcategory/Amis.html",
    "/subcategory/Famille.html",
    "/subcategory/Loisirs.html",
    "/subcategory/Métiers.html",
    "/subcategory/Pronom.html",
    "/subcategory/Salle_de_bain.html",
    "/subcategory/Sports.html"
];

this.addEventListener('install', function (event) {
    // Perform install steps
    console.log('cordova service worker is installing.');
    event.waitUntil(caches.open(CACHE_VERSION) /* eslint no-undef : 0 */
        .then(function (cache) {
            return cache.addAll(CACHE_LIST);
        }));
});

this.addEventListener('activate', function (event) {
    // Perform activate steps
    console.log('cordova service worker is activated.');
});

this.addEventListener('fetch', function (event) {
    console.log('cordova service worker : fetch : ' + event.request.url);

    event.respondWith(caches.match(event.request).then(function (response) { /* eslint no-undef : 0 */
        // Cache hit? return response else fetch it
        return response || fetch(event.request); /* eslint no-undef : 0 */
    }));
});
