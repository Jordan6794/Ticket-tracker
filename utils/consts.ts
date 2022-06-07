//? overkill de mettre ca dans des consts ou usefull ?
//? le order by const plus relou vu qu'on va use query.orderBy
export const QUERY_ORDER_BY = 'orderBy'

export const QUERY_CREATED_AT = 'created_at'
export const QUERY_LAST_UPDATED = 'last_updated_date'
export const QUERY_PRIORITY = 'priority'
export const QUERY_STATUS = 'status'
//? different way of doing que having both individual consts and manually making the array ?
export const QUERIES = [QUERY_CREATED_AT, QUERY_LAST_UPDATED, QUERY_PRIORITY, QUERY_STATUS]

//? can not have default value here similar to my sortDisplay funct right ?
const QUERIES_DISPLAY: Record<string, string> = {
    QUERY_CREATED_AT: 'Date created'
}