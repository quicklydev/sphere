export {define, stringField, numberField, booleanField, dateField} from './compat'
export {connect, debugMode, executeSql, migrate, transaction, readTransaction} from './database'
export {getDocumentClass, field, register, Document} from './document'
export {objectChanged, objectDeleted} from './signals'
export {compare, isValidDate} from './utils'

import {database as _database} from './database'

export function database() {
    return _database
}
