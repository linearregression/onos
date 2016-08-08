/*
 * Copyright 2016-present Open Networking Laboratory
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 ONOS GUI -- Topology Links Module.
 Module that holds the links for a region
 */

(function () {
    'use strict';

    var Collection, Model;

    function createLinkCollection(data, region) {

        var LinkCollection = Collection.extend({
            model: Model
        });

        return new LinkCollection(data);
    }

    angular.module('ovTopo2')
    .factory('Topo2LinkService',
        ['Topo2Collection', 'Topo2Model',

            function (_Collection_, _Model_) {

                Collection = _Collection_;
                Model = _Model_.extend({});

                return {
                    createLinkCollection: createLinkCollection
                };
            }
        ]);

})();