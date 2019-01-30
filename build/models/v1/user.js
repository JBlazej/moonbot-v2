'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedLanguages = ['en', 'cs', 'de', 'es'];
// USERS SCHEMA
// -----------------------------------------------------------------------------
var UserSchema = new _mongoose2.default.Schema({
    id: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    station: {
        from: {
            type: String,
            default: 'volha'
        },
        to: {
            type: String,
            default: 'husinecka'
        },
        time: {
            type: Date,
            default: Date.now
        }
    },
    hacker: {
        type: Boolean,
        default: false
    },
    college: {
        type: String,
        default: 'bla'
    },
    language: {
        type: String,
        enum: supportedLanguages,
        default: 'en'
    }
});

var User = exports.User = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map