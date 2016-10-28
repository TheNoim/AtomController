/**
 * Created by nilsbergmann on 28.10.16.
 */

const storage = require('electron-json-storage');
const async = require('async');

module.exports = {
    load: (callback) => {
        async.waterfall([
            (callback) => {
                if (storage.has("db.host")){
                    callback(null, {

                    });
                }
            }
        ], callback);
    }
};